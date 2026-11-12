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
      number: "01",
      icon: Gem,
      title: "Quality-Focused Work",
      desc: "Attention to materials, finishing, and presentation.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Complete Solutions",
      desc: "Printing, signage, and design services under one roof.",
    },
    {
      number: "03",
      icon: CustomisedApproachIcon,
      title: "Customised Approach",
      desc: "Solutions tailored to your project and requirements.",
    },
    {
      number: "04",
      icon: Users,
      title: "Reliable Communication",
      desc: "Clear coordination from enquiry to delivery.",
    },
    {
      number: "05",
      icon: Lightbulb,
      title: "Business-Focused Creativity",
      desc: "Visual solutions designed around your brand.",
    },
  ];

  return (
    <section className="relative bg-[#eff7ff] py-14 sm:py-16 md:py-20 border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header: Subhead & Title */}
        <div className="space-y-2 mb-10 sm:mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#00a8ff] uppercase">
              WHY CHOOSE US
            </span>
            <span className="cmyk-gradient-bar" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Ravi Arts{" "}
            <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Enterprises?
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Committed to quality, precision craftsmanship, and dependable service for every project.
          </p>
        </div>

        {/* 5 Feature Columns in White Card Container with subtle dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-sky-100 rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-sky-100">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 flex flex-col justify-start group hover:bg-sky-50/50 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon in Light Blue Box matching Work Process Section */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="h-5 w-5 stroke-[1.8]" />
                </div>

                {/* Step / Feature Number */}
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest mb-1.5">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
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
              How We{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Work
              </span>
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
                Have a Printing or Signage Project in{" "}
                <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                  Mind?
                </span>
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

