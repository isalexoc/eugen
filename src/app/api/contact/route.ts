import { getImprovMXService } from "@/lib/services/improvmx";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const improvmxService = getImprovMXService();

    // Create email content
    const subjectLine = `Contact Form: ${subject || "General Inquiry"}`;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8B4513, #7CB342); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #8B4513; margin-top: 0;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8B4513;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #8B4513;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              ${
                company
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">${company}</td>
              </tr>
              `
                  : ""
              }
              ${
                subject
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0;">${subject}</td>
              </tr>
              `
                  : ""
              }
            </table>

            <h3 style="color: #8B4513; margin-top: 30px;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #8B4513;">
              ${message.replace(/\n/g, "<br>")}
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="font-size: 12px; color: #999; text-align: center;">
              This message was sent from the Red Lotus International contact form<br>
              <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #8B4513;">${process.env.NEXT_PUBLIC_APP_URL}</a>
            </p>
          </div>
        </body>
      </html>
    `;

    const text = `
New Contact Form Submission

Contact Details:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company: ${company}` : ""}
${subject ? `Subject: ${subject}` : ""}

Message:
${message}

---
This message was sent from the Red Lotus International contact form
${process.env.NEXT_PUBLIC_APP_URL}
    `;

    // Send email to company contact email
    const adminResult = await improvmxService.sendEmail({
      to: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com",
      subject: subjectLine,
      html,
      text,
      replyTo: email,
      tags: [
        { name: "type", value: "contact" },
        { name: "service", value: "contact-form" },
      ],
    });

    if (!adminResult.success) {
      console.error(
        "Failed to send contact email to admin:",
        adminResult.error
      );
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userConfirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Red Lotus International</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8B4513, #7CB342); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #8B4513; margin-top: 0;">Hello ${name},</h2>

            <p>Thank you for reaching out to Red Lotus International LLC. We have received your message and will get back to you as soon as possible.</p>

            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #8B4513; margin: 20px 0;">
              <h3 style="color: #8B4513; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f5f5f5; padding: 15px; border-radius: 3px; font-style: italic;">
                "${message.replace(/\n/g, "<br>")}"
              </p>
            </div>

            <h3 style="color: #8B4513;">What happens next?</h3>
            <ul style="color: #666;">
              <li>Our team will review your inquiry within 24 hours during business days</li>
              <li>We'll respond with detailed information about our services</li>
              <li>If you have urgent needs, feel free to call us at <a href="tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}" style="color: #8B4513;">${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}</a></li>
            </ul>

            <p>In the meantime, feel free to explore our website to learn more about our premium coffee beans and matcha tea services.</p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="background: linear-gradient(135deg, #8B4513, #7CB342); color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="font-size: 12px; color: #999; text-align: center;">
              ${process.env.NEXT_PUBLIC_COMPANY_NAME || "Red Lotus International LLC"}<br>
              ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS_STREET || "123 Business Park Drive"}, ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY || "Stafford, VA 22554"}<br>
              Phone: <a href="tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}" style="color: #8B4513;">${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}</a> |
              Email: <a href="mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com"}" style="color: #8B4513;">${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com"}</a>
            </p>
          </div>
        </body>
      </html>
    `;

    const userConfirmationText = `
Thank You for Contacting Red Lotus International!

Hello ${name},

Thank you for reaching out to Red Lotus International LLC. We have received your message and will get back to you as soon as possible.

Your Message Summary:
Subject: ${subject || "General Inquiry"}
Message: "${message}"

What happens next?
- Our team will review your inquiry within 24 hours during business days
- We'll respond with detailed information about our services
- If you have urgent needs, feel free to call us at ${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}

In the meantime, feel free to explore our website to learn more about our premium coffee beans and matcha tea services.

Visit our website: ${process.env.NEXT_PUBLIC_APP_URL}

---
${process.env.NEXT_PUBLIC_COMPANY_NAME || "Red Lotus International LLC"}
${process.env.NEXT_PUBLIC_COMPANY_ADDRESS_STREET || "123 Business Park Drive"}, ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY || "Stafford, VA 22554"}
Phone: ${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"} | Email: ${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com"}
    `;

    const userResult = await improvmxService.sendEmail({
      to: email,
      subject: "Thank You for Contacting Red Lotus International",
      html: userConfirmationHtml,
      text: userConfirmationText,
      tags: [
        { name: "type", value: "confirmation" },
        { name: "service", value: "contact-form" },
      ],
    });

    if (!userResult.success) {
      console.error(
        "Failed to send confirmation email to user:",
        userResult.error
      );
      // Don't fail the request if user confirmation fails, admin email was sent successfully
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
