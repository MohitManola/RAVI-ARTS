"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PenTool, Truck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import QualityFeaturesSlider, {
  printingServicesLine,
  signageServicesLine,
} from "@/components/QualityFeaturesSlider";

export default function HomeHeroBanner() {
  return (
    <section
      className="relative w-full bg-white select-none overflow-hidden"
      aria-label="Home Hero Banner"
    >
      {/* Accessible semantic heading for SEO & screen readers */}
      <h1 className="sr-only">
        Where Quality Printing, Signage and Graphics Meet Brand Visibility - Ravi Arts Enterprises Kasna Greater Noida
      </h1>

      {/* Main Full-Width Single Hero Banner Image (Edge-to-Edge with no border) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[1920/600] min-h-[400px] sm:min-h-[460px] md:min-h-[540px] overflow-hidden bg-white">
        {/* Full-bleed Banner Image (Machine on the right, clean white canvas on the left) */}
        <Image
          src="/images/HomeHeroBanner_1.png"
          alt="Where Quality Printing, Signage and Graphics Meet Brand Visibility - Ravi Arts Enterprises"
          fill
          priority
          className="object-cover object-right select-none"
          sizes="100vw"
          quality={95}
        />

        {/* Content Overlay restricted strictly to the left clean white area */}
        <div className="absolute left-[5%] md:left-[6%] top-1/2 -translate-y-1/2 z-10 w-full max-w-[90%] sm:max-w-[75%] md:max-w-[55%] lg:max-w-[50%] xl:max-w-[46%] flex flex-col justify-center">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider sm:tracking-widest text-sky-600 uppercase">
              ALL TYPES PRINTING, SIGNAGE &amp; GRAPHIC SOLUTIONS
            </span>
            <span className="cmyk-gradient-bar" />
          </div>

          {/* Main Headline in 3 clear lines with reduced line gap */}
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[34px] xl:text-[40px] font-black text-slate-900 tracking-tight leading-[1.12] sm:leading-[1.14] md:leading-[1.15]">
            <span className="block">Where Quality Printing,</span>
            <span className="block">Signage and Graphics Meet</span>
            <span className="block bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Brand Visibility
            </span>
          </h2>

          {/* Action Buttons: Explore Services, Contact, WhatsApp */}
          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-sky-600 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-600/30 hover:bg-sky-500 hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm hover:bg-white hover:border-slate-400 hover:scale-105 active:scale-95 transition-all"
            >
              Contact
            </Link>

            <a
              href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20printing%20and%20signage%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-emerald-700 shadow-sm hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-md hover:scale-105 active:scale-95 transition-all group"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#25D366] group-hover:text-white transition-colors" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Core Trust Features below Explore Services / Action buttons inside banner area */}
          <div className="mt-5 sm:mt-6 md:mt-7 pt-4 sm:pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-x-5 sm:gap-x-6 md:gap-x-7 gap-y-3">
            {/* 1. Quality Printing */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 shrink-0 stroke-[1.8]" />
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Quality Printing
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Sharp. Vibrant. Lasting.
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-6 w-px bg-slate-300/80" aria-hidden="true" />

            {/* 2. Custom Design */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <PenTool className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 shrink-0 stroke-[1.8]" />
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Custom Design
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Your Vision, Our Creativity.
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-6 w-px bg-slate-300/80" aria-hidden="true" />

            {/* 3. Reliable Delivery */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 shrink-0 stroke-[1.8]" />
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Reliable Delivery
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  On Time, Every Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Text Sliders below Hero Banner (End to End Full Width) */}
      <div className="border-y border-sky-100 bg-slate-50/40 py-2.5 sm:py-3.5 space-y-1.5 sm:space-y-2 w-full overflow-hidden">
        {/* Track 1: Auto scrolling Left to Right (Printing Services) */}
        <QualityFeaturesSlider
          direction="ltr"
          textItems={printingServicesLine}
          sliderId="features-track-1"
        />

        {/* Track 2: Auto scrolling Right to Left (Signage & Branding Solutions) */}
        <QualityFeaturesSlider
          direction="rtl"
          textItems={signageServicesLine}
          sliderId="features-track-2"
        />
      </div>
    </section>
  );
}
