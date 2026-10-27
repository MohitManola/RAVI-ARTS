"use client";

import React from "react";
import Image from "next/image";
import {
  Printer,
  Cpu,
  ShieldCheck,
  Maximize2,
  BadgePercent,
  Settings,
  Zap,
  Award,
  Ruler,
  Sparkles,
  CheckCircle2,
  Headphones,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";

interface SliderItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  accentBorder: string;
  badge: string;
}

const slider1Items: SliderItem[] = [
  {
    id: "wc-1",
    title: "1440 DPI Ultra HD Output",
    subtitle: "True Color Vibrancy",
    description:
      "Japanese eco-solvent & UV presses reproducing razor-sharp photorealistic graphics with zero banding.",
    stat: "1440 DPI Resolution",
    icon: Printer,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    accentBorder: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    badge: "Eco-Solvent & UV",
  },
  {
    id: "wc-2",
    title: "Precision CNC & Laser Routing",
    subtitle: "Micron Accuracy",
    description:
      "In-house automated CNC routers and laser cutters for 3D acrylic letters, ACP boards, and metal signage.",
    stat: "Sub-Millimeter Edge",
    icon: Cpu,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    accentBorder: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    badge: "In-House Factory",
  },
  {
    id: "wc-3",
    title: "Weatherproof & UV Shielded",
    subtitle: "Certified Durability",
    description:
      "Heavy-duty outdoor grade vinyl, star flex, and industrial laminates engineered to withstand rain, heat, and smog.",
    stat: "3–5 Years Outdoor Life",
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    accentBorder: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    badge: "All-Weather Grade",
  },
  {
    id: "wc-4",
    title: "Custom Formats & Dimensions",
    subtitle: "Zero Format Limits",
    description:
      "From luxury business cards and retail standees to 100-foot building wraps — tailored to your exact measurements.",
    stat: "Up to 100ft Facades",
    icon: Maximize2,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    accentBorder: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    badge: "100% Tailored",
  },
  {
    id: "wc-5",
    title: "Direct Factory-Floor Rates",
    subtitle: "Honest Wholesale",
    description:
      "No middlemen, agents, or subcontracting markups. Honest direct-from-manufacturer transparent pricing.",
    stat: "Direct Manufacturer",
    icon: BadgePercent,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    accentBorder: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    badge: "Best Value",
  },
  {
    id: "wc-6",
    title: "Turnkey Design to Mounting",
    subtitle: "Complete Ownership",
    description:
      "Graphic artwork adaptation, structural fabrication, certified electrical safety, and on-site expert mounting.",
    stat: "100% In-House Team",
    icon: Settings,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    accentBorder: "hover:border-violet-500/50 hover:shadow-violet-500/10",
    badge: "End-to-End",
  },
];

