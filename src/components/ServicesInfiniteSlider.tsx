"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
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
  kicker?: string;
  title?: React.ReactNode;
  viewAllLink?: string;
  viewAllText?: string;
}

export default function ServicesInfiniteSlider({
  services,
  kicker = "OUR SERVICES",
  title = (
    <>
      Everything You Need, Under{" "}
      <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
        One Roof.
      </span>
    </>
  ),
  viewAllLink = "/services",
  viewAllText = "View All Services",
}: ServicesInfiniteSliderProps) {
  const { openQuoteModal } = useQuote();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [stepWidth, setStepWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  // Update visible items count and measure card step width (card width + 16px gap)
  const updateLayout = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    let visible = 5;
    if (width < 640) visible = 1;
    else if (width < 768) visible = 2;
    else if (width < 1024) visible = 3;
    else if (width < 1280) visible = 4;
    else visible = 5;

    setItemsPerView(visible);

    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstChild = trackRef.current.children[0] as HTMLElement;
      if (firstChild && firstChild.offsetWidth > 0) {
        setStepWidth(firstChild.offsetWidth + 16);
      }
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  // Observe element resizing directly for instant accuracy
  useEffect(() => {
    if (!trackRef.current) return;
    const observer = new ResizeObserver(() => {
      updateLayout();
    });
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [updateLayout]);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  // Bound index on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Manual < and > navigation controls (NO auto-slider)
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch Swipe Support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
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
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Section Header: Title on Left, View All Services & Navigation Arrows on Right */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              {kicker}
            </span>
            <span className="cmyk-gradient-bar" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-end">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group mr-1"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Navigation Arrow Controls (< and >) */}
          <div className="flex items-center gap-1.5">
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
        </div>
      </div>

      {/* Overflow Clipping Window */}
      <div className="overflow-hidden w-full pb-2 pt-1">
        {/* Track with 5 cards shown at a time on desktop */}
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: stepWidth && currentIndex > 0 ? `translateX(-${currentIndex * stepWidth}px)` : undefined,
          }}
        >
          {services.map((svc, idx) => (
            <div
              key={`${svc.title}-${idx}`}
              className="w-[280px] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)] xl:w-[calc((100%-64px)/5)] shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group"
            >
              <div>
                {/* Thumbnail (clean without overlay text badge) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
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
