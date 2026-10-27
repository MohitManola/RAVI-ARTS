import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
    "Leading printing, signage, and branding enterprise in Kasna, Greater Noida. Flex hoardings, LED glow sign boards, 3D acrylic letters, visiting cards, offset printing, and vinyl wraps.",
  keywords: [
    "printing press Kasna Greater Noida",
    "signage board Greater Noida",
    "flex printing Kasna",
    "glow sign board Greater Noida",
    "acrylic 3D letters Kasna",
    "visiting card printing Noida",
    "Ravi Arts Enterprises",
    "commercial printing Greater Noida",
  ],
  authors: [{ name: "Ravi Arts Enterprises" }],
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
      <body className="min-h-full flex flex-col bg-[#eff7ff] text-slate-900 selection:bg-sky-500 selection:text-white">
        <QuoteProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </QuoteProvider>
      </body>
    </html>
  );
}
