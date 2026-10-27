"use client";

import React from "react";
import { Gem, Cog, PenTool, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Quality-Focused Work",
    desc: "Attention to materials, finishing, and presentation.",
  },
  {
    icon: Cog,
    title: "Complete Solutions",
    desc: "Printing, signage, and design services under one roof.",
  },
  {
    icon: PenTool,
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

export default function WhyChooseValuesSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              OUR VALUES
            </span>
            <span className="cmyk-gradient-bar" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="relative inline-block text-slate-900 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-sky-500 after:rounded-full">
              Why
            </span>{" "}
            Choose Ravi Arts Enterprises?
          </h2>
        </div>

        {/* 5 Pillars Row with Subtle Divider Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 rounded-2xl bg-slate-50/50 sm:bg-transparent border sm:border-0 border-slate-200/70">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 sm:px-5 sm:py-6 flex flex-col justify-start group hover:bg-slate-50/80 rounded-2xl transition-all duration-300 ${
                  idx === 0 ? "sm:pl-0" : ""
                } ${idx === values.length - 1 ? "sm:pr-0" : ""}`}
              >
                {/* Minimalist Blue Outline Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50/80 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {item.title}
                </h3>

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
