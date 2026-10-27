"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";

export default function ServicesPage() {
  const { openQuoteModal } = useQuote();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    { id: "ALL", label: "All Services" },
    { id: "LARGE_FORMAT", label: "Flex & Large Format" },
    { id: "SIGNAGE", label: "Sign Boards & LED" },
    { id: "STATIONERY", label: "Stationery & Cards" },
    { id: "COMMERCIAL", label: "Offset & Commercial" },
    { id: "VINYL", label: "Vinyl & Eco-Solvent" },
    { id: "BRANDING", label: "Branding & Design" },
  ];

  const serviceItems = [
    {
      id: "flex-printing",
      category: "LARGE_FORMAT",
      title: "Flex & Large Format Printing",
      subtitle: "Outdoor Banners, Flex Hoardings, Star Flex & Backlit Films",
      desc: "Massive scale, vibrant outdoor and indoor banners engineered to endure extreme sunlight, wind, and rain without fading. Printed with high-opacity industrial eco-solvent inks on high GSM flex and star flex media.",
      features: [
        "Frontlit & Backlit Flex Media",
        "Star Flex & Non-Tearable Banners",
        "Building Wrap & Roadside Hoardings",
        "Exhibition Backdrops & Roll-up Standees",
      ],
      turnaround: "Same Day / 24 Hours",
      image: "/images/service-flex-banner.webp",
      tag: "Best for Outdoor Visibility",
    },
    {
      id: "sign-boards",
      category: "SIGNAGE",
      title: "Sign Boards & Signage",
      subtitle: "Glow Sign Boards, Acrylic LED Letters, 3D ACP Panels",
      desc: "Architectural and retail signage that catches attention day and night. We fabricate custom LED glow signs, illuminated acrylic boards, and ACP (Aluminium Composite Panel) frontages with weather-sealed illumination.",
      features: [
        "High-Lumen Waterproof Samsung LEDs",
        "Custom Neon & Glow Sign Letters",
        "ACP Cladding & Router Cut Signs",
        "Complete On-Site Installation in Greater Noida",
      ],
      turnaround: "3 - 5 Business Days",
      image: "/images/service-sign-boards.webp",
      tag: "Top Rated for Retail Stores",
    },
    {
      id: "stationery",
      category: "STATIONERY",
      title: "Visiting Cards & Stationery",
      subtitle: "Premium Business Cards, Letterheads, Envelopes & ID Cards",
      desc: "Make an unforgettable first impression. We offer an extensive selection of paper stocks from 350 GSM art cards to textured metallic and velvet touch finishes, with options for embossed spot UV and gold/silver foiling.",
      features: [
        "Matte, Gloss, Velvet & Soft Touch Lamination",
        "Raised Spot UV & Foil Stamping",
        "Corporate Letterheads & Bill Books",
        "Employee Lanyards & Plastic ID Cards",
      ],
      turnaround: "24 - 48 Hours",
      image: "/images/service-visiting-cards.webp",
      tag: "Corporate Essential",
    },
    {
      id: "offset-printing",
      category: "COMMERCIAL",
      title: "Offset & Digital Printing",
      subtitle: "Multi-Page Brochures, Product Catalogues, Flyers & Booklets",
      desc: "Cost-effective, high-volume commercial printing. Whether you need 500 product pamphlets for an upcoming trade fair or 10,000 corporate brochures, our precision presses ensure exact color calibration and crisp text.",
      features: [
        "Bi-Fold, Tri-Fold & Gate-Fold Brochures",
        "Saddle-Stitched & Perfect Bound Catalogues",
        "Full-Color Marketing Flyers & Pamphlets",
        "Packaging Inserts & User Manuals",
      ],
      turnaround: "2 - 3 Business Days",
      image: "/images/service-offset-printing.webp",
      tag: "High Volume Savings",
    },
    {
      id: "acrylic-letters",
      category: "SIGNAGE",
      title: "Acrylic / 3D Letter Boards",
      subtitle: "Precision Laser Cut Indoor & Outdoor Corporate 3D Letters",
      desc: "Elevate your office reception, corporate building, or showroom with raised 3D acrylic and metal letters. Laser cut with micron precision and finished in crystal gloss, brushed gold, silver, or backlit halo glow.",
      features: [
        "Cast Acrylic Sheets (3mm to 20mm thickness)",
        "Halo-Lit Backlit Illumination Options",
        "Brushed Metallic Titanium & Brass Finishes",
        "Clean Stud & Standoff Wall Mounting",
      ],
      turnaround: "3 - 4 Business Days",
      image: "/images/service-acrylic-letters.webp",
      tag: "Premium Corporate Aesthetic",
    },
    {
      id: "vinyl-printing",
      category: "VINYL",
      title: "Eco-Solvent & Vinyl Printing",
      subtitle: "Die-Cut Stickers, Vehicle Wraps, Frosted Glass & Wall Decals",
      desc: "Versatile self-adhesive vinyl solutions for glass partitions, fleet branding, retail windows, and custom product labels. Printed with scratch-resistant, water-proof inks and precision contour cutting.",
      features: [
        "Commercial Fleet & Vehicle Graphics",
        "Frosted Privacy Film with Custom Cutout Logos",
        "Die-Cut Promotional & Product Stickers",
        "Removable One-Way Vision Window Film",
      ],
      turnaround: "24 - 48 Hours",
      image: "/images/service-vinyl-printing.webp",
      tag: "Multi-Surface Solution",
    },
    {
      id: "graphic-design",
      category: "BRANDING",
      title: "Branding & Graphic Design",
      subtitle: "Logo Creation, Brand Guidelines, Marketing Collateral & Social Kits",
      desc: "Our creative graphic designers work hand-in-hand with our print technicians. We create brand identities and print-ready vector layouts tailored specifically for high-impact production and flawless output.",
      features: [
        "Custom Logo & Vector Identity Creation",
        "Print-Ready High-Res Vector Artwork",
        "Signage Scale Layouts & 3D Previews",
        "Packaging & Label Artwork Formulation",
      ],
      turnaround: "1 - 3 Business Days",
      image: "/images/service-branding-design.webp",
      tag: "Complete Creative Studio",
    },
  ];

  const filteredServices =
    activeCategory === "ALL"
      ? serviceItems
      : serviceItems.filter((s) => s.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                COMPLETE PRINT &amp; SIGNAGE CAPABILITIES
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Everything You Need, Under One Roof.
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore our full range of industrial printing, commercial offset,
              architectural sign fabrication, and creative branding services in Kasna, Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.map((svc, index) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`rounded-3xl bg-white border border-sky-100 p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-sky-200 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}
            >
              {/* Media */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    {svc.tag}
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="w-full lg:w-7/12 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {svc.subtitle}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {svc.title}
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {svc.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround Badge & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock className="h-4 w-4 text-sky-500" />
                    <span>Est. Turnaround: {svc.turnaround}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openQuoteModal(svc.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
                    >
                      <span>Request Quote for This</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(svc.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Assistance Banner */}
      <section className="bg-slate-950 py-12 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Need a Custom Size or Specialized Material?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            We handle custom dimensions, architectural metal finishes, and emergency print runs.
            Contact our production supervisors directly for instant consultation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("Custom Requirement")}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-500"
            >
              <Send className="h-4 w-4" />
              <span>Get Custom Estimate</span>
            </button>
            <a
              href="tel:+919350036399"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <span>Call +91 93500 36399</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
