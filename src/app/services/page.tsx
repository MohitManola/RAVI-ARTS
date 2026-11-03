"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Send,
  Search,
  X,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";
import WorkProcessSection from "@/components/WorkProcessSection";

function ServicesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawQ = searchParams?.get("q") || "";
  const { openQuoteModal } = useQuote();

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        scrollToService(targetId);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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
      items: [
              "Flex Banner Printing",
              "Frontlit Flex Printing",
              "Backlit Flex Printing",
              "Star Flex Printing",
              "Hoarding Printing",
              "Event Banner Printing",
              "Promotional Banner Printing",
              "Large Format Digital Printing",
              "Outdoor Advertising Printing"
      ],
      turnaround: "Same Day / 24 Hours",
      image: "/images/services/flex&LargeFormatePrinting.PNG",
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
      items: [
              "Glow Sign Boards",
              "LED Sign Boards",
              "ACP Sign Boards",
              "Flex Sign Boards",
              "Sunboard Signage",
              "Indoor Signage",
              "Outdoor Signage",
              "Shop & Office Signage",
              "Safety & Directional Signage",
              "Night Glow Signage"
      ],
      turnaround: "3 - 5 Business Days",
      image: "/images/services/SignBoards&Signage.PNG",
      tag: "Top Rated for Retail Stores",
    },
    {
      id: "stationery",
      category: "STATIONERY",
      title: "Visiting Cards & Business Stationery",
      subtitle: "Premium Business Cards, Letterheads, Envelopes & ID Cards",
      desc: "Make an unforgettable first impression. We offer an extensive selection of paper stocks from 350 GSM art cards to textured metallic and velvet touch finishes, with options for embossed spot UV and gold/silver foiling.",
      features: [
        "Matte, Gloss, Velvet & Soft Touch Lamination",
        "Raised Spot UV & Foil Stamping",
        "Corporate Letterheads & Bill Books",
        "Employee Lanyards & Plastic ID Cards",
      ],
      items: [
              "Standard Visiting Cards",
              "Premium Visiting Cards",
              "Matte & Glossy Visiting Cards",
              "Letterhead Printing",
              "Envelope Printing",
              "Bill Book Printing",
              "Invoice Book Printing",
              "ID Card Printing",
              "Company Profile Printing",
              "Corporate Stationery"
      ],
      turnaround: "24 - 48 Hours",
      image: "/images/services/VisitingCards&BusinessStationary.PNG",
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
      items: [
              "Brochure Printing",
              "Flyer & Leaflet Printing",
              "Catalogue Printing",
              "Poster Printing",
              "Pamphlet Printing",
              "Booklet Printing",
              "Magazine Printing",
              "Invitation Card Printing",
              "Menu Card Printing",
              "Calendar Printing",
              "Custom Document Printing"
      ],
      turnaround: "2 - 3 Business Days",
      image: "/images/services/Offset&DigitalPrinting.PNG",
      tag: "High Volume Savings",
    },
    {
      id: "acrylic-letters",
      category: "SIGNAGE",
      title: "Acrylic & 3D Letter Boards",
      subtitle: "Precision Laser Cut Indoor & Outdoor Corporate 3D Letters",
      desc: "Elevate your office reception, corporate building, or showroom with raised 3D acrylic and metal letters. Laser cut with micron precision and finished in crystal gloss, brushed gold, silver, or backlit halo glow.",
      features: [
        "Cast Acrylic Sheets (3mm to 20mm thickness)",
        "Halo-Lit Backlit Illumination Options",
        "Brushed Metallic Titanium & Brass Finishes",
        "Clean Stud & Standoff Wall Mounting",
      ],
      items: [
              "Acrylic Name Plates",
              "Acrylic LED Boards",
              "3D Acrylic Letters",
              "Acrylic Reception Boards",
              "LED Backlit Letters",
              "Frontlit Channel Letters",
              "SS 3D Letters",
              "Brass 3D Letters",
              "Metal Letter Signage",
              "Custom Office Branding Boards"
      ],
      turnaround: "3 - 4 Business Days",
      image: "/images/services/Acrylic&3dLetterBoards.PNG",
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
      items: [
              "Eco-Solvent Printing",
              "Vinyl Sticker Printing",
              "Self-Adhesive Vinyl Printing",
              "One-Way Vision Printing",
              "Frosted Film Printing",
              "Window Graphics",
              "Wall Graphics",
              "Vehicle Graphics",
              "Vehicle Branding",
              "Product Label Printing",
              "Custom Sticker Printing"
      ],
      turnaround: "24 - 48 Hours",
      image: "/images/services/Eco-Solvent&VinalPrinting.PNG",
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
      items: [
              "Logo Design",
              "Brand Identity Design",
              "Business Card Design",
              "Brochure Design",
              "Catalogue Design",
              "Flyer & Poster Design",
              "Social Media Creatives",
              "Flex & Banner Design",
              "Signage Artwork Design",
              "Packaging Design",
              "Print-Ready Artwork",
              "Corporate Branding"
      ],
      turnaround: "1 - 3 Business Days",
      image: "/images/services/branding&GraphicDesign.PNG",
      tag: "Complete Creative Studio",
    },
    {
      id: "corporate-gifts",
      category: "GIFTS",
      title: "Corporate Gifts & Promotional Products",
      subtitle: "Custom Mugs, T-Shirts, Pens, Diaries, Bags & Executive Gift Kits",
      desc: "Strengthen client relationships and employee appreciation with premium customized promotional merchandise, executive hampers, and branded trade-show give-aways.",
      features: [
        "Custom Ceramic & Stainless Steel Insulated Mugs",
        "Screen Printed & Embroidered Corporate T-Shirts",
        "Laser Engraved Metal Pens, Executive Diaries & Notebooks",
        "Eco-Friendly Jute & Canvas Conference Bags",
      ],
      items: [
              "Customised T-Shirts",
              "Printed Mugs",
              "Corporate Diaries",
              "Promotional Pens",
              "Customised Caps",
              "Keychains",
              "Corporate Gift Sets",
              "Promotional Bags",
              "Branded Merchandise",
              "Event Giveaways",
              "Customised Office Gifts"
      ],
      turnaround: "3 - 5 Business Days",
      image: "/images/services/CorporateGifts&PromotionalProducts.PNG",
      tag: "Popular for Corporate Branding",
    },
  ];

  const queryLower = rawQ.trim().toLowerCase();
  const filteredServices = !queryLower
    ? serviceItems
    : serviceItems.filter((svc) => {
        const inTitle = svc.title.toLowerCase().includes(queryLower);
        const inSub = svc.subtitle.toLowerCase().includes(queryLower);
        const inDesc = svc.desc.toLowerCase().includes(queryLower);
        const inTag = svc.tag.toLowerCase().includes(queryLower);
        const inFeatures = svc.features.some((f) =>
          f.toLowerCase().includes(queryLower)
        );
        const inItems = (svc.items || []).some((it) =>
          it.toLowerCase().includes(queryLower)
        );
        return inTitle || inSub || inDesc || inTag || inFeatures || inItems;
      });

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
              Everything You Need, Under{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                One Roof
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore our full range of industrial printing, commercial offset,
              architectural sign fabrication, and creative branding services in Kasna, Greater Noida.
            </p>
          </div>
        </div>
      </section>



      {/* Search Query Active Notification */}
      {rawQ && (
        <section className="bg-blue-50/80 border-b border-blue-200/70 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-blue-900">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600 shrink-0" />
                <span>
                  Showing results for &ldquo;<strong>{rawQ}</strong>&rdquo;{" "}
                  <span className="text-blue-600 font-bold">
                    ({filteredServices.length} {filteredServices.length === 1 ? "service" : "services"} found)
                  </span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => router.push("/services")}
                className="flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 text-xs px-3 py-1.5 rounded-lg bg-white border border-blue-200 hover:bg-blue-100/70 transition-colors cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
                <span>Clear search filter</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Services List */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.length === 0 ? (
            <div className="rounded-3xl bg-white border border-sky-100 p-12 text-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                No services matched &ldquo;{rawQ}&rdquo;
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We custom-fabricate any printing, signage, or promotional requirement.
                Contact our team for immediate assistance or request a custom estimate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => router.push("/services")}
                  className="rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  View All Services
                </button>
                <button
                  type="button"
                  onClick={() => openQuoteModal(rawQ)}
                  className="rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Request Quote for &ldquo;{rawQ}&rdquo;
                </button>
              </div>
            </div>
          ) : (
            filteredServices.map((svc, index) => (
              <div
                key={svc.id}
                id={svc.id}
                className={`scroll-mt-28 rounded-3xl bg-white border border-sky-100 p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-200 ${
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
                </div>
              </div>

              {/* Information */}
              <div className="w-full lg:w-7/12 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {svc.subtitle}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    <Link
                      href={`/services/${svc.id}`}
                      className="hover:text-sky-600 transition-colors"
                    >
                      {svc.title}
                    </Link>
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>

                {/* Products & Sub-Services Included */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Products &amp; Capabilities Included
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Turnaround Badge & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock className="h-4 w-4 text-sky-500" />
                    <span>Est. Turnaround: {svc.turnaround}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Link
                      href={`/services/${svc.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-400 hover:text-sky-600 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => openQuoteModal(svc.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
                    >
                      <span>Request Quote</span>
                    </button>
                    <a
                      href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(svc.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>

      {/* OUR WORK PROCESS (Matching Home Page) */}
      <WorkProcessSection />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#eff7ff]" />}>
      <ServicesContent />
    </Suspense>
  );
}
