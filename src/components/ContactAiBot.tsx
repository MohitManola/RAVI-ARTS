"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  User,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Phone,
  MapPin,
  Clock,
  Tag,
  Package,
  Layers,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ActionBtn {
  type: "whatsapp" | "call" | "maps" | "menu" | "pricing_flow";
  label: string;
  href?: string;
  onClickAction?: () => void;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  bullets?: string[];
  options?: { label: string; action: () => void }[];
  actions?: ActionBtn[];
  time: string;
}

export default function ContactAiBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Scroll ONLY the internal chatbot container, never the window
  const scrollChatContainer = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    scrollChatContainer();
  }, [messages, isTyping]);

  // Initial welcome message setup
  useEffect(() => {
    showMainMenu(true);
  }, []);

  const addBotMessage = (
    text: string,
    bullets?: string[],
    options?: { label: string; action: () => void }[],
    actions?: ActionBtn[]
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      const msg: ChatMessage = {
        id: Date.now().toString(),
        sender: "bot",
        text,
        bullets,
        options,
        actions,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, msg]);
      setIsTyping(false);
    }, 250);
  };

  const addUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
  };

  // 1. MAIN MENU
  const showMainMenu = (isInitial = false) => {
    if (!isInitial) {
      addUserMessage("Back to Main Menu");
    }

    const options = [
      { label: "📦 View All Services", action: handleShowServices },
      { label: "💰 Check Pricing & Rates", action: handleAskWhichServicePrice },
      { label: "📍 Kasna Workshop Location", action: handleShowLocation },
      { label: "⚡ Turnaround & Delivery Time", action: handleShowTurnaround },
      { label: "📞 Call / Talk to Manager", action: handleShowContact },
    ];

    addBotMessage(
      isInitial
        ? "Namaste! 🙏 Welcome to Ravi Arts Enterprises (Kasna, Greater Noida).\n\nHow can I help you today? Please choose an option below:"
        : "How else can I assist you? Please choose from the options below:",
      undefined,
      options
    );
  };

  // 2. SHOW ALL SERVICES (Bullet point wise)
  const handleShowServices = () => {
    addUserMessage("Show all services");

    const bullets = [
      "Flex & Large Format Printing — Frontlit, Backlit, Star Flex, Roadside Hoardings & Roll-Up Standees",
      "Sign Boards & Signage — LED Glow Signs, 3D ACP Panels, Neon Signs & Storefront Boards",
      "Visiting Cards & Business Stationery — 350 GSM Art Cards, Velvet Touch, Raised Spot UV, Letterheads & Bill Books",
      "Offset & Digital Printing — Multi-Page Catalogues, Product Brochures, Pamphlets & Booklets",
      "Acrylic & 3D Letter Boards — Laser Cut Acrylic Letters, Halo Backlit 3D Letters, Reception Signs",
      "Eco-Solvent & Vinyl Printing — Frosted Glass Film, Die-Cut Stickers, Vehicle Fleet Wraps & One-Way Vision",
      "Branding & Graphic Design — Custom Vector Logos, Packaging Die-Lines, Social Media Kits & Print Artwork",
      "Corporate Gifts & Merchandise — Customised T-Shirts, Mugs, Executive Diaries, Pens & Hampers",
    ];

    const serviceSelectOptions = [
      { label: "Flex & Banner Rates", action: () => handleShowPriceDetail("flex") },
      { label: "Sign Boards & LED Rates", action: () => handleShowPriceDetail("signage") },
      { label: "Visiting Card Rates", action: () => handleShowPriceDetail("visiting_cards") },
      { label: "3D Acrylic Letter Rates", action: () => handleShowPriceDetail("acrylic") },
      { label: "Vinyl & Sticker Rates", action: () => handleShowPriceDetail("vinyl") },
      { label: "Brochure & Offset Rates", action: () => handleShowPriceDetail("offset") },
      { label: "Corporate Gift Rates", action: () => handleShowPriceDetail("gifts") },
      { label: "Design Services Rates", action: () => handleShowPriceDetail("design") },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      "Here are all 8 core services we manufacture in our Kasna workshop (bullet point wise):",
      bullets,
      serviceSelectOptions
    );
  };

  // 3. ASK WHICH SERVICE FOR PRICE
  const handleAskWhichServicePrice = () => {
    addUserMessage("I want to know pricing / rates");

    const serviceOptions = [
      { label: "1. Flex & Banner Printing", action: () => handleShowPriceDetail("flex") },
      { label: "2. Sign Boards & LED Glow Signs", action: () => handleShowPriceDetail("signage") },
      { label: "3. Visiting Cards & Stationery", action: () => handleShowPriceDetail("visiting_cards") },
      { label: "4. Acrylic & 3D Letter Boards", action: () => handleShowPriceDetail("acrylic") },
      { label: "5. Offset, Catalogues & Brochures", action: () => handleShowPriceDetail("offset") },
      { label: "6. Vinyl Stickers & Frosted Film", action: () => handleShowPriceDetail("vinyl") },
      { label: "7. Corporate Gifts (Mugs, T-Shirts)", action: () => handleShowPriceDetail("gifts") },
      { label: "8. Graphic Design & Logo Making", action: () => handleShowPriceDetail("design") },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      "💰 We offer direct factory wholesale rates with zero middleman or agent commissions!\n\nWhich service do you need pricing for? Please select:",
      undefined,
      serviceOptions
    );
  };

  // 4. PRICE DETAIL PER SERVICE
  const handleShowPriceDetail = (serviceKey: string) => {
    let serviceName = "";
    let bullets: string[] = [];
    let waText = "";

    switch (serviceKey) {
      case "flex":
        serviceName = "Flex & Large Format Printing";
        bullets = [
          "Direct factory rates calculated per square foot (Length × Height in ft).",
          "Normal Frontlit Flex: Economical per-sq-ft rate, best for short-term events & promotions.",
          "Star Flex Media: Denser weave, photorealistic colors & heavy outdoor durability.",
          "Backlit Flex & Standees: Available with metal eyelets and reinforced hemming.",
          "Same-day print & dispatch available from our Kasna factory!",
        ];
        waText = "Hello Ravi Arts Enterprises, please share flex banner rate. My size is: ";
        break;

      case "signage":
        serviceName = "Sign Boards & LED Glow Signs";
        bullets = [
          "Rates depend on total board square footage + letter count + illumination type.",
          "Branded ACP sheet base (Aludecor / Eurobond) with CNC router laser cutting.",
          "Equipped with IP67/IP68 waterproof Samsung/Osram LEDs with up to 2 years warranty.",
          "Complete MS iron frame fabrication and turnkey on-site mounting in Greater Noida.",
        ];
        waText = "Hello Ravi Arts Enterprises, I want a price quote for LED Sign Board. Size is: ";
        break;

      case "visiting_cards":
        serviceName = "Visiting Cards & Stationery";
        bullets = [
          "Standard & Executive Art Cards: 350 GSM heavy card stock.",
          "Finishing available: Velvet touch, Ultra Matte, Gloss, Raised Spot UV & Gold Foiling.",
          "Minimum order from 100 cards up to bulk corporate employee packages.",
          "Turnaround time: 24 to 48 hours.",
        ];
        waText = "Hello Ravi Arts Enterprises, please send visiting card pricing packages.";
        break;

      case "acrylic":
        serviceName = "Acrylic & 3D Letter Boards";
        bullets = [
          "Rates calculated based on letter height (inches), acrylic depth (3mm to 20mm), and finish.",
          "Finishes: High-gloss cast acrylic, brushed titanium gold, satin silver & halo backlit glow.",
          "Precision CO2 laser cut with diamond polished edges.",
          "Includes 1:1 scale stencil template and concealed stud wall mounting.",
        ];
        waText = "Hello Ravi Arts Enterprises, I need pricing for 3D Acrylic Letters.";
        break;

      case "offset":
        serviceName = "Offset & Commercial Brochures";
        bullets = [
          "Wholesale per-unit rates designed for bulk runs (500 to 50,000+ copies).",
          "Bi-fold, tri-fold brochures, multi-page product catalogues & flyers.",
          "Imported 130 GSM to 350 GSM art paper with aqueous coating & thermal lamination.",
          "Free pre-press artwork verification to prevent costly errors.",
        ];
        waText = "Hello Ravi Arts Enterprises, please share brochure & catalogue offset printing rates.";
        break;

      case "vinyl":
        serviceName = "Eco-Solvent Vinyl & Stickers";
        bullets = [
          "Rates calculated by square feet or die-cut sticker batch quantity.",
          "Self-adhesive cast vinyl: 100% waterproof, scratch-resistant & UV-proof.",
          "Frosted glass film for office cabins & perforated one-way vision for retail windows.",
          "Digital optical-eye contour cutting for custom shaped labels.",
        ];
        waText = "Hello Ravi Arts Enterprises, I need vinyl printing & sticker rates.";
        break;

      case "gifts":
        serviceName = "Corporate Gifts & Merchandise";
        bullets = [
          "Wholesale tiered pricing on bulk orders of 50 to 10,000+ pieces.",
          "Custom ceramic & insulated mugs, 100% cotton embroidered t-shirts, engraved metal pens & executive diaries.",
          "Permanent laser engraving, UV printing & screen print customization in-house.",
        ];
        waText = "Hello Ravi Arts Enterprises, please send corporate gifting catalog & price list.";
        break;

      case "design":
      default:
        serviceName = "Branding & Graphic Design";
        bullets = [
          "Original vector logo creation & brand identity packages.",
          "Print-ready CMYK layouts in CorelDraw (CDR), Adobe Illustrator (AI), and high-res PDF.",
          "Full commercial copyright ownership transferred upon completion.",
          "Signage scale layouts & 3D photorealistic previews before manufacturing.",
        ];
        waText = "Hello Ravi Arts Enterprises, I need graphic design & logo assistance.";
        break;
    }

    addUserMessage(`Tell me price for: ${serviceName}`);

    const actions: ActionBtn[] = [
      {
        type: "whatsapp",
        label: "Get Exact Rate on WhatsApp",
        href: `https://wa.me/919350036399?text=${encodeURIComponent(waText)}`,
      },
      {
        type: "call",
        label: "Call Supervisor: 9350036399",
        href: "tel:+919350036399",
      },
    ];

    const followUpOptions = [
      { label: "💰 Check Price for Another Service", action: handleAskWhichServicePrice },
      { label: "📦 View All Services List", action: handleShowServices },
      { label: "📍 Kasna Workshop Location", action: handleShowLocation },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      `🏷️ **Pricing & Rate Guide for ${serviceName}:**`,
      bullets,
      followUpOptions,
      actions
    );
  };

  // 5. LOCATION DETAIL
  const handleShowLocation = () => {
    addUserMessage("Where is your Kasna workshop located?");

    const bullets = [
      "Landmark Address: Near Republic Honda Showroom, Opp. HDFC Bank, Main Road Kasna, Greater Noida, UP - 201310.",
      "Business Hours: 9:30 AM to 6:30 PM (Open 7 Days a week).",
      "Touch & Inspect Physical Media: You are welcome to visit our workshop to touch paper stocks, check flex GSM thickness, and see live acrylic LED glow letters.",
      "Parking: Easy roadside parking directly outside the workshop.",
    ];

    const actions: ActionBtn[] = [
      {
        type: "maps",
        label: "Open in Google Maps",
        href: "https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw",
      },
      {
        type: "call",
        label: "Call for Directions: 9350036399",
        href: "tel:+919350036399",
      },
    ];

    const followUpOptions = [
      { label: "💰 Check Pricing & Rates", action: handleAskWhichServicePrice },
      { label: "⚡ Turnaround Times", action: handleShowTurnaround },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      "📍 **Ravi Arts Enterprises Workshop Location:**",
      bullets,
      followUpOptions,
      actions
    );
  };

  // 6. TURNAROUND TIME
  const handleShowTurnaround = () => {
    addUserMessage("How fast can you print and deliver?");

    const bullets = [
      "Flex Banners & Standees: Same-Day or within 24 Hours.",
      "Visiting Cards & Stationery: 24 to 48 Hours with lamination.",
      "Custom LED Glow Signs & 3D Letters: 3 to 5 Business Days (includes frame welding & waterproof testing).",
      "Emergency India Expo Mart Orders: Express same-day print runs for trade fairs and exhibitions!",
      "Doorstep delivery & on-site mounting across all sectors of Greater Noida, Kasna & Noida.",
    ];

    const actions: ActionBtn[] = [
      {
        type: "whatsapp",
        label: "Request Urgent Same-Day Order",
        href: "https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20an%20urgent%20same-day%20print%20order.",
      },
    ];

    const followUpOptions = [
      { label: "💰 Check Pricing for Services", action: handleAskWhichServicePrice },
      { label: "📦 View All Services", action: handleShowServices },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      "⚡ **Turnaround Time & Delivery Speed:**",
      bullets,
      followUpOptions,
      actions
    );
  };

  // 7. DIRECT CONTACT
  const handleShowContact = () => {
    addUserMessage("I want to speak with your team directly");

    const bullets = [
      "Phone Line 1: +91 93500 36399 (WhatsApp available)",
      "Phone Line 2: +91 99711 45089",
      "Email: raviarts29@gmail.com",
      "Speak directly with our production manager — no automated computer menus!",
    ];

    const actions: ActionBtn[] = [
      {
        type: "call",
        label: "Call Now: +91 93500 36399",
        href: "tel:+919350036399",
      },
      {
        type: "whatsapp",
        label: "Chat on WhatsApp",
        href: "https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20want%20to%20discuss%20a%20printing%20requirement.",
      },
    ];

    const followUpOptions = [
      { label: "💰 Check Pricing", action: handleAskWhichServicePrice },
      { label: "📦 View All Services", action: handleShowServices },
      { label: "↩️ Main Menu", action: () => showMainMenu() },
    ];

    addBotMessage(
      "📞 **Direct Workshop Contact Information:**",
      bullets,
      followUpOptions,
      actions
    );
  };

  return (
    <div className="rounded-3xl bg-white border border-sky-100 shadow-xl overflow-hidden flex flex-col h-[580px] sm:h-[620px]">
      {/* Bot Header */}
      <div className="bg-[#07172d] text-white p-4 sm:p-5 flex items-center justify-between border-b border-sky-900/30">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00a8ff] to-[#0055ff] shadow-md">
            <Bot className="h-5 w-5 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#07172d]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Ravi Arts Interactive Assistant
              </h3>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-300">Tap options below for services, prices &amp; Kasna location</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setMessages([]);
            showMainMenu(true);
          }}
          title="Restart Assistant"
          aria-label="Restart Assistant"
          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Internal Chat Stream (Scrolls ONLY inside this div) */}
      <div
        ref={chatScrollRef}
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                msg.sender === "user"
                  ? "bg-slate-900 text-white"
                  : "bg-sky-600 text-white"
              }`}
            >
              {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>

            <div
              className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                msg.sender === "user"
                  ? "bg-slate-900 text-white rounded-tr-none"
                  : "bg-white text-slate-800 border border-sky-100 rounded-tl-none space-y-3"
              }`}
            >
              <p className="whitespace-pre-line font-medium">{msg.text}</p>

              {/* Bullet Points (If any) */}
              {msg.bullets && msg.bullets.length > 0 && (
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  {msg.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                      <span className="text-sky-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons (WhatsApp / Call / Maps) */}
              {msg.actions && msg.actions.length > 0 && (
                <div className="pt-3 flex flex-wrap items-center gap-2 border-t border-slate-100">
                  {msg.actions.map((act, i) => (
                    <a
                      key={i}
                      href={act.href}
                      target={act.type === "whatsapp" || act.type === "maps" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 text-sky-700 px-3.5 py-1.5 text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer border border-sky-200"
                    >
                      {act.type === "whatsapp" && <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />}
                      {act.type === "call" && <Phone className="h-3.5 w-3.5 text-sky-600" />}
                      {act.type === "maps" && <MapPin className="h-3.5 w-3.5 text-amber-500" />}
                      <span>{act.label}</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}

              {/* Interactive Follow-Up Options */}
              {msg.options && msg.options.length > 0 && (
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Choose an option below:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={opt.action}
                        className="text-left text-xs font-semibold text-slate-700 hover:text-sky-600 bg-slate-50 hover:bg-sky-50/80 hover:border-sky-300 border border-slate-200/90 rounded-xl p-2.5 transition-all flex items-center justify-between gap-2 group cursor-pointer"
                      >
                        <span className="truncate">{opt.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <span
                className={`block text-[10px] pt-1 ${
                  msg.sender === "user" ? "text-slate-400 text-right" : "text-slate-400"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-11">
            <Bot className="h-4 w-4 text-sky-500 animate-pulse" />
            <span>Assistant is typing...</span>
          </div>
        )}
      </div>

      {/* Bottom Quick Controls Bar */}
      <div className="bg-white border-t border-slate-200 p-3 flex items-center justify-between gap-2 select-none">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <button
            type="button"
            onClick={handleShowServices}
            className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all shrink-0 cursor-pointer"
          >
            📦 Our Services
          </button>
          <button
            type="button"
            onClick={handleAskWhichServicePrice}
            className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all shrink-0 cursor-pointer"
          >
            💰 Check Price
          </button>
          <button
            type="button"
            onClick={handleShowLocation}
            className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all shrink-0 cursor-pointer"
          >
            📍 Location
          </button>
          <button
            type="button"
            onClick={handleShowTurnaround}
            className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all shrink-0 cursor-pointer"
          >
            ⚡ Turnaround
          </button>
          <button
            type="button"
            onClick={() => showMainMenu()}
            className="whitespace-nowrap rounded-full bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
          >
            🏠 Menu
          </button>
        </div>
      </div>
    </div>
  );
}
