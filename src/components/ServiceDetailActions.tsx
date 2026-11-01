"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useQuote } from "@/context/QuoteContext";

interface ServiceDetailActionsProps {
  serviceTitle: string;
}

export default function ServiceDetailActions({ serviceTitle }: ServiceDetailActionsProps) {
  const { openQuoteModal } = useQuote();

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <button
        type="button"
        onClick={() => openQuoteModal(serviceTitle)}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <span>Request Instant Quote</span>
        <ArrowRight className="h-4 w-4 text-sky-400" />
      </button>

      <a
        href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
          serviceTitle
        )}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <WhatsAppIcon className="h-4 w-4 fill-white" />
        <span>Chat on WhatsApp</span>
      </a>

      <a
        href="tel:+919350036399"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <Phone className="h-4 w-4 text-sky-600" />
        <span>+91-9350036399</span>
      </a>
    </div>
  );
}

