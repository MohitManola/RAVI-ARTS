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
  GoogleIcon,
} from "@/components/SocialIcons";

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
    <footer className="relative bg-[#07172d] text-slate-300 border-t border-sky-950/60 overflow-hidden">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-14 sm:px-6 lg:px-8">
        
        {/* Mobile Quick Action Strip (Top of Footer for 1-tap phone and WhatsApp access) */}
        <div className="block sm:hidden mb-8 pb-6 border-b border-white/10">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Quick Workshop Contact
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="tel:+919350036399"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2.5 text-xs font-bold text-white shadow-xs active:scale-95 transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20printing%20and%20signage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-3 py-2.5 text-xs font-bold text-white shadow-xs active:scale-95 transition-all"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Brand (Colorful Logo + Tagline + CMYK Bar + Follow Us) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5 sm:space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group">
              <div className="relative h-14 w-14 sm:h-20 sm:w-20 overflow-hidden rounded-2xl bg-white p-2 ring-2 ring-white/20 shrink-0 shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo_1.png"
                  alt="Ravi Arts Enterprises Logo"
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 640px) 56px, 80px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-2xl tracking-tight text-white group-hover:text-sky-400 transition-colors leading-tight">
                  RAVI ARTS
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-sky-400 uppercase mt-0.5">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              All Types Printing, Signage &amp; Graphic Solutions
            </p>

            {/* CMYK Brand Gradient Line like Home Page */}
            <div className="h-1.5 w-20 sm:w-24 rounded-full bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 shadow-sm" />

            {/* Follow Us Section right below logo and text */}
            <div className="pt-1 sm:pt-2 space-y-2">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white block">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow Ravi Arts on Instagram"
                  className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Follow Ravi Arts on Facebook"
                  className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>

                {/* Google Maps Profile */}
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile & Location"
                  title="Google Business Profile & Reviews"
                  className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <GoogleIcon className="h-5 w-5" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919350036399"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat with Us on WhatsApp"
                  className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-[#25D366] text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Quick Links & Our Services in a 2-Column Mobile Grid for compactness */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:contents sm:col-span-2 lg:col-span-5">
            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white active:text-sky-400 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                Our Services
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {services.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white active:text-sky-400 transition-colors block py-1 truncate"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-sky-400 hover:underline font-semibold block py-1"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3.5 sm:space-y-4 pt-2 sm:pt-0 border-t border-white/10 sm:border-t-0">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-200">
                <Phone className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919350036399"
                    className="font-bold text-white hover:text-sky-400 active:text-sky-300 transition-colors block leading-tight py-0.5"
                  >
                    +91 93500 36399
                  </a>
                  <a
                    href="tel:+919971145089"
                    className="font-bold text-white hover:text-sky-400 active:text-sky-300 transition-colors block leading-tight py-0.5"
                  >
                    +91 99711 45089
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="h-4 w-4 shrink-0 text-rose-400" />
                <a
                  href="mailto:raviarts29@gmail.com"
                  className="hover:text-rose-400 active:text-rose-300 transition-colors py-0.5"
                >
                  raviarts29@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 active:text-amber-200 transition-colors leading-snug py-0.5"
                >
                  Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200 pt-0.5">
                <Clock className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Mon – Sat: 9:30 AM to 6:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar (Centered) */}
        <div className="mt-8 sm:mt-12 border-t border-slate-700/60 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-slate-400 text-center">
          <p>© {currentYear} Ravi Arts Enterprises. All rights reserved.</p>
          <span className="hidden sm:inline text-slate-600 select-none" aria-hidden="true">
            •
          </span>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-200 active:text-white transition-colors py-1 px-1.5"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600 select-none" aria-hidden="true">
              |
            </span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-slate-200 active:text-white transition-colors py-1 px-1.5"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
