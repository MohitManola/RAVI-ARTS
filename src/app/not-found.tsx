import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Sparkles, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-6">
        <div className="relative h-20 w-20 overflow-hidden mx-auto">
          <Image
            src="/images/logo.png"
            alt="Ravi Arts Enterprises Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="cmyk-gradient-bar mx-auto mt-4" />
      </div>

      <span className="text-sm font-bold tracking-widest text-sky-600 uppercase">
        404 - Page Not Found
      </span>

      <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
        This Page Has Moved or Doesn&apos;t Exist
      </h1>

      <p className="mt-4 max-w-md text-sm text-slate-600 leading-relaxed mx-auto">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable. Let us guide you back to our printing and signage services.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all active:scale-95"
        >
          <Home className="h-4 w-4" />
          <span>Back to Homepage</span>
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all active:scale-95"
        >
          <span>Explore Services</span>
        </Link>
      </div>

      <div className="mt-12 text-xs text-slate-400">
        Need help right away? Call our Kasna workshop at{" "}
        <a href="tel:+919350036399" className="text-sky-600 font-semibold hover:underline">
          +91 93500 36399
        </a>
      </div>
    </div>
  );
}
