import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  MapPin,
  Layers,
  HelpCircle,
  Phone,
  Mail,
  Star,
  ExternalLink,
  Navigation,
  MessageSquare,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { servicesData, getServiceBySlug, getAllServiceSlugs } from "@/data/servicesData";
import ServiceDetailActions from "@/components/ServiceDetailActions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Ravi Arts Enterprises",
    };
  }

  return {
    title: `${service.metaTitle}`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://raviartsenterprises.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} in Kasna, Greater Noida`,
      description: service.metaDescription,
      url: `https://raviartsenterprises.com/services/${service.slug}`,
      siteName: "Ravi Arts Enterprises",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  // Structured Data Schema for LocalBusiness + Service + FAQ for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://raviartsenterprises.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://raviartsenterprises.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://raviartsenterprises.com/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: service.title,
        provider: {
          "@type": "LocalBusiness",
          name: "Ravi Arts Enterprises",
          image: "https://raviartsenterprises.com/images/logo_1.png",
          telephone: ["+91-9350036399", "+91-9971145089"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kasna",
            addressLocality: "Greater Noida/Delhi NCR",
            addressRegion: "Uttar Pradesh",
            postalCode: "201310",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "28.435",
            longitude: "77.533",
          },
        },
        areaServed: [
          "Kasna",
          "Greater Noida",
          "Noida",
          "Yamuna Expressway",
          "Surajpur",
          "Ecotech Greater Noida",
        ],
        description: service.metaDescription,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Solutions`,
          itemListElement: (service.offerings || []).map((item, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
            position: idx + 1,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col w-full bg-[#eff7ff]">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="bg-slate-900 border-b border-slate-800 text-slate-400 py-2.5 px-4 sm:px-6 lg:px-8 text-xs"
        >
          <div className="mx-auto max-w-7xl flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-sky-400 font-semibold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </div>
        </nav>

        {/* =========================================================================
            SECTION 1: HIGH CONVERSION AD LANDING HERO
            Left side: Text, Trust Badges, Headline, Selling Points, CTAs
            Right side: High-Resolution Service Image with Floating Guarantee Badges
           ========================================================================= */}
        <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16 lg:py-20 text-white border-b border-slate-800">
          <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Headline, Value Proposition & Action CTAs */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-xs font-bold tracking-wide text-sky-300">
                    <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                    <span>{service.tag}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Same-Day Dispatch in Greater Noida</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  {service.heroHeading}{" "}
                  <span className="bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                    {service.heroHeadingHighlight}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {service.heroDescription}
                </p>

                {/* Selling Points Pill Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2.5 rounded-xl bg-slate-900/90 border border-slate-800 p-3 text-xs text-slate-200 shadow-xs">
                    <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Turnaround</span>
                      <span className="font-bold text-slate-100">{service.turnaround}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-slate-900/90 border border-slate-800 p-3 text-xs text-slate-200 shadow-xs">
                    <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Factory Direct</span>
                      <span className="font-bold text-slate-100">Kasna In-House</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-slate-900/90 border border-slate-800 p-3 text-xs text-slate-200 shadow-xs">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Quality</span>
                      <span className="font-bold text-slate-100">100% Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action CTAs (Lead Capture / Call / WhatsApp) */}
                <div className="pt-2">
                  <ServiceDetailActions serviceTitle={service.title} />
                </div>

                {/* Google Reviews Trust Strip */}
                <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-slate-400 border-t border-slate-800/80">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    <span>4.9 / 5.0</span>
                  </div>
                  <span>•</span>
                  <span>Rated #1 Printing &amp; Signage Facility in Kasna</span>
                  <span>•</span>
                  <span className="text-slate-300">500+ Corporate Clients</span>
                </div>
              </div>

              {/* Right Column: Hero Showcase Image with Floating Trust Badges */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-900 border-2 border-slate-700/80 shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={`${service.title} in Kasna Greater Noida`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-4 left-4 rounded-xl bg-slate-950/85 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white border border-white/10 shadow-lg flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>In-House Kasna Workshop</span>
                  </div>

                  {/* Top-Right Price/Wholesale Badge */}
                  <div className="absolute top-4 right-4 rounded-xl bg-rose-600/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-extrabold text-white border border-rose-400/30 shadow-lg">
                    Direct Factory Rates
                  </div>

                  {/* Bottom Floating Bar */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/90 backdrop-blur-md p-3.5 border border-white/10 shadow-xl flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Specialized Category</span>
                      <span className="text-xs sm:text-sm font-bold text-white truncate block">{service.title}</span>
                    </div>
                    <a
                      href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20want%20to%20order%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <WhatsAppIcon className="h-3 w-3 fill-white" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: AD CONVERSION BANNER (Urgent Orders & Expo Mart Support)
           ========================================================================= */}
        <section className="bg-sky-500 py-3.5 px-4 text-white shadow-xs">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white animate-ping" />
              <span>
                Need emergency print runs for an exhibition at <strong>India Expo Mart</strong> or a store launch in Greater Noida?
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919350036399"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-1.5 text-xs font-bold text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <Phone className="h-3 w-3 text-sky-400" />
                <span>Call 9350036399</span>
              </a>
              <a
                href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20need%20urgent%20support%20for%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="h-3 w-3 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: COMPLETE PRODUCTS & CAPABILITIES CATALOG
            All 9 to 12 items requested by user with checkmarks & direct inquiries
           ========================================================================= */}
        {service.offerings && service.offerings.length > 0 && (
          <section className="py-12 sm:py-16 bg-white border-b border-sky-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
                    COMPLETE PRODUCT CATALOG &amp; CAPABILITIES
                  </span>
                  <span className="cmyk-gradient-bar" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What We Print &amp; Fabricate in{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Explore our comprehensive in-house manufacturing range with wholesale factory pricing in Kasna, Greater Noida.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {service.offerings.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-sky-100 bg-[#eff7ff]/60 p-4 shadow-2xs hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block group-hover:text-sky-600 transition-colors">
                          {item}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Custom dimensions &amp; bulk orders
                        </span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item)}%20under%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Inquire about ${item} on WhatsApp`}
                      aria-label={`Inquire about ${item} on WhatsApp`}
                      className="shrink-0 p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 4: TECHNICAL SPECIFICATIONS & IDEAL APPLICATIONS
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#eff7ff]/70 border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Technical Specifications Table */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
                    TECHNICAL DETAILS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Production Specifications
                  </h3>
                </div>

                <div className="divide-y divide-slate-100 rounded-2xl border border-sky-100 bg-white overflow-hidden shadow-2xs">
                  {service.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 text-xs sm:text-sm gap-1 hover:bg-slate-50/60 transition-colors"
                    >
                      <span className="font-semibold text-slate-600">{spec.label}</span>
                      <span className="font-bold text-slate-900 text-right sm:text-left">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Where It Is Used / Applications */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
                    IDEAL USE CASES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Common Applications in Greater Noida
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-sky-100 bg-white p-4 shadow-2xs hover:border-sky-300 hover:shadow-sm transition-all flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: IN-DEPTH SERVICE OVERVIEW & PRODUCTION PROCESS
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  MANUFACTURING STANDARDS
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Precision In-House Printing &amp;{" "}
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Sign Fabrication
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Key Features Quick List */}
              <div className="lg:col-span-4 rounded-3xl bg-[#eff7ff] border border-sky-100 p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Production Highlights
                </h4>
                <div className="space-y-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: WHY CHOOSE RAVI ARTS ENTERPRISES IN KASNA
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#eff7ff] border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                WHY BUSINESSES CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Your Trusted Kasna{" "}
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Printing Partner
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Delivering reliable quality, manufacturer wholesale rates, and fast local support across Greater Noida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.whyChoose.map((point, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-sky-100 p-5 shadow-2xs hover:border-sky-300 hover:shadow-md transition-all space-y-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-black text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-sky-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-sky-600 uppercase mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Questions About{" "}
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  {service.title}?
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-sky-100 bg-[#eff7ff]/40 p-5 shadow-2xs space-y-2"
                >
                  <h4 className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: WORKSHOP LOCATION & INTERACTIVE GOOGLE MAP
            User Request: "in bottom add map"
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  VISIT OUR FACILITY
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                Visit Our Kasna Workshop &amp;{" "}
                <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                  Experience Centre
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Inspect physical paper swatches, acrylic letters, LED samples, and consult directly with our production engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Workshop Details & Action Buttons */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Workshop &amp; Showroom Address</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-slate-800 pt-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Business Hours</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Monday to Sunday: 9:30 AM – 6:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-slate-800 pt-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Direct Phone Contact</h4>
                      <div className="flex flex-wrap items-center gap-x-2 text-xs text-emerald-400 font-bold mt-0.5">
                        <a href="tel:+919350036399" className="hover:underline">
                          +91 93500 36399
                        </a>
                        <span className="text-slate-500">/</span>
                        <a href="tel:+919971145089" className="hover:underline">
                          +91 99711 45089
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Direction CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-colors cursor-pointer"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Get Map Directions</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20am%20coming%20to%20visit%20your%20Kasna%20workshop%20for%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                      <span>WhatsApp Location</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Google Map Iframe */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border-2 border-slate-800 bg-slate-900 shadow-xl group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4878473215983!2d77.5307!3d28.4355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b4029671d1%3A0x6b77dcfdd40a8b4b!2sKasna%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[300px]"
                    title="Ravi Arts Enterprises Workshop Location Map"
                  />
                  {/* Floating Link Button on Map */}
                  <a
                    href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg hover:bg-sky-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: EXPLORE OTHER SERVICES (Professional Cross-Sell Grid)
            User Request: "and other servive make like perfect page professional"
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#eff7ff] border-t border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  COMPLETE SERVICE PORTFOLIO
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">
                  Explore Other Printing &amp; Signage Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Everything you need for outdoor marketing, office branding, and corporate collateral under one roof.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors shrink-0"
              >
                <span>View All Services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-3xl bg-white border border-sky-100 p-3.5 shadow-2xs hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xs">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2.5 left-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-white">
                        {other.turnaround}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-sky-600 uppercase tracking-wider block">
                        {other.subtitle.split(",")[0]}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mt-0.5">
                        {other.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                        {other.heroDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-semibold text-sky-600">
                    <span>Explore Service</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: MOBILE STICKY BOTTOM AD CONVERSION BAR
            Guarantees high conversion on mobile devices running ad traffic
           ========================================================================= */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl flex items-center justify-between gap-2">
          <a
            href="tel:+919350036399"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 border border-slate-700 py-2.5 px-3 text-xs font-bold text-white shadow-xs hover:bg-slate-800 active:scale-95 transition-all"
          >
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <span>Call 9350036399</span>
          </a>
          <a
            href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2.5 px-3 text-xs font-bold text-white shadow-xs hover:bg-[#20ba59] active:scale-95 transition-all"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
            <span>WhatsApp Quote</span>
          </a>
        </div>
      </div>
    </>
  );
}
