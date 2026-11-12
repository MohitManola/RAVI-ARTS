"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  X,
  ZoomIn,
  Camera,
  MapPin,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  desc: string;
  dateTag: string;
  image: string;
  aspectClass: string;
  formatTag: string;
}

export default function PortfolioPage() {
  const { openQuoteModal } = useQuote();
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  // 1. AirTree Retail Storefront: 1350 x 752 -> 16:9 Wide Storefront Ratio
  const project1: ProjectItem = {
    id: "airtree",
    title: "AirTree Retail Storefront Signage",
    location: "Kasna Commercial Belt • Greater Noida",
    desc: "Architectural storefront fascia with 3D illuminated acrylic channel letters mounted on matte composite panel.",
    dateTag: "Livraison hiver 2025",
    image: "/images/work/airtree.jpeg",
    aspectClass: "aspect-[16/9]",
    formatTag: "Storefront Facade (16:9)",
  };

  // 2. Kakkar Chaap Glow Sign: 1200 x 634 -> 16:9 Backlit Sign Ratio
  const project2: ProjectItem = {
    id: "kakkar-chaap",
    title: "Kakkar Chaap Backlit Glow Sign",
    location: "Commercial Hub • Greater Noida",
    desc: "High-luminance backlit LED flex signboard with heavy-gauge galvanized iron structural framing.",
    dateTag: "Livraison \u00e9t\u00e9 2025",
    image: "/images/work/kitchen.jpeg",
    aspectClass: "aspect-[16/9]",
    formatTag: "LED Lightbox (16:9)",
  };

  // 3. Fitness First Cafe Facade: 1599 x 899 -> Exact 16:9 Architectural Ratio
  const project3: ProjectItem = {
    id: "fitness-facade",
    title: "Fitness First Commercial Facade",
    location: "Commercial Sector • Greater Noida West",
    desc: "Large-format outdoor commercial facade branding with heavy-duty structural iron framing and high-gauge flex.",
    dateTag: "Livraison automne 2024",
    image: "/images/work/fitness.jpeg",
    aspectClass: "aspect-[16/9]",
    formatTag: "Architectural Facade (16:9)",
  };

  // 4. Large Format Flex Printing: 1448 x 1086 -> 4:3 Ratio
  const project4: ProjectItem = {
    id: "star-flex",
    title: "Outdoor Star Flex Hoarding",
    location: "Yamuna Expressway • Greater Noida",
    desc: "Heavy-duty structural truss hoarding with 540 GSM frontlit banner engineered for high wind and monsoon resistance.",
    dateTag: "Livraison \u00e9t\u00e9 2024",
    image: "/images/services/flex&LargeFormatePrinting.PNG",
    aspectClass: "aspect-[4/3]",
    formatTag: "Outdoor Hoarding (4:3)",
  };

  // 5. LED Glow Signs & Storefronts: 1448 x 1086 -> 4:3 Ratio
  const project5: ProjectItem = {
    id: "sign-boards",
    title: "LED Glow Signs & Storefronts",
    location: "Pari Chowk • Greater Noida",
    desc: "Samsung LED illuminated shopfront signage with composite ACP cladding and weather-sealed modules.",
    dateTag: "Livraison hiver 2025",
    image: "/images/services/SignBoards&Signage.PNG",
    aspectClass: "aspect-[4/3]",
    formatTag: "ACP Cladding (4:3)",
  };

  // 6. 3D Metal & Acrylic Letter Signs: 1448 x 1086 -> 4:3 Ratio
  const project6: ProjectItem = {
    id: "acrylic-letters",
    title: "3D Metal & Acrylic Letter Signs",
    location: "Knowledge Park • Greater Noida",
    desc: "Titanium gold and brushed metallic 3D signage with warm halo backlighting engineered for corporate lobbies.",
    dateTag: "Livraison \u00e9t\u00e9 2025",
    image: "/images/services/Acrylic&3dLetterBoards.PNG",
    aspectClass: "aspect-[4/3]",
    formatTag: "3D Titanium Letters (4:3)",
  };

  // 7. RDX Nutrition Glossy Gold Sign: 1600 x 674 -> ~12:5 Ultra-Wide Panoramic Signboard Ratio
  const project7: ProjectItem = {
    id: "rdx-gold",
    title: "RDX Nutrition Glossy Gold Sign",
    location: "Ecotech Kasna • Greater Noida",
    desc: "Precision CNC laser-cut golden mirror finish 3D acrylic letters with waterproof halo backlit LED module.",
    dateTag: "Livraison \u00e9t\u00e9 2024",
    image: "/images/work/jym.jpeg",
    aspectClass: "aspect-[12/5]",
    formatTag: "Panoramic Fascia (12:5)",
  };

  // 8. Luxury Corporate Stationery: 1448 x 1086 -> 4:3 Ratio
  const project8: ProjectItem = {
    id: "visiting-cards",
    title: "Luxury Corporate Stationery",
    location: "Corporate Desk • Kasna",
    desc: "350 GSM luxury art card stock with raised spot UV coating, foil stamping, and velvet thermal lamination.",
    dateTag: "Livraison hiver 2025",
    image: "/images/services/VisitingCards&BusinessStationary.PNG",
    aspectClass: "aspect-[4/3]",
    formatTag: "Premium Print (4:3)",
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-900 min-h-screen">
      {/* Top Banner - Standardized across all pages */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex items-center">
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
          {/* Contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          <div className="max-w-xl md:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                PORTFOLIO ARCHIVE
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Recent{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
              Authentic completed signboards, hoardings, 3D letters, and commercial printing installations delivered across Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EDITORIAL MAGAZINE SPREAD (Faithfully matching uploaded Agenda lookbook) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Magazine Spread Outer Box */}
          <div className="relative bg-white border border-neutral-200/60 p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            
            {/* Top Spread Bar */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-neutral-100">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 font-sans">
                  Agenda
                </h2>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-normal tracking-wide mt-1.5">
                  8 r&eacute;alisations r&eacute;centes en cours, livr&eacute;es en 2024-2025-2026 &bull; Greater Noida
                </p>
              </div>
              <div className="self-start sm:self-auto">
                <div className="inline-flex items-center bg-black text-white px-3 py-1 text-[11px] font-black tracking-widest uppercase">
                  <span>RAVI ARTS</span>
                  <span className="ml-1.5 text-neutral-400 font-light text-[10px]">63</span>
                </div>
              </div>
            </div>

            {/* Two-Facing Page Grid (Left Page + Right Page) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-8 sm:pt-12 items-start">
              
              {/* ============================================================ */}
              {/* LEFT PAGE SPREAD                                             */}
              {/* ============================================================ */}
              <div className="space-y-10 lg:space-y-12">
                
                {/* 1. Villa Kogelhofun Position (AirTree: Text on left, 2:1 wide photo on right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-6 space-y-1 pr-2">
                    <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                      {project1.title}
                    </h3>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project1.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                      {project1.desc}
                    </p>
                    <div className="pt-1.5">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project1.dateTag}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <div
                      onClick={() => setPreviewProject(project1)}
                      className={`group relative ${project1.aspectClass} w-full overflow-hidden bg-neutral-100 cursor-pointer`}
                    >
                      <Image
                        src={project1.image}
                        alt={project1.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Glebe House Position (Kakkar Chaap: Text on left, 3:2 photo on right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-6 space-y-1 pr-2">
                    <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                      {project2.title}
                    </h3>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project2.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                      {project2.desc}
                    </p>
                    <div className="pt-1.5">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project2.dateTag}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <div
                      onClick={() => setPreviewProject(project2)}
                      className={`group relative ${project2.aspectClass} w-full overflow-hidden bg-neutral-100 cursor-pointer`}
                    >
                      <Image
                        src={project2.image}
                        alt={project2.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Centerpiece Large Architectural Photo (Fitness First Cafe: 2:1 Wide Facade) */}
                <div className="space-y-2 pt-2">
                  <div
                    onClick={() => setPreviewProject(project3)}
                    className={`group relative ${project3.aspectClass} w-full overflow-hidden bg-neutral-100 cursor-pointer`}
                  >
                    <Image
                      src={project3.image}
                      alt={project3.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                      {project3.title}
                    </h3>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project3.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-0.5">
                      {project3.desc}
                    </p>
                    <div className="pt-1">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project3.dateTag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Werkhaus Position (Large Format Flex: Text on left, 4:3 photo on right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                  <div className="sm:col-span-7 space-y-1 pr-2">
                    <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                      {project4.title}
                    </h3>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project4.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                      {project4.desc}
                    </p>
                    <div className="pt-1.5">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project4.dateTag}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <div
                      onClick={() => setPreviewProject(project4)}
                      className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                    >
                      <Image
                        src={project4.image}
                        alt={project4.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* ============================================================ */}
              {/* RIGHT PAGE SPREAD                                            */}
              {/* ============================================================ */}
              <div className="space-y-10 lg:space-y-12">
                
                {/* Top Row: Non Program Pavillon (Left) + 3D Letter Signs (Right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  
                  {/* Item 5: Non Program Pavillon (Text above, photo below - 4:3) */}
                  <div className="sm:col-span-6 space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                        {project5.title}
                      </h3>
                      <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                        {project5.location}
                      </p>
                      <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                        {project5.desc}
                      </p>
                      <div className="pt-1.5">
                        <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                          {project5.dateTag}
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setPreviewProject(project5)}
                      className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                    >
                      <Image
                        src={project5.image}
                        alt={project5.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 22vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>

                  {/* Item 6: 3D Metal & Acrylic Letter Signs (Photo on top, text below - 4:3) */}
                  <div className="sm:col-span-6 space-y-3">
                    <div
                      onClick={() => setPreviewProject(project6)}
                      className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                    >
                      <Image
                        src={project6.image}
                        alt={project6.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 22vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                        {project6.title}
                      </h3>
                      <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                        {project6.location}
                      </p>
                      <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                        {project6.desc}
                      </p>
                      <div className="pt-1.5">
                        <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                          {project6.dateTag}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Item 7: Minimod Position (RDX Nutrition: 3:1 Ultra-Wide Panoramic Fascia Centerpiece) */}
                <div className="space-y-3 pt-2">
                  <div
                    onClick={() => setPreviewProject(project7)}
                    className={`group relative ${project7.aspectClass} w-full overflow-hidden bg-neutral-950 cursor-pointer shadow-xs`}
                  >
                    <Image
                      src={project7.image}
                      alt={project7.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                        {project7.title}
                      </h3>
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
                        {project7.formatTag}
                      </span>
                    </div>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project7.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                      {project7.desc}
                    </p>
                    <div className="pt-1.5">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project7.dateTag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 8: Carré Seine Position (Luxury Stationery: Photo on left + text on right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                  <div className="sm:col-span-5">
                    <div
                      onClick={() => setPreviewProject(project8)}
                      className="group relative aspect-[4/3] w-full max-w-[200px] overflow-hidden bg-neutral-100 cursor-pointer"
                    >
                      <Image
                        src={project8.image}
                        alt={project8.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-7 space-y-1 pl-1">
                    <h3 className="text-[13px] font-black text-neutral-900 uppercase tracking-tight">
                      {project8.title}
                    </h3>
                    <p className="text-[10.5px] font-medium text-neutral-400 tracking-wide">
                      {project8.location}
                    </p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                      {project8.desc}
                    </p>
                    <div className="pt-1.5">
                      <span className="text-[10px] font-medium text-neutral-400 border-b border-neutral-300 pb-0.5 inline-block">
                        {project8.dateTag}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-12 sm:mt-16 rounded-2xl bg-slate-950 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                CUSTOM INDUSTRIAL FABRICATION &bull; KASNA
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Have a Signage or Printing Project in{" "}
                <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                  Mind?
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Share your measurements or concept with our team in Kasna for instant factory estimates.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openQuoteModal("Our Work Portfolio")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-100 transition-all cursor-pointer shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-4 w-4 text-sky-600" />
              </button>
              <a
                href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20saw%20your%20work%20collage%20on%20the%20website%20and%20want%20to%20order%20similar%20signage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Full-Screen Preview Lightbox Modal */}
      {previewProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md transition-all cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl cursor-default flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setPreviewProject(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-rose-600 transition-colors shadow-lg cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left: Image (Object-contain preserves exact natural dimensions) */}
            <div className="relative w-full md:w-3/5 min-h-[300px] sm:min-h-[380px] md:min-h-[440px] bg-slate-950 flex items-center justify-center p-4">
              <Image
                src={previewProject.image}
                alt={previewProject.title}
                fill
                className="object-contain p-4 select-none"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                <Camera className="h-3 w-3 text-emerald-400" />
                <span>{previewProject.formatTag}</span>
              </div>
            </div>

            {/* Right: Project Details & Action */}
            <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-4 bg-slate-900 text-white">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    {previewProject.location}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  {previewProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {previewProject.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>Kasna Workshop, Greater Noida</span>
                </div>
                <div className="pt-1 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Authentic On-Site Installation</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const title = previewProject.title;
                    setPreviewProject(null);
                    openQuoteModal(title);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-colors cursor-pointer"
                >
                  <span>Order Similar Work</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(
                    previewProject.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}