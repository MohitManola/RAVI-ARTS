"use client";

import React, { useState } from "react";
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
  ChevronDown,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactPage() {
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
      a: "Our workshop and customer reception is located Near Republic honda showroom, Opp. HDFC Bank main road Kasna, Gr. Noida, U.P 201310. You are welcome to visit us during business hours (9:30 AM to 6:30 PM) to inspect physical print media and acrylic samples.",
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
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                GET IN TOUCH
              </span>
              <span className="cmyk-gradient-bar" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
              Contact Us &amp; Request a Quote
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
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
                  We&apos;re Here to Help Your Brand Stand Out
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
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Workshop Location
                    </span>
                    <span className="text-sm font-bold text-slate-900 block leading-snug">
                      Near Republic honda showroom, Opp. HDFC Bank main road Kasna, Gr. Noida, U.P 201310
                    </span>
                  </div>
                </div>

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
                    Send Us a Message
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
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${
                            errors.name
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
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${
                            errors.phone
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
                          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${
                            errors.email
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
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all ${
                          errors.message
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

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 sm:py-20 bg-[#eff7ff] border-t border-sky-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-sky-100 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:bg-sky-50/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-sky-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
