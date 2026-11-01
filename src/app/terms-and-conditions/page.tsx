import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Scale,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ravi Arts Enterprises - Kasna Greater Noida",
  description:
    "Official Terms & Conditions for Ravi Arts Enterprises. Review our service policies, quotation guidelines, payment terms, artwork approvals, and delivery commitments.",
  alternates: {
    canonical: "https://www.raviartsenterprises.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full bg-[#eff7ff]">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-900 border-b border-slate-800 text-slate-400 py-2.5 px-4 sm:px-6 lg:px-8 text-xs select-none"
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
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                SERVICE POLICIES &amp; TERMS
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Welcome to Ravi Arts Enterprises. By accessing our website, submitting an enquiry, or
              placing an order with us, you agree to the following Terms &amp; Conditions.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-3.5 py-1 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>Last Updated: 1 November 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Welcome Intro Box */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Please read these terms carefully before using our website or purchasing our services.
              These terms outline the rights and responsibilities of both{" "}
              <strong className="text-slate-900 font-bold">Ravi Arts Enterprises</strong> and our
              valued clients.
            </p>
          </div>

          {/* 1. About Our Business */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold text-sm">
                1
              </div>
              <h2 className="text-xl font-bold text-slate-900">About Our Business</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ravi Arts Enterprises is a printing, signage, and graphic design service provider based
              in Kasna, Greater Noida, Uttar Pradesh, India.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide services including flex printing, sunboard printing, digital printing,
              visiting cards, signage, acrylic boards, LED boards, vinyl printing, branding, and
              customised graphic design solutions.
            </p>
          </div>

          {/* 2. Services and Enquiries */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">
                2
              </div>
              <h2 className="text-xl font-bold text-slate-900">Services and Enquiries</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              All services are provided according to the customer’s requirements and the specifications
              discussed at the time of enquiry.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers can contact us through our website, phone, email, or WhatsApp for service
              details and quotations.
            </p>
          </div>

          {/* 3. Pricing and Quotations */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold text-sm">
                3
              </div>
              <h2 className="text-xl font-bold text-slate-900">Pricing and Quotations</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>Prices depend on material, size, quantity, design, finishing, and project requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>All quotations are subject to the specifications provided by the customer.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>Additional charges may apply for changes in specifications, artwork, materials, or delivery requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>A quotation is valid only for the period mentioned in it. If no validity is mentioned, please confirm the price before placing an order.</span>
              </li>
            </ul>
          </div>

          {/* 4. Order Confirmation and Payment */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold text-sm">
                4
              </div>
              <h2 className="text-xl font-bold text-slate-900">Order Confirmation and Payment</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                <span>Orders are confirmed after mutual agreement on the quotation and project details.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                <span>Advance payments, if applicable, will be communicated before production.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                <span>Any remaining payment must be made according to the agreed payment terms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                <span>Production may be delayed if required payment or approvals are pending.</span>
              </li>
            </ul>
          </div>

          {/* 5. Design and Artwork Approval */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 font-bold text-sm">
                5
              </div>
              <h2 className="text-xl font-bold text-slate-900">Design and Artwork Approval</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Customers must review and approve the final artwork before printing or production.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>
                  Once artwork is approved, Ravi Arts Enterprises will not be responsible for spelling
                  mistakes, incorrect details, or design errors already present in the approved artwork.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Additional design revisions or major changes after approval may involve extra charges.</span>
              </li>
            </ul>
          </div>

          {/* 6. Printing Quality and Colour Variation */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-bold text-slate-900">Printing Quality and Colour Variation</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We make reasonable efforts to maintain print quality and colour consistency.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              However, slight colour variations may occur due to differences in screens, printing machines,
              materials, inks, and production processes.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Printed output may not always match the exact appearance of a digital design.
            </p>
          </div>

          {/* 7. Production and Delivery Time */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-bold text-slate-900">Production and Delivery Time</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span>Production timelines are communicated according to the project requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span>Delivery schedules may vary depending on order quantity, material availability, production workload, and other circumstances.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span>Delays caused by circumstances beyond our reasonable control may affect the agreed delivery timeline.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span>Customers will be informed about significant changes whenever reasonably possible.</span>
              </li>
            </ul>
          </div>

          {/* 8. Cancellation and Order Changes */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-sm">
                8
              </div>
              <h2 className="text-xl font-bold text-slate-900">Cancellation and Order Changes</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>Customised printing and signage orders may not be cancelled once production has started.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>Cancellation requests before production will be reviewed according to the order status and any costs already incurred.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>Changes requested after order confirmation may involve additional charges and revised delivery timelines.</span>
              </li>
            </ul>
          </div>

          {/* 9. Customer Responsibilities */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 font-bold text-sm">
                9
              </div>
              <h2 className="text-xl font-bold text-slate-900">Customer Responsibilities</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers are responsible for providing accurate information, correct spelling, contact
              details, artwork, logos, and other project requirements.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers must ensure that any supplied artwork, images, logos, or content are authorised
              for use.
            </p>
          </div>

          {/* 10. Intellectual Property */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 font-bold text-sm">
                10
              </div>
              <h2 className="text-xl font-bold text-slate-900">Intellectual Property</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              All original designs, artwork, logos, and creative materials remain the property of their
              respective owners.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customers must have the necessary rights or permissions to use any materials supplied for
              printing or production. Unauthorised reproduction or use of copyrighted materials is not
              permitted.
            </p>
          </div>

          {/* 11. Limitation of Liability */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 font-bold text-sm">
                11
              </div>
              <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ravi Arts Enterprises will make reasonable efforts to provide services according to agreed
              specifications.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We shall not be responsible for indirect losses, delays caused by external circumstances,
              or errors in content approved by the customer, to the extent permitted by applicable law.
            </p>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
              Nothing in these terms limits any rights or remedies that cannot legally be excluded.
            </p>
          </div>

          {/* 12. Website Usage */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold text-sm">
                12
              </div>
              <h2 className="text-xl font-bold text-slate-900">Website Usage</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Visitors agree not to misuse our website, submit false enquiries, attempt unauthorised
              access, or use website content for unlawful purposes.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reserve the right to update website content and services without prior notice.
            </p>
          </div>

          {/* 13. Privacy Policy */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">
                13
              </div>
              <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Personal information shared with Ravi Arts Enterprises will be handled according to our{" "}
              <Link href="/privacy-policy" className="text-sky-600 font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Please review our{" "}
              <Link href="/privacy-policy" className="text-sky-600 font-semibold hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how customer information is collected, used, and protected.
            </p>
          </div>

          {/* 14. Changes to Terms & Conditions */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold text-sm">
                14
              </div>
              <h2 className="text-xl font-bold text-slate-900">Changes to Terms &amp; Conditions</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ravi Arts Enterprises reserves the right to modify these Terms &amp; Conditions when
              required.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Updated terms will be published on this page along with the revised update date.
            </p>
          </div>

          {/* 15. Governing Law and Jurisdiction */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold text-sm">
                15
              </div>
              <h2 className="text-xl font-bold text-slate-900">Governing Law and Jurisdiction</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              These Terms &amp; Conditions shall be governed by the applicable laws of India.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Any disputes shall be subject to the jurisdiction of the competent courts in Gautam
              Buddha Nagar, Uttar Pradesh, subject to applicable law.
            </p>
          </div>

          {/* 16. Contact Information */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 font-bold text-sm border border-sky-500/30">
                16
              </div>
              <h2 className="text-xl font-bold text-white">Contact Information</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              For questions, enquiries, or clarification regarding these Terms &amp; Conditions, please
              contact us:
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <h3 className="font-extrabold text-base text-white tracking-wide">
                Ravi Arts Enterprises
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
                      href="mailto:raviarts.ent@gmail.com"
                      className="text-rose-400 hover:underline"
                    >
                      raviarts.ent@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Phone:{" "}
                    <a href="tel:+919350036399" className="text-emerald-400 hover:underline">
                      9350036399
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Address: Kasna, Greater Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-center sm:text-left">
              <p className="text-sm font-extrabold text-sky-400">
                Thank you for choosing Ravi Arts Enterprises.
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Your Vision, Our Commitment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

