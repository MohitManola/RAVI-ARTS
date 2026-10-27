"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export interface ServiceItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

interface ServicesInfiniteSliderProps {
  services: ServiceItem[];
}

export default function ServicesInfiniteSlider({ services }: ServicesInfiniteSliderProps) {
  const { openQuoteModal } = useQuote();

  // Create 3 sets of the services array for seamless infinite looping
  const extendedServices = [...services, ...services, ...services];
  const totalOriginal = services.length;
  const initialIndex = totalOriginal; // Start at the beginning of the middle set (index 7)

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Measure card width + gap accurately from the DOM
  const measureStep = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstChild = trackRef.current.children[0] as HTMLElement;
      if (firstChild) {
        const gap = 16; // 16px (gap-4)
        setStepWidth(firstChild.offsetWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  // Handle seamless infinite wrap when crossing boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      // Reached the third set -> seamlessly jump back to the identical item in the middle set
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      // Reached before middle set -> seamlessly jump forward to identical item in the middle set
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + totalOriginal);
    }
  };

  // Re-enable smooth transition after silent jump
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

  // Autoplay functionality (slides every 3.5 seconds)
  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, 3500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, handleNext]);

  // Touch Swipe Support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Navigation Arrow Controls */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous service"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next service"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Overflow Clipping Window */}
      <div className="overflow-hidden w-full pb-2 pt-1">
        {/* Continuous Track */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-4 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: stepWidth ? `translateX(-${currentIndex * stepWidth}px)` : undefined,
          }}
        >
          {extendedServices.map((svc, idx) => (
            <div
              key={`${svc.title}-${idx}`}
              className="w-[280px] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)] xl:w-[calc((100%-64px)/5)] shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-sky-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-300 group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-md bg-slate-900/85 backdrop-blur-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                    {svc.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-3.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 group-hover:text-sky-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="border-t border-slate-100 p-3 pt-2.5 flex items-center justify-between bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => openQuoteModal(svc.title)}
                  className="text-[11px] font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                >
                  Quick Quote
                </button>
                <button
                  type="button"
                  onClick={() => openQuoteModal(svc.title)}
                  aria-label={`Get quote for ${svc.title}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white transition-all duration-300 shadow-xs"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
