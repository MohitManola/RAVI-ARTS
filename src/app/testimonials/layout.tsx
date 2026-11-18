import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials & Google Reviews | Ravi Arts Enterprises Kasna",
  description:
    "Read genuine reviews and client testimonials for Ravi Arts Enterprises in Kasna, Greater Noida. Rated 4.9/5 stars for flex banners, LED glow sign boards, and 3D acrylic letters.",
  keywords: [
    "ravi arts enterprises reviews",
    "customer testimonials printing greater noida",
    "google reviews ravi arts kasna",
    "best rated sign maker greater noida",
  ],
  alternates: {
    canonical: "https://raviartsenterprises.com/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Google Reviews | Ravi Arts Enterprises",
    description:
      "See what our clients say about our printing quality, rapid turnaround, and professional signboard installations in Greater Noida.",
    url: "https://raviartsenterprises.com/testimonials",
    siteName: "Ravi Arts Enterprises",
    images: [
      {
        url: "/images/hero-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Ravi Arts Enterprises Reviews",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Ravi Arts Enterprises Kasna",
    description:
      "4.9/5 star rated printing and signage manufacturer in Greater Noida. Read real client feedback.",
    images: ["/images/hero-showcase.webp"],
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
