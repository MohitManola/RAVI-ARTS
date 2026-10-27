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
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
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
            From Idea to Impact.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            A simple and systematic process to ensure your project is delivered with perfection.
          </p>
        </div>

        {/* 4 Process Columns with Subtle Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 rounded-2xl bg-slate-50/40 sm:bg-transparent border sm:border-0 border-slate-200/70">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`p-6 sm:px-6 sm:py-4 flex flex-col justify-start group hover:bg-slate-50/80 rounded-2xl transition-all duration-300 ${
                  idx === 0 ? "sm:pl-0" : ""
                } ${idx === steps.length - 1 ? "sm:pr-0" : ""}`}
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
