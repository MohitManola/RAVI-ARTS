import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Cookie,
  ExternalLink,
  Clock,
  UserCheck,
  Baby,
  RefreshCw,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ravi Arts Enterprises - Kasna Greater Noida",
  description:
    "Official Privacy Policy of Ravi Arts Enterprises. Learn how we collect, use, store, and protect your personal details, artwork, and project information.",
  alternates: {
    canonical: "https://www.raviartsenterprises.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
          <span className="text-sky-400 font-semibold">Privacy Policy</span>
        </div>
      </nav>

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                LEGAL &amp; PRIVACY
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Privacy{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Ravi Arts Enterprises, accessible from www.raviartsenterprises.com, we respect your
              privacy and are committed to protecting your personal information.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-3.5 py-1 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>Last Updated: 1 November 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Introduction Card */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              At <strong className="text-slate-900 font-bold">Ravi Arts Enterprises</strong>, accessible
              from{" "}
              <a
                href="https://www.raviartsenterprises.com"
                className="text-sky-600 font-semibold hover:underline"
              >
                www.raviartsenterprises.com
              </a>
              , we respect your privacy and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, store, and protect your information when you
              visit our website or contact us for our printing, signage, and graphic design services.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold text-sm">
                1
              </div>
              <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2.5">
              <p>When you visit our website or contact us, we may collect the following information:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Personal Information:</strong> Name, phone
                    number, email address, and business details.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Project Information:</strong> Printing
                    requirements, design preferences, artwork, dimensions, and project specifications.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Communication Details:</strong> Messages and
                    enquiries submitted through our contact forms, email, or WhatsApp.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Technical Information:</strong> IP address,
                    browser type, device information, and website usage data, where applicable.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">
                2
              </div>
              <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2">
              <p>We use the information collected to:</p>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Respond to enquiries and quotation requests.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Provide printing, signage, and graphic design services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Understand your project requirements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Communicate regarding orders, services, and updates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Improve our website and customer experience.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Maintain business records and fulfil applicable legal obligations.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Data Protection and Security */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold text-sm">
                3
              </div>
              <h2 className="text-xl font-bold text-slate-900">Data Protection and Security</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                We take reasonable measures to protect your personal information against unauthorized
                access, misuse, loss, or disclosure.
              </p>
              <p className="text-xs text-slate-500 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                However, no method of online transmission or electronic storage is completely secure.
                We cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* 4. Sharing of Information */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold text-sm">
                4
              </div>
              <h2 className="text-xl font-bold text-slate-900">Sharing of Information</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p className="font-semibold text-slate-900">
                Ravi Arts Enterprises does not sell or rent customers&apos; personal information to third
                parties.
              </p>
              <p>
                We may share relevant information with trusted service providers when necessary to
                fulfil your requests, provide services, operate our website, or comply with legal
                requirements.
              </p>
            </div>
          </div>

          {/* 5. Cookies and Website Tracking */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold text-sm">
                5
              </div>
              <h2 className="text-xl font-bold text-slate-900">Cookies and Website Tracking</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Our website may use cookies or similar technologies to improve website functionality and
                understand visitor behaviour.
              </p>
              <p>
                You can manage or disable cookies through your browser settings. Some website features
                may not function properly if cookies are disabled.
              </p>
            </div>
          </div>

          {/* 6. Third-Party Links */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-bold text-slate-900">Third-Party Links</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Our website may contain links to third-party websites, including WhatsApp and social
                media platforms.
              </p>
              <p>
                We are not responsible for the privacy practices or content of external websites. We
                recommend reviewing their respective privacy policies.
              </p>
            </div>
          </div>

          {/* 7. Data Retention */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-bold text-slate-900">Data Retention</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We retain personal information only for as long as necessary to fulfil the purposes
              described in this policy, maintain business records, provide services, and meet applicable
              legal requirements.
            </p>
          </div>

          {/* 8. Your Privacy Rights */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 font-bold text-sm">
                8
              </div>
              <h2 className="text-xl font-bold text-slate-900">Your Privacy Rights</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2">
              <p>You may contact us to:</p>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span>Request access to your personal information.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span>Request correction of inaccurate information.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span>Request deletion of personal information, subject to applicable legal requirements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span>Ask questions about how your information is being used.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 9. Children’s Privacy */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm">
                9
              </div>
              <h2 className="text-xl font-bold text-slate-900">Children&apos;s Privacy</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our website and services are not specifically directed towards children. We do not
              knowingly collect personal information from children without appropriate consent.
            </p>
          </div>

          {/* 10. Changes to This Privacy Policy */}
          <div className="rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold text-sm">
                10
              </div>
              <h2 className="text-xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our business
                practices, website features, or applicable laws.
              </p>
              <p>Any updates will be published on this page with a revised Last Updated date.</p>
            </div>
          </div>

          {/* 11. Contact Us */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 font-bold text-sm border border-sky-500/30">
                11
              </div>
              <h2 className="text-xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
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
                  <span>Location: Kasna, Greater Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-center sm:text-left">
              <p className="text-sm font-extrabold text-sky-400">Your Privacy Matters to Us.</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Thank you for trusting Ravi Arts Enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
