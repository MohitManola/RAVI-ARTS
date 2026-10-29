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
import HomeHeroBanner from "@/components/HomeHeroBanner";
import ServicesInfiniteSlider from "@/components/ServicesInfiniteSlider";
import MissionVisionSection from "@/components/MissionVisionSection";
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

  // Service Cards Data (Using new high-res images from /images/services)
  const services = [
    {
      title: "Flex & Large Format Printing",
      category: "PRINTING",
      desc: "Banners, flex, vinyl & hoardings.",
      image: "/images/services/flex&LargeFormatePrinting.PNG",
      link: "/services#flex-printing",
    },
    {
      title: "Sign Boards & Signage",
      category: "SIGNAGE",
      desc: "Glow sign, acrylic, LED & more.",
      image: "/images/services/SignBoards&Signage.PNG",
      link: "/services#sign-boards",
    },
    {
      title: "Visiting Cards & Stationery",
      category: "PRINTING",
      desc: "Cards, letterheads, envelopes & more.",
      image: "/images/services/VisitingCards&BusinessStationary.PNG",
      link: "/services#stationery",
    },
    {
      title: "Offset & Digital Printing",
      category: "PRINTING",
      desc: "Brochures, flyers, catalogues & more.",
      image: "/images/services/Offset&DigitalPrinting.PNG",
      link: "/services#offset-printing",
    },
    {
      title: "Acrylic / 3D Letter Boards",
      category: "SIGNAGE",
      desc: "Indoor & outdoor branding solutions.",
      image: "/images/services/Acrylic&3dLetterBoards.PNG",
      link: "/services#acrylic-letters",
    },
    {
      title: "Eco-Solvent & Vinyl Printing",
      category: "PRINTING",
      desc: "Stickers, vehicle wraps, vinyl prints & more.",
      image: "/images/services/Eco-Solvent&VinalPrinting.PNG",
      link: "/services#vinyl-printing",
    },
    {
      title: "Branding & Graphic Design",
      category: "DESIGN",
      desc: "Logos, social media, packaging & more.",
      image: "/images/services/branding&GraphicDesign.PNG",
      link: "/services#graphic-design",
    },
    {
      title: "Corporate Gifts & Promotional Products",
      category: "GIFTS",
      desc: "Custom mugs, t-shirts, pens & corporate hampers.",
      image: "/images/services/CorporateGifts&PromotionalProducts.PNG",
      link: "/services#corporate-gifts",
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
          SECTION 1: HERO BANNER (HomeHeroBanner Single Image)
         ========================================================================= */}
      <HomeHeroBanner />

      {/* =========================================================================
          SECTION 2: OUR SERVICES (Directly matching Image 2 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Infinite Services Slider with integrated top header, View All link & navigation controls */}
          <ServicesInfiniteSlider services={services} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ABOUT SECTION (Directly matching Image 1 mockup)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-sky-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                    ABOUT RAVI ARTS ENTERPRISES
                  </span>
                  <span className="cmyk-gradient-bar" />
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                  Turning Your Ideas into{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent font-black">
                    Impressions
                  </span>
                </h2>

                <div className="mt-2 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  <p>
                    <strong className="text-slate-900 font-bold">Ravi Arts Enterprises</strong> is a trusted printing and signage company in Kasna, Greater Noida, established in 2005. With over 20 years of experience, we provide high-quality, cost-effective solutions for businesses of all sizes.
                  </p>
                  <p>
                    Our reliable service, quality workmanship and attention to detail help your brand get noticed. We believe in delivering practical, creative work that meets your needs and helps your business stand out.
                  </p>
                </div>
              </div>

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

            {/* Right Visual with Official Ravi Arts Logo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Yellow and Pink graphic decor accents matching branding */}
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-amber-400/90 -z-10" />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-2xl bg-rose-500/90 -z-10" />

                <div className="group overflow-hidden rounded-3xl bg-white hover:bg-slate-950 border border-sky-100 hover:border-slate-800 p-8 sm:p-10 shadow-2xl transition-all duration-500 flex flex-col items-center justify-center cursor-pointer">
                  <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[300px] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/images/logo_1.png"
                      alt="Ravi Arts Enterprises Official Logo"
                      fill
                      className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                      priority
                    />
                    <Image
                      src="/images/logo_2.png"
                      alt="Ravi Arts Enterprises Official Logo Hover"
                      fill
                      className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      priority
                    />
                  </div>
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
      <section className="py-16 sm:py-24 bg-white border-t border-sky-100/60">
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
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Recent Work
                </span>
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
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
      <section className="py-16 sm:py-24 bg-[#eff7ff] border-t border-sky-100">
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
                  What Our{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                    Clients Say
                  </span>
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Trusted by businesses, brands and individuals across Kasna, Greater Noida and beyond.
                </p>
              </div>

              {/* Single Active Testimonial Card */}
              <div className="relative rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-sm transition-all">
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
              <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">25k+</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <FolderCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">40k+</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">20+</div>
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
