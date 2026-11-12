"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, TrendingUp } from "lucide-react";
import {
  searchCatalog,
  filterSearchCatalog,
  type SearchCatalogItem,
} from "@/data/searchCatalog";

export { searchCatalog, type SearchCatalogItem };

const trendingSearches = [
  { text: "Flex Printing", href: "/services/flex-printing" },
  { text: "LED Sign Board", href: "/services/sign-boards" },
  { text: "Visiting Cards", href: "/services/stationery" },
  { text: "Acrylic 3D Letters", href: "/services/acrylic-letters" },
  { text: "Corporate Gifts & Mugs", href: "/services/corporate-gifts" },
  { text: "Vinyl Stickers & Wraps", href: "/services/vinyl-printing" },
  { text: "Brochures & Catalogues", href: "/services/offset-printing" },
];

interface YouTubeSearchBarProps {
  onNavigate?: () => void;
  isMobile?: boolean;
  isExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

export default function YouTubeSearchBar({
  onNavigate,
  isMobile = false,
  isExpanded = false,
  onExpandChange,
}: YouTubeSearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically when expanded
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        inputRef.current?.focus();
        setIsOpen(true);
      }, 50);
    } else if (!isMobile) {
      setIsOpen(false);
      setQuery("");
    }
  }, [isExpanded, isMobile]);

  // Global Ctrl+K / Cmd+K shortcut listener (only for the currently visible search bar)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        if (!containerRef.current || containerRef.current.offsetParent === null) {
          return;
        }
        e.preventDefault();
        if (onExpandChange) {
          onExpandChange(true);
        }
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [onExpandChange]);

  // Close dropdown & collapse on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        if (!isMobile && onExpandChange) {
          onExpandChange(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, onExpandChange]);

  // Filter items matching query with multi-word ranked matching
  const trimmed = query.trim().toLowerCase();
  const results = trimmed ? filterSearchCatalog(query).slice(0, 7) : [];

  const handleSelect = (href: string) => {
    setIsOpen(false);
    if (!isMobile && onExpandChange) {
      onExpandChange(false);
    }
    inputRef.current?.blur();
    if (onNavigate) onNavigate();
    router.push(href);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // If the user used keyboard navigation to select a specific suggestion, navigate directly
    if (selectedIndex >= 0 && results[selectedIndex]) {
      handleSelect(results[selectedIndex].href);
      return;
    }
    // If there is a search term, navigate to the filtered services results page
    if (trimmed) {
      handleSelect(`/services?q=${encodeURIComponent(query.trim())}`);
      return;
    }
    // Otherwise open services catalog
    handleSelect("/services");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      const max = trimmed ? results.length : trendingSearches.length;
      if (max > 0) {
        setSelectedIndex((prev) => (prev + 1) % max);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const max = trimmed ? results.length : trendingSearches.length;
      if (max > 0) {
        setSelectedIndex((prev) => (prev - 1 + max) % max);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (!trimmed && selectedIndex >= 0 && trendingSearches[selectedIndex]) {
        handleSelect(trendingSearches[selectedIndex].href);
        return;
      }
      handleSubmit();
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
      if (!isMobile && onExpandChange) {
        onExpandChange(false);
      }
    }
  };

  // Helper to highlight matched query tokens safely in text
  const renderHighlighted = (text: string, highlight: string) => {
    const terms = highlight
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (terms.length === 0) return text;

    const pattern = new RegExp(`(${terms.join("|")})`, "gi");
    const parts = text.split(pattern);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-extrabold text-blue-600">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // If NOT mobile and NOT expanded, show the compact small search button (takes ~40px)
  if (!isMobile && !isExpanded) {
    return (
      <button
        type="button"
        onClick={() => {
          if (onExpandChange) onExpandChange(true);
        }}
        aria-label="Search services"
        title="Search printing & signage (Ctrl+K)"
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer"
      >
        <Search className="h-5 w-5 stroke-[2.2]" />
      </button>
    );
  }

  // Expanded search bar
  return (
    <div
      ref={containerRef}
      className={`relative ${
        isMobile
          ? "w-full"
          : "w-52 xs:w-64 sm:w-80 md:w-96 max-w-[calc(100vw-120px)] sm:max-w-full animate-in fade-in zoom-in-95 duration-150"
      }`}
    >
      {/* YouTube Style Search Bar Input Container */}
      <div className="flex items-center gap-1.5 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex items-center rounded-full border border-slate-300 bg-white shadow-xs hover:border-slate-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200 overflow-hidden"
        >
          {/* Inner Search Icon */}
          <div className="pl-3.5 pr-1.5 text-slate-400 shrink-0">
            <Search className="h-4 w-4" />
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(-1);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search services, products, visiting cards..."
            aria-label="Search"
            className="w-full py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(-1);
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="p-1 mr-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer rounded-full hover:bg-slate-200/60"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}

          {/* YouTube Style Right Search Button */}
          <button
            type="submit"
            aria-label="Submit search"
            title="Search"
            className="h-9 px-3 sm:px-3.5 flex items-center justify-center bg-slate-100/90 hover:bg-slate-200 border-l border-slate-200 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer shrink-0"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        {/* Desktop Close Button to collapse search and restore WhatsApp & Get a Quote */}
        {!isMobile && onExpandChange && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              onExpandChange(false);
            }}
            aria-label="Close search"
            title="Close search"
            className="h-9 w-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* YouTube Style Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[calc(100vw-24px)] xs:w-[360px] sm:w-[420px] max-w-[440px] rounded-2xl bg-white shadow-2xl border border-slate-200/90 py-2 z-[999] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {trimmed ? (
            results.length > 0 ? (
              <div className="py-1">
                {results.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-slate-100 text-blue-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Search
                          className={`h-4 w-4 shrink-0 ${
                            isSelected ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm truncate">
                            {renderHighlighted(item.title, query)}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                        {item.badge}
                      </span>
                    </button>
                  );
                })}

                {/* Bottom Row: Search for query */}
                <div className="border-t border-slate-100 mt-1 pt-1">
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="h-3.5 w-3.5" />
                      <span>Search all services for &ldquo;{query}&rdquo;</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-4 px-4 text-center">
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  No direct matches for &ldquo;{query}&rdquo;
                </p>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  <span>Search across Services catalog</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )
          ) : (
            // Popular / Trending suggestions when query is empty
            <div className="py-1">
              <div className="flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <TrendingUp className="h-3 w-3 text-blue-500" />
                <span>Popular Searches</span>
              </div>
              {trendingSearches.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={item.text}
                    type="button"
                    onClick={() => handleSelect(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-slate-100 text-blue-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Search
                      className={`h-3.5 w-3.5 shrink-0 ${
                        isSelected ? "text-blue-600" : "text-slate-400"
                      }`}
                    />
                    <span>{item.text}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
