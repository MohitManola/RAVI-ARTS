import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Workshop Location & Phone Numbers | Ravi Arts Enterprises",
  description:
    "Get in touch with Ravi Arts Enterprises in Kasna, Greater Noida. Call +91 93500 36399 or +91 99711 45089, visit our workshop, or request a fast WhatsApp quote for all printing and signage requirements.",
  keywords: [
    "contact ravi arts enterprises",
    "ravi arts enterprises phone number",
    "printing press kasna address",
    "sign board maker near me contact",
    "greater noida printing workshop",
    "9350036399",
    "9971145089",
  ],
  alternates: {
    canonical: "https://raviartsenterprises.com/contact",
  },
  openGraph: {
    title: "Contact Ravi Arts Enterprises | Kasna, Greater Noida",
    description:
      "Direct factory contact for printing and sign board orders. Phone: +91-9350036399 / +91-9971145089. Located in Kasna, Greater Noida.",
    url: "https://raviartsenterprises.com/contact",
    siteName: "Ravi Arts Enterprises",
    images: [
      {
        url: "/images/hero-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Contact Ravi Arts Enterprises",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ravi Arts Enterprises | Kasna Greater Noida",
    description:
      "Call or visit our Kasna workshop for fast quotes on flex banners, LED signs, and 3D letters.",
    images: ["/images/hero-showcase.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
