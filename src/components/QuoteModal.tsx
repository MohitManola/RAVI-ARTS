"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService = "Flex & Large Format Printing" }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    dimensions: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    const phoneClean = formData.phone.replace(/\D/g, "");
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
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
    // Simulate brief processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: defaultService,
      dimensions: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  const servicesList = [
    "Flex & Large Format Printing",
    "Sign Boards & Signage (Glow / LED / Acrylic)",
    "Visiting Cards & Corporate Stationery",
    "Offset & Digital Commercial Printing",
    "Acrylic / 3D Letter Boards",
    "Eco-Solvent & Vinyl Printing",
    "Branding & Graphic Design",
    "Custom T-Shirt & Apparel Printing",
    "Other / Custom Requirement",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 z-10 overflow-hidden my-8">
        {/* Top Gradient Stripe */}
        <div className="h-2 w-full cmyk-gradient-line" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Request a Free Quote</h3>
              <p className="text-xs text-slate-500">Fast response within 30 minutes</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Thank You, {formData.name || "Customer"}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your quotation request for <span className="font-semibold text-slate-900">{formData.service}</span> has been received successfully.
                Our team at Kasna, Greater Noida will review your requirements and reach out via phone/email shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white" />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dimensions / Quantity */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Estimated Dimensions / Quantity (Optional)
                </label>
                <input
                  type="text"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  placeholder="e.g. 10x4 ft Glow Sign Board, 1000 Visiting Cards, etc."
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Project Details / Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe what you want us to create, design, or print..."
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
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 disabled:opacity-75 transition-all active:scale-98"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
