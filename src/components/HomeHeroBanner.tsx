"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  PenTool,
  Truck,
  Building2,
  Pause,
  Play,
} from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  primaryCtaText: string;
  quoteService?: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/HomeHeroBanner.webp",
    alt: "Ravi Arts Enterprises - Print That Makes Your Design Stand Out",
    primaryCtaText: "Request a Quote",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
  },
  {
    id: 2,
    image: "/images/HomeHeroBanner.webp",
    alt: "Ravi Arts Enterprises - 3D Acrylic Letters & LED Glow Sign Boards",
    primaryCtaText: "Get Signage Quote",
    quoteService: "Sign Boards & Signage",
    secondaryCtaText: "View Our Work",
    secondaryCtaLink: "/portfolio",
  },
  {
    id: 3,
    image: "/images/HomeHeroBanner.webp",
    alt: "Ravi Arts Enterprises - Industrial Flex, Vinyl & Large Format Press",
    primaryCtaText: "Get Flex Quote",
    quoteService: "Flex & Large Format Printing",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
  },
];

export default function HomeHeroBanner() {
  const { openQuoteModal } = useQuote();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality (5.5 seconds interval)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe handlers for mobile devices
  const minSwipeDistance = 50;

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <section
      className="relative w-full bg-white select-none overflow-hidden"
      aria-label="Home Hero Banner Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Accessible semantic heading for SEO & screen readers */}
      <h1 className="sr-only">
        Ravi Arts Enterprises - Print That Makes Your Design Stand Out | Printing, Signage &amp; Graphic Solutions in Kasna, Greater Noida
      </h1>

      {/* Main Full-Width Slider Track (Edge-to-Edge with no border, perfectly touching left and right) */}
      <div className="relative w-full overflow-hidden bg-white">
        
        {/* Slides Carousel Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              style={{ width: `${100 / totalSlides}%` }}
              className="relative shrink-0 w-full aspect-[16/8] sm:aspect-[16/6.5] md:aspect-[1920/550] overflow-hidden bg-white"
            >
              {/* Full-bleed Banner Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-left md:object-center select-none"
                sizes="100vw"
                quality={95}
              />

              {/* Action Buttons directly in the clean white area under "Stand Out" */}
              <div className="absolute left-[5%] md:left-[6.2%] top-[54%] md:top-[56%] z-10 flex items-center gap-2 sm:gap-3.5">
                <button
                  type="button"
                  onClick={() => openQuoteModal(slide.quoteService)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-sky-600 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-600/30 hover:bg-sky-500 hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>

                <Link
                  href={slide.secondaryCtaLink}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm hover:bg-white hover:border-slate-400 hover:scale-105 active:scale-95 transition-all"
                >
                  {slide.secondaryCtaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous banner slide"
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 backdrop-blur-md shadow-lg border border-slate-200/80 hover:bg-white hover:text-sky-600 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next banner slide"
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 backdrop-blur-md shadow-lg border border-slate-200/80 hover:bg-white hover:text-sky-600 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Top-Right Badge: Slide Counter & Autoplay toggle */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-6 md:right-8 z-20 flex items-center gap-2 rounded-full bg-slate-900/75 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white border border-white/20 shadow-md">
          <span className="text-sky-300 font-mono font-bold">0{currentIndex + 1}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-300 font-mono">0{totalSlides}</span>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Play slider" : "Pause slider"}
            className="ml-1 text-slate-300 hover:text-white transition-colors"
          >
            {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          </button>
        </div>

        {/* Clean Minimal Dots Pagination (No text, sleek indicators) */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 sm:w-10 bg-sky-600 shadow-md shadow-sky-600/40"
                    : "w-2 sm:w-2.5 bg-slate-300/80 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Feature Strip below Hero Banner */}
      <div className="border-y border-slate-200/80 bg-slate-50/70 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Quality Printing</h4>
                <p className="text-[11px] text-slate-500 hidden sm:block">Sharp, Vibrant &amp; Lasting</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <PenTool className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Custom Design</h4>
                <p className="text-[11px] text-slate-500 hidden sm:block">Your Vision, Our Creativity</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Reliable Delivery</h4>
                <p className="text-[11px] text-slate-500 hidden sm:block">On Time, Every Time</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Kasna Workshop</h4>
                <p className="text-[11px] text-slate-500 hidden sm:block">Direct In-House Factory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
