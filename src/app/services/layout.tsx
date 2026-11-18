import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Printing & Signage Services | Kasna Greater Noida | Ravi Arts Enterprises",
  description:
    "Explore our complete range of printing and signage services in Kasna, Greater Noida: flex printing, LED glow sign boards, 3D acrylic letters, visiting cards, offset catalogues, vinyl wraps, and corporate gifts.",
  keywords: [
    "printing services kasna",
    "signage board manufacturer greater noida",
    "best printing press in kasna",
    "glow sign board noida",
    "acrylic letters greater noida",
    "large format flex printing ncr",
    "ravi arts enterprises services",
  ],
  alternates: {
    canonical: "https://raviartsenterprises.com/services",
  },
  openGraph: {
    title: "Printing & Signage Services in Kasna, Greater Noida | Ravi Arts Enterprises",
    description:
      "Direct factory printing services in Kasna, Greater Noida. Flex banners, LED signs, 3D acrylic letters, and stationery at wholesale rates.",
    url: "https://raviartsenterprises.com/services",
    siteName: "Ravi Arts Enterprises",
    images: [
      {
        url: "/images/hero-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Ravi Arts Enterprises Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Printing & Signage Services | Ravi Arts Enterprises Kasna",
    description:
      "Explore 8+ commercial printing and signage categories with fast turnaround in Greater Noida.",
    images: ["/images/hero-showcase.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
