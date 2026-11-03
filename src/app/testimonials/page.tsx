"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  ThumbsUp,
  Share2,
  Camera,
  Award,
  MapPin,
  Check,
} from "lucide-react";
import { GoogleIcon } from "@/components/SocialIcons";

export default function TestimonialsPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [likedReviews, setLikedReviews] = useState<Record<number, boolean>>({});

  const handleLike = (id: number) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = async (id: number, author: string, quote: string) => {
    const shareText = `"${quote}" - Google Review by ${author} for Ravi Arts Enterprises, Kasna Greater Noida`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ravi Arts Enterprises - Google Review",
          text: shareText,
          url: "https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw",
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(
        `${shareText}\nhttps://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw`
      );
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Original Google Reviews from Google Maps
  const reviews = [
    {
      id: 1,
      author: "Harshikha Tiwari",
      badge: "3 reviews",
      avatarBg: "bg-purple-600 text-white",
      quote: "Best printing services in greater noida",
      service: "Printing Services",
      rating: 5,
      date: "4 months ago",
      verified: true,
      ownerResponse:
        "Thank you so much Harshikha ji for your kind words! We are glad you loved our printing services and quality.",
    },
    {
      id: 2,
      author: "Sunil Rajak",
      badge: "1 review",
      avatarBg: "bg-blue-600 text-white",
      quote: "Best printing & signage services",
      service: "Printing & Signage",
      rating: 5,
      date: "4 months ago",
      verified: true,
      ownerResponse:
        "Thank you Sunil ji! We appreciate your trust in Ravi Arts Enterprises for both printing and signage.",
    },
    {
      id: 3,
      author: "Sunil Rajak",
      badge: "1 review",
      avatarBg: "bg-sky-600 text-white",
      quote: "Good signage services in greater noida",
      service: "Signage Services",
      rating: 5,
      date: "4 months ago",
      verified: true,
      ownerResponse:
        "Thank you for the wonderful feedback Sunil ji. Delivering top-tier signage across Greater Noida is our constant mission.",
    },
    {
      id: 4,
      author: "Manoj Kumar",
      badge: "1 review",
      avatarBg: "bg-emerald-600 text-white",
      quote: "Best work in greater noida",
      service: "Printing & Signage Work",
      rating: 5,
      date: "3 months ago",
      verified: true,
      ownerResponse:
        "Thank you Manoj ji! We always strive to provide the best work and service across Greater Noida.",
    },
    {
      id: 5,
      author: "Jyoti Enterprises",
      badge: "2 reviews",
      avatarBg: "bg-amber-600 text-white",
      quote:
        "A good place for signage works and art\nAnd the owner is so good well behavior..",
      service: "Signage Works & Art",
      rating: 5,
      date: "7 years ago",
      verified: true,
      ownerResponse:
        "Thank you so much Jyoti Enterprises! We have cherished working with you for over 7 years. Humble behavior, transparent dealing and top quality remain our core values.",
    },
    {
      id: 6,
      author: "Ved Sharma",
      badge: "7 photos",
      hasPhotos: true,
      photoCount: 7,
      avatarBg: "bg-rose-600 text-white",
      quote:
        "★★★★★ (Shared 7 photos of finished signage & printing works in Greater Noida). Superb finishing and reliable service.",
      service: "Signage & Print Portfolio",
      rating: 5,
      date: "4 months ago",
      verified: true,
      ownerResponse:
        "Thank you Ved ji for sharing photos of the work and leaving us a 5-star Google review!",
    },
    {
      id: 7,
      author: "Gagan Tyagi",
      badge: "Local Guide · 15 reviews · 12 photos",
      isLocalGuide: true,
      avatarBg: "bg-orange-500 text-white",
      quote:
        "★★★★★ 5-star rating from Google Local Guide for outstanding printing, glow signs, and branding solutions in Kasna & Greater Noida.",
      service: "Local Guide Verified",
      rating: 5,
      date: "5 years ago",
      verified: true,
      ownerResponse:
        "Thank you Gagan ji! As a Google Local Guide, your 5-star rating over the past 5 years means a lot to our entire team at Ravi Arts Enterprises.",
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
            <div className="max-w-xl md:max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                  100% GENUINE GOOGLE REVIEWS
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
                Read authentic Google reviews from real customers who trusted Ravi Arts Enterprises
                for flex banners, glow signs, 3D acrylic letters, and business printing in Kasna,
                Greater Noida.
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
                    Based on verified reviews from Google Maps for Ravi Arts Enterprises
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
                ORIGINAL GOOGLE REVIEWS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Customer Feedback from Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Real customer opinions posted on our official Google Business profile.
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
                          <div className="flex items-center gap-1.5 flex-wrap">
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

                          {/* Reviewer Google Badge */}
                          <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                            {rev.isLocalGuide && (
                              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                                <Award className="h-3 w-3 fill-orange-500 text-orange-500" />
                                {rev.badge}
                              </span>
                            )}
                            {rev.hasPhotos && (
                              <span className="inline-flex items-center gap-1 text-sky-700 font-medium">
                                <Camera className="h-3 w-3 text-sky-600" />
                                {rev.badge}
                              </span>
                            )}
                            {!rev.isLocalGuide && !rev.hasPhotos && (
                              <span>{rev.badge}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Google G Icon Badge */}
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 shrink-0"
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
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-line">
                      &ldquo;{rev.quote}&rdquo;
                    </p>

                    {/* Service Tag & Google Action Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700 border border-sky-100">
                        {rev.service}
                      </span>

                      {/* Like & Share Action Buttons */}
                      <div className="flex items-center gap-1 text-slate-400">
                        <button
                          type="button"
                          onClick={() => handleLike(rev.id)}
                          aria-label="Like this review"
                          className={`inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full transition-colors ${
                            likedReviews[rev.id]
                              ? "text-sky-600 bg-sky-50 font-semibold"
                              : "hover:text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <ThumbsUp className="h-3 w-3" />
                          <span>{likedReviews[rev.id] ? "Liked" : "Like"}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShare(rev.id, rev.author, rev.quote)}
                          aria-label="Share this review"
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          {copiedId === rev.id ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-600" />
                              <span className="text-emerald-600 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="h-3 w-3" />
                              <span>Share</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Owner Response Box */}
                  {rev.ownerResponse && (
                    <div className="rounded-2xl bg-slate-50 border border-slate-200/70 p-3.5 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                        <MessageSquare className="h-3 w-3 text-sky-600" />
                        <span>Response from the owner (Ravi Arts Enterprises)</span>
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
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <GoogleIcon className="h-4 w-4" />
                <span>Read More Reviews on Google Maps</span>
                <ArrowRight className="h-4 w-4 text-sky-400" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
