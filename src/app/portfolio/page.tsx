"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Eye, Filter, X, ZoomIn, Camera } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function PortfolioPage() {
  const { openQuoteModal } = useQuote();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; client: string } | null>(null);

  const filterOptions = [
    { id: "ALL", label: "All Real Work" },
    { id: "SIGNAGE", label: "Sign Boards & 3D Letters" },
    { id: "FLEX", label: "Flex & Large Format" },
    { id: "STATIONERY", label: "Cards & Stationery" },
    { id: "COMMERCIAL", label: "Offset & Commercial Print" },
    { id: "GIFTS", label: "Corporate Gifts & Merchandise" },
  ];

  const projects = [
    {
      id: 1,
      title: "3D Acrylic Letters & Reception Board",
      category: "SIGNAGE",
      client: "Corporate Headquarters, Kasna",
      specs: "Precision laser cut cast acrylic letters with warm halo backlit LED illumination mounted on matte black ACP backing.",
      image: "/images/services/Acrylic&3dLetterBoards.PNG",
      tag: "Real Workshop Fabrication",
    },
    {
      id: 2,
      title: "LED Glow Sign Board & Shopfront Facade",
      category: "SIGNAGE",
      client: "Commercial Retail Center, Pari Chowk",
      specs: "Architectural front-lit LED glow signboard with weather-sealed IP67 Samsung modules and heavy-gauge structural iron framing.",
      image: "/images/services/SignBoards&Signage.PNG",
      tag: "Real Installed Sign",
    },
    {
      id: 3,
      title: "Heavy-Duty Outdoor Star Flex Hoarding",
      category: "FLEX",
      client: "Township & Industrial Zone, Yamuna Expressway",
      specs: "Seamless 10-foot wide 540 GSM Star Flex printed on high-speed industrial eco-solvent plotter with UV monsoon-proof inks.",
      image: "/images/services/flex&LargeFormatePrinting.PNG",
      tag: "Real Large Format Print",
    },
    {
      id: 4,
      title: "Velvet Touch Visiting Cards & Office Stationery",
      category: "STATIONERY",
      client: "BIMTECH & Corporate Institutes, Knowledge Park",
      specs: "350 GSM luxury art cards with velvet soft-touch thermal lamination, embossed spot UV, and branded corporate bill books.",
      image: "/images/services/VisitingCards&BusinessStationary.PNG",
      tag: "Real Print Samples",
    },
    {
      id: 5,
      title: "Multi-Page Product Catalogue & Brochures",
      category: "COMMERCIAL",
      client: "FlaktGroup & Manufacturing Plants, Ecotech",
      specs: "Commercial high-volume multi-color offset print, 300 GSM art card covers, perfect binding, and gloss aqueous coating.",
      image: "/images/services/Offset&DigitalPrinting.PNG",
      tag: "Real Offset Press Output",
    },
    {
      id: 6,
      title: "Frosted Glass Privacy Film & Vinyl Decals",
      category: "FLEX",
      client: "Tech Zone Corporate Offices, Greater Noida",
      specs: "Die-cut branded frosted privacy film applied with zero bubbles on executive conference room glass partitions.",
      image: "/images/services/Eco-Solvent&VinalPrinting.PNG",
      tag: "Real Vinyl Installation",
    },
    {
      id: 7,
      title: "Complete Brand Identity & Signage Layouts",
      category: "COMMERCIAL",
      client: "Retail Showroom Rebranding, Alpha 1",
      specs: "100% original vector brand guidelines, architectural 3D signage previews, and print-ready packaging die-line formulations.",
      image: "/images/services/branding&GraphicDesign.PNG",
      tag: "Real Studio Design",
    },
    {
      id: 8,
      title: "Customized Corporate Gifts & Executive Kits",
      category: "GIFTS",
      client: "Annual Corporate Summit, India Expo Mart",
      specs: "Laser engraved double-wall stainless steel mugs, luxury rollerball pens, executive leather diaries, and custom gift boxes.",
      image: "/images/services/CorporateGifts&PromotionalProducts.PNG",
      tag: "Real Merchandise",
    },
    {
      id: 9,
      title: "Ravi Arts In-House Manufacturing Workshop",
      category: "SIGNAGE",
      client: "Kasna Workshop Facility, Greater Noida",
      specs: "Our actual in-house fabrication facility equipped with CNC routers, laser cutters, and large-format roll-to-roll presses.",
      image: "/images/about-building.webp",
      tag: "Actual Workshop Facility",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-center">
        {/* Full Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/our_work_top.png"
            alt="Our Work & Project Portfolio - Ravi Arts Enterprises"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right select-none"
            quality={95}
          />
          {/* Subtle gradient to ensure flawless text contrast on all devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <div className="max-w-xl md:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                REAL PROJECT PHOTOS
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Work &amp; Project{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
              Explore genuine photos of signboards, large format flex banners, illuminated 3D letters,
              and commercial print collateral manufactured right here in our Kasna workshop.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveFilter(opt.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === opt.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Photo with Real Photo Badge & Click-to-Zoom */}
                  <div
                    onClick={() =>
                      setPreviewImage({
                        src: item.image,
                        title: item.title,
                        client: item.client,
                      })
                    }
                    className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Gradient Overlay on hover */}
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                        <ZoomIn className="h-3.5 w-3.5 text-sky-600" />
                        <span>View Photo</span>
                      </span>
                    </div>

                    {/* Real Workshop Photo Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                      <Camera className="h-3 w-3 text-emerald-400" />
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-sky-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 bg-sky-50 inline-block px-2.5 py-0.5 rounded-md border border-sky-100">
                      {item.client}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {item.specs}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="border-t border-slate-100 p-5 pt-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">Kasna, Greater Noida</span>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    <span>Order Similar</span>
                    <ArrowRight className="h-3 w-3 text-sky-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Photo Preview Modal */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-slate-950/60">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {previewImage.title}
                </h3>
                <p className="text-xs text-sky-400 mt-0.5">{previewImage.client}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={previewImage.src}
                alt={previewImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Actual Photography • Ravi Arts Kasna</span>
              <button
                type="button"
                onClick={() => {
                  const title = previewImage.title;
                  setPreviewImage(null);
                  openQuoteModal(title);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-500 transition-colors cursor-pointer"
              >
                <span>Request Quote for This Work</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-14 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Have a Specific Project in Mind?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Send us your artwork, sample photos, or architectural drawings. Our team will prepare
            a customized 3D mockup and cost proposal free of charge.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal("Portfolio Inquired Project")}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-500 transition-all active:scale-95 cursor-pointer"
            >
              <span>Discuss Your Project with Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
