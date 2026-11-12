import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ravi Arts Enterprises - Kasna Greater Noida",
  description:
    "Clear, straightforward Terms & Conditions for printing, signage, artwork approval, payments, and delivery at Ravi Arts Enterprises, Kasna, Greater Noida.",
  alternates: {
    canonical: "https://www.raviartsenterprises.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const sections = [
    {
      num: "1",
      badgeClass: "bg-sky-50 text-sky-600",
      title: "Who We Are",
      paragraphs: [
        "Ravi Arts Enterprises is a printing, signage, and graphic design workshop based in Kasna, Greater Noida, Uttar Pradesh.",
        "We handle flex banners, sunboard prints, visiting cards, brochures, vinyl graphics, acrylic 3D letters, LED glow signboards, and custom branding jobs for shops, offices, and factories.",
      ],
    },
    {
      num: "2",
      badgeClass: "bg-emerald-50 text-emerald-600",
      title: "Enquiries & Estimates",
      paragraphs: [
        "You can ask for a quote through our website, over the phone, on WhatsApp, or by visiting our workshop in person.",
        "Every estimate is prepared around the material, thickness, dimensions, quantity, and finishing details you share with us at the time of enquiry.",
      ],
    },
    {
      num: "3",
      badgeClass: "bg-amber-50 text-amber-600",
      title: "Pricing & Changes",
      bullets: [
        "Prices depend on media quality, print size, quantity, fabrication work, and installation needs.",
        "If you change sizes, materials, quantities, or delivery location after receiving a quote, the final amount will be updated accordingly.",
        "Quotes are valid for the period noted on the estimate. If no validity date is mentioned, please confirm the current price before placing your order.",
      ],
    },
    {
      num: "4",
      badgeClass: "bg-purple-50 text-purple-600",
      title: "Order Confirmation & Payment",
      bullets: [
        "Production starts once we both agree on the final quote and job specifications.",
        "For customised printing and signage fabrication, an advance payment is usually needed before we purchase materials or start printing.",
        "The remaining balance is due as agreed—at the time of dispatch, pickup, or completion of site fitting.",
        "Delays in confirming artwork or clearing the agreed payment can push back your delivery schedule.",
      ],
    },
    {
      num: "5",
      badgeClass: "bg-rose-50 text-rose-600",
      title: "Artwork & Proof Approval",
      bullets: [
        "Before we print or cut anything, we share a final design proof on WhatsApp, email, or at our desk for your review.",
        "Please double-check all spelling, phone numbers, addresses, prices, dates, and logo placements carefully.",
        "Once you approve the proof for production, we cannot take responsibility for typos or wrong details that were already present in the approved file.",
        "Changes requested after production has started may require extra charges and time.",
      ],
    },
    {
      num: "6",
      badgeClass: "bg-blue-50 text-blue-600",
      title: "Print Quality & Colour Matching",
      paragraphs: [
        "We use properly calibrated machines and quality inks so your prints and signboards come out sharp and vibrant.",
        "Please keep in mind that backlit phone or computer screens (RGB) always look slightly brighter than ink printed on physical media (CMYK) like flex, paper, vinyl, or acrylic. Minor shade variations can also happen between different materials or repeat batches.",
      ],
    },
    {
      num: "7",
      badgeClass: "bg-teal-50 text-teal-600",
      title: "Production & Delivery Timelines",
      bullets: [
        "We share an estimated completion time based on your order volume and our workshop schedule, and we make every effort to deliver on time.",
        "Timelines can occasionally shift due to heavy seasonal workload, raw material stock, power interruptions, rain (especially for outdoor installation), or transport delays.",
        "If anything outside our control affects your delivery date, we will inform you as early as possible.",
      ],
    },
    {
      num: "8",
      badgeClass: "bg-indigo-50 text-indigo-600",
      title: "Cancellations & Revisions",
      bullets: [
        "Because flex prints, visiting cards, signage boards, and promotional items are made specifically for your business, orders cannot be cancelled once printing, cutting, or fabrication has begun.",
        "If you need to cancel before work starts, we will review the order stage and deduct only for design time or materials already arranged for your job.",
      ],
    },
    {
      num: "9",
      badgeClass: "bg-orange-50 text-orange-600",
      title: "Customer Files & Permissions",
      paragraphs: [
        "Please make sure that all logos, photos, brand names, and text you send us belong to your business or that you have clear permission to print them.",
        "Ravi Arts Enterprises is not responsible for copyright or trademark issues arising from files, images, or content supplied by a customer.",
      ],
    },
    {
      num: "10",
      badgeClass: "bg-pink-50 text-pink-600",
      title: "Design Ownership",
      paragraphs: [
        "All brand assets and files you provide stay completely yours.",
        "Layouts, signage mockups, and artwork created by our studio are prepared for producing your order. Editable raw source files are shared only when specifically included in your design package.",
      ],
    },
    {
      num: "11",
      badgeClass: "bg-red-50 text-red-600",
      title: "Site Conditions & Responsibility",
      paragraphs: [
        "We stand behind the materials and workmanship we deliver. Once your prints are handed over or a signboard is checked and mounted at your site, we are not responsible for damage caused by rough handling, weak wall surfaces, voltage spikes at your premises, extreme weather, or indirect business losses.",
      ],
    },
    {
      num: "12",
      badgeClass: "bg-sky-50 text-sky-600",
      title: "Website Use & Privacy",
      paragraphs: [
        "Please use our website honestly and only for genuine enquiries.",
      ],
      privacyLink: true,
    },
    {
      num: "13",
      badgeClass: "bg-amber-50 text-amber-600",
      title: "Updates to These Terms",
      paragraphs: [
        "We may update our service terms or website details whenever our workflow changes. Whenever we update this page, the new date will be shown at the top.",
      ],
    },
    {
      num: "14",
      badgeClass: "bg-purple-50 text-purple-600",
      title: "Governing Law",
      paragraphs: [
        "These terms follow the applicable laws of India. If any dispute ever needs formal legal resolution, it will fall under the jurisdiction of the courts in Gautam Buddha Nagar, Uttar Pradesh.",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#eff7ff]">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-900 border-b border-slate-800 text-slate-400 py-2.5 px-4 sm:px-6 lg:px-8 text-xs"
      >
        <div className="mx-auto max-w-7xl flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-sky-400 font-semibold">Terms &amp; Conditions</span>
        </div>
      </nav>

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex items-center">
        {/* Full Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonials_top.png"
            alt="Terms & Conditions - Ravi Arts Enterprises"
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
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          <div className="max-w-xl md:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                SERVICE POLICIES &amp; TERMS
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
              Simple, transparent terms that cover how we handle quotes, artwork approvals, payments,
              printing, and delivery at Ravi Arts Enterprises.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3.5 py-1 text-xs text-slate-300">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>Last Updated: 1 November 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Welcome Intro Box */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              When you browse our website, ask for an estimate, or place an order with{" "}
              <strong className="text-slate-900 font-bold">Ravi Arts Enterprises</strong>, these
              terms apply to our work together. We have kept them clear and practical so you know
              exactly what to expect from design through delivery.
            </p>
          </div>

          {/* 1-14 Terms Cards in Full Normal Page Width Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((sec) => (
              <div
                key={sec.num}
                className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm shrink-0 ${sec.badgeClass}`}
                  >
                    {sec.num}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">{sec.title}</h2>
                </div>

                {sec.paragraphs?.map((text, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {text}
                  </p>
                ))}

                {sec.bullets && (
                  <ul className="space-y-2 text-sm text-slate-700">
                    {sec.bullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.privacyLink && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Any phone numbers, project files, or contact details you share with us are
                    handled privately under our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-sky-600 font-semibold hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 15. Contact Information */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 font-bold text-sm border border-sky-500/30">
                15
              </div>
              <h2 className="text-xl font-bold text-white">Need Any Clarification?</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If anything here is unclear or you want to confirm terms for a bulk or custom signage
              order, feel free to reach out directly:
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <h3 className="font-extrabold text-base text-white tracking-wide">
                Ravi Arts Enterprises
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Globe className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>
                    Website:{" "}
                    <a
                      href="https://www.raviartsenterprises.com"
                      className="text-sky-400 hover:underline"
                    >
                      www.raviartsenterprises.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:raviarts29@gmail.com"
                      className="text-rose-400 hover:underline"
                    >
                      raviarts29@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="flex flex-wrap items-center gap-x-2">
                    Phone:{" "}
                    <a href="tel:+919350036399" className="text-emerald-400 hover:underline">
                      +91 93500 36399
                    </a>
                    <span className="text-slate-500">/</span>
                    <a href="tel:+919971145089" className="text-emerald-400 hover:underline">
                      +91 99711 45089
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-center sm:text-left">
              <p className="text-sm font-extrabold text-sky-400">
                Thank you for working with Ravi Arts Enterprises.
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Your Vision, Our Commitment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
