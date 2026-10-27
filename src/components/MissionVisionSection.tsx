"use client";

import React from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#eff7ff] py-12 sm:py-16 border-t border-sky-100">
      {/* Decorative CMYK pastel artistic corner flares matching mockup */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-44 w-44 rounded-full bg-gradient-to-br from-rose-200/40 via-amber-200/30 to-sky-200/40 blur-2xl -rotate-12" />
      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-bl from-sky-200/40 via-cyan-100/30 to-transparent blur-2xl" />

      {/* Pastel diagonal accents in corners */}
      <div className="pointer-events-none absolute top-4 left-4 hidden sm:flex flex-col gap-1.5 opacity-60">
        <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-rose-300 to-amber-300 -rotate-45" />
        <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-amber-300 to-sky-300 -rotate-45 translate-x-1" />
        <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-300 to-teal-300 -rotate-45 translate-x-2" />
      </div>

      <div className="pointer-events-none absolute top-4 right-4 hidden sm:flex flex-col gap-1.5 opacity-50">
        <div className="h-1.5 w-14 rounded-full bg-gradient-to-l from-sky-300 to-indigo-300 rotate-45" />
        <div className="h-1.5 w-10 rounded-full bg-gradient-to-l from-indigo-300 to-rose-300 rotate-45 -translate-x-1" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Our Mission */}
          <div className="group relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-sky-100 shadow-md shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:border-sky-300 hover:-translate-y-0.5">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Target / Bullseye Icon in Sky Blue Ring */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 border border-sky-100 ring-4 ring-sky-50/50 group-hover:scale-105 transition-transform">
                <Target className="h-8 w-8 stroke-[1.8]" />
              </div>
              
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To deliver reliable printing, signage and design solutions that help businesses present their message and build a strong brand.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="group relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-sky-100 shadow-md shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:border-rose-300 hover:-translate-y-0.5">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Eye Icon in Pink / Magenta Ring */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 border border-rose-100 ring-4 ring-rose-50/50 group-hover:scale-105 transition-transform">
                <Eye className="h-8 w-8 stroke-[1.8]" />
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To build long-term client relationships and become a reliable name in creative printing, signage and branding solutions
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
