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
    <footer className="relative bg-[#07172d] text-slate-300 border-t border-sky-950/60">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand (Colorful Logo + Tagline + CMYK Bar + Follow Us directly underneath) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-2xl bg-white p-2 ring-2 ring-white/20 shrink-0 shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo_1.png"
                  alt="Ravi Arts Enterprises Logo"
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 640px) 64px, 80px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-sky-400 transition-colors leading-tight">
                  RAVI ARTS
                </span>
                <span className="text-xs font-bold tracking-[0.22em] text-sky-400 uppercase mt-0.5">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              All Types Graphic &amp; Signage Solutions
            </p>

            {/* CMYK Brand Gradient Line like Home Page */}
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 shadow-sm" />

            {/* Follow Us Section right below logo and text */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-white block">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow Ravi Arts on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-[#25D366] text-[#25D366]" />
                </a>
              </div>
            </div>
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
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.slice(0, 5).map((item) => (
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

          {/* Column 4: Contact Info & Script Art */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-200">
                <Phone className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919350036399"
                    className="font-bold text-white hover:text-sky-400 transition-colors block leading-tight"
                  >
                    +91 93500 36399
                  </a>
                  <a
                    href="tel:+919971145089"
                    className="font-bold text-white hover:text-sky-400 transition-colors block leading-tight"
                  >
                    +91 99711 45089
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="h-4 w-4 shrink-0 text-rose-400" />
                <a
                  href="mailto:raviarts29@gmail.com"
                  className="hover:text-rose-400 transition-colors"
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
                  className="hover:text-amber-300 transition-colors leading-snug"
                >
                  Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310
                </a>
              </div>
            </div>


          </div>

        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="mt-12 border-t border-slate-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Ravi Arts Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600 select-none" aria-hidden="true">
              |
            </span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-slate-200 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
