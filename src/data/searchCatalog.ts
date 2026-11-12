export interface SearchCatalogItem {
  id: string;
  title: string;
  category: "Services" | "Products" | "Pages";
  badge: string;
  desc: string;
  href: string;
  keywords: string[];
}

export const searchCatalog: SearchCatalogItem[] = [
  // Core Services
  {
    id: "flex-printing",
    title: "Flex & Large Format Printing",
    category: "Services",
    badge: "Printing",
    desc: "Outdoor hoardings, frontlit/backlit flex, star flex, banners & exhibition backdrops.",
    href: "/services/flex-printing",
    keywords: [
      "flex",
      "banner",
      "hoarding",
      "large format",
      "star flex",
      "backlit",
      "backdrop",
      "roll up standee",
      "frontlit",
    ],
  },
  {
    id: "sign-boards",
    title: "Sign Boards & Signage",
    category: "Services",
    badge: "Signage",
    desc: "LED glow signs, acrylic letters, 3D ACP panels, neon letters & retail store boards.",
    href: "/services/sign-boards",
    keywords: [
      "sign",
      "glow sign",
      "led",
      "acrylic",
      "acp",
      "neon",
      "board",
      "shop board",
      "retail",
      "signage",
    ],
  },
  {
    id: "visiting-cards",
    title: "Visiting Cards & Stationery",
    category: "Services",
    badge: "Stationery",
    desc: "Premium matte/gloss visiting cards, letterheads, bill books, envelopes & ID cards.",
    href: "/services/stationery",
    keywords: [
      "visiting card",
      "business card",
      "cards",
      "letterhead",
      "stationery",
      "bill book",
      "invoice",
      "id card",
      "envelope",
    ],
  },
  {
    id: "offset-printing",
    title: "Offset & Digital Printing",
    category: "Services",
    badge: "Printing",
    desc: "Multi-page brochures, product catalogues, marketing flyers, pamphlets & packaging inserts.",
    href: "/services/offset-printing",
    keywords: [
      "offset",
      "digital",
      "brochure",
      "catalogue",
      "flyer",
      "pamphlet",
      "booklet",
      "magazine",
      "calendar",
      "poster",
    ],
  },
  {
    id: "acrylic-letters",
    title: "Acrylic & 3D Letter Boards",
    category: "Services",
    badge: "Signage",
    desc: "Precision laser cut 3D acrylic letters, titanium metallic finishes & halo backlit illumination.",
    href: "/services/acrylic-letters",
    keywords: [
      "3d letter",
      "acrylic",
      "laser cut",
      "metal letters",
      "titanium",
      "brass",
      "halo",
      "reception",
      "name plate",
    ],
  },
  {
    id: "vinyl-printing",
    title: "Eco-Solvent & Vinyl Printing",
    category: "Services",
    badge: "Vinyl",
    desc: "Die-cut stickers, commercial vehicle wraps, frosted glass partition film & wall decals.",
    href: "/services/vinyl-printing",
    keywords: [
      "vinyl",
      "sticker",
      "vehicle wrap",
      "eco solvent",
      "frosted",
      "glass film",
      "decals",
      "one way vision",
      "car wrap",
    ],
  },
  {
    id: "graphic-design",
    title: "Branding & Graphic Design",
    category: "Services",
    badge: "Design",
    desc: "Custom logo design, brand identity kits, vector artwork & print-ready layout formulation.",
    href: "/services/graphic-design",
    keywords: [
      "logo",
      "design",
      "graphic design",
      "branding",
      "identity",
      "artwork",
      "vector",
      "layout",
      "social media",
    ],
  },
  {
    id: "corporate-gifts",
    title: "Corporate Gifts & Promotional Products",
    category: "Services",
    badge: "Gifts",
    desc: "Custom printed coffee mugs, screen-printed corporate t-shirts, engraved pens, diaries & gift sets.",
    href: "/services/corporate-gifts",
    keywords: [
      "gift",
      "corporate gift",
      "mug",
      "tshirt",
      "t-shirt",
      "pen",
      "diary",
      "promotional",
      "hamper",
      "bottle",
      "keychain",
    ],
  },

  // Popular Specific Products
  {
    id: "standee-printing",
    title: "Roll-Up Standees & Exhibition Banners",
    category: "Products",
    badge: "Printing",
    desc: "Portable aluminum roll-up standees with star flex print for trade fairs, exhibitions & office branding.",
    href: "/services/flex-printing",
    keywords: ["standee", "roll up", "backdrop", "exhibition", "trade show", "canopy", "event"],
  },
  {
    id: "sunboard-printing",
    title: "Sunboard & Foam Sheet Printing",
    category: "Products",
    badge: "Signage",
    desc: "Rigid lightweight display boards for showroom branding, exhibitions & retail point-of-sale.",
    href: "/services/sign-boards",
    keywords: ["sunboard", "foam sheet", "rigid board", "display board", "sunpack"],
  },
  {
    id: "glow-sign-board",
    title: "LED Glow Sign Boards & Shop Frontages",
    category: "Products",
    badge: "Signage",
    desc: "Energy-efficient waterproof Samsung LED illuminated frontages and commercial shop boards.",
    href: "/services/sign-boards",
    keywords: ["glow sign", "led board", "shop board", "light board", "illuminated"],
  },
  {
    id: "frosted-glass-film",
    title: "Frosted Glass & Office Privacy Films",
    category: "Products",
    badge: "Vinyl",
    desc: "High-grade frosted vinyl with precision plotter cutout company logos for glass cabins & partitions.",
    href: "/services/vinyl-printing",
    keywords: ["frosted", "glass film", "cabin", "privacy", "office partition", "window film"],
  },
  {
    id: "vehicle-graphics",
    title: "Commercial Fleet Vehicle Wraps",
    category: "Products",
    badge: "Vinyl",
    desc: "High-grade outdoor vinyl wraps for trucks, delivery vans, commercial autos & cars.",
    href: "/services/vinyl-printing",
    keywords: ["vehicle", "car wrap", "van wrap", "truck wrap", "fleet", "auto"],
  },
  {
    id: "custom-mugs-tshirts",
    title: "Custom Printed Mugs & Corporate T-Shirts",
    category: "Products",
    badge: "Gifts",
    desc: "Sublimation full-color photo mugs, travel sippers, and screen-printed corporate t-shirts.",
    href: "/services/corporate-gifts",
    keywords: ["mug", "coffee mug", "tshirt", "t-shirt", "bottle", "tumbler", "sipper", "cap"],
  },
  {
    id: "safety-signage",
    title: "Factory Safety & Night Glow Signage",
    category: "Products",
    badge: "Signage",
    desc: "Photoluminescent fire emergency exit signs, caution boards & industrial plant markers.",
    href: "/services/sign-boards",
    keywords: ["safety", "night glow", "fire exit", "glow in dark", "danger", "caution"],
  },
  {
    id: "bill-books-stationery",
    title: "Bill Books, Letterheads & Invoices",
    category: "Products",
    badge: "Stationery",
    desc: "Carbonless duplicate/triplicate invoice bill books, executive letterheads & company envelopes.",
    href: "/services/stationery",
    keywords: ["bill book", "invoice", "letterhead", "envelope", "receipt", "stationery"],
  },

  // Site Pages
  {
    id: "services-all",
    title: "All Printing & Signage Services",
    category: "Pages",
    badge: "Services",
    desc: "Explore our full catalog of 8 primary industrial print and signage categories.",
    href: "/services",
    keywords: ["services", "all services", "printing", "signage", "capabilities"],
  },
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
    desc: "Kasna, Greater Noida/Delhi NCR, Uttar Pradesh - 201310. Call +91 93500 36399 / +91 99711 45089.",
    href: "/contact",
    keywords: [
      "contact",
      "phone",
      "address",
      "location",
      "email",
      "map",
      "kasna",
      "9350036399",
      "9971145089",
    ],
  },
  {
    id: "privacy-policy-page",
    title: "Privacy Policy",
    category: "Pages",
    badge: "Legal",
    desc: "How Ravi Arts Enterprises collects, handles, and protects your contact details and artwork files.",
    href: "/privacy-policy",
    keywords: ["privacy", "policy", "data", "personal information", "legal"],
  },
  {
    id: "terms-conditions-page",
    title: "Terms & Conditions",
    category: "Pages",
    badge: "Legal",
    desc: "Guidelines for quotes, artwork approval, pricing, printing, installation, and delivery.",
    href: "/terms-and-conditions",
    keywords: ["terms", "conditions", "policy", "payment", "delivery", "artwork approval", "legal"],
  },
];

