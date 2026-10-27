"use client";

import React from "react";
import { ShieldCheck, PenTool, Truck, Building2 } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Work",
    desc: "Attention to materials & finishing",
    iconBg: "bg-sky-50 text-sky-600",
  },
  {
    icon: PenTool,
    title: "Complete Solutions",
    desc: "Printing & signage under one roof",
    iconBg: "bg-rose-50 text-rose-600",
  },
  {
    icon: Truck,
    title: "Customised Approach",
    desc: "Tailored to your specific brand",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    icon: Building2,
    title: "Reliable Communication",
    desc: "Clear coordination to delivery",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
];

export default function WhyChooseValuesSection() {
  return (
    <section className="py-8 sm:py-12 bg-[#eff7ff] border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Feature Cards matching Image Strip Style */}
        <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-sm border border-sky-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3.5 group"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

