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
    { name: "Flex & Large Format Printing", href: "/services#flex-printing" },
    { name: "Sign Boards & LED Signage", href: "/services#sign-boards" },
    { name: "Visiting Cards & Stationery", href: "/services#stationery" },
    { name: "Offset & Commercial Printing", href: "/services#offset-printing" },
    { name: "Acrylic & 3D Letter Boards", href: "/services#acrylic-letters" },
    { name: "Eco-Solvent & Vinyl Printing", href: "/services#vinyl-printing" },
    { name: "Branding & Graphic Design", href: "/services#graphic-design" },
    { name: "Corporate Gifts & Promotional Products", href: "/services#corporate-gifts" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio & Work", href: "/portfolio" },
    { name: "Client Testimonials", href: "/testimonials" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* CMYK Accent Bar */}
      <div className="h-1.5 w-full cmyk-gradient-line" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 sm:gap-5 group">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 overflow-hidden rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition-transform group-hover:scale-105 shrink-0 shadow-xl">
                <Image
                  src="/images/logo_2.png"
                  alt="Ravi Arts Enterprises Logo"
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white group-hover:text-sky-400 transition-colors leading-tight">
                  RAVI ARTS
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            {/* Direct WhatsApp CTA */}
            <div className="pt-1">
              <a
                href="https://wa.me/919350036399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Social Media & Connect Icons (Instagram, Facebook, Google, WhatsApp) */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* 1. Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ravi Arts Enterprises on Instagram"
                  title="Follow on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-rose-500/25 cursor-pointer"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>

                {/* 2. Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Ravi Arts Enterprises on Facebook"
                  title="Connect on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>

                {/* 3. Google */}
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Google Profile & Location on Google Maps"
                  title="Google Business Profile & Location"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                >
                  <GoogleIcon className="h-5 w-5" />
                </a>

                {/* 4. WhatsApp */}
                <a
                  href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20an%20inquiry%20regarding%20printing%20and%20signage."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ravi Arts Enterprises on WhatsApp"
                  title="Chat on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-[#25D366] transition-all duration-300 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <div className="h-0.5 w-8 bg-sky-500 rounded-full" />
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="h-3 w-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <div className="h-0.5 w-8 bg-rose-500 rounded-full" />
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="text-sky-400">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact & Location
            </h3>
            <div className="h-0.5 w-8 bg-amber-500 rounded-full" />
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <Phone className="h-5 w-5 shrink-0 text-sky-400 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Call Us Directly</span>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:+919350036399"
                      className="font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      +91 93500 36399
                    </a>
                    <a
                      href="tel:+919971145089"
                      className="font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      +91 99711 45089
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="mailto:raviarts29@gmail.com"
                className="flex items-start gap-3 text-slate-300 hover:text-rose-400 transition-colors group"
              >
                <Mail className="h-5 w-5 shrink-0 text-rose-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-slate-500">Email Inquiry</span>
                  <span className="font-medium">raviarts29@gmail.com</span>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-300 hover:text-amber-300 transition-colors group cursor-pointer"
                title="Open location in Google Maps"
              >
                <MapPin className="h-5 w-5 shrink-0 text-amber-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="block text-xs text-slate-500">Workshop & Office</span>
                    <span className="text-[10px] text-amber-400 font-medium group-hover:underline">
                      View on Map ↗
                    </span>
                  </div>
                  <span className="leading-snug block">
                    Near Republic honda showroom, Opp. HDFC Bank main road Kasna, Gr. Noida, U.P 201310
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <Clock className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Business Hours</span>
                  <span>9:30 AM - 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear}{" "}
            <span className="text-slate-300 font-medium">Ravi Arts Enterprises</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span className="inline-block h-3 w-px bg-slate-800" />
            <Link
              href="/terms-and-conditions"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </Link>
            <span className="inline-block h-3 w-px bg-slate-800" />
            <span className="text-slate-400">
              Print • Signage • Branding &amp; More
            </span>
            <span className="inline-block h-3 w-px bg-slate-800" />
            <a
              href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
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