/**
 * Filter and rank catalog items against multi-word or phrase queries safely.
 */
export function filterSearchCatalog(rawQuery: string): SearchCatalogItem[] {
  const trimmed = rawQuery.trim().toLowerCase();
  if (!trimmed) return [];

  const words = trimmed.split(/\s+/).filter(Boolean);

  const scored: Array<{ item: SearchCatalogItem; score: number }> = [];

  for (const item of searchCatalog) {
    const titleLower = item.title.toLowerCase();
    const badgeLower = item.badge.toLowerCase();
    const descLower = item.desc.toLowerCase();
    const keywordsLower = item.keywords.join(" ").toLowerCase();
    const haystack = `${titleLower} ${badgeLower} ${descLower} ${keywordsLower}`;

    const phraseMatches = haystack.includes(trimmed);
    const allWordsMatch = words.length > 0 && words.every((w) => haystack.includes(w));

    if (!phraseMatches && !allWordsMatch) continue;

    let score = 0;
    if (titleLower.includes(trimmed)) score += 100;
    else if (words.every((w) => titleLower.includes(w))) score += 70;
    else if (badgeLower.includes(trimmed)) score += 50;
    else if (item.keywords.some((k) => k.includes(trimmed))) score += 40;
    else score += 20;

    if (item.category === "Services") score += 10;
    else if (item.category === "Products") score += 5;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((entry) => entry.item);
}

