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
} from "lucide-react";
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
          telephone: "+91-9350036399",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Republic Honda, Opp. HDFC Bank, Main Road Kasna",
            addressLocality: "Greater Noida",
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
          className="bg-slate-900 border-b border-slate-800 text-slate-400 py-2.5 px-4 sm:px-6 lg:px-8 text-xs select-none"
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

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-20 text-white border-b border-slate-800">
          <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                  {service.tag}
                </span>
                <span className="cmyk-gradient-bar" />
              </div>

              <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                {service.heroHeading}{" "}
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  {service.heroHeadingHighlight}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-slate-800 px-3.5 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  <span>Turnaround: {service.turnaround}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-slate-800 px-3.5 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>In-House Kasna Factory</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-slate-800 px-3.5 py-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>100% Quality Guaranteed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <ServiceDetailActions serviceTitle={service.title} />
            </div>
          </div>
        </section>

        {/* Overview & Media Showcase Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Media Card */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white border border-sky-100 shadow-xl group">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Ravi Arts Enterprises Kasna`}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 rounded-xl bg-slate-950/85 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white border border-white/10 shadow-lg">
                    {service.subtitle}
                  </div>
                </div>
              </div>

              {/* Overview Copy & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                      SERVICE OVERVIEW
                    </span>
                    <span className="cmyk-gradient-bar" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Precision Manufacturing Tailored for Your Brand
                  </h2>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Key Features &amp; Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl bg-white p-3 border border-sky-100 shadow-2xs text-xs sm:text-sm text-slate-800"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Applications Grid */}
        <section className="py-12 sm:py-16 bg-white border-y border-sky-100">
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

                <div className="divide-y divide-slate-100 rounded-2xl border border-sky-100 bg-[#eff7ff]/50 overflow-hidden shadow-2xs">
                  {service.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 text-xs sm:text-sm gap-1"
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
                      className="rounded-2xl border border-sky-100 bg-white p-4 shadow-2xs hover:border-sky-300 transition-colors flex items-center gap-3"
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

        {/* Local Advantage: Why Choose Ravi Arts Enterprises in Kasna */}
        <section className="py-12 sm:py-16 bg-[#eff7ff]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                WHY BUSINESSES CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Your Trusted Kasna Printing Partner
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

        {/* Frequently Asked Questions */}
        <section className="py-12 sm:py-16 bg-white border-t border-sky-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-sky-600 uppercase mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Questions About {service.title}?
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

        {/* Bottom Conversion CTA Strip */}
        <section className="py-12 bg-slate-950 text-white relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Need Custom {service.title} in Greater Noida?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Visit our Kasna workshop Near Republic Honda showroom or get an instant quote via WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20need%20a%20quotation%20for%20${encodeURIComponent(
                  service.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
              >
                <span>WhatsApp Instant Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Contact Our Workshop</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Linking: Explore Other 7 Services */}
        <section className="py-12 sm:py-16 bg-[#eff7ff] border-t border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  COMPLETE SERVICE PORTFOLIO
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Explore Other Printing &amp; Signage Services
                </h3>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
              >
                <span>View Full Services Overview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-2xl bg-white border border-sky-100 p-2.5 shadow-2xs hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 mb-2">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                      {other.title}
                    </h4>
                    <span className="text-[10px] text-sky-600 font-semibold mt-1 inline-flex items-center gap-1">
                      <span>View Service</span>
                      <ArrowRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

