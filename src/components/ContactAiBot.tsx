"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  User,
  RefreshCw,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ActionBtn {
  type: "whatsapp" | "call";
  label: string;
  href: string;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  actions?: ActionBtn[];
  time: string;
}

const GREETING_REPLY =
  "Hello! I am Ravi Arts Enterprises. How can I help you today with Flex Printing, 3D LED Sign Boards, Visiting Cards, or custom signage?";

const QUICK_ACTIONS: ActionBtn[] = [
  {
    type: "whatsapp",
    label: "WhatsApp Us",
    href: "https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises,%20I%20have%20an%20inquiry.",
  },
  {
    type: "call",
    label: "Call +91 93500 36399",
    href: "tel:+919350036399",
  },
  {
    type: "call",
    label: "Call +91 99711 45089",
    href: "tel:+919971145089",
  },
];

const SUGGESTED_QUESTIONS = [
  "Flex & Vinyl Printing",
  "3D LED Sign Board",
  "Visiting Cards & Brochures",
  "Pricing & Rates",
  "Kasna Workshop Location",
];

/** Builds a helpful Ravi Arts Enterprises reply tailored to the user's message. */
function getBotResponse(rawQuery: string): string {
  const q = rawQuery.toLowerCase();

  if (/^(hi|hii|hello|hey|namaste|good morning|good evening)\b/.test(q.trim())) {
    return "Hello! I am Ravi Arts Enterprises. We handle all types of printing, signage, and graphic solutions at our Kasna, Greater Noida/Delhi NCR workshop. Tell me what you need—like flex banners, 3D LED boards, visiting cards, or bulk prints!";
  }

  if (/(location|address|where|kasna|noida|map|visit|shop|workshop|timing|hours|open|phone|number|contact|call)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. Visit our workshop at Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310 (Mon–Sat, 9:30 AM to 6:30 PM). You can call us anytime on +91 93500 36399 or +91 99711 45089.";
  }

  if (/(price|pricing|rate|cost|quote|estimate|budget|cheap|charge|how much)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. Pricing depends on material, dimensions (sq. ft.), and quantity—and because we print in-house at Kasna, you get direct factory rates with zero middlemen. Message us your size or requirement on WhatsApp (+91 93500 36399) or call +91 99711 45089 for an instant quote!";
  }

  if (/(sign|led|acrylic|glow|acp|3d|neon|hoarding|board|nameplate)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. We manufacture custom 3D Acrylic LED Letters, ACP Elevation Boards, Glow Sign Boards, Metal Brass/SS Letters, and Outdoor Hoardings with site measurement and installation across Greater Noida & Delhi NCR. Call +91 93500 36399 or +91 99711 45089 to schedule a site check!";
  }

  if (/(flex|banner|vinyl|backdrop|standee|sunboard|branding|wrap|sticker|one way|window)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. We do high-DPI Star Flex, Blackout Flex, Eco-Solvent Vinyl, One-Way Vision film, Sunboard mounts, Roll-Up Standees, and vehicle branding with fast turnaround. Share your dimensions on WhatsApp or call +91 93500 36399 / +91 99711 45089!";
  }

  if (/(card|visiting|brochure|pamphlet|flyer|catalog|bill|book|letterhead|offset|stationery|invitation|menu)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. We print matte/velvet laminated Visiting Cards, Brochures, Pamphlets, Bill Books, Letterheads, Flyers, Menus, and Event Invitations on sharp offset & digital presses. Reach us at +91 93500 36399 or +91 99711 45089 for samples and rates!";
  }

  if (/(gift|mug|tshirt|t-shirt|shirt|trophy|bottle|box|package|packaging|label|corporate|dairy|diary|pen)/.test(q)) {
    return "Hello! I am Ravi Arts Enterprises. We customize Corporate Gift kits, engraved bottles/diaries, branded T-shirts, mugs, trophies, and product packaging boxes/labels for businesses and events. Contact +91 93500 36399 or +91 99711 45089 for bulk pricing!";
  }

  return "Hello! I am Ravi Arts Enterprises. We provide Flex & Vinyl Printing, 3D LED & ACP Sign Boards, Offset & Digital Stationery, Packaging, and Corporate Gifts in Kasna, Greater Noida/Delhi NCR - 201310. Share your project details on WhatsApp or call +91 93500 36399 / +91 99711 45089 and our team will assist you right away!";
}

export default function ContactAiBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  // Scroll ONLY the internal chatbot stream, never jumping the window
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

  const initChat = () => {
    setMessages([
      {
        id: "init-1",
        sender: "bot",
        text: GREETING_REPLY,
        actions: QUICK_ACTIONS,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Initial welcome message setup
  useEffect(() => {
    initChat();
  }, []);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Simulate short AI typing delay
    setIsTyping(true);
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: getBotResponse(text),
        actions: QUICK_ACTIONS,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden flex flex-col h-[580px] sm:h-[620px] transition-all">
      {/* Premium Header */}
      <div className="bg-[#071328] text-white px-5 py-4 flex items-center justify-between border-b border-sky-950/60 select-none">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 shadow-md">
            <Bot className="h-5 w-5 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#071328] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-sm sm:text-base leading-tight text-white tracking-tight">
                Ravi Arts Enterprises AI
              </h3>
              <span className="inline-flex items-center rounded-full bg-sky-500/20 text-sky-300 px-1.5 py-0.2 text-[10px] font-semibold border border-sky-400/30">
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Replies instantly &bull; Kasna Workshop</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={initChat}
          title="Restart Conversation"
          aria-label="Restart Conversation"
          className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Internal Chat Stream */}
      <div
        ref={chatScrollRef}
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#f8fafc]"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 animate-in fade-in duration-200 ${msg.sender === "user" ? "flex-row-reverse" : ""
              }`}
          >
            {/* Avatar */}
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-2xs ${msg.sender === "user"
                  ? "bg-slate-900 text-white"
                  : "bg-sky-600 text-white"
                }`}
            >
              {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${msg.sender === "user"
                  ? "bg-slate-900 text-white rounded-tr-xs shadow-xs font-medium"
                  : "bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs shadow-xs space-y-3 font-semibold"
                }`}
            >
              <p>{msg.text}</p>

              {/* Action Buttons (WhatsApp / Call) */}
              {msg.actions && msg.actions.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100">
                  {msg.actions.map((act, i) => (
                    <a
                      key={i}
                      href={act.href}
                      target={act.type === "whatsapp" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer shadow-2xs ${act.type === "whatsapp"
                          ? "bg-[#25D366] text-white hover:bg-[#20ba59]"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                    >
                      {act.type === "whatsapp" ? (
                        <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                      ) : (
                        <Phone className="h-3.5 w-3.5" />
                      )}
                      <span>{act.label}</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}

              <span
                className={`block text-[10px] pt-1 font-normal ${msg.sender === "user" ? "text-slate-400 text-right" : "text-slate-400"
                  }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {/* Animated Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 pl-10">
            <div className="flex items-center gap-1.5 rounded-2xl bg-white border border-slate-200/80 px-3.5 py-2.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce [animation-delay:-0.3s]" />
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce [animation-delay:-0.15s]" />
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce" />
            </div>
            <span className="text-[11px] font-medium text-slate-400">Ravi Arts Enterprises AI is typing...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="bg-white border-t border-slate-200/80 px-3 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none select-none">
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => handleSendMessage(q)}
            className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700 transition-all shrink-0 cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Interactive Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100 transition-all"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          aria-label="Send message"
          title="Send message"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-xs hover:bg-sky-600 disabled:opacity-40 disabled:hover:bg-slate-900 transition-all cursor-pointer shrink-0"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
