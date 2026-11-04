"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Eye,
  X,
  ZoomIn,
  Camera,
  MapPin,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";

export default function PortfolioPage() {
  const { openQuoteModal } = useQuote();
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    title: string;
    client: string;
    specs: string;
    tag: string;
  } | null>(null);

  // Collage projects with authentic work photos from /images/work and fabrication outputs
  const projects = [
    {
      id: 1,
      title: "AirTree Signage & Storefront Branding",
      category: "INSTALLATIONS",
      client: "AirTree Retail Store, Greater Noida",
      specs: "Complete outdoor architectural signboard with precision illuminated lettering and durable weather-sealed facade.",
      image: "/images/work/airtree.jpeg",
      tag: "Real Site Installation",
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      id: 2,
      title: "Fitness Center Exterior Sign & Banners",
      category: "INSTALLATIONS",
      client: "Fitness Hub, Greater Noida West",
      specs: "High-visibility large format outdoor flex banner and structural iron framing engineered for maximum street visual impact.",
      image: "/images/work/fitness.jpeg",
      tag: "Real Site Installation",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 3,
      title: "Gym 3D Acrylic Letters & Glow Sign",
      category: "INSTALLATIONS",
      client: "Premium Gym & Fitness Studio, Kasna",
      specs: "Cast acrylic 3D channel letters with waterproof high-lumen LED backlight illumination for striking 24/7 night glow.",
      image: "/images/work/jym.jpeg",
      tag: "Real Site Installation",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 4,
      title: "Modern Kitchen & Interior Visual Branding",
      category: "INSTALLATIONS",
      client: "Kitchen Showroom, Greater Noida",
      specs: "Custom interior graphics, frosted privacy vinyl, and acrylic display panels fabricated with millimeter CNC precision.",
      image: "/images/work/kitchen.jpeg",
      tag: "Real Site Installation",
      span: "md:col-span-2",
      aspect: "aspect-[16/9]",
    },
    {
      id: 5,
      title: "3D Acrylic Letters & Reception Board",
      category: "SIGNAGE",
      client: "Corporate Headquarters, Kasna",
      specs: "Laser cut cast acrylic letters with warm halo backlit LED illumination mounted on matte black ACP backing.",
      image: "/images/services/Acrylic&3dLetterBoards.PNG",
      tag: "Workshop Fabrication",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 6,
      title: "LED Glow Sign Board & Shopfront Facade",
      category: "SIGNAGE",
      client: "Commercial Retail Center, Pari Chowk",
      specs: "Architectural front-lit LED glow signboard with weather-sealed IP67 Samsung modules and heavy-gauge structural framing.",
      image: "/images/services/SignBoards&Signage.PNG",
      tag: "Installed Sign",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 7,
      title: "Heavy-Duty Outdoor Star Flex Hoarding",
      category: "FLEX",
      client: "Township & Industrial Zone, Yamuna Expressway",
      specs: "Seamless 10-foot wide 540 GSM Star Flex printed on high-speed industrial eco-solvent plotter with UV monsoon-proof inks.",
      image: "/images/services/flex&LargeFormatePrinting.PNG",
      tag: "Large Format Print",
      span: "md:col-span-2",
      aspect: "aspect-[16/9]",
    },
    {
      id: 8,
      title: "Velvet Touch Visiting Cards & Office Stationery",
      category: "STATIONERY",
      client: "Corporate Institutes, Knowledge Park",
      specs: "350 GSM luxury art cards with velvet soft-touch thermal lamination, embossed spot UV, and branded corporate bill books.",
      image: "/images/services/VisitingCards&BusinessStationary.PNG",
      tag: "Print Samples",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 9,
      title: "Multi-Page Product Catalogue & Brochures",
      category: "COMMERCIAL",
      client: "Manufacturing Plants, Ecotech Greater Noida",
      specs: "Commercial high-volume multi-color offset print, 300 GSM art card covers, perfect binding, and gloss aqueous coating.",
      image: "/images/services/Offset&DigitalPrinting.PNG",
      tag: "Offset Press Output",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 10,
      title: "Frosted Glass Privacy Film & Vinyl Decals",
      category: "FLEX",
      client: "Tech Zone Corporate Offices, Greater Noida",
      specs: "Die-cut branded frosted privacy film applied with zero bubbles on executive conference room glass partitions.",
      image: "/images/services/Eco-Solvent&VinalPrinting.PNG",
      tag: "Vinyl Installation",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 11,
      title: "Complete Brand Identity & Signage Layouts",
      category: "COMMERCIAL",
      client: "Retail Showroom Rebranding, Alpha 1",
      specs: "100% original vector brand guidelines, architectural 3D signage previews, and print-ready packaging formulations.",
      image: "/images/services/branding&GraphicDesign.PNG",
      tag: "Studio Design",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 12,
      title: "Customized Corporate Gifts & Executive Kits",
      category: "GIFTS",
      client: "Annual Corporate Summit, India Expo Mart",
      specs: "Laser engraved double-wall stainless steel mugs, luxury rollerball pens, executive leather diaries, and custom gift boxes.",
      image: "/images/services/CorporateGifts&PromotionalProducts.PNG",
      tag: "Real Merchandise",
      span: "col-span-1",
      aspect: "aspect-[4/3]",
    },
  ];



  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[220px] sm:min-h-[260px] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                PORTFOLIO
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Recent{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
          </div>
        </div>
      </section>



      {/* Professional Work Portfolio Grid */}
      <section className="py-14 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setPreviewImage({
                    src: item.image,
                    title: item.title,
                    client: item.client,
                    specs: item.specs,
                    tag: item.tag,
                  })
                }
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Consistent 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white border border-white/15 shadow-sm">
                    <Camera className="h-3 w-3 text-sky-400" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Top Right Quick Zoom Icon */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-105">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md">
                      <ZoomIn className="h-4 w-4 text-sky-600" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 flex items-center gap-1 pt-0.5">
                      <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                      <span className="truncate">{item.client}</span>
                    </p>
                  </div>

                  {/* Footer Action Bar */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700 transition-colors">
                      <span>View Project</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      Kasna Workshop
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-14 rounded-3xl bg-slate-900 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                WANT SIMILAR QUALITY FOR YOUR BUSINESS?
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
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md transition-all cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl cursor-default flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-rose-600 transition-colors shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left: Image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:w-3/5 min-h-[300px] sm:min-h-[380px] bg-slate-950">
              <Image
                src={previewImage.src}
                alt={previewImage.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                <Camera className="h-3 w-3 text-emerald-400" />
                <span>{previewImage.tag}</span>
              </div>
            </div>

            {/* Right: Project Details & Action */}
            <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-4 bg-slate-900 text-white">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {previewImage.client}
                </span>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  {previewImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {previewImage.specs}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>Manufactured at Kasna Workshop, Greater Noida</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const title = previewImage.title;
                    setPreviewImage(null);
                    openQuoteModal(title);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-colors cursor-pointer"
                >
                  <span>Order Similar Work</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(
                    previewImage.title
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