const slider2Items: SliderItem[] = [
  {
    id: "wc-7",
    title: "Express 24-Hour Turnaround",
    subtitle: "Lightning Delivery",
    description:
      "Dedicated rapid print queues and emergency dispatch ready to fulfill urgent exhibition and store opening dates.",
    stat: "Same-Day Ready",
    icon: Zap,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    accentBorder: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    badge: "Speed Guarantee",
  },
  {
    id: "wc-8",
    title: "10+ Years & 5,000+ Projects",
    subtitle: "Unmatched Experience",
    description:
      "Trusted partner for retail franchises, corporate headquarters, and local enterprises throughout Kasna and NCR.",
    stat: "5,000+ Happy Brands",
    icon: Award,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    accentBorder: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    badge: "Kasna & NCR Leader",
  },
  {
    id: "wc-9",
    title: "Free On-Site Measurement",
    subtitle: "Doorstep Precision",
    description:
      "Our field engineers visit your shop, showroom, or warehouse to survey walls and provide instant estimates.",
    stat: "Zero Assessment Fee",
    icon: Ruler,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    accentBorder: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    badge: "Doorstep Visit",
  },
  {
    id: "wc-10",
    title: "Samsung & Osram Brand LEDs",
    subtitle: "Luminous Brilliance",
    description:
      "IP67 waterproof modules delivering uniform brightness, minimal power consumption, and years of trouble-free glow.",
    stat: "50,000+ Hours Glow",
    icon: Sparkles,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    accentBorder: "hover:border-yellow-500/50 hover:shadow-yellow-500/10",
    badge: "Certified Modules",
  },
  {
    id: "wc-11",
    title: "Multi-Point Quality Audits",
    subtitle: "Zero-Defect Standard",
    description:
      "Color profiling, luminance checks, seam strength, and frame rigidity checked before any board leaves our plant.",
    stat: "100% Pre-Tested",
    icon: CheckCircle2,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    accentBorder: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    badge: "Quality Assured",
  },
  {
    id: "wc-12",
    title: "Dedicated WhatsApp Updates",
    subtitle: "Direct Communication",
    description:
      "Live photos and video updates straight from our fabrication floor so you stay informed at every milestone.",
    stat: "Real-Time Updates",
    icon: WhatsAppIcon,
    iconColor: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10 border-[#25D366]/20",
    accentBorder: "hover:border-[#25D366]/50 hover:shadow-[#25D366]/10",
    badge: "Instant Support",
  },
];

function WhyChooseCard({
  item,
  onSelect,
}: {
  item: SliderItem;
  onSelect: (topic?: string) => void;
}) {
  const Icon = item.icon;

  return (
    <div
      onClick={() => onSelect(item.title)}
      className={`relative w-[300px] sm:w-[350px] shrink-0 rounded-2xl bg-slate-900/90 border border-slate-800/90 ${item.accentBorder} p-4 sm:p-5 text-left transition-all duration-300 shadow-lg cursor-pointer group flex flex-col justify-between hover:bg-slate-850 hover:-translate-y-1`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.iconBg} ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/60">
            {item.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          {item.subtitle}
        </div>
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-sky-300 transition-colors">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Footer Pill / Stat */}
      <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
        <span className="font-semibold text-slate-300 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          {item.stat}
        </span>
        <span className="text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold text-[11px]">
          Enquire <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

export default function WhyChooseSliders() {
  const { openQuoteModal } = useQuote();

  return (
    <section className="relative bg-slate-950 py-14 sm:py-16 text-white overflow-hidden border-y border-slate-900">
      {/* Background Decorative Ambient Blurs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />

      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          {/* Title & Badge */}
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 shadow-inner flex items-center justify-center">
              <Image
                src="/images/logo_2.png"
                alt="Ravi Arts Logo Mark"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                  WHY CHOOSE RAVI ARTS?
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Precision Engineering. Unmatched Quality.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Kasna &amp; Greater Noida&apos;s leading printing &amp; 3D signage manufacturer. Explore our production capabilities across the dual live sliders below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Continuous Infinite Sliders */}
      <div className="space-y-6">
        {/* Track 1 Slider (Left to Right) */}
        <div className="relative overflow-hidden w-full group/slider1 py-1">
          {/* Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />

          <div className="flex w-max">
            <div
              className="flex shrink-0 gap-4 pr-4 animate-marquee-ltr group-hover/slider1:[animation-play-state:paused]"
            >
              {slider1Items.map((item, idx) => (
                <WhyChooseCard
                  key={`track1-a-${item.id}-${idx}`}
                  item={item}
                  onSelect={openQuoteModal}
                />
              ))}
            </div>
            <div
              className="flex shrink-0 gap-4 pr-4 animate-marquee-ltr group-hover/slider1:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {slider1Items.map((item, idx) => (
                <WhyChooseCard
                  key={`track1-b-${item.id}-${idx}`}
                  item={item}
                  onSelect={openQuoteModal}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Track 2 Slider (Right to Left) */}
        <div className="relative overflow-hidden w-full group/slider2 py-1">
          {/* Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />

          <div className="flex w-max">
            <div
              className="flex shrink-0 gap-4 pr-4 animate-marquee-rtl group-hover/slider2:[animation-play-state:paused]"
            >
              {slider2Items.map((item, idx) => (
                <WhyChooseCard
                  key={`track2-a-${item.id}-${idx}`}
                  item={item}
                  onSelect={openQuoteModal}
                />
              ))}
            </div>
            <div
              className="flex shrink-0 gap-4 pr-4 animate-marquee-rtl group-hover/slider2:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {slider2Items.map((item, idx) => (
                <WhyChooseCard
                  key={`track2-b-${item.id}-${idx}`}
                  item={item}
                  onSelect={openQuoteModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
