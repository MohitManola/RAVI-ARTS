import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Quote, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";
import { GoogleIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Client Testimonials & Google Reviews | Ravi Arts Enterprises",
  description:
    "Read 100% genuine Google reviews and client feedback for Ravi Arts Enterprises in Kasna, Greater Noida. 4.9-star rated printing, 3D acrylic letters, and LED signage manufacturer.",
};

export default function TestimonialsPage() {
  const reviews = [
    {
      id: 1,
      author: "Rahul Verma",
      role: "Business Owner, Kasna",
      avatarBg: "bg-blue-600 text-white",
      quote:
        "Ravi Arts Enterprises has always delivered excellent quality and on-time service. We got our showroom LED glow sign board and 5,000 visiting cards printed from them. Colors are vibrant and finishing is top-notch. Highly recommended for all printing and signage needs in Greater Noida!",
      service: "Glow Sign Boards & Stationery",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      ownerResponse:
        "Thank you so much Rahul ji! It was our pleasure fabricating your showroom signage. Looking forward to supporting your business with future print runs.",
    },
    {
      id: 2,
      author: "Amit Sharma",
      role: "Retail Director, Alpha 1 Greater Noida",
      avatarBg: "bg-emerald-600 text-white",
      quote:
        "The 3D acrylic LED sign board they designed and installed for our commercial showroom exceeded our expectations! Flawless laser cut finishing, bright waterproof LEDs, and mounted safely right on time before our grand opening day.",
      service: "3D Acrylic LED Signage",
      rating: 5,
      date: "1 month ago",
      verified: true,
      ownerResponse:
        "Thank you Amit ji for trusting Ravi Arts Enterprises with your flagship store signage. We take immense pride in our CNC precision.",
    },
    {
      id: 3,
      author: "Priya Gupta",
      role: "Marketing Manager, Ecotech Noida",
      avatarBg: "bg-purple-600 text-white",
      quote:
        "Superb flex banners, roll-up standees, and executive visiting cards with crisp colors and fast delivery. Ravi Arts is our go-to print partner for all corporate events and trade exhibitions at India Expo Mart.",
      service: "Flex Banners & Corporate Cards",
      rating: 5,
      date: "2 months ago",
      verified: true,
      ownerResponse:
        "Thank you Priya ji! Our team is always ready to support rapid exhibition and trade show timelines with flawless print quality.",
    },
    {
      id: 4,
      author: "Vikas Nagar",
      role: "Plant Operations, Surajpur Industrial Area",
      avatarBg: "bg-amber-600 text-white",
      quote:
        "We ordered 5,000 industrial product catalogues and warehouse safety signage. The paper weight, perfect binding, and color reproduction were spot on. Direct factory wholesale pricing with zero middlemen.",
      service: "Catalogues & Industrial Signage",
      rating: 5,
      date: "3 months ago",
      verified: true,
      ownerResponse:
        "We truly appreciate your partnership Vikas ji. Ensuring industrial-grade durability and razor-sharp catalogue prints is our top priority.",
    },
    {
      id: 5,
      author: "Neha Singhal",
      role: "Founder, Pari Chowk Boutique",
      avatarBg: "bg-rose-600 text-white",
      quote:
        "Loved the custom frosted vinyl branding on our glass storefront. It gives privacy while looking extremely chic and modern. Their installation team came to our shop on time and applied it with zero bubbles.",
      service: "Frosted Glass Vinyl Branding",
      rating: 5,
      date: "4 months ago",
      verified: true,
      ownerResponse:
        "Thank you Neha ji! Our bubble-free vinyl application team always ensures flawless glass finishes.",
    },
    {
      id: 6,
      author: "Sanjay Bhati",
      role: "Event Organizer, Greater Noida West",
      avatarBg: "bg-sky-600 text-white",
      quote:
        "Needed emergency roll-up standees and stage backdrops printed overnight for a corporate summit. They stayed late at their Kasna factory, printed flawless high-res graphics, and delivered first thing in the morning. Truly dependable!",
      service: "Emergency Large Format Printing",
      rating: 5,
      date: "5 months ago",
      verified: true,
      ownerResponse:
        "Thank you Sanjay ji! Our in-house machinery allows us to handle same-day emergency runs with zero compromise on quality.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ravi Arts Enterprises",
    image: "https://raviartsenterprises.com/images/logo_1.png",
    telephone: "+91-9350036399",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Republic Honda, Opp. HDFC Bank, Main Road Kasna",
      addressLocality: "Greater Noida",
      addressRegion: "UP",
      postalCode: "201310",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                We take immense pride in helping businesses make an impression. Read genuine Google
                reviews and verified client testimonials from corporate leaders and shop owners
                across Kasna and Greater Noida.
              </p>
            </div>
          </div>
        </section>

        {/* Google Reviews Live Rating Badge Bar */}
        <section className="bg-white py-8 border-b border-sky-100 shadow-2xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-[#eff7ff] border border-sky-200/80 p-6 sm:p-8">
              {/* Left: Google Brand & Score */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md p-3 ring-1 ring-slate-200 shrink-0">
                  <GoogleIcon className="h-10 w-10" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">4.9</span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    Verified Google Business Rating • Kasna, Greater Noida
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Based on 48+ verified reviews from local retail &amp; industrial clients
                  </p>
                </div>
              </div>

              {/* Right: Write Review & View on Maps CTA */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-300 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs hover:border-slate-400 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title="View Kasna location on Google Maps"
                >
                  <GoogleIcon className="h-4 w-4" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title="Write a Google Review for Ravi Arts Enterprises"
                >
                  <span>Review Us on Google</span>
                  <ArrowRight className="h-4 w-4 text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 sm:py-20 bg-[#eff7ff]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                REAL CLIENT EXPERIENCES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Verified Customer Reviews
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Genuine feedback from businesses across Greater Noida and Uttar Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="flex flex-col justify-between rounded-3xl bg-white border border-sky-100 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-300 transition-all space-y-4"
                >
                  <div>
                    {/* Header: Author + Google Logo */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${rev.avatarBg}`}
                        >
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-slate-900 text-sm leading-tight">
                              {rev.author}
                            </h3>
                            {rev.verified && (
                              <span
                                title="Verified Google Review"
                                className="inline-flex items-center text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold"
                              >
                                ✓
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-tight">{rev.role}</p>
                        </div>
                      </div>

                      {/* Google G Icon Badge */}
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80"
                        title="Google Review"
                      >
                        <GoogleIcon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Stars & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      &ldquo;{rev.quote}&rdquo;
                    </p>

                    {/* Service Tag */}
                    <div className="mt-3">
                      <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700 border border-sky-100">
                        {rev.service}
                      </span>
                    </div>
                  </div>

                  {/* Owner Response Box */}
                  {rev.ownerResponse && (
                    <div className="rounded-2xl bg-slate-50 border border-slate-200/70 p-3.5 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                        <MessageSquare className="h-3 w-3 text-sky-600" />
                        <span>Response from Ravi Arts Enterprises</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        {rev.ownerResponse}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="text-center pt-6">
              <a
                href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 transition-all cursor-pointer"
              >
                <GoogleIcon className="h-4 w-4" />
                <span>Read More Google Reviews on Maps</span>
                <ArrowRight className="h-4 w-4 text-sky-400" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
