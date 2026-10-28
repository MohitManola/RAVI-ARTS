"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  PenTool,
  Truck,
  Building2,
  Award,
  Zap,
  Printer,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Ruler,
  Palette,
  BadgePercent,
} from "lucide-react";

// Line 1: Printing Services (Auto scrolling Left to Right)
export const printingServicesLine: string[] = [
  "Flex Printing",
  "Sunboard Printing",
  "Digital Printing",
  "Offset Printing",
  "Vinyl Printing",
  "Eco-Solvent Printing",
  "Visiting Card Printing",
  "Brochure Printing",
  "Flyer Printing",
  "Catalogue Printing",
  "Sticker Printing",
  "Hoarding Printing",
];

// Line 2: Signage, Letters & Branding Solutions (Auto scrolling Right to Left)
export const signageServicesLine: string[] = [
  "Glow Sign Board",
  "LED Sign Board",
  "Acrylic Letter Board",
  "3D Letter Board",
  "SS Letter Board",
  "Brass Letter Board",
  "Plastic Letter Board",
  "Vehicle Graphics",
  "Safety Signage",
  "Night Glow Signage",
  "Graphic Design",
  "Logo Design",
  "Branding Solutions",
];

export interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  iconBg: string;
  badge?: string;
}

// Track 1 Features (Service & Quality Values fallback)
export const qualityFeatures: FeatureItem[] = [
  {
    id: "quality",
    icon: ShieldCheck,
    title: "Quality-Focused Work",
    desc: "Attention to materials & finishing",
    iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    badge: "Quality Guaranteed",
  },
  {
    id: "complete",
    icon: PenTool,
    title: "Complete Solutions",
    desc: "Printing & signage under one roof",
    iconBg: "bg-rose-50 text-rose-600 border-rose-100",
    badge: "Turnkey",
  },
  {
    id: "custom",
    icon: Truck,
    title: "Customised Approach",
    desc: "Tailored to your specific brand",
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    badge: "Custom Made",
  },
  {
    id: "communication",
    icon: Building2,
    title: "Reliable Communication",
    desc: "Clear coordination to delivery",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    badge: "Direct Support",
  },
  {
    id: "factory",
    icon: Award,
    title: "In-House Kasna Factory",
    desc: "Direct manufacturer wholesale rates",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    badge: "Zero Middlemen",
  },
  {
    id: "turnaround",
    icon: Zap,
    title: "Express Turnaround",
    desc: "Fast delivery & emergency dispatch",
    iconBg: "bg-purple-50 text-purple-600 border-purple-100",
    badge: "Rapid Delivery",
  },
  {
    id: "resolution",
    icon: Printer,
    title: "1440 DPI Ultra HD Output",
    desc: "Japanese Eco-Solvent & UV presses",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
    badge: "True Colors",
  },
  {
    id: "audit",
    icon: CheckCircle2,
    title: "Multi-Point Quality Audits",
    desc: "Zero-defect tested before delivery",
    iconBg: "bg-teal-50 text-teal-600 border-teal-100",
    badge: "Pre-Tested",
  },
];

// Track 2 Features (Production & Technical Capabilities fallback)
export const secondaryQualityFeatures: FeatureItem[] = [
  {
    id: "led-signs",
    icon: Sparkles,
    title: "3D Acrylic & LED Glow Signs",
    desc: "Samsung & Osram waterproof bright modules",
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    badge: "50,000+ Hrs Glow",
  },
  {
    id: "star-flex",
    icon: Layers,
    title: "Heavy-Duty Industrial Flex",
    desc: "Weatherproof UV-shielded outdoor durability",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    badge: "Weatherproof",
  },
  {
    id: "cnc-laser",
    icon: Cpu,
    title: "Precision CNC & Laser Cutters",
    desc: "Sub-millimeter routing for metal & ACP",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    badge: "Micron Precision",
  },
  {
    id: "site-survey",
    icon: Ruler,
    title: "Free On-Site Site Measurement",
    desc: "Expert doorstep assessment across NCR",
    iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    badge: "Zero Survey Fee",
  },
  {
    id: "offset-press",
    icon: Printer,
    title: "Commercial Offset & Digital",
    desc: "Visiting cards, brochures & catalogues",
    iconBg: "bg-rose-50 text-rose-600 border-rose-100",
    badge: "High Volume",
  },
  {
    id: "true-color",
    icon: Palette,
    title: "Japanese Eco-Solvent Presses",
    desc: "Vivid color matching with zero banding",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
    badge: "True Color",
  },
  {
    id: "direct-pricing",
    icon: BadgePercent,
    title: "Direct Wholesale Pricing",
    desc: "Manufacturer rates with no broker markups",
    iconBg: "bg-purple-50 text-purple-600 border-purple-100",
    badge: "Best Value",
  },
  {
    id: "legacy",
    icon: Award,
    title: "20+ Years Trusted Legacy",
    desc: "Established 2005 in Kasna, Greater Noida",
    iconBg: "bg-teal-50 text-teal-600 border-teal-100",
    badge: "Kasna Leader",
  },
];

