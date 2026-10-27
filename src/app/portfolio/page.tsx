"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Eye, Filter } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function PortfolioPage() {
  const { openQuoteModal } = useQuote();
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filterOptions = [
    { id: "ALL", label: "All Projects" },
    { id: "SIGNAGE", label: "Sign Boards & LED" },
    { id: "PRINTING", label: "Commercial Print & Books" },
    { id: "APPAREL", label: "Custom Apparel" },
    { id: "STATIONERY", label: "Visiting Cards & Stationery" },
  ];

  const projects = [
    {
      id: 1,
      title: "Acrylic 3D Sign Board",
      category: "SIGNAGE",
      client: "Corporate Headquarters, Kasna",
      specs: "Raised cast acrylic letters with warm backlit LED illumination on matte black ACP backing.",
      image: "/images/portfolio-acrylic-sign.webp",
    },
    {
      id: 2,
      title: "Corporate Brochure Design & Print",
      category: "PRINTING",
      client: "Industrial Solutions Provider, Greater Noida",
      specs: "Multi-page 300 GSM art card brochure with velvet soft-touch lamination and raised spot UV.",
      image: "/images/portfolio-brochure.webp",
    },
    {
      id: 3,
      title: "Good Vibes Only - Neon Glow Sign",
      category: "SIGNAGE",
      client: "Trendy Cafe & Lounge, Alpha 2",
      specs: "Vibrant neon LED silicone flex mounted on polished transparent acrylic base.",
      image: "/images/portfolio-glow-sign.webp",
    },
    {
      id: 4,
      title: "Custom Brand T-Shirt Printing",
      category: "APPAREL",
      client: "Annual Tech Expo, Expo Mart Greater Noida",
      specs: "Premium 220 GSM combed cotton crewneck t-shirts with high-density screen printing.",
      image: "/images/portfolio-tshirt.webp",
    },
    {
      id: 5,
      title: "Premium Foil Stamped Visiting Cards",
      category: "STATIONERY",
      client: "Law Chamber & Financial Advisory, Noida",
      specs: "400 GSM imported textured board with embossed gold foil stamping and black dyed edges.",
      image: "/images/portfolio-cards.webp",
    },
    {
      id: 6,
      title: "Large Format Roadside Flex Hoarding",
      category: "SIGNAGE",
      client: "Real Estate Township, Yamuna Expressway",
      specs: "Heavy-duty 440 GSM star flex printed on 10ft eco-solvent plotter with UV protection coat.",
      image: "/images/service-flex-banner.webp",
    },
    {
      id: 7,
      title: "Corporate Fleet Vehicle Vinyl Wrap",
      category: "PRINTING",
      client: "Logistics Fleet, Ecotech Greater Noida",
      specs: "Air-release cast vinyl with scratch-resistant gloss laminate contour cut to vehicle chassis.",
      image: "/images/service-vinyl-printing.webp",
    },
    {
      id: 8,
      title: "3D Metallic Lettering & Reception Sign",
      category: "SIGNAGE",
      client: "Executive Boardroom, Surajpur Industrial Area",
      specs: "Titanium gold mirror finish laser cut letters with stainless steel standoffs.",
      image: "/images/service-acrylic-letters.webp",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-1/3 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                SHOWCASE OF REALIZED DESIGNS
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Our Work &amp; Project Portfolio
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore a curated selection of signboards, commercial print collateral,
              illuminated displays, and promotional products crafted for businesses across Kasna and Greater Noida.
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
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
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
      <section className="py-16 sm:py-24 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-md bg-slate-950/80 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-sky-700">
                      {item.client}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {item.specs}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="border-t border-slate-100 p-4 pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Kasna, Greater Noida</span>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    <span>Order Similar</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-12 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Have a Specific Vision in Mind?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Send us your artwork, sample photos, or architectural drawings. Our team will prepare
            a customized 3D mockup and cost proposal free of charge.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal("Portfolio Inquired Project")}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-500 transition-all active:scale-95"
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
