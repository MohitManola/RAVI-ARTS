"use client";

import React from "react";
import QualityFeaturesSlider from "@/components/QualityFeaturesSlider";

export default function WhyChooseValuesSection() {
  return (
    <section className="py-6 sm:py-8 bg-[#eff7ff] border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-5 shadow-sm border border-sky-100">
          <QualityFeaturesSlider />
        </div>
      </div>
    </section>
  );
}
