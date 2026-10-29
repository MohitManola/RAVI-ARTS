import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Users,
  Headphones,
  Award,
  Printer,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Factory,
  Cpu,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ravi Arts Enterprises - Kasna, Greater Noida",
  description:
    "Learn about Ravi Arts Enterprises, Greater Noida's trusted printing, signage, and visual branding specialist with state-of-the-art machinery and skilled craftsmen.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Uncompromising Quality",
      desc: "We use only premium industrial grade flex, acrylic, vinyl, and high-density inks that withstand weather and maintain brilliance.",
      icon: ShieldCheck,
      color: "text-sky-600 bg-sky-50",
    },
    {
      title: "On-Time Delivery",
      desc: "We understand that business launches and promotional campaigns have strict deadlines. We commit and deliver on schedule.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "End-to-End Craftsmanship",
      desc: "From initial concept sketches and digital graphic design to CNC routing, fabrication, and on-site mounting.",
      icon: Award,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Dedicated Local Support",
      desc: "Based right here in Kasna, Greater Noida. Accessible for instant consultations, sample inspections, and post-installation service.",
      icon: Headphones,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  const machines = [
    {
      title: "Industrial Eco-Solvent Printers",
      desc: "Up to 10-foot wide seamless roll-to-roll printing delivering photorealistic colors and UV-resistant outdoor durability.",
    },
    {
      title: "Precision CNC & Laser Cutters",
      desc: "Micro-precision cutting for acrylic 3D letters, ACP signage, metal boards, and architectural channel letters.",
    },
    {
      title: "High-Speed Digital Presses",
      desc: "Rich multi-color brochure, visiting card, and catalogue production with matte, gloss, and spot UV finishing.",
    },
    {
      title: "LED & Glow Sign Assembly",
      desc: "Energy-efficient waterproof Samsung & Osram LED modules with certified waterproof power supplies.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                ABOUT OUR COMPANY
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Crafting Visual Excellence in Kasna &amp;{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Beyond
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We are a dedicated team of printing technologists, signage fabricators,
              and graphic designers helping businesses build standout brands.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Facility Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-sky-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/about-building.webp"
                    alt="Ravi Arts Enterprises Kasna Workshop"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900 p-4 text-white shadow-xl hover:bg-slate-800 transition-colors group cursor-pointer"
                title="Open workshop location in Google Maps"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-sky-400 group-hover:text-amber-400 shrink-0 transition-colors" />
                  <div className="text-xs">
                    <span className="font-bold block text-sm group-hover:text-sky-300 transition-colors">
                      Kasna, Greater Noida
                    </span>
                    <span className="text-slate-400">Gautam Buddha Nagar, UP - 201310</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800 group-hover:border-sky-500 transition-colors">
                  View Map ↗
                </span>
              </a>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                    OUR BACKGROUND
                  </span>
                  <span className="cmyk-gradient-bar" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Turning Your Ideas into Long-Lasting{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent font-black">
                    Impressions
                  </span>
                </h2>

                <div className="mt-2 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Established with a commitment to uncompromised printing standards,
                  <strong className="text-slate-900"> Ravi Arts Enterprises</strong> has grown into
                  one of the most dependable printing and signage destinations in Greater Noida.
                  From small retail outlets needing attractive glow sign boards to large corporations
                  requiring expansive outdoor hoardings and bulk commercial stationery, we treat
                  every assignment with precision.
                </p>
                <p>
                  Our in-house fabrication facility in Kasna is equipped with high-performance
                  printing machinery and cutting-edge computerized routers. This allows us to
                  deliver rapid turnaround times without sacrificing the vibrant colors and
                  structural durability our clients depend on.
                </p>
              </div>
            </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-extrabold text-sky-600">25k+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-rose-600">40k+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-500">20+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              OUR PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              What Defines Ravi Arts{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Enterprises
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl bg-white p-6 border border-sky-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${val.color} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machinery & Technology Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-sky-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                    OUR INFRASTRUCTURE
                  </span>
                  <span className="cmyk-gradient-bar" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Advanced Machinery for{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                    High-Precision Output
                  </span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We believe that superior design deserves flawless execution. Our workshop
                  features calibrated industrial hardware to ensure your branding looks crisp,
                  radiant, and true to your brand colors.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {machines.map((mach) => (
                  <div key={mach.title} className="flex items-start gap-3 rounded-xl bg-[#f8fbff] border border-sky-100/90 p-4 hover:border-sky-300 shadow-xs transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {mach.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {mach.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl border border-slate-200">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/hero-showcase.webp"
                    alt="Ravi Arts High Tech Printing Press"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-12 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Discuss Your Printing or Signage Project?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Get in touch with our Kasna workshop today for instant cost estimates,
            material samples, and professional design advice.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-500"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919350036399"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <span>Call +91 93500 36399</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
