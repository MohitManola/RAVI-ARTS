"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Button */}
      <a
        href="tel:+919350036399"
        aria-label="Call Ravi Arts Enterprises at +91-9350036399"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/30 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-600/40 hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-white/80"
      >
        {/* Subtle breathing ripple glow */}
        <span className="absolute -inset-1 rounded-full bg-sky-400 opacity-20 animate-ping pointer-events-none" />
        <Phone className="h-6 w-6 stroke-[2.3]" />
      </a>

      {/* Tooltip on Desktop (appears to the right of the button) */}
      <div className="hidden sm:block ml-3 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Call Us: +91-9350036399
      </div>
    </div>
  );
}

