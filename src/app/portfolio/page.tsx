"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ZoomIn,
  X,
  ChevronLeft,
  Phone,
  MapPin,
  Layers,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type PortfolioCategory =
  | "All Work"
  | "Signage & 3D Letters"
  | "Outdoor & Flex"
  | "Commercial Print";

interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All Work">;
  tag: string;
  location: string;
  specs: string;
  description: string;
  image: string;
  featured?: boolean;
  wide?: boolean;
}

const CATEGORIES: PortfolioCategory[] = [
  "All Work",
  "Signage & 3D Letters",
  "Outdoor & Flex",
  "Commercial Print",
];

const PROJECTS: ProjectItem[] = [
  {
    id: "airtree-signage",
    title: "AirTree Electronics Backlit Fascia",
    category: "Signage & 3D Letters",
    tag: "3D Acrylic LED Board",
    location: "Greater Noida",
    specs: "ACP Cladding • Laser-Cut 3D Acrylic • Waterproof LEDs",
    description:
      "Full storefront elevation engineered with CNC-routed ACP panels and high-lumen 3D illuminated acrylic channel lettering built for 24/7 visibility.",
    image: "/images/work/airtree.jpeg",
    featured: true,
  },
  {
    id: "fitness-cafe-sign",
    title: "Fitness First Nutrition Cafe Frontage",
    category: "Signage & 3D Letters",
    tag: "Storefront Glow Signage",
    location: "Alpha Commercial Belt",
    specs: "Matte ACP Base • Edge-Lit Acrylic • Weatherproof Frame",
    description:
      "Crisp high-contrast storefront signage board with uniform internal LED illumination and precision vinyl brand accents.",
    image: "/images/work/fitness.jpeg",
    featured: true,
  },
  {
    id: "kitchen-branding",
    title: "Modular Kitchen Showroom Display",
    category: "Outdoor & Flex",
    tag: "Showroom Branding & Vinyl",
    location: "Kasna & Pari Chowk",
    specs: "Eco-Solvent Matte Vinyl • Sunboard Mounts • Fascia Board",
    description:
      "Complete interior and exterior display branding combining crisp large-format eco-solvent wall graphics and custom signage.",
    image: "/images/work/kitchen.jpeg",
    featured: true,
  },
  {
    id: "jym-fascia-wrap",
    title: "Fitness Club Full Panoramic Hoarding",
    category: "Outdoor & Flex",
    tag: "Wide-Format Fascia & Flex",
    location: "Greater Noida West",
    specs: "Heavy-Duty Star Flex • MS Box Truss • Custom LED Floods",
    description:
      "Extra-wide storefront banner and rigid steel framing built to withstand harsh NCR weather without color fade or sag.",
    image: "/images/work/jym.jpeg",
    featured: true,
    wide: true,
  },
  {
    id: "kakkar-chaap-board",
    title: "Restaurant Menu & Glow Sign Installation",
    category: "Signage & 3D Letters",
    tag: "Backlit Menu & Sign Board",
    location: "Gamma Sector, Greater Noida",
    specs: "Translit Backlit Flex • Heavy Aluminium Profile • LED Modules",
    description:
      "High-brightness backlit display and counter menu branding designed to attract evening footfall cleanly.",
    image: "/images/work/kakkar-chaap.png",
  },
  {
    id: "corporate-brochures",
    title: "Industrial Product Catalogues & Brochures",
    category: "Commercial Print",
    tag: "Multi-Color Offset Print",
    location: "Kasna Industrial Area",
    specs: "300 GSM Art Card Cover • 170 GSM Inside • Matte Lamination",
    description:
      "Sharp 4-color offset product catalogues printed and center-pinned in-house for Greater Noida manufacturing plants.",
    image: "/images/portfolio-brochure.webp",
  },
  {
    id: "premium-visiting-cards",
    title: "Spot UV & Velvet Laminated Business Cards",
    category: "Commercial Print",
    tag: "Executive Stationery",
    location: "Delhi NCR Corporates",
    specs: "350–400 GSM Stock • Velvet Soft-Touch • Raised Spot UV",
    description:
      "Executive visiting cards, matching letterheads, and carbonless bill books finished with crisp die-cut edges.",
    image: "/images/portfolio-cards.webp",
  },
  {
    id: "corporate-apparel-kits",
    title: "Custom Printed T-Shirts & Event Merchandise",
    category: "Commercial Print",
    tag: "Corporate Gifts & Apparel",
    location: "Educational & Factory Teams",
    specs: "DTF & Screen Printing • Ceramic Mugs • Custom Brand Kits",
    description:
      "Durable logo-printed polos, event T-shirts, mugs, and onboarding gift sets tailored for bulk staff orders.",
    image: "/images/portfolio-tshirt.webp",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Work");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All Work"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeCategory);

  const previewProject = previewIndex !== null ? filteredProjects[previewIndex] ?? null : null;

  const handleNext = useCallback(() => {
    if (previewIndex === null || filteredProjects.length === 0) return;
    setPreviewIndex((previewIndex + 1) % filteredProjects.length);
  }, [previewIndex, filteredProjects.length]);

  const handlePrev = useCallback(() => {
    if (previewIndex === null || filteredProjects.length === 0) return;
    setPreviewIndex((previewIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }, [previewIndex, filteredProjects.length]);

  useEffect(() => {
    if (previewIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewIndex, handleNext, handlePrev]);

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Dark Top Hero Banner matching our_work_top.png */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/our_work_top.png"
            alt="Ravi Arts Enterprises Our Portfolio Showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right select-none"
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/55 sm:to-transparent" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-sky-300 font-semibold">Our Work</span>
          </nav>

          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              OUR PORTFOLIO &bull; RECENT WORK
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
              Recent Print &amp; <span className="text-sky-400">Signage Work</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              Real storefront LED boards, heavy-duty flex installations, and commercial offset prints delivered by our Kasna workshop across Greater Noida &amp; Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Filter & Gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header + Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-1.5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
                Installed &amp; Printed In-House
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Explore Our Completed Projects
              </h2>
              <p className="text-sm text-slate-600">
                Click any project card to inspect finish details and request the same format for your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Portfolio Categories">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategory(category);
                      setPreviewIndex(null);
                    }}
                    className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:text-sky-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Responsive Project Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`group rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-200 transition-all duration-300 overflow-hidden flex flex-col ${
                  project.wide && activeCategory === "All Work" ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setPreviewIndex(index)}
                  className={`relative w-full overflow-hidden bg-slate-900 cursor-pointer text-left ${
                    project.wide && activeCategory === "All Work"
                      ? "aspect-[16/9] sm:aspect-[12/5]"
                      : "aspect-[16/9]"
                  }`}
                  aria-label={`Inspect ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tag}`}
                    fill
                    sizes={
                      project.wide && activeCategory === "All Work"
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-sm border border-white/15 px-3 py-1 text-[11px] font-bold text-white">
                      {project.tag}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950">
                        Recent
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md opacity-90 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 font-semibold">
                      <span className="inline-flex items-center gap-1 text-sky-700">
                        <Layers className="h-3.5 w-3.5" />
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-slate-400" />
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold text-slate-500 truncate">
                      {project.specs}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreviewIndex(index)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 shrink-0 cursor-pointer"
                    >
                      <span>View</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Strip */}
      <section className="py-10 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Direct Workshop Execution</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Every board, flex banner, and offset sheet is fabricated and checked in-house before dispatch.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Site Measurement &amp; Fitting</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Experienced fitting technicians handle fascia measurements, MS framing, and electrical wiring across Greater Noida &amp; NCR.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Weatherproof Materials</h3>
                <p className="text-xs text-slate-600 mt-1">
                  UV-stabilized inks, heavy GSM Star Flex, and waterproof LED modules built for long-lasting outdoor visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#071328] text-white p-8 sm:p-12 shadow-2xl border border-sky-900/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
                <MapPin className="h-3.5 w-3.5" />
                Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want Similar Branding for Your Shop or Factory?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Share your board dimensions or print quantity with Ravi Arts Enterprises for a direct factory estimate and layout mockup.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20saw%20your%20portfolio%20and%20need%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href="tel:+919350036399"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                <span>+91 93500 36399</span>
              </a>

              <a
                href="tel:+919971145089"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white px-5 py-3 text-xs sm:text-sm font-bold transition-all"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                <span>+91 99711 45089</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={previewProject.title}
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewIndex(null)}
              aria-label="Close project preview"
              className="absolute top-3 right-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-slate-950">
              <Image
                src={previewProject.image}
                alt={previewProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />

              {filteredProjects.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white hover:bg-sky-600 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next project"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white hover:bg-sky-600 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
                  <span>{previewProject.tag}</span>
                  <span>&bull;</span>
                  <span className="text-slate-500">{previewProject.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {previewProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  {previewProject.description}
                </p>
                <p className="text-[11px] font-semibold text-slate-500 pt-1">
                  Specs: {previewProject.specs}
                </p>
              </div>

              <a
                href={`https://wa.me/919350036399?text=${encodeURIComponent(
                  `Hello Ravi Arts Enterprises, I would like a quote similar to "${previewProject.title}".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-sky-600 text-white px-5 py-2.5 text-xs font-bold shrink-0 transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                <span>Request Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
