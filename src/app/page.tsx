"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  PenTool,
  Truck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Award,
  Zap,
  Users,
  Headphones,
  CheckCircle2,
  Settings,
  Maximize2,
  Clock,
  Star,
  FolderCheck,
  Sparkles,
} from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import WhyChooseSliders from "@/components/WhyChooseSliders";
import HomeHeroBanner from "@/components/HomeHeroBanner";
import ServicesInfiniteSlider from "@/components/ServicesInfiniteSlider";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyChooseValuesSection from "@/components/WhyChooseValuesSection";
import TrustedClientsSlider from "@/components/TrustedClientsSlider";
import WorkProcessSection from "@/components/WorkProcessSection";

export default function HomePage() {
  const { openQuoteModal } = useQuote();

  // Testimonials state for slider
  const testimonials = [
    {
      id: 1,
      quote:
        "Ravi Arts Enterprises has always delivered excellent quality and on-time service. Their team is professional, creative and very supportive. Highly recommended for all printing and signage needs!",
      author: "Rahul Verma",
      role: "Business Owner, Kasna",
      avatar: "/images/testimonial-rahul.webp",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The 3D acrylic LED sign board they designed and installed for our Greater Noida showroom exceeded our expectations! Flawless finishing and outstanding brightness.",
      author: "Amit Sharma",
      role: "Retail Director, Alpha 1 Greater Noida",
      avatar: "/images/testimonial-rahul.webp",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Superb flex banners and visiting cards with crisp colors and fast delivery. Ravi Arts is our go-to print partner for all corporate events.",
      author: "Priya Gupta",
      role: "Marketing Manager, Ecotech Noida",
      avatar: "/images/testimonial-rahul.webp",
      rating: 5,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Service Cards Data
  const services = [
    {
      title: "Flex & Large Format Printing",
      category: "PRINTING",
      desc: "Banners, flex, vinyl & hoardings.",
      image: "/images/service-flex-banner.webp",
      link: "/services#flex-printing",
    },
    {
      title: "Sign Boards & Signage",
      category: "SIGNAGE",
      desc: "Glow sign, acrylic, LED & more.",
      image: "/images/service-sign-boards.webp",
      link: "/services#sign-boards",
    },
    {
      title: "Visiting Cards & Stationery",
      category: "PRINTING",
      desc: "Cards, letterheads, envelopes & more.",
      image: "/images/service-visiting-cards.webp",
      link: "/services#stationery",
    },
    {
      title: "Offset & Digital Printing",
      category: "PRINTING",
      desc: "Brochures, flyers, catalogues & more.",
      image: "/images/service-offset-printing.webp",
      link: "/services#offset-printing",
    },
    {
      title: "Acrylic / 3D Letter Boards",
      category: "SIGNAGE",
      desc: "Indoor & outdoor branding solutions.",
      image: "/images/service-acrylic-letters.webp",
      link: "/services#acrylic-letters",
    },
    {
      title: "Eco-Solvent & Vinyl Printing",
      category: "PRINTING",
      desc: "Stickers, vehicle wraps, vinyl prints & more.",
      image: "/images/service-vinyl-printing.webp",
      link: "/services#vinyl-printing",
    },
    {
      title: "Branding & Graphic Design",
      category: "DESIGN",
      desc: "Logos, social media, packaging & more.",
      image: "/images/service-branding-design.webp",
      link: "/services#graphic-design",
    },
  ];

  // Portfolio items
  const portfolio = [
    {
      title: "Acrylic Sign Board",
      category: "SIGNAGE",
      image: "/images/portfolio-acrylic-sign.webp",
    },
    {
      title: "Brochure Design & Print",
      category: "PRINTING",
      image: "/images/portfolio-brochure.webp",
    },
    {
      title: "Glow Sign Board",
      category: "SIGNAGE",
      image: "/images/portfolio-glow-sign.webp",
    },
    {
      title: "T-Shirt Printing",
      category: "APPAREL",
      image: "/images/portfolio-tshirt.webp",
    },
    {
      title: "Visiting Cards",
      category: "PRINTING",
      image: "/images/portfolio-cards.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO BANNER SLIDER (HomeHeroBanner 3x Slider)
         ========================================================================= */}
      <HomeHeroBanner />

      {/* =========================================================================
          SECTION 2: OUR SERVICES (Directly matching Image 2 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  OUR SERVICES
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
                Everything You Need, Under One Roof.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Infinite Services Slider (5 per row on desktop) */}
          <ServicesInfiniteSlider services={services} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE RAVI ARTS? DUAL DIRECTION SLIDERS
         ========================================================================= */}
      <WhyChooseSliders />

      {/* =========================================================================
          SECTION 4: ABOUT SECTION (Directly matching Image 1 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  ABOUT RAVI ARTS ENTERPRISES
                </span>
                <span className="cmyk-gradient-bar" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Turning Your Ideas into{" "}
                <span className="gradient-text-impressions font-black">
                  Impressions
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Ravi Arts Enterprises is a Kasna, Greater Noida based printing
                and signage company committed to delivering high-quality,
                innovative and cost-effective solutions. With years of
                experience, we help businesses build a strong identity through
                creative design and professional printing services.
              </p>

              {/* 4 Feature Badges 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Quality Assurance
                    </h4>
                    <p className="text-xs text-slate-500">
                      Premium materials &amp; perfect finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      On-Time Delivery
                    </h4>
                    <p className="text-xs text-slate-500">
                      Because your time matters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Experienced Team
                    </h4>
                    <p className="text-xs text-slate-500">
                      Skilled professionals at your service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Dedicated Support
                    </h4>
                    <p className="text-xs text-slate-500">
                      Always here to help you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all active:scale-95"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual with building photo and script accent */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Yellow and Pink graphic decor elements matching Image 1 */}
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-xl bg-amber-400 -z-10" />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-xl bg-rose-500 -z-10" />

                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src="/images/about-building.webp"
                      alt="Ravi Arts Enterprises Building & Signboard"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Script commitment tag */}
                <div className="absolute -bottom-6 left-6 rounded-xl bg-white/95 backdrop-blur-sm px-4 py-2.5 shadow-lg border border-slate-100">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Our Promise
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 italic">
                    Your Vision, Our Commitment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR MISSION & OUR VISION (Matching Mockup)
         ========================================================================= */}
      <MissionVisionSection />

      {/* =========================================================================
          SECTION 5: WHY CHOOSE RAVI ARTS ENTERPRISES? (5 Core Values Matching Mockup)
         ========================================================================= */}
      <WhyChooseValuesSection />

      {/* =========================================================================
          SECTION 6: TRUSTED BY BUSINESSES ACROSS INDUSTRIES (Clients Logo Slider)
         ========================================================================= */}
      <TrustedClientsSlider />

      {/* =========================================================================
          SECTION 7: FROM IDEA TO IMPACT - OUR WORK PROCESS (Matching Mockup)
         ========================================================================= */}
      <WorkProcessSection />

      {/* =========================================================================
          SECTION 5: OUR PORTFOLIO / RECENT WORK (Matching Image 1 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  OUR PORTFOLIO
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Recent <span className="gradient-text-work">Work</span>
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                A glimpse of some of the projects we&apos;ve delivered for our happy clients.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
              >
                View Full Portfolio →
              </Link>
            </div>
          </div>

          {/* Portfolio Carousel / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 rounded-md bg-slate-900/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </div>
                </div>
                <div className="p-3.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title)}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 hover:text-sky-700"
                  >
                    <span>Order Similar</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TESTIMONIALS & STATS (Matching Image 1 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side: Testimonials */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                    CLIENT TESTIMONIALS
                  </span>
                  <span className="cmyk-gradient-bar" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  What Our Clients <span className="text-sky-600">Say</span>
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Trusted by businesses, brands and individuals across Kasna, Greater Noida and beyond.
                </p>
              </div>

              {/* Single Active Testimonial Card */}
              <div className="relative rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 transition-all">
                {/* Large Decorative Quote Icon */}
                <div className="text-sky-500 font-serif text-5xl leading-none select-none mb-2">
                  “
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  {testimonials[currentTestimonialIndex].quote}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/60 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-sky-500/30">
                      <Image
                        src={testimonials[currentTestimonialIndex].avatar}
                        alt={testimonials[currentTestimonialIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {testimonials[currentTestimonialIndex].author}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonials[currentTestimonialIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentTestimonialIndex
                          ? "w-8 bg-sky-600"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Stats */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">500+</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <FolderCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">1000+</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">3+</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
