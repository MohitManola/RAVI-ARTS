"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ClientTieUp {
  id: string;
  name: string;
  src: string;
}

export const clientTieUps: ClientTieUp[] = [
  { id: "barjika", name: "Barjika", src: "/images/CompanyTie-ups/barjika.png" },
  { id: "honda", name: "Honda", src: "/images/CompanyTie-ups/honda.png" },
  { id: "dongkuk-steel", name: "Dongkuk Steel", src: "/images/CompanyTie-ups/dongkuk-steel.png" },
  { id: "ryan-school", name: "Ryan International School", src: "/images/CompanyTie-ups/ryan-international-school.png" },
  { id: "soni-tech", name: "Soni Tech Greater Noida", src: "/images/CompanyTie-ups/soni-tech.png" },
  { id: "regal-rexnord", name: "Regal Rexnord", src: "/images/CompanyTie-ups/regal-rexnord.png" },
  { id: "and-hitech", name: "AND Hitech Industries Ltd", src: "/images/CompanyTie-ups/and-hitech-industries.png" },
  { id: "honda-power", name: "Honda Power Products", src: "/images/CompanyTie-ups/honda-power-products.png" },
  { id: "bimtech", name: "BIMTECH (Birla Institute of Management Technology)", src: "/images/CompanyTie-ups/bimtech.png" },
  { id: "tekniplex", name: "TekniPlex", src: "/images/CompanyTie-ups/tekniplex.png" },
  { id: "flaktgroup", name: "FläktGroup", src: "/images/CompanyTie-ups/flaktgroup.png" },
  { id: "nicotra-gebhardt", name: "Nicotra Gebhardt", src: "/images/CompanyTie-ups/nicotra-gebhardt.png" },
  { id: "caryaire", name: "Caryaire", src: "/images/CompanyTie-ups/caryaire.png" },
  { id: "kanchan", name: "Kanchan", src: "/images/CompanyTie-ups/kanchan.png" },
  { id: "vats-group", name: "Vats Group", src: "/images/CompanyTie-ups/vats-group.png" },
];

export default function TrustedClientsSlider() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-sky-100/60 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              OUR CLIENTS &amp; COMPANY TIE-UPS
            </span>
            <span className="cmyk-gradient-bar" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Industry Leaders &amp;{" "}
            <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Global Brands
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every business has a distinct vision. We work closely with multinational manufacturers,
            educational institutions, automotive giants, and industrial leaders across Greater Noida and NCR.
          </p>
        </div>
      </div>

      {/* Smooth Infinite Marquee Carousel Container with reduced gap */}
      <div
        className="clients-marquee-container relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Fade Gradient Mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 sm:w-24 md:w-32 z-20 bg-gradient-to-r from-white via-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* Right Fade Gradient Mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-24 md:w-32 z-20 bg-gradient-to-l from-white via-white/80 to-transparent"
          aria-hidden="true"
        />

        {/* Marquee Track with compact, reduced gap between logos */}
        <div className="flex w-max items-center">
          {/* Block 1 */}
          <div
            className="flex shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3 animate-marquee-clients"
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {clientTieUps.map((client, idx) => (
              <div
                key={`b1-${client.id}-${idx}`}
                className="w-40 sm:w-48 md:w-52 h-20 sm:h-24 shrink-0 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 160px, 208px"
                    className="object-contain p-1 filter drop-shadow-2xs group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Block 2 (Duplicate for Seamless Loop) */}
          <div
            className="flex shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3 animate-marquee-clients"
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
            aria-hidden="true"
          >
            {clientTieUps.map((client, idx) => (
              <div
                key={`b2-${client.id}-${idx}`}
                className="w-40 sm:w-48 md:w-52 h-20 sm:h-24 shrink-0 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 160px, 208px"
                    className="object-contain p-1 filter drop-shadow-2xs group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Highlights Strip below the marquee */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-7">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-sky-600" />
            <span>15+ Prominent Corporate Tie-ups</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Kasna &amp; Greater Noida Industrial Zone</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <span>Continuous Precision Print &amp; Signage Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
