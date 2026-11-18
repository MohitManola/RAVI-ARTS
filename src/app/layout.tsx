import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCallButton from "@/components/FloatingCallButton";
import { QuoteProvider } from "@/context/QuoteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1329",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raviartsenterprises.com"),
  title: {
    default: "Ravi Arts Enterprises | Printing & Signage Solutions Kasna Greater Noida",
    template: "%s | Ravi Arts Enterprises",
  },
  description:
    "Kasna & Greater Noida's leading printing, LED glow sign boards, and 3D acrylic letters manufacturer. Flex banners, brochures, visiting cards, vinyl graphics, and corporate gifts with same-day express turnaround.",
  keywords: [
    "best printing press in kasna",
    "best acrylic letters printing in kasna",
    "best flex printing in greater noida",
    "sign board manufacturer near me",
    "printing services near me",
    "glow sign board greater noida",
    "3d acrylic letters noida",
    "visiting card printing kasna",
    "offset printing delhi ncr",
    "Ravi Arts Enterprises",
    "commercial printing greater noida up",
  ],
  authors: [{ name: "Ravi Arts Enterprises" }],
  alternates: {
    canonical: "https://raviartsenterprises.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Kasna, Greater Noida",
    "geo.position": "28.4355;77.5307",
    ICBM: "28.4355, 77.5307",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://raviartsenterprises.com",
    siteName: "Ravi Arts Enterprises",
    title: "Ravi Arts Enterprises | Premier Printing & Signage Solutions",
    description:
      "Turning your ideas into impressions. Professional printing, LED signage, 3D acrylic letters, visiting cards, and branding in Kasna, Greater Noida.",
    images: [
      {
        url: "/images/hero-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Ravi Arts Enterprises Printing & Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Arts Enterprises | Printing & Signage Solutions",
    description:
      "Kasna, Greater Noida's premier destination for large format flex, LED signs, 3D letters, and commercial printing.",
    images: ["/images/hero-showcase.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ravi Arts Enterprises",
  alternateName: "Ravi Arts",
  image: "https://raviartsenterprises.com/images/logo_1.png",
  logo: "https://raviartsenterprises.com/images/logo_1.png",
  url: "https://raviartsenterprises.com",
  telephone: ["+91-9350036399", "+91-9971145089"],
  email: "raviartsenterprises@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasna",
    addressLocality: "Greater Noida/Delhi NCR",
    addressRegion: "Uttar Pradesh",
    postalCode: "201310",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4355,
    longitude: 77.5307,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  areaServed: [
    "Kasna",
    "Greater Noida",
    "Noida",
    "Delhi",
    "Delhi NCR",
    "Uttar Pradesh",
    "UP",
    "Yamuna Expressway",
    "Surajpur",
    "Ecotech Greater Noida",
    "Pari Chowk",
  ],
  sameAs: [
    "https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#eff7ff] text-slate-900 selection:bg-sky-500 selection:text-white">
        <QuoteProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <FloatingCallButton />
          <FloatingWhatsApp />
        </QuoteProvider>
      </body>
    </html>
  );
}
