import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Quote, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Ravi Arts Enterprises",
  description:
    "Read genuine reviews and feedback from business owners and corporate clients who rely on Ravi Arts Enterprises for printing and signage in Kasna, Greater Noida.",
};

export default function TestimonialsPage() {
  const reviews = [
    {
      id: 1,
      author: "Rahul Verma",
      role: "Business Owner, Kasna",
      quote:
        "Ravi Arts Enterprises has always delivered excellent quality and on-time service. Their team is professional, creative and very supportive. Highly recommended for all printing and signage needs across Greater Noida!",
      service: "Glow Sign Boards & Stationery",
      rating: 5,
      date: "October 2026",
    },
    {
      id: 2,
      author: "Amit Sharma",
      role: "Retail Director, Alpha 1 Greater Noida",
      quote:
        "The 3D acrylic LED sign board they designed and installed for our showroom exceeded our expectations! Flawless finishing, vibrant illumination, and completed well before our grand opening day.",
      service: "3D Acrylic LED Signage",
      rating: 5,
      date: "September 2026",
    },
    {
      id: 3,
      author: "Priya Gupta",
      role: "Marketing Manager, Ecotech Noida",
      quote:
        "Superb flex banners and visiting cards with crisp colors and fast delivery. Ravi Arts is our go-to print partner for all corporate events and exhibitions at India Expo Mart.",
      service: "Flex Banners & Corporate Cards",
      rating: 5,
      date: "August 2026",
    },
    {
      id: 4,
      author: "Vikas Nagar",
      role: "Store Manager, Surajpur Industrial Area",
      quote:
        "We ordered 5,000 product catalogues and warehouse safety signage. The paper quality, binding, and color reproduction were spot on. Will definitely continue ordering from them.",
      service: "Catalogues & Industrial Signage",
      rating: 5,
      date: "July 2026",
    },
    {
      id: 5,
      author: "Neha Singhal",
      role: "Founder, Pari Chowk Boutique",
      quote:
        "Loved the custom frosted vinyl branding on our glass storefront. It gives privacy while looking extremely chic and modern. Their installation team was polite and efficient.",
      service: "Frosted Glass Vinyl Branding",
      rating: 5,
      date: "June 2026",
    },
    {
      id: 6,
      author: "Sanjay Bhati",
      role: "Event Organizer, Greater Noida West",
      quote:
        "Needed emergency roll-up standees and stage backdrops printed overnight. They stayed late, printed flawless high-res graphics, and delivered first thing in the morning. Truly dependable!",
      service: "Emergency Large Format Printing",
      rating: 5,
      date: "May 2026",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-center">
        {/* Full Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonials_top.png"
            alt="What Our Clients Say - Ravi Arts Enterprises Reviews"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right select-none"
            quality={95}
          />
          {/* Subtle gradient to ensure flawless text contrast on all devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <div className="max-w-xl md:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                TESTED &amp; TRUSTED
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
              We take immense pride in helping businesses make an impression.
              Read stories and testimonials from corporate leaders and shop owners across Kasna and Greater Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Ratings Overview Card */}
      <section className="bg-[#eff7ff] py-12 border-b border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-sky-100 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div>
                <div className="text-5xl font-black text-slate-900">4.9 / 5.0</div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Based on 40k+ projects completed in Greater Noida
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l md:border-r border-slate-100 py-4 md:py-0 md:px-8 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>100% Genuine Kasna &amp; Greater Noida Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Premium Long-Life Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>On-Time Delivery Guarantee</span>
                </div>
              </div>

              <div className="text-center md:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-colors"
                >
                  <span>Experience the Quality</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24 bg-[#eff7ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-sky-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-sky-500/20 bg-sky-100 flex items-center justify-center font-bold text-sky-700 text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{rev.author}</h3>
                      <p className="text-xs text-slate-500">{rev.role}</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-200">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
