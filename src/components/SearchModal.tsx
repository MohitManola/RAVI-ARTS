"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Products" | "Pages";
  badge: string;
  desc: string;
  href: string;
  keywords: string[];
}

export const searchCatalog: SearchItem[] = [
  // Core Services
  {
    id: "flex-printing",
    title: "Flex & Large Format Printing",
    category: "Services",
    badge: "Printing",
    desc: "Outdoor hoardings, frontlit/backlit flex, star flex, banners & exhibition backdrops.",
    href: "/services#flex-printing",
    keywords: ["flex", "banner", "hoarding", "large format", "star flex", "backlit", "backdrop"],
  },
  {
    id: "sign-boards",
    title: "Sign Boards & Signage",
    category: "Services",
    badge: "Signage",
    desc: "LED glow signs, acrylic letters, 3D ACP panels, neon letters & retail store boards.",
    href: "/services#sign-boards",
    keywords: ["sign", "glow sign", "led", "acrylic", "acp", "neon", "board", "shop board"],
  },
  {
    id: "visiting-cards",
    title: "Visiting Cards & Stationery",
    category: "Services",
    badge: "Stationery",
    desc: "Premium matte/gloss visiting cards, letterheads, bill books, envelopes & ID cards.",
    href: "/services#stationery",
    keywords: ["visiting card", "business card", "cards", "letterhead", "stationery", "bill book", "id card"],
  },
  {
    id: "offset-printing",
    title: "Offset & Digital Printing",
    category: "Services",
    badge: "Printing",
    desc: "Multi-page brochures, product catalogues, marketing flyers, pamphlets & packaging inserts.",
    href: "/services#offset-printing",
    keywords: ["offset", "digital", "brochure", "catalogue", "flyer", "pamphlet", "booklet"],
  },
  {
    id: "acrylic-letters",
    title: "Acrylic / 3D Letter Boards",
    category: "Services",
    badge: "Signage",
    desc: "Precision laser cut 3D acrylic letters, titanium metallic finishes & halo backlit illumination.",
    href: "/services#acrylic-letters",
    keywords: ["3d letter", "acrylic", "laser cut", "metal letters", "titanium", "halo", "reception"],
  },
  {
    id: "vinyl-printing",
    title: "Eco-Solvent & Vinyl Printing",
    category: "Services",
    badge: "Vinyl",
    desc: "Die-cut stickers, commercial vehicle wraps, frosted glass partition film & wall decals.",
    href: "/services#vinyl-printing",
    keywords: ["vinyl", "sticker", "vehicle wrap", "eco solvent", "frosted", "glass film", "decals"],
  },
  {
    id: "graphic-design",
    title: "Branding & Graphic Design",
    category: "Services",
    badge: "Design",
    desc: "Custom logo design, brand identity kits, vector artwork & print-ready layout formulation.",
    href: "/services#graphic-design",
    keywords: ["logo", "design", "graphic design", "branding", "identity", "artwork", "vector"],
  },
  {
    id: "corporate-gifts",
    title: "Corporate Gifts & Promotional Products",
    category: "Services",
    badge: "Gifts",
    desc: "Custom printed coffee mugs, screen-printed corporate t-shirts, engraved pens, diaries & gift sets.",
    href: "/services#corporate-gifts",
    keywords: ["gift", "corporate gift", "mug", "tshirt", "t-shirt", "pen", "diary", "promotional", "hamper"],
  },

  // Popular Specific Products
  {
    id: "sunboard-printing",
    title: "Sunboard & Foam Sheet Printing",
    category: "Products",
    badge: "Printing",
    desc: "Rigid lightweight display boards for showroom branding, exhibitions & retail point-of-sale.",
    href: "/services#flex-printing",
    keywords: ["sunboard", "foam sheet", "rigid board", "display board"],
  },
  {
    id: "vehicle-graphics",
    title: "Commercial Fleet Vehicle Wraps",
    category: "Products",
    badge: "Vinyl",
    desc: "High-grade outdoor vinyl wraps for trucks, delivery vans, commercial autos & cars.",
    href: "/services#vinyl-printing",
    keywords: ["vehicle", "car wrap", "van wrap", "truck wrap", "fleet", "auto"],
  },
  {
    id: "custom-mugs",
    title: "Personalized Ceramic & Insulated Mugs",
    category: "Products",
    badge: "Gifts",
    desc: "Sublimation full-color photo mugs & laser marked stainless steel travel tumblers.",
    href: "/services#corporate-gifts",
    keywords: ["mug", "coffee mug", "water bottle", "tumbler", "sipper"],
  },
  {
    id: "safety-signage",
    title: "Factory Safety & Night Glow Signage",
    category: "Products",
    badge: "Signage",
    desc: "Photoluminescent fire emergency exit signs, caution boards & industrial plant markers.",
    href: "/services#sign-boards",
    keywords: ["safety", "night glow", "fire exit", "glow in dark", "danger", "caution"],
  },

  // Pages
  {
    id: "about-page",
    title: "About Ravi Arts Enterprises",
    category: "Pages",
    badge: "Company",
    desc: "20+ years of printing excellence, in-house Kasna factory & manufacturing machinery.",
    href: "/about",
    keywords: ["about", "company", "kasna", "factory", "owner", "infrastructure", "experience"],
  },
  {
    id: "portfolio-page",
    title: "Our Work & Portfolio Gallery",
    category: "Pages",
    badge: "Gallery",
    desc: "See real photos of completed signboards, hoardings, cards & printing projects.",
    href: "/portfolio",
    keywords: ["portfolio", "our work", "gallery", "projects", "photos", "sample"],
  },
  {
    id: "testimonials-page",
    title: "Client Testimonials & Reviews",
    category: "Pages",
    badge: "Reviews",
    desc: "Feedback from verified retail showroom owners, corporate managers, and local clients.",
    href: "/testimonials",
    keywords: ["testimonial", "reviews", "feedback", "clients", "rating"],
  },
  {
    id: "contact-page",
    title: "Contact Us & Location Map",
    category: "Pages",
    badge: "Contact",
    desc: "Opp. HDFC Bank, Near Republic Honda, Kasna, Greater Noida. Phone & WhatsApp.",
    href: "/contact",
    keywords: ["contact", "phone", "address", "location", "email", "map", "kasna"],
  },
];

