import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Red Lotus International",
  description:
    "Get in touch with Red Lotus International LLC for premium coffee beans and matcha tea inquiries. Contact us for wholesale, partnerships, and global trade solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
