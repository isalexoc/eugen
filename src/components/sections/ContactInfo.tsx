import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className = "" }: ContactInfoProps) {
  const contactDetails = {
    address: {
      street:
        process.env.NEXT_PUBLIC_COMPANY_ADDRESS_STREET ||
        "123 Business Park Drive",
      city:
        process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY || "Stafford, VA 22554",
      country:
        process.env.NEXT_PUBLIC_COMPANY_ADDRESS_COUNTRY || "United States",
    },
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567",
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com",
    website:
      process.env.NEXT_PUBLIC_COMPANY_WEBSITE || "https://redlotusintl.com",
    hours: {
      weekdays:
        process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS ||
        "Monday - Friday: 8:00 AM - 6:00 PM EST",
      saturday:
        process.env.NEXT_PUBLIC_BUSINESS_HOURS_SATURDAY ||
        "Saturday: 9:00 AM - 4:00 PM EST",
      sunday: process.env.NEXT_PUBLIC_BUSINESS_HOURS_SUNDAY || "Sunday: Closed",
    },
    socialMedia: {
      facebook:
        process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ||
        "https://facebook.com/redlotusintl",
      twitter:
        process.env.NEXT_PUBLIC_SOCIAL_TWITTER ||
        "https://twitter.com/redlotusintl",
      instagram:
        process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
        "https://instagram.com/redlotusintl",
      linkedin:
        process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ||
        "https://linkedin.com/company/redlotusintl",
      youtube:
        process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ||
        "https://youtube.com/@redlotusintl",
    },
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Our Location
            </h3>
            <address className="text-gray-600 not-italic">
              {contactDetails.address.street}
              <br />
              {contactDetails.address.city}
              <br />
              {contactDetails.address.country}
            </address>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Phone</h3>
            <a
              href={`tel:${contactDetails.phone}`}
              className="hover:text-brand-primary text-gray-600 transition-colors"
            >
              {contactDetails.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Email</h3>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hover:text-brand-primary text-gray-600 transition-colors"
            >
              {contactDetails.email}
            </a>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start space-x-4">
          <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Website
            </h3>
            <a
              href={contactDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary text-gray-600 transition-colors"
            >
              {contactDetails.website.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
        <div className="flex items-start space-x-4">
          <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Business Hours
            </h3>
            <div className="space-y-1 text-gray-700">
              <p>{contactDetails.hours.weekdays}</p>
              <p>{contactDetails.hours.saturday}</p>
              <p>{contactDetails.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href={contactDetails.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={contactDetails.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400 text-white transition-colors hover:bg-blue-500"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={contactDetails.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white transition-colors hover:bg-pink-700"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={contactDetails.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white transition-colors hover:bg-blue-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={contactDetails.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white transition-colors hover:bg-red-700"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Find Us</h3>
        <div className="aspect-video overflow-hidden rounded-lg border border-gray-300 shadow-sm">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1500000000005!2d-77.4083!3d38.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQzJzA5LjUiTiA3N8KwMjQnMjkuOSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=${encodeURIComponent(`${contactDetails.address.street}, ${contactDetails.address.city}, ${contactDetails.address.country}`)}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Red Lotus International Location"
            className="h-full w-full"
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {contactDetails.address.street}, {contactDetails.address.city}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contactDetails.address.street}, ${contactDetails.address.city}, ${contactDetails.address.country}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-brand-primary-dark flex items-center space-x-1 text-sm transition-colors duration-200"
          >
            <span>Open in Maps</span>
            <MapPin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
