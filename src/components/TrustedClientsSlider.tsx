"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  {
    id: "byjus",
    name: "BYJU'S",
    renderLogo: () => (
      <div className="flex items-center gap-2 font-black text-lg tracking-tight select-none">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#813588] text-white font-extrabold text-sm shadow-xs">
          B
        </span>
        <span className="text-[#813588] text-lg font-black tracking-wide">
          BYJU&apos;S
        </span>
      </div>
    ),
  },
  {
    id: "hdfc",
    name: "HDFC BANK",
    renderLogo: () => (
      <div className="flex items-center gap-2 select-none">
        <div className="grid grid-cols-2 grid-rows-2 h-6 w-6 p-0.5 bg-[#004c8f] rounded-xs shadow-xs">
          <div className="bg-[#ed232a]" />
          <div className="bg-white" />
          <div className="bg-white" />
          <div className="bg-[#ed232a]" />
        </div>
        <span className="text-[#004c8f] font-extrabold text-sm tracking-wider uppercase">
          HDFC BANK
        </span>
      </div>
    ),
  },
  {
    id: "tata",
    name: "TATA",
    renderLogo: () => (
      <div className="flex flex-col items-center select-none">
        <svg viewBox="0 0 100 40" className="h-6 w-auto fill-[#005a9c]">
          <circle cx="50" cy="18" r="16" fill="none" stroke="#005a9c" strokeWidth="2.5" />
          <path d="M43 14h14M50 14v10" stroke="#005a9c" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="text-[#005a9c] font-black text-xs tracking-[0.25em] uppercase">
          TATA
        </span>
      </div>
    ),
  },
  {
    id: "amul",
    name: "Amul",
    renderLogo: () => (
      <div className="flex flex-col items-center select-none">
        <span className="text-[#e21b23] font-serif font-black text-2xl italic tracking-tight">
          Amul
        </span>
        <span className="text-[#e21b23] text-[8px] font-bold tracking-widest uppercase -mt-1">
          The Taste of India
        </span>
      </div>
    ),
  },
  {
    id: "reliance",
    name: "Reliance Industries",
    renderLogo: () => (
      <div className="flex flex-col items-center select-none text-center">
        <span className="text-[#002f6c] font-serif font-black text-base tracking-tight leading-tight">
          Reliance
        </span>
        <span className="text-[#002f6c] text-[8px] font-semibold tracking-wider uppercase text-slate-500">
          Industries Limited
        </span>
      </div>
    ),
  },
  {
    id: "asianpaints",
    name: "Asian Paints",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 select-none">
        <div className="flex items-baseline font-black text-xl leading-none">
          <span className="text-[#e31e24]">a</span>
          <span className="text-[#f7941d]">p</span>
        </div>
        <span className="text-[#e31e24] font-bold text-xs tracking-tight lowercase">
          asianpaints
        </span>
      </div>
    ),
  },
];

export default function TrustedClientsSlider() {
  const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const total = clientLogos.length;

  const [currentIndex, setCurrentIndex] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const measureStep = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const card = trackRef.current.children[0] as HTMLElement;
      if (card) {
        const gap = 16;
        setStepWidth(card.offsetWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  const handleTransitionEnd = () => {
    if (currentIndex >= total * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - total);
    } else if (currentIndex < total) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + total);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, handleNext]);

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-sky-100/60 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              OUR CLIENTS
            </span>
            <span className="cmyk-gradient-bar" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Businesses Across Industries
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every business has a different story to tell. We work with clients to understand
            their requirements and create visual solutions that suit their brand.
          </p>
        </div>

        {/* Carousel with Navigation Arrows on Left and Right */}
        <div
          className="relative px-8 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous client"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:bg-slate-50 hover:text-sky-600 transition-all active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next client"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:bg-slate-50 hover:text-sky-600 transition-all active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slider Viewport Window */}
          <div className="overflow-hidden w-full py-2">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-4 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: stepWidth ? `translateX(-${currentIndex * stepWidth}px)` : undefined,
              }}
            >
              {extendedLogos.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="w-[calc((100%-16px)/2)] sm:w-[calc((100%-32px)/3)] md:w-[calc((100%-48px)/4)] lg:w-[calc((100%-80px)/6)] shrink-0 h-24 sm:h-28 rounded-2xl bg-[#f8fbff] border border-sky-100/90 shadow-xs hover:bg-white hover:shadow-md hover:border-sky-300 flex items-center justify-center p-4 transition-all duration-300 group"
                >
                  <div className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    {client.renderLogo()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
