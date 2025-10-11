import nodemailer from "nodemailer";

interface EmailOptions {
  to: string | string[];
  from?: string;
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  tags?: Array<{ name: string; value: string }>;
}

export class ImprovMXService {
  private transporter: nodemailer.Transporter;
  private defaultFrom: string;

  constructor(
    smtpConfig: {
      host: string;
      port: number;
      secure: boolean;
      auth: {
        user: string;
        pass: string;
      };
    },
    defaultFrom: string
  ) {
    this.transporter = nodemailer.createTransport(smtpConfig);
    this.defaultFrom = defaultFrom;
  }

  async sendEmail(options: EmailOptions) {
    try {
      const mailOptions = {
        from: options.from || this.defaultFrom,
        to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
        subject: options.subject,
        html: options.html,
        text: options.text || "",
        replyTo: options.replyTo,
        // Note: ImprovMX SMTP doesn't support tags like Resend, but we can add custom headers
        headers: options.tags
          ? {
              "X-Email-Type":
                options.tags.find((tag) => tag.name === "type")?.value ||
                "general",
              "X-Service":
                options.tags.find((tag) => tag.name === "service")?.value ||
                "newsletter",
            }
          : undefined,
      };

      const result = await this.transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: result.messageId,
        data: result,
      };
    } catch (error) {
      console.error("ImprovMX email error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendWelcomeEmail(to: string, firstName?: string) {
    const subject = "Welcome to Red Lotus International Newsletter!";
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Red Lotus International</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8B4513, #7CB342); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Red Lotus International!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #8B4513; margin-top: 0;">Thank you for subscribing, ${firstName || "Valued Customer"}!</h2>

            <p>We're excited to have you join our community of coffee and tea enthusiasts. You'll now receive:</p>

            <ul style="color: #666;">
              <li>Latest updates on premium coffee beans from Japan, Vietnam, and China</li>
              <li>Exclusive matcha tea insights and brewing tips</li>
              <li>Global trade market updates and industry news</li>
              <li>Special offers and early access to new products</li>
            </ul>

            <p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:info@redlotusintl.com" style="color: #8B4513;">info@redlotusintl.com</a>.</p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="font-size: 12px; color: #999; text-align: center;">
              Red Lotus International LLC<br>
              Stafford, VA<br>
              <a href="${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?email=${encodeURIComponent(to)}" style="color: #999;">Unsubscribe</a>
            </p>
          </div>
        </body>
      </html>
    `;

    const text = `
Welcome to Red Lotus International!

Thank you for subscribing, ${firstName || "Valued Customer"}!

We're excited to have you join our community of coffee and tea enthusiasts. You'll now receive:

- Latest updates on premium coffee beans from Japan, Vietnam, and China
- Exclusive matcha tea insights and brewing tips
- Global trade market updates and industry news
- Special offers and early access to new products

If you have any questions or need assistance, feel free to reach out to us at info@redlotusintl.com.

Explore our products: ${process.env.NEXT_PUBLIC_APP_URL}/products

---
Red Lotus International LLC
Stafford, VA
Unsubscribe: ${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?email=${encodeURIComponent(to)}
    `;

    return this.sendEmail({
      to,
      subject,
      html,
      text,
      tags: [
        { name: "type", value: "welcome" },
        { name: "service", value: "newsletter" },
      ],
    });
  }

  async sendUnsubscribeConfirmation(to: string) {
    const subject =
      "You have been unsubscribed from Red Lotus International Newsletter";
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Unsubscribed - Red Lotus International</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: #8B4513; margin-top: 0;">You've been unsubscribed</h1>

            <p>We're sorry to see you go! You have been successfully unsubscribed from our newsletter.</p>

            <p>If this was a mistake, you can always <a href="${process.env.NEXT_PUBLIC_APP_URL}/newsletter" style="color: #8B4513;">resubscribe here</a>.</p>

            <p>Thank you for being part of our community.</p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="font-size: 12px; color: #999;">
              Red Lotus International LLC<br>
              Stafford, VA
            </p>
          </div>
        </body>
      </html>
    `;

    return this.sendEmail({
      to,
      subject,
      html,
      tags: [
        { name: "type", value: "unsubscribe" },
        { name: "service", value: "newsletter" },
      ],
    });
  }
}

// Singleton instance
let improvmxService: ImprovMXService | null = null;

export function getImprovMXService(): ImprovMXService {
  if (!improvmxService) {
    const smtpHost = process.env.IMPROVMX_SMTP_HOST;
    const smtpPort = process.env.IMPROVMX_SMTP_PORT;
    const smtpUser = process.env.IMPROVMX_SMTP_USER;
    const smtpPass = process.env.IMPROVMX_SMTP_PASS;
    const defaultFrom = process.env.FROM_EMAIL || "info@redlotusintl.com";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      throw new Error(
        "ImprovMX SMTP configuration is required. Please set IMPROVMX_SMTP_HOST, IMPROVMX_SMTP_PORT, IMPROVMX_SMTP_USER, and IMPROVMX_SMTP_PASS environment variables."
      );
    }

    const smtpConfig = {
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    };

    improvmxService = new ImprovMXService(smtpConfig, defaultFrom);
  }
  return improvmxService;
}
