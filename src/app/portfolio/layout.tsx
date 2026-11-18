import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Project Portfolio | Signage & Printing in Greater Noida",
  description:
    "Browse our recent work portfolio of outdoor hoardings, LED glow signs, 3D acrylic reception letters, fleet vehicle graphics, and corporate stationery executed across Greater Noida, Noida, and Delhi NCR.",
  keywords: [
    "signage portfolio greater noida",
    "printing work samples kasna",
    "led sign board projects noida",
    "acrylic 3d letter work photos",
    "flex banner portfolio ncr",
    "ravi arts enterprises work",
  ],
  alternates: {
    canonical: "https://raviartsenterprises.com/portfolio",
  },
  openGraph: {
    title: "Our Work & Signage Portfolio | Ravi Arts Enterprises",
    description:
      "Explore recent high-impact printing, LED sign boards, and 3D acrylic letter projects executed across Greater Noida and Delhi NCR.",
    url: "https://raviartsenterprises.com/portfolio",
    siteName: "Ravi Arts Enterprises",
    images: [
      {
        url: "/images/hero-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Ravi Arts Enterprises Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Project Portfolio | Ravi Arts Enterprises",
    description:
      "Browse real client projects: LED signboards, large format flex banners, and 3D letter installations.",
    images: ["/images/hero-showcase.webp"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