const popularSearches = [
  "Flex Printing",
  "LED Sign Board",
  "Visiting Cards",
  "Corporate Gifts",
  "Brochure Printing",
  "Acrylic 3D Letters",
  "Sunboard Printing",
  "Vehicle Vinyl",
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const { openQuoteModal } = useQuote();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K and Esc listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter search results
  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? searchCatalog.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(trimmed);
        const inDesc = item.desc.toLowerCase().includes(trimmed);
        const inBadge = item.badge.toLowerCase().includes(trimmed);
        const inKeywords = item.keywords.some((k) => k.includes(trimmed));
        return inTitle || inDesc || inBadge || inKeywords;
      })
    : [];

  // Keyboard navigation
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      const target = results[selectedIndex];
      if (target) {
        router.push(target.href);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search site"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200/90 transition-all duration-300 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="relative flex items-center border-b border-slate-100 px-5 py-4">
          <Search className="h-5 w-5 text-sky-600 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search printing, signage, corporate gifts, visiting cards..."
            className="w-full text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search input"
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors mr-2 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-flex items-center text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 mr-2">
              ESC
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search modal"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {trimmed ? (
            results.length > 0 ? (
              <div className="space-y-2">
                <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Matching Results ({results.length})
                </div>
                {results.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group flex items-start justify-between gap-4 rounded-2xl p-3.5 transition-all duration-200 ${
                        isSelected
                          ? "bg-sky-50/80 border border-sky-200 shadow-xs"
                          : "bg-slate-50/50 hover:bg-slate-100/70 border border-transparent"
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {item.title}
                          </span>
                          <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-sky-700 shadow-2xs">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center pt-1 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <Search className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-800">
                  No direct results found for &ldquo;{query}&rdquo;
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  We custom print and fabricate any custom specification. Request a quick quote and our team will assist you immediately.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openQuoteModal(query);
                  }}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-sky-600 transition-all cursor-pointer"
                >
                  <span>Request Custom Quote for &ldquo;{query}&rdquo;</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )
          ) : (
            <div className="space-y-5">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-1.5 px-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        inputRef.current?.focus();
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/70 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 transition-all cursor-pointer"
                    >
                      <Search className="h-3 w-3 text-slate-400" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Category Directory */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 px-1 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <Layers className="h-3.5 w-3.5 text-sky-500" />
                  <span>Quick Categories</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    href="/services#flex-printing"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl p-2.5 border border-slate-100 bg-slate-50/50 hover:bg-sky-50/60 hover:border-sky-200 transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600">
                      Flex & Large Format Printing
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="/services#sign-boards"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl p-2.5 border border-slate-100 bg-slate-50/50 hover:bg-sky-50/60 hover:border-sky-200 transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600">
                      Sign Boards & 3D Letters
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="/services#stationery"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl p-2.5 border border-slate-100 bg-slate-50/50 hover:bg-sky-50/60 hover:border-sky-200 transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600">
                      Visiting Cards & Stationery
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="/services#corporate-gifts"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl p-2.5 border border-slate-100 bg-slate-50/50 hover:bg-sky-50/60 hover:border-sky-200 transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600">
                      Corporate Gifts & Mugs
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-5 py-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="font-semibold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">↑</kbd> <kbd className="font-semibold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">↓</kbd> to navigate</span>
            <span><kbd className="font-semibold text-slate-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">↵</kbd> to select</span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              openQuoteModal();
            }}
            className="font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
          >
            Get a Quote &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
