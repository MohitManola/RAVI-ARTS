"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import YouTubeSearchBar from "@/components/YouTubeSearchBar";
import { useQuote } from "@/context/QuoteContext";

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const { openQuoteModal } = useQuote();
  const handleOpenQuote = onOpenQuote || (() => openQuoteModal());
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and collapse search on page navigation
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsSearchExpanded(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Flex & Large Format Printing", href: "/services#flex-printing", desc: "Banners, flex, vinyl & hoardings" },
        { name: "Sign Boards & Signage", href: "/services#sign-boards", desc: "Glow sign, acrylic, LED & more" },
        { name: "Visiting Cards & Stationery", href: "/services#stationery", desc: "Cards, letterheads, envelopes" },
        { name: "Offset & Digital Printing", href: "/services#offset-printing", desc: "Brochures, flyers, catalogues" },
        { name: "Acrylic / 3D Letter Boards", href: "/services#acrylic-letters", desc: "Indoor & outdoor branding" },
        { name: "Eco-Solvent & Vinyl Printing", href: "/services#vinyl-printing", desc: "Stickers, vehicle wraps & vinyl" },
        { name: "Branding & Graphic Design", href: "/services#graphic-design", desc: "Logos, social media & packaging" },
        { name: "Corporate Gifts & Promotions", href: "/services#corporate-gifts", desc: "Mugs, t-shirts, pens & hampers" },
      ],
    },
    { name: "Our Work", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-xs transition-all duration-300">
        {/* Top Mini Info Bar */}
        <div className="hidden border-b border-slate-100 bg-slate-900 px-4 py-1.5 text-xs text-slate-300 sm:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-sky-400" />
                <a
                  href="tel:+919350036399"
                  className="hover:text-sky-400 transition-colors"
                >
                  +91 93500 36399
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href="tel:+919971145089"
                  className="hover:text-sky-400 transition-colors"
                >
                  99711 45089
                </a>
              </div>
              <a
                href="mailto:raviarts29@gmail.com"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-rose-400" />
                <span>raviarts29@gmail.com</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>Near Republic Honda, Opp. HDFC Bank, Kasna, Gr. Noida</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span>9:30 AM - 6:30 PM</span>
              </div>
              <a
                href="https://wa.me/919350036399"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Ravi Arts Enterprises Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors sm:text-lg">
                RAVI ARTS
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase sm:text-[11px]">
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (matching user's mockup with active blue underline) */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-7 shrink-0">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-1.5"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1.5 text-[15px] font-semibold whitespace-nowrap transition-colors ${
                        isActive(link.href)
                          ? "text-blue-600 font-bold"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:rotate-180" />
                      {isActive(link.href) && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-blue-600" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 ${
                        isServicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/10 border border-slate-100">
                        <div className="mb-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Our Print & Signage Services
                        </div>
                        <div className="space-y-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                            >
                              <div className="text-sm font-medium text-slate-900 hover:text-blue-600">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 border-t border-slate-100 pt-2">
                          <Link
                            href="/services"
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <span>Explore All Solutions</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 text-[15px] font-semibold whitespace-nowrap transition-colors ${
                    isActive(link.href)
                      ? "text-blue-600 font-bold"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: YouTube Search Bar, Vertical Divider, WhatsApp Circle, Dark Pill CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Normal YouTube-style Search Bar: Small (40px) at rest, expands when clicked */}
            <div className="hidden md:block">
              <YouTubeSearchBar
                isExpanded={isSearchExpanded}
                onExpandChange={setIsSearchExpanded}
              />
            </div>

            {/* When search is expanded, HIDE vertical divider, WhatsApp logo, and Get a Quote */}
            {!isSearchExpanded && (
              <>
                {/* Vertical Divider Line */}
                <div className="hidden sm:block h-6 w-px bg-slate-200" aria-hidden="true" />

                {/* Circular WhatsApp Button */}
                <a
                  href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20printing%20and%20signage."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat with Ravi Arts on WhatsApp"
                  className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#eff6ff] hover:bg-[#dbeafe] hover:scale-105 active:scale-95 transition-all shadow-2xs border border-blue-100 cursor-pointer shrink-0"
                >
                  <WhatsAppIcon variant="color" className="h-5.5 w-5.5" />
                </a>

                {/* Dark Pill "Get a Quote ->" Button */}
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0a1526] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-slate-800 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Mobile Search Button on small devices */}
            <div className="md:hidden">
              <YouTubeSearchBar
                isExpanded={isSearchExpanded}
                onExpandChange={setIsSearchExpanded}
              />
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl lg:hidden">
            {/* Mobile YouTube Style Search Bar */}
            <div className="mb-3.5">
              <YouTubeSearchBar onNavigate={() => setIsOpen(false)} isMobile />
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-sky-50 text-sky-600 font-bold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 pl-3 border-l-2 border-slate-100 py-1 space-y-1">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-sky-600 hover:bg-slate-50 font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  handleOpenQuote();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0b172a] py-3 text-sm font-bold text-white shadow-md hover:bg-slate-800 active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="tel:+919350036399"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Phone className="h-3.5 w-3.5 text-sky-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919350036399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

