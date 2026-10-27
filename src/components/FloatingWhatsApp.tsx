"use client";

import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on Desktop */}
      <div className="hidden sm:block mr-3 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat with Us on WhatsApp
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20printing%20and%20signage%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Ravi Arts Enterprises"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20ba59] hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-white/80"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
      </a>
    </div>
  );
}
