"use client";

import React from "react";
import Link from "next/link";
import {
  Gem,
  Settings,
  Layers,
  MessageSquare,
  Users,
  Lightbulb,
  FileText,
  Printer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { CmykCornerRibbon, CmykBar } from "@/components/CmykCornerRibbon";
import { useQuote } from "@/context/QuoteContext";

function CustomisedApproachIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6.5C3.2 5.5 3.5 4 4.8 3.5c1.2-.5 2.5 0 2.8 1.2.2.8-.2 1.6-1 2" />
      <path d="M7.5 17.5L17.5 7.5a2.121 2.121 0 0 1 3 3L10.5 20.5 6 21.5l1.5-4z" />
      <path d="M15 10l2 2" />
      <path d="M15.5 19.5c1 1.2 2.2 1.5 3.2.8 1-.7 1.2-2 .5-2.8" />
    </svg>
  );
}

// =========================================================================
// SECTION 1: WHY CHOOSE RAVI ARTS ENTERPRISES?
// =========================================================================
export function WhyChooseRaviArts() {
  const features = [
    {
      icon: Gem,
      title: "Quality-Focused Work",
      desc: "Attention to materials, finishing, and presentation.",
    },
    {
      icon: Settings,
      title: "Complete Solutions",
      desc: "Printing, signage, and design services under one roof.",
    },
    {
      icon: CustomisedApproachIcon,
      title: "Customised Approach",
      desc: "Solutions tailored to your project and requirements.",
    },
    {
      icon: Users,
      title: "Reliable Communication",
      desc: "Clear coordination from enquiry to delivery.",
    },
    {
      icon: Lightbulb,
      title: "Business-Focused Creativity",
      desc: "Visual solutions designed around your brand.",
    },
  ];

  return (
    <section className="relative bg-[#f4f9fd] py-14 sm:py-16 md:py-20 border-t border-sky-100/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header: Subhead & Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#00a8ff] uppercase">
              WHY CHOOSE US
            </span>
            <span className="cmyk-gradient-bar" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#07172d] tracking-tight">
            Why Choose Ravi Arts Enterprises?
          </h2>
        </div>

        {/* 5 Feature Columns in a horizontal row with vertical dividers */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-start ${idx === 0
                    ? "lg:pr-6"
                    : idx === features.length - 1
                      ? "lg:pl-6"
                      : "lg:px-6"
                  }`}
              >
                {/* Bare Cyan/Sky-Blue Icon */}
                <div className="text-[#00a8ff]">
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 text-sm sm:text-base font-extrabold text-[#07172d] leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// =========================================================================
// SECTION 2: HOW WE WORK (Deep Navy #07172d background with 4 steps)
// =========================================================================
export function HowWeWorkSection() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Share Your Requirements",
      desc: "Tell us about your project, quantity, size, preferred material and deadline.",
    },
    {
      num: "02",
      icon: FileText,
      title: "Get a Suitable Solution",
      desc: "We discuss design options, materials, specifications and pricing.",
    },
    {
      num: "03",
      icon: Printer,
      title: "Design & Production",
      desc: "After approval, the artwork and production process are coordinated.",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Quality Check & Delivery",
      desc: "We coordinate the final checks, finishing and delivery arrangements.",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 relative overflow-hidden border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#00a8ff] uppercase block">
              OUR WORK PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07172d]">
              How We Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A simple and transparent process to bring your ideas to life.
            </p>
            <CmykBar className="h-1.5 w-20 mt-3" />
          </div>

          {/* Right Column: 4 Step Process Horizontal Flow on White */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <div key={st.num} className="space-y-3 relative group rounded-2xl bg-[#eff7ff]/70 border border-sky-100 p-4 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all">
                    {/* Number Pill & Icon */}
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a8ff] text-white font-extrabold text-xs shadow-md">
                        {st.num}
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100/80 text-sky-700">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 3: FLOATING CTA BANNER ("Have a Printing or Signage Project in Mind?")
// =========================================================================
export function PrintingProjectCtaBanner() {
  const { openQuoteModal } = useQuote();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-3xl bg-[#07172d] border border-sky-500/25 p-6 sm:p-10 text-white shadow-2xl">
        {/* Bottom Left & Bottom Right CMYK Ribbons */}
        <CmykCornerRibbon position="bottom-left" />
        <CmykCornerRibbon position="bottom-right" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">

          {/* Left Script Badge & Headline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="hidden sm:block shrink-0">
              <span className="font-serif italic text-lg sm:text-xl font-medium tracking-wide text-white drop-shadow-sm whitespace-nowrap block leading-tight">
                Let&apos;s Print <br />
                Your Ideas <br />
                Into Reality
              </span>
            </div>

            <div className="hidden md:block h-16 w-px bg-white/20 shrink-0" />

            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                  LET&apos;S TURN YOUR IDEAS INTO IMPRESSIONS
                </span>
                <CmykBar className="h-1 w-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have a Printing or Signage Project in Mind?
              </h3>
            </div>
          </div>

          {/* Right Description & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 shrink-0">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs sm:max-w-sm">
              Let&apos;s discuss how we can bring your ideas to life. Share your requirements with us, and we&apos;ll help you choose the right solution for your business.
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openQuoteModal("Printing & Signage Project")}
                className="inline-flex items-center gap-2 rounded-full bg-[#00a8ff] hover:bg-[#0092dd] text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-lg shadow-sky-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-6 py-3 transition-all hover:scale-105 active:scale-95"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

