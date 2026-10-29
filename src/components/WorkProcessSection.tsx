"use client";

import React from "react";
import { MessageSquare, Palette, Printer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand Your Requirements",
    desc: "We discuss your project, purpose, sizes and specifications.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Plan & Design",
    desc: "We develop or prepare artwork according to your needs.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Print & Produce",
    desc: "Your project moves into production using suitable materials and methods.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Quality Check & Delivery",
    desc: "We coordinate finishing, final checks, and delivery arrangements.",
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              OUR WORK PROCESS
            </span>
            <span className="cmyk-gradient-bar" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Idea{" "}
            <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              to Impact
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            A clear, step-by-step process that ensures every project is delivered smoothly
          </p>
        </div>

        {/* 4 Process Columns with Subtle Dividers in White Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-sky-100 rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-sky-100">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 flex flex-col justify-start group hover:bg-sky-50/50 rounded-2xl transition-all duration-300"
              >
                {/* Icon in Light Blue Box */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5 stroke-[1.8]" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest mb-1.5">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