interface QualityFeaturesSliderProps {
  direction?: "rtl" | "ltr";
  textItems?: string[];
  items?: FeatureItem[];
  sliderId?: string;
}

export default function QualityFeaturesSlider({
  direction = "ltr",
  textItems,
  items,
  sliderId = "slider-track",
}: QualityFeaturesSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLTR = direction === "ltr";
  const marqueeClass = isLTR ? "animate-marquee-ltr" : "animate-marquee-rtl";

  // Text ticker mode (e.g. Flex Printing • Sunboard Printing ...)
  const activeTextList = textItems && textItems.length > 0 ? textItems : (!items || items.length === 0 ? printingServicesLine : null);

  if (activeTextList) {
    // Repeat 3 times to ensure zero gap on ultrawide displays
    const repeated = [...activeTextList, ...activeTextList, ...activeTextList];

    return (
      <div
        id={sliderId}
        className="marquee-container relative w-full overflow-hidden select-none group/marquee py-1.5 sm:py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edge Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Infinite Dual Track Block */}
        <div className="flex w-max">
          {/* Block 1 */}
          <div
            className={`flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 ${marqueeClass}`}
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {repeated.map((item, idx) => (
              <div
                key={`b1-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4"
              >
                <Link
                  href="/services"
                  className="group/pill inline-flex items-center px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-white/90 shadow-2xs hover:border-sky-400 hover:bg-sky-50/90 hover:shadow-xs hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] md:text-sm font-bold tracking-wide text-slate-800 group-hover/pill:text-sky-600 transition-colors">
                    {item}
                  </span>
                </Link>
                <span
                  className="text-sky-400/90 font-black text-sm sm:text-base select-none"
                  aria-hidden="true"
                >
                  •
                </span>
              </div>
            ))}
          </div>

          {/* Block 2 (Duplicate for Seamless Loop) */}
          <div
            className={`flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4 ${marqueeClass}`}
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
            aria-hidden="true"
          >
            {repeated.map((item, idx) => (
              <div
                key={`b2-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4"
              >
                <Link
                  href="/services"
                  tabIndex={-1}
                  className="group/pill inline-flex items-center px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-white/90 shadow-2xs hover:border-sky-400 hover:bg-sky-50/90 hover:shadow-xs hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] md:text-sm font-bold tracking-wide text-slate-800 group-hover/pill:text-sky-600 transition-colors">
                    {item}
                  </span>
                </Link>
                <span
                  className="text-sky-400/90 font-black text-sm sm:text-base select-none"
                  aria-hidden="true"
                >
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fallback: Card mode with icons
  const itemsToUse = items && items.length > 0 ? items : qualityFeatures;

  return (
    <div
      id={sliderId}
      className="marquee-container relative w-full overflow-hidden select-none group/marquee py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Infinite Dual Track Block */}
      <div className="flex w-max">
        {/* Block 1 */}
        <div
          className={`flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6 ${marqueeClass}`}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
        >
          {itemsToUse.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`b1-${item.id}-${idx}`}
                className="w-[270px] sm:w-[310px] shrink-0 flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300 group/card"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} border transition-transform duration-300 group-hover/card:scale-110 shadow-xs`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-sky-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Block 2 (Duplicate for Seamless Loop) */}
        <div
          className={`flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6 ${marqueeClass}`}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          aria-hidden="true"
        >
          {itemsToUse.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`b2-${item.id}-${idx}`}
                className="w-[270px] sm:w-[310px] shrink-0 flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-300 group/card"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} border transition-transform duration-300 group-hover/card:scale-110 shadow-xs`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-sky-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
