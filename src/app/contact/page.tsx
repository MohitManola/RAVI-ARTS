"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactAiBot from "@/components/ContactAiBot";


export default function ContactPage() {
  // Ensure the page always opens from the very top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Flex & Large Format Printing",
    dimensions: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is your workshop located in Kasna?",
      a: "Our workshop and customer reception is located at Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310. You are welcome to visit us during business hours (9:30 AM to 6:30 PM) to inspect physical print media and acrylic samples.",
    },
    {
      q: "Can you deliver and install signboards across Greater Noida and Noida?",
      a: "Yes! We provide complete end-to-end delivery and professional on-site mounting/installation for LED glow signs, 3D acrylic letters, hoardings, and vinyl wraps across all sectors of Greater Noida, Noida, and the Yamuna Expressway.",
    },
    {
      q: "What is your typical turnaround time for flex printing and visiting cards?",
      a: "Standard flex banners can be printed and dispatched on the same day or within 24 hours. Premium business cards and commercial brochures typically take 24 to 48 hours depending on special finishes like spot UV or foiling.",
    },
    {
      q: "What file formats do you accept for printing?",
      a: "We accept high-resolution PDF, CDR (CorelDraw), AI (Adobe Illustrator), EPS, and uncompressed TIFF or PNG files in CMYK color mode for optimal printing color accuracy.",
    },
    {
      q: "Do you offer emergency printing services for urgent trade events?",
      a: "Yes. For urgent conferences, exhibitions at India Expo Mart Greater Noida, or last-minute retail launches, we offer rapid same-day expedited print runs. Call or WhatsApp our hotline directly.",
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    const phoneClean = formData.phone.replace(/\D/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com).";
    }
    if (!formData.service) {
      errs.service = "Please select a service.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Please describe your project or requirement (min 5 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate server communication
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Flex & Large Format Printing",
      dimensions: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#020b1e] text-white min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex items-center">
        {/* Full Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact_us_top.png"
            alt="Contact Us & Request a Quote - Ravi Arts Enterprises"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right select-none"
            quality={95}
          />
          {/* Subtle gradient to ensure flawless text contrast on all devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/95 via-[#020b1e]/75 to-transparent sm:via-[#020b1e]/50 sm:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          <div className="max-w-xl md:max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                GET IN TOUCH
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Contact Us &amp; Request{" "}
              <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">
                a Quote
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">
              Have a question about materials, turnaround times, or need an urgent quotation?
              Our team at Kasna, Greater Noida is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 sm:py-24 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  We&apos;re Here to Help Your Brand{" "}
                  <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                    Stand Out
                  </span>
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Reach out directly via phone, WhatsApp, or visit our workshop in Kasna.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Phone Numbers
                    </span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                      <a
                        href="tel:+919350036399"
                        className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        +91 93500 36399
                      </a>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <a
                        href="tel:+919971145089"
                        className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        +91 99711 45089
                      </a>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Call for instant pricing &amp; inquiries
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-emerald-200/80 shadow-xs hover:border-[#25D366] hover:shadow-md transition-all group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#25D366] uppercase tracking-wider block">
                      WhatsApp Quick Chat
                    </span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                      <a
                        href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20an%20inquiry%20regarding%20printing%20and%20signage."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-slate-900 hover:text-[#25D366] transition-colors"
                      >
                        +91 93500 36399
                      </a>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <a
                        href="https://wa.me/919971145089?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20an%20inquiry%20regarding%20printing%20and%20signage."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-slate-900 hover:text-[#25D366] transition-colors"
                      >
                        +91 99711 45089
                      </a>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Send artwork, photos, or location details directly
                    </span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:raviarts29@gmail.com"
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs hover:border-rose-300 hover:shadow-md transition-all group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      raviarts29@gmail.com
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Send bulk RFP or vendor inquiries
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group cursor-pointer"
                  title="Open in Google Maps"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Workshop Location
                      </span>
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 group-hover:bg-amber-100 transition-colors">
                        View Map ↗
                      </span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 block leading-snug group-hover:text-sky-600 transition-colors mt-0.5">
                      Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310
                    </span>
                  </div>
                </a>

                {/* Timings */}
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Business Hours
                    </span>
                    <span className="text-sm font-bold text-slate-900 block">
                      9:30 AM to 6:30 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Quote Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-sky-100 shadow-xl relative overflow-hidden">
                <div className="h-1.5 w-full cmyk-gradient-line absolute top-0 left-0" />

                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Send Us a{" "}
                    <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                      Message
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in the form below and we will calculate your quote and reply promptly.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-slate-900">
                      Thank You, {formData.name || "Customer"}!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your inquiry regarding{" "}
                      <strong className="text-slate-900">{formData.service}</strong>{" "}
                      has been received. Our team will review your specifications and contact you at{" "}
                      <strong className="text-slate-900">{formData.phone}</strong> or{" "}
                      <strong className="text-slate-900">{formData.email}</strong>.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20just%20sent%20a%20website%20inquiry%20for%20${encodeURIComponent(formData.service)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
                      >
                        <WhatsAppIcon className="h-4 w-4 fill-white" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Verma"
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${errors.name
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            }`}
                        />
                        {errors.name && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="10-digit mobile number"
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${errors.phone
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@business.com"
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${errors.email
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            }`}
                        />
                        {errors.email && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Service Required <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        >
                          <option value="Flex & Large Format Printing">
                            Flex &amp; Large Format Printing
                          </option>
                          <option value="Sign Boards & Signage">
                            Sign Boards &amp; LED Signage
                          </option>
                          <option value="Visiting Cards & Stationery">
                            Visiting Cards &amp; Stationery
                          </option>
                          <option value="Offset & Digital Printing">
                            Offset &amp; Digital Printing
                          </option>
                          <option value="Acrylic / 3D Letter Boards">
                            Acrylic / 3D Letter Boards
                          </option>
                          <option value="Eco-Solvent & Vinyl Printing">
                            Eco-Solvent &amp; Vinyl Printing
                          </option>
                          <option value="Branding & Graphic Design">
                            Branding &amp; Graphic Design
                          </option>
                          <option value="Custom T-Shirt & Apparel">
                            Custom T-Shirt &amp; Apparel
                          </option>
                          <option value="Other Custom Project">
                            Other Custom Project
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Dimensions */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Dimensions or Estimated Quantity (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) =>
                          setFormData({ ...formData, dimensions: e.target.value })
                        }
                        placeholder="e.g. 12x4 ft Outdoor Board, 500 Brochures, etc."
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Project Description <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please describe your requirements, timeline, or design details..."
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${errors.message
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                          }`}
                      />
                      {errors.message && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 disabled:opacity-75 transition-all active:scale-98"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Sending Your Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Message &amp; Get Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GOOGLE MAP LOCATION SECTION
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-sky-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                  WORKSHOP LOCATION
                </span>
                <span className="cmyk-gradient-bar" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Workshop in{" "}
                <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                  Kasna, Greater Noida
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310.
                Open Monday to Saturday, 9:30 AM to 6:30 PM.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?cid=16584880572522717071"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-xs"
              >
                <MapPin className="h-3.5 w-3.5 text-rose-400" />
                <span>Get Driving Directions</span>
              </a>
              <a
                href="tel:+919350036399"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
              >
                <Phone className="h-3.5 w-3.5 text-sky-600" />
                <span>Call +91 93500 36399</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.331024259717!2d77.5394239!3d28.439436099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc13bec362d6f%3A0xe628e6fbd393df8f!2sRavi%20Arts%20Enterprises!5e0!3m2!1sen!2sin!4v1793943161039!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ravi Arts Enterprises Location Map"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>
      <section className="py-14 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                GOT QUESTIONS?
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions &amp;{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                Live Assistant
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Find quick answers on the left or chat with our live interactive assistant on the right for instant guidance.
            </p>
          </div>

          {/* 2-Column Grid: FAQ Left, Chatbot Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Side: FAQ Accordion */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="flex items-center gap-2 pb-1 text-slate-800">
                <HelpCircle className="h-4 w-4 text-sky-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Quick Answers &amp; Workshop FAQs
                </span>
              </div>
              <div className="space-y-3.5 mt-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx
                      ? "border-sky-300 bg-white shadow-md ring-1 ring-sky-300/30"
                      : "border-sky-100 bg-white hover:border-sky-200 shadow-2xs hover:shadow-xs"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="group flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                    >
                      <span className="pr-4 transition-colors group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:via-rose-600 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {faq.q}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all shrink-0 ${openFaq === idx
                          ? "bg-sky-500 text-white rotate-180"
                          : "bg-sky-500 text-white group-hover:bg-sky-600"
                          }`}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                        >
                          <path
                            d="m6 9 6 6 6-6"
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50 bg-sky-50/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side: Live Interactive Chatbot */}
            <div className="lg:col-span-6 sticky top-28">
              <ContactAiBot />
            </div>
          </div>

          {/* Bottom Help Banner */}
          <div className="mt-12 rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 text-center space-y-3 shadow-sm">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Have a Question That Isn&apos;t Answered Here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Our workshop team in Kasna is always ready to assist you with material options, custom sizes, and instant factory estimates.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919350036399"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                <span>Call +91 93500 36399</span>
              </a>
              <a
                href="https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20a%20question%20regarding%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
