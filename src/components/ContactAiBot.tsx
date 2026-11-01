"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, MessageSquare, ArrowRight, CornerDownLeft, RefreshCw } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  action?: {
    type: "whatsapp" | "call" | "maps" | "quote";
    label: string;
    href: string;
  };
}

const quickQuestions = [
  "Where is your Kasna workshop located?",
  "How fast can you print flex banners?",
  "How can I get a custom quote?",
  "Do you fabricate & install LED signboards?",
  "What file formats do you accept?",
  "Do you deliver across Greater Noida?",
];

function getBotAnswer(query: string): { text: string; action?: Message["action"] } {
  const q = query.toLowerCase().trim();

  if (q.includes("location") || q.includes("address") || q.includes("kaha") || q.includes("where") || q.includes("kasna") || q.includes("map")) {
    return {
      text: "Our workshop and customer reception is located Near Republic Honda showroom, Opp. HDFC Bank, Main Road Kasna, Greater Noida, UP - 201310. We are open Monday to Saturday from 9:30 AM to 6:30 PM. You are welcome to inspect physical media samples!",
      action: {
        type: "maps",
        label: "Open in Google Maps",
        href: "https://maps.app.goo.gl/8XEp1SBYLcZUSDV47?g_st=iw",
      },
    };
  }

  if (q.includes("turnaround") || q.includes("fast") || q.includes("urgent") || q.includes("time") || q.includes("same day") || q.includes("kitna time")) {
    return {
      text: "Standard flex banners and roll-up standees can be printed same-day or within 24 hours! Visiting cards and brochures take 24 to 48 hours. Custom 3D acrylic and LED glow signboards take 3 to 5 business days including structure fabrication.",
      action: {
        type: "whatsapp",
        label: "WhatsApp for Emergency Print",
        href: "https://wa.me/919350036399?text=Hello%20Ravi%20Arts%2C%20I%20have%20an%20urgent%20print%20requirement.",
      },
    };
  }

  if (q.includes("quote") || q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("estimate") || q.includes("kitna")) {
    return {
      text: "We offer direct manufacturer wholesale pricing with zero middlemen! Pricing depends on your dimensions, media type (e.g. Normal vs Star Flex, Cast Acrylic thickness), and quantity. You can get an instant estimate on WhatsApp or submit the quote form on this page.",
      action: {
        type: "whatsapp",
        label: "Get Instant Quote on WhatsApp",
        href: "https://wa.me/919350036399?text=Hello%20Ravi%20Arts%20Enterprises%2C%20please%20share%20a%20rate%20estimate.",
      },
    };
  }

  if (q.includes("led") || q.includes("sign") || q.includes("glow") || q.includes("board") || q.includes("acrylic") || q.includes("3d")) {
    return {
      text: "Yes! We specialize in custom LED glow signs, 3D acrylic letters, ACP cladding, and neon signs. We use certified waterproof Samsung/Osram LEDs with up to 2 years warranty and handle complete on-site mounting across Greater Noida.",
      action: {
        type: "call",
        label: "Call Signage Specialist",
        href: "tel:+919350036399",
      },
    };
  }

  if (q.includes("file") || q.includes("format") || q.includes("cdr") || q.includes("pdf") || q.includes("artwork") || q.includes("resolution")) {
    return {
      text: "We accept print-ready PDF, CDR (CorelDraw), AI (Adobe Illustrator), EPS, and uncompressed TIFF or PNG files in CMYK color mode. If you don't have a design ready, our in-house graphic design studio can design it for you!",
      action: {
        type: "whatsapp",
        label: "Send Artwork on WhatsApp",
        href: "https://wa.me/919350036399?text=Hello%2C%20I%20want%20to%20send%20my%20artwork%20for%20review.",
      },
    };
  }

  if (q.includes("deliver") || q.includes("install") || q.includes("noida") || q.includes("greater noida") || q.includes("expressway") || q.includes("area")) {
    return {
      text: "Yes, we provide end-to-end doorstep delivery and on-site mounting/installation across Kasna, Alpha, Beta, Gamma, Pari Chowk, Knowledge Park, Ecotech, Surajpur, Yamuna Expressway, and all sectors of Noida and Greater Noida.",
    };
  }

  if (q.includes("phone") || q.includes("contact") || q.includes("call") || q.includes("number")) {
    return {
      text: "You can reach our team directly at +91-9350036399 or +91-9971145089, or email us at raviarts29@gmail.com. Our workshop is in Kasna, Greater Noida.",
      action: {
        type: "call",
        label: "Call Now: +91-9350036399",
        href: "tel:+919350036399",
      },
    };
  }

  // Default fallback response
  return {
    text: "Thanks for asking! We custom manufacture all types of flex banners, LED sign boards, visiting cards, offset printing, and corporate gifts. For custom project inquiries, our workshop team can help you immediately on WhatsApp or phone.",
    action: {
      type: "whatsapp",
      label: "Chat with Workshop Manager",
      href: `https://wa.me/919350036399?text=Hello%20Ravi%20Arts%2C%20I%20have%20a%20question%3A%20${encodeURIComponent(
        query
      )}`,
    },
  };
}

export default function ContactAiBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am the Ravi Arts AI Print Assistant. How can I assist you today? Feel free to ask about pricing, turnaround times, workshop location in Kasna, or tap any quick topic below!",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotAnswer(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: response.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Conversation reset! Feel free to ask about our printing services, signboard fabrication, or Kasna workshop location.",
        time: "Just now",
      },
    ]);
  };

  return (
    <div className="rounded-3xl bg-white border border-sky-100 shadow-xl overflow-hidden flex flex-col h-[520px] sm:h-[560px]">
      {/* Bot Header */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-md">
            <Bot className="h-5 w-5 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Ravi Arts AI Assistant
              </h3>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Instant answers 24/7 for printing &amp; signage</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          title="Restart Chat"
          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-slate-50/50">
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
              className={`max-w-[82%] sm:max-w-[75%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                msg.sender === "user"
                  ? "bg-slate-900 text-white rounded-tr-none"
                  : "bg-white text-slate-800 border border-sky-100 rounded-tl-none"
              }`}
            >
              <p>{msg.text}</p>
              {msg.action && (
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <a
                    href={msg.action.href}
                    target={msg.action.type === "whatsapp" || msg.action.type === "maps" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 text-sky-700 px-3 py-1.5 text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer border border-sky-200"
                  >
                    {msg.action.type === "whatsapp" && <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />}
                    <span>{msg.action.label}</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              )}
              <span
                className={`block text-[10px] mt-1 ${
                  msg.sender === "user" ? "text-slate-400 text-right" : "text-slate-400"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-xs italic">
            <Bot className="h-4 w-4 text-sky-500 animate-spin" />
            <span>AI Assistant is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none select-none">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 shrink-0">
          Suggestions:
        </span>
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(q)}
            className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 border border-transparent transition-all shrink-0 cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question about prices, banners, signboards..."
          className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all border border-transparent focus:border-sky-300"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm hover:bg-slate-800 disabled:opacity-40 transition-all cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

