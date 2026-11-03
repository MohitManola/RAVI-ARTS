"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  GoogleIcon,
} from "@/components/SocialIcons";
import { CmykBar } from "@/components/CmykCornerRibbon";
import { PrintingProjectCtaBanner } from "@/components/ServiceBottomSections";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Printing Solutions", href: "/services/flex-printing" },
    { name: "Signage Solutions", href: "/services/sign-boards" },
    { name: "Branding & Graphic Design", href: "/services/graphic-design" },
    { name: "Visiting Cards & Stationery", href: "/services/stationery" },
    { name: "Offset & Digital Printing", href: "/services/offset-printing" },
    { name: "Acrylic & 3D Letter Boards", href: "/services/acrylic-letters" },
    { name: "Eco-Solvent & Vinyl Printing", href: "/services/vinyl-printing" },
    { name: "Corporate Gifts & Merchandise", href: "/services/corporate-gifts" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#07172d] text-slate-300">
      {/* Floating CTA Banner right above the footer columns */}
      <PrintingProjectCtaBanner />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand (Logo + Tagline + CMYK Bar) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/10 shrink-0 shadow-lg">
                <Image
                  src="/images/logo_2.png"
                  alt="Ravi Arts Enterprises Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-sky-400 transition-colors leading-tight">
                  RAVI ARTS
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mt-0.5">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              All Types Graphic &amp; Signage Solutions
            </p>

            {/* CMYK Accent Line Underneath Tagline */}
            <CmykBar className="h-1.5 w-20" />
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors block py-0.5 truncate"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sky-400 hover:underline font-semibold block py-0.5"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href="tel:+919350036399"
                  className="font-bold text-white hover:text-sky-400 transition-colors"
                >
                  +91 93500 36399
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="h-4 w-4 shrink-0 text-rose-400" />
                <a
                  href="mailto:raviarts.ent@gmail.com"
                  className="hover:text-rose-400 transition-colors"
                >
                  raviarts.ent@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors leading-snug"
                >
                  Kasna, Greater Noida, UP - 201310
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Follow Us & Right-Side Script Art */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Follow Us
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow Ravi Arts on Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 transition-all cursor-pointer"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Follow Ravi Arts on Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#1877F2] transition-all cursor-pointer"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#0A66C2] transition-all cursor-pointer"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="Subscribe on YouTube"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#FF0000] transition-all cursor-pointer"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>

                {/* Google Maps Profile */}
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile & Location"
                  title="Google Business Profile & Reviews"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  <GoogleIcon className="h-4 w-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919350036399"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat with Us on WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                </a>
              </div>
            </div>

            {/* Script Tagline Artwork: Print Signage Branding & More... */}
            <div className="pt-2">
              <span className="font-serif italic text-base sm:text-lg text-white/95 leading-tight block">
                Print <br />
                Signage <br />
                Branding <br />
                &amp; More...
              </span>
              <svg className="h-2 w-20 text-sky-400 mt-1" viewBox="0 0 100 12" fill="none">
                <path d="M0,8 Q50,0 100,6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="mt-12 border-t border-sky-900/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear}{" "}
            <span className="text-white font-medium">Ravi Arts Enterprises</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span className="inline-block h-3 w-px bg-slate-700" />
            <Link
              href="/terms-and-conditions"
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </Link>
            <span className="inline-block h-3 w-px bg-slate-700" />
            <a
              href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
              title="Kasna, Greater Noida on Google Maps"
            >
              Kasna, Greater Noida
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
