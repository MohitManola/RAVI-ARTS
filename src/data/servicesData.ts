export interface ServiceItemData {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeading: string;
  heroHeadingHighlight: string;
  heroDescription: string;
  image: string;
  turnaround: string;
  tag: string;
  offerings: string[];
  overview: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  whyChoose: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItemData[] = [
  {
    slug: "flex-printing",
    id: "flex-printing",
    title: "Flex & Large Format Printing",
    subtitle: "Outdoor Banners, Flex Hoardings, Star Flex & Backlit Films",
    metaTitle: "Flex Printing Services Kasna Greater Noida | Banners & Hoardings",
    metaDescription: "Best flex printing services in Kasna, Greater Noida. High-resolution frontlit, backlit, star flex banners, and roadside hoardings at direct factory wholesale rates.",
    keywords: [
      "flex printing kasna",
      "flex printing greater noida",
      "banner printing kasna",
      "star flex printing greater noida",
      "hoarding printing kasna",
      "roll up standee printing greater noida",
      "backlit flex printing kasna",
    ],
    heroHeading: "High-Resolution Flex & Large Format Printing in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Engineered for vibrant visibility and long-lasting outdoor durability. From 10-foot seamless roadside hoardings to star flex exhibition backdrops, our Kasna printing facility delivers vivid colors that resist sun, wind, and rain.",
    image: "/images/services/flex&LargeFormatePrinting.PNG",
    turnaround: "Same Day / 24 Hours",
    tag: "Best for Outdoor Visibility",
    offerings: [
          "Flex Banner Printing",
          "Frontlit Flex Printing",
          "Backlit Flex Printing",
          "Star Flex Printing",
          "Hoarding Printing",
          "Event Banner Printing",
          "Promotional Banner Printing",
          "Large Format Digital Printing",
          "Outdoor Advertising Printing"
    ],
    overview: [
      "Ravi Arts Enterprises is Kasna, Greater Noida's leading industrial flex banner printer. With over 20 years of printing experience, we operate high-performance roll-to-roll solvent and eco-solvent printing presses capable of seamless 10-foot wide printing.",
      "Whether you require high-GSM frontlit flex for local retail advertising, premium Star Flex for corporate trade exhibitions at India Expo Mart Greater Noida, or waterproof backlit films for illuminated signages, our in-house facility guarantees zero middlemen, wholesale factory pricing, and rapid same-day turnaround.",
    ],
    features: [
      "Frontlit & Backlit Heavy GSM Flex Media",
      "Star Flex & Non-Tearable Long-Life Banners",
      "Building Wraps & Roadside Hoarding Fabrication",
      "Exhibition Backdrops & Portable Roll-Up Standees",
      "Industrial Eco-Solvent UV Resistant Inks",
      "Full Eyeletting, Hemming & On-Site Mounting Across Greater Noida",
    ],
    specifications: [
      { label: "Printing Width", value: "Up to 10 Feet (Seamless Roll-to-Roll)" },
      { label: "Media Weight", value: "280 GSM to 540 GSM Heavy Duty Flex" },
      { label: "Ink Technology", value: "Eco-Solvent & UV-Stabilized Pigments" },
      { label: "Weather Durability", value: "100% Waterproof & Fade Resistant" },
      { label: "Turnaround Time", value: "Same-Day Dispatch / 24 Hours" },
      { label: "Finishing Available", value: "Metal Eyelets, Reinforced Hemming, Rod Pockets" },
    ],
    applications: [
      "Highway & City Roadside Hoardings",
      "Retail Shop Front Advertisements",
      "Real Estate Site Boundary Banners",
      "Trade Shows & Conferences at India Expo Mart",
      "Political Rallies & Public Announcements",
      "Event Stage Backdrops & Photo Booths",
    ],
    whyChoose: [
      {
        title: "In-House Kasna Machinery",
        desc: "We own industrial solvent and eco-solvent presses directly in Kasna, eliminating third-party markup.",
      },
      {
        title: "Same-Day Emergency Delivery",
        desc: "Urgent trade show or retail opening? We offer express 24-hour turnaround for emergency print runs.",
      },
      {
        title: "UV & Monsoon Proof Materials",
        desc: "Specially formulated inks that do not peel, crack, or fade under intense North Indian sun and monsoon rain.",
      },
      {
        title: "Complete On-Site Mounting",
        desc: "Our skilled fabrication team handles structure welding, frame mounting, and safe elevated installation.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between normal flex and Star Flex?",
        a: "Normal flex is ideal for short to medium-term promotional banners. Star Flex has a denser weave, smoother glossy finish, and superior opacity that provides photo-like vibrancy and significantly longer life in outdoor weather.",
      },
      {
        q: "Can you deliver urgent flex prints on the same day in Greater Noida?",
        a: "Yes! For standard banner prints received before 12:00 PM, we provide same-day print and dispatch from our Kasna facility.",
      },
      {
        q: "Do you provide installation frames for hoardings and banners?",
        a: "Yes, our team manufactures MS iron frames and provides end-to-end mounting and installation across Kasna, Greater Noida, and Yamuna Expressway.",
      },
      {
        q: "What file formats should I submit for banner printing?",
        a: "We accept high-resolution PDF, CDR (CorelDraw), TIFF, PSD, and EPS files in CMYK color format for true color reproduction.",
      },
    ],
  },
  {
    slug: "sign-boards",
    id: "sign-boards",
    title: "Sign Boards & Signage Solutions",
    subtitle: "Glow Sign Boards, Acrylic LED Letters, 3D ACP Panels",
    metaTitle: "Sign Board Manufacturer Kasna Greater Noida | LED Glow Signs",
    metaDescription: "Leading signboard manufacturer in Kasna, Greater Noida. Custom LED glow signs, 3D ACP frontages, acrylic letter boards, and retail shop signage with on-site installation.",
    keywords: [
      "sign board manufacturer kasna",
      "glow sign board greater noida",
      "led signage kasna",
      "acp sign board greater noida",
      "3d letter sign board kasna",
      "shop sign board kasna greater noida",
    ],
    heroHeading: "Premium LED Glow Signs & Architectural Signage in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Illuminate your brand identity 24/7. We design, fabricate, and install custom outdoor LED glow signboards, weatherproof ACP cladding, and illuminated corporate facade signage throughout Greater Noida.",
    image: "/images/services/SignBoards&Signage.PNG",
    turnaround: "3 - 5 Business Days",
    tag: "Top Rated for Retail Stores",
    offerings: [
          "Glow Sign Boards",
          "LED Sign Boards",
          "ACP Sign Boards",
          "Flex Sign Boards",
          "Sunboard Signage",
          "Indoor Signage",
          "Outdoor Signage",
          "Shop & Office Signage",
          "Safety & Directional Signage",
          "Night Glow Signage"
    ],
    overview: [
      "Your signboard is the silent salesman that creates your store's initial impression. At Ravi Arts Enterprises, we fabricate durable commercial signboards tailored to retail outlets, corporate offices, industrial warehouses, and institutional buildings.",
      "Using branded ACP (Aluminium Composite Panels), high-lumen waterproof LED modules, and heavy-gauge MS framing, our signboards combine architectural sophistication with energy efficiency.",
    ],
    features: [
      "Waterproof Samsung & Osram High-Lumen LED Modules",
      "Premium ACP Panel Cladding with CNC Router Cuts",
      "Custom Neon Flex & Front-Lit Glow Signboards",
      "Backlit Halo-Illuminated Signage Enclosures",
      "Heavy-Gauge Rust-Resistant MS Iron Frames",
      "Turnkey On-Site Structural Installation with Certified Wiring",
    ],
    specifications: [
      { label: "Lighting Source", value: "Certified IP67 Waterproof LED Modules (12V)" },
      { label: "Base Substrates", value: "Aludecor / Eurobond ACP & Cast Acrylic" },
      { label: "Power Consumption", value: "Ultra-Low Energy Efficiency with Certified Drivers" },
      { label: "Warranty", value: "Up to 2 Years Warranty on LED & Power Supply" },
      { label: "Turnaround Time", value: "3 to 5 Business Days" },
      { label: "Mounting", value: "Complete Structural MS Framework & Standoff Anchors" },
    ],
    applications: [
      "Retail Showrooms & Commercial Malls",
      "Corporate Headquarters & Tech Parks",
      "Hospitals, Clinics & Diagnostic Centres",
      "Restaurants, Cafes & Food Outlets",
      "Educational Campuses & Institutes",
      "Factory & Industrial Warehouse Gates",
    ],
    whyChoose: [
      {
        title: "20+ Years Signage Mastery",
        desc: "Over two decades of designing and installing prominent signboards across Greater Noida industrial sectors.",
      },
      {
        title: "Certified Waterproof Electricals",
        desc: "We exclusively use IP67/IP68 rated waterproof LEDs and BIS-certified power adapters.",
      },
      {
        title: "Precision In-House Fabrication",
        desc: "Our Kasna workshop is equipped with CNC router cutting and acrylic bending machinery for sharp finishes.",
      },
      {
        title: "Free Site Measurement & Consultation",
        desc: "Our engineers visit your site in Greater Noida for precise structural measurements and advice.",
      },
    ],
    faqs: [
      {
        q: "How long does an LED glow sign board last?",
        a: "Our signboards use premium ACP sheets and branded LEDs with a rated lifespan of 50,000+ operating hours (5 to 7+ years of continuous night use).",
      },
      {
        q: "Do you handle installation and electrical wiring?",
        a: "Yes. Our installation technicians handle complete structural mounting, bracket welding, and electrical wiring on-site.",
      },
      {
        q: "What is an ACP sign board?",
        a: "An ACP (Aluminium Composite Panel) sign board features a strong, sleek metallic base that is CNC router-cut with letters and backed with acrylic and LEDs for an ultra-modern premium appearance.",
      },
      {
        q: "Can you customize signboards for unusual exterior shapes?",
        a: "Yes! Because we fabricate everything in-house in Kasna, we can engineer custom curved, multi-tiered, or oversized signboards to fit any architectural facade.",
      },
    ],
  },
  {
    slug: "stationery",
    id: "stationery",
    title: "Visiting Cards & Business Stationery",
    subtitle: "Premium Business Cards, Letterheads, Envelopes & ID Cards",
    metaTitle: "Visiting Card Printing Kasna Greater Noida | Business Cards & Stationery",
    metaDescription: "Professional visiting card printing and corporate stationery in Kasna, Greater Noida. Velvet touch, matte lamination, spot UV, letterheads, bill books, and ID cards.",
    keywords: [
      "visiting card printing kasna",
      "business cards greater noida",
      "letterhead printing kasna",
      "bill book printing greater noida",
      "id card printing kasna",
      "spot uv business cards kasna",
    ],
    heroHeading: "Executive Visiting Cards & Corporate Stationery in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Leave an indelible mark in every boardroom meeting. We craft executive business cards, gold foiled stationery, branded letterheads, tamper-evident ID cards, and serialized office documentation.",
    image: "/images/services/VisitingCards&BusinessStationary.PNG",
    turnaround: "24 - 48 Hours",
    tag: "Corporate Essential",
    offerings: [
          "Standard Visiting Cards",
          "Premium Visiting Cards",
          "Matte & Glossy Visiting Cards",
          "Letterhead Printing",
          "Envelope Printing",
          "Bill Book Printing",
          "Invoice Book Printing",
          "ID Card Printing",
          "Company Profile Printing",
          "Corporate Stationery"
    ],
    overview: [
      "In corporate networking, physical stationery conveys professionalism and trustworthiness. Ravi Arts Enterprises prints premium visiting cards and office collateral that elevate your executive presence.",
      "We stock over 20+ fine paper varieties ranging from 350 GSM premium art card stock to luxury velvet soft-touch, textured metallic, and recycled linen boards, with specialty finishing including embossed spot UV and hot foil stamping.",
    ],
    features: [
      "350 GSM Heavy Art Card & Metallic Textured Stocks",
      "Velvet Soft-Touch, Ultra-Matte & Gloss Lamination",
      "High-Precision Raised Spot UV & Metallic Foil Stamping",
      "Branded Corporate Letterheads & Executive Envelopes",
      "Multi-Part Carbonless (NCR) Bill Books & Tax Invoice Pads",
      "Employee Smart PVC ID Cards with Branded Lanyards",
    ],
    specifications: [
      { label: "Paper Weights", value: "100 GSM Executive to 400 GSM Heavy Card" },
      { label: "Print Technology", value: "High-Resolution Multi-Color Digital & Offset" },
      { label: "Finishing Available", value: "Spot UV, Gold/Silver Foiling, Round Cornering, Embossing" },
      { label: "Standard Card Size", value: "3.5 x 2 inches (Custom Die-Cuts Available)" },
      { label: "Turnaround Time", value: "24 to 48 Hours" },
      { label: "Minimum Order", value: "100 Cards up to 10,000+ Corporate Runs" },
    ],
    applications: [
      "Executive & Founder Networking",
      "Sales Representative Toolkits",
      "Official Corporate Correspondence",
      "Retail Billing & Accounting Documentation",
      "Staff Identification & Security Access",
      "Corporate Event Badges & Delegate Passes",
    ],
    whyChoose: [
      {
        title: "Exact CMYK Color Calibration",
        desc: "Color-managed digital presses ensure your brand logos print with 100% Pantone color fidelity.",
      },
      {
        title: "20+ Luxury Paper Options",
        desc: "Touch and inspect physical paper swatches right at our Kasna workshop before placing bulk orders.",
      },
      {
        title: "Rapid 24-Hour Express Dispatch",
        desc: "Need visiting cards for a conference tomorrow? We offer emergency 24-hour turnaround.",
      },
      {
        title: "Direct Wholesale Pricing",
        desc: "Massive cost savings on multi-employee business card packages and annual stationery supplies.",
      },
    ],
    faqs: [
      {
        q: "What is Spot UV on visiting cards?",
        a: "Spot UV is a clear, glossy liquid polymer applied specifically over your logo or text on a matte-laminated card, creating an eye-catching 3D gloss contrast that catches the light.",
      },
      {
        q: "Can I inspect paper samples in person before printing?",
        a: "Yes! You are welcome to visit our Kasna workshop to inspect sample books of matte, velvet, metallic, and kraft cards.",
      },
      {
        q: "Do you offer graphic design services if I don't have a file ready?",
        a: "Yes, our in-house graphic designers can design professional, print-ready corporate visiting card layouts for your team.",
      },
      {
        q: "What is the turnaround time for corporate stationery?",
        a: "Standard business cards and letterheads are printed within 24 to 48 hours. Orders with special foiling take 3 business days.",
      },
    ],
  },
  {
    slug: "offset-printing",
    id: "offset-printing",
    title: "Offset & Digital Printing",
    subtitle: "Multi-Page Brochures, Product Catalogues, Flyers & Booklets",
    metaTitle: "Offset & Digital Printing Services Kasna Greater Noida | Brochures & Catalogues",
    metaDescription: "Commercial offset & digital printing in Kasna, Greater Noida. Multi-page product catalogues, bi-fold brochures, marketing flyers, pamphlets, and product packaging inserts.",
    keywords: [
      "offset printing kasna",
      "catalogue printing greater noida",
      "brochure printing kasna",
      "pamphlet printing greater noida",
      "commercial printing kasna",
      "flyer printing greater noida",
    ],
    heroHeading: "Commercial Multi-Color Offset & Digital Printing in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Cost-effective, razor-sharp commercial printing for high-volume corporate collateral. From 500 exhibition flyers to 50,000 multi-page product catalogues, our Heidelberg-standard presses ensure crisp clarity.",
    image: "/images/services/Offset&DigitalPrinting.PNG",
    turnaround: "2 - 3 Business Days",
    tag: "High Volume Savings",
    offerings: [
          "Brochure Printing",
          "Flyer & Leaflet Printing",
          "Catalogue Printing",
          "Poster Printing",
          "Pamphlet Printing",
          "Booklet Printing",
          "Magazine Printing",
          "Invitation Card Printing",
          "Menu Card Printing",
          "Calendar Printing",
          "Custom Document Printing"
    ],
    overview: [
      "When your business requires commercial-volume marketing collateral, multi-color offset printing delivers unbeatable cost-efficiency per copy alongside unmatched color reproduction.",
      "At Ravi Arts Enterprises, we handle high-speed offset and digital printing for manufacturers, universities, FMCG distributors, real estate developers, and corporate headquarters throughout the Kasna and Greater Noida industrial belts.",
    ],
    features: [
      "Bi-Fold, Tri-Fold, Z-Fold & Custom Gate-Fold Brochures",
      "Multi-Page Product Catalogues with Saddle Stitch & Perfect Binding",
      "Vibrant Promotional Flyers, Pamphlets & Newspaper Inserts",
      "Product Manuals, User Guides & Warranty Cards",
      "Gloss & Matte Aqueous Coating for Smudge Protection",
      "Precision Die-Cutting for Unique Folder Profiles",
    ],
    specifications: [
      { label: "Paper Stocks", value: "90 GSM Maplitho to 350 GSM Imported Art Paper" },
      { label: "Binding Methods", value: "Saddle-Stitch, Perfect Binding, Wire-O, Spiral" },
      { label: "Finishing Available", value: "Aqueous Coating, Thermal Lamination, Spot UV, Die-Cutting" },
      { label: "Color Space", value: "4-Color Process CMYK + Special Pantone Spot Inks" },
      { label: "Turnaround Time", value: "2 to 3 Business Days" },
      { label: "Volume Capacity", value: "Short Runs (100+) up to Mass Production (100,000+)" },
    ],
    applications: [
      "Product Launches & Industrial Equipment Catalogues",
      "Real Estate Project Showcase Brochures",
      "Trade Fair Handouts at India Expo Centre",
      "Educational Prospectuses & Admission Guides",
      "Retail Door-to-Door Promotional Flyers",
      "Corporate Annual Reports & Profiles",
    ],
    whyChoose: [
      {
        title: "Wholesale High-Volume Savings",
        desc: "Dramatic per-unit cost reduction on bulk runs of 1,000 to 50,000+ brochures and catalogues.",
      },
      {
        title: "Exact Page Binding & Creasing",
        desc: "Automated folding and binding machinery guarantees crisp folds and tight page alignment.",
      },
      {
        title: "Free Pre-Press Artwork Check",
        desc: "We verify bleeds, trim margins, and resolution before printing to eliminate costly misprints.",
      },
      {
        title: "Doorstep Bulk Delivery in Greater Noida",
        desc: "We securely pack in moisture-proof cartons and deliver directly to your office or factory.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between digital and offset printing?",
        a: "Digital printing is fastest for small quantities (10 to 500 pieces) with zero setup plate charges. Offset printing uses aluminum plates and is drastically cheaper per unit for quantities over 1,000 copies.",
      },
      {
        q: "Which binding is best for multi-page product catalogues?",
        a: "For booklets under 48 pages, center saddle-stitching (stapling) is most economical. For thicker catalogues (50 to 300+ pages), perfect binding (glue spine) gives a sleek, book-like finish.",
      },
      {
        q: "Can you provide sample paper prints for approval?",
        a: "Yes! For large volume orders, we can provide a calibrated digital proof or dummy mock-up before initiating the full offset run.",
      },
      {
        q: "What is the recommended paper thickness for a corporate brochure?",
        a: "A 250 GSM or 300 GSM art card cover with 130 GSM or 170 GSM inner pages laminated in soft matte is the industry gold standard for corporate presentations.",
      },
    ],
  },
  {
    slug: "acrylic-letters",
    id: "acrylic-letters",
    title: "Acrylic & 3D Letter Boards",
    subtitle: "Precision Laser Cut Indoor & Outdoor Corporate 3D Letters",
    metaTitle: "Acrylic 3D Letter Board Kasna Greater Noida | Office Reception Signs",
    metaDescription: "Custom 3D acrylic letters and architectural signage in Kasna, Greater Noida. Laser cut cast acrylic, backlit halo letters, brass/titanium finish, and reception wall branding.",
    keywords: [
      "acrylic 3d letters kasna",
      "3d letter board greater noida",
      "office reception signage kasna",
      "acrylic sign board greater noida",
      "laser cut letters kasna",
      "backlit 3d acrylic letters greater noida",
    ],
    heroHeading: "Laser-Cut 3D Acrylic & Metallic Channel Letters in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Transform corporate lobbies, executive conference rooms, and architectural facades with dimensional 3D typography. Precision laser-cut cast acrylic with crystal-polished edges and warm halo illumination.",
    image: "/images/services/Acrylic&3dLetterBoards.PNG",
    turnaround: "3 - 4 Business Days",
    tag: "Premium Corporate Aesthetic",
    offerings: [
          "Acrylic Name Plates",
          "Acrylic LED Boards",
          "3D Acrylic Letters",
          "Acrylic Reception Boards",
          "LED Backlit Letters",
          "Frontlit Channel Letters",
          "SS 3D Letters",
          "Brass 3D Letters",
          "Metal Letter Signage",
          "Custom Office Branding Boards"
    ],
    overview: [
      "Dimensional 3D signage commands immediate authority. When visitors enter your office or commercial facility, raised 3D acrylic letters deliver an unforgettable impression of corporate strength and precision.",
      "At Ravi Arts Enterprises, we fabricate 3D acrylic and metallic letters using computer-controlled CO2 laser cutting and CNC routers. Choose from high-gloss cast acrylic, brushed titanium gold, satin silver, or dual-layer backlit channel letters.",
    ],
    features: [
      "100% Virgin Cast Acrylic Sheets (3mm to 25mm Depth)",
      "Mirror Gold, Brushed Titanium, Satin Silver & Matte Finishes",
      "Halo-Lit Backlit Illumination for Floating Aura Effect",
      "Computer-Guided CNC & Laser Cutting with Diamond Edge Polish",
      "Hidden Standoff Stud Mounting for Clean Seamless Walls",
      "Weather-Sealed Outdoor Grade Resins for Exterior Facades",
    ],
    specifications: [
      { label: "Acrylic Thickness", value: "3mm, 5mm, 8mm, 10mm, 12mm, 18mm, 25mm" },
      { label: "Edge Finish", value: "Flame Polished / Diamond Laser Cut Transparent Edge" },
      { label: "Illumination Type", value: "Halo Backlit (Rear Glow), Front-Lit, or Non-Lit" },
      { label: "LED Lifetime", value: "50,000+ Hours with Samsung / Osram Diodes" },
      { label: "Turnaround Time", value: "3 to 4 Business Days" },
      { label: "Mounting Style", value: "Stainless Steel Standoffs, Stud Spacers, or Flush Adhesive" },
    ],
    applications: [
      "Corporate Office Reception & Lobby Walls",
      "Executive Boardrooms & Conference Rooms",
      "Luxury Boutiques & Flagship Retail Stores",
      "Hospital & Medical Center Entrances",
      "Hotel Receptions & Banquet Halls",
      "Architectural Exterior Building Markers",
    ],
    whyChoose: [
      {
        title: "Micron-Precision Laser Cutting",
        desc: "Flawless reproduction of complex corporate fonts, intricate logos, and fine geometric details.",
      },
      {
        title: "Zero-Yellowing Cast Acrylic",
        desc: "We exclusively use virgin-grade cast acrylic that retains transparency and color clarity for years.",
      },
      {
        title: "Full Template Mounting",
        desc: "Our installers use 1:1 plotted stencils so every letter is spaced and aligned with millimeter accuracy.",
      },
      {
        title: "Direct Factory Pricing",
        desc: "Manufactured right in our Kasna workshop without external fabrication markups.",
      },
    ],
    faqs: [
      {
        q: "What is Halo-lit 3D lettering?",
        a: "Halo-lit letters have opaque front faces and are elevated 1 to 2 inches off the wall on studs. Waterproof LEDs hidden inside the letter project light backward against the wall, creating a glowing floating aura.",
      },
      {
        q: "How are 3D letters mounted to the wall?",
        a: "We mount them using concealed threaded stainless steel studs drilled into the wall with 1:1 scale layout templates, ensuring permanent stability and no visible screws.",
      },
      {
        q: "Can 3D acrylic letters be installed outdoors?",
        a: "Yes! High-density cast acrylic is completely weather-proof, UV-stabilized, and impervious to rain and heat.",
      },
      {
        q: "Can you match my company's exact brand color in acrylic?",
        a: "Yes. We stock a vast palette of cast acrylic colors, and can also apply color-matched automotive polyurethane paint or printed vinyl overlays for exact Pantone matching.",
      },
    ],
  },
  {
    slug: "vinyl-printing",
    id: "vinyl-printing",
    title: "Eco-Solvent & Vinyl Printing",
    subtitle: "Die-Cut Stickers, Vehicle Wraps, Frosted Glass & Wall Decals",
    metaTitle: "Vinyl Printing & Frosted Film Kasna Greater Noida | Stickers & Vehicle Wraps",
    metaDescription: "High-grade vinyl printing in Kasna, Greater Noida. Custom die-cut stickers, frosted glass films, commercial vehicle wraps, one-way vision, and retail window branding.",
    keywords: [
      "vinyl printing kasna",
      "frosted film greater noida",
      "vehicle wrap kasna",
      "custom stickers greater noida",
      "one way vision print kasna",
      "glass partition film greater noida",
    ],
    heroHeading: "Self-Adhesive Vinyl, Frosted Film & Vehicle Graphics in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Transform glass partitions, commercial vehicle fleets, and retail shop windows into eye-catching branding surfaces. Printed with water-proof eco-solvent inks and precision contour cutting.",
    image: "/images/services/Eco-Solvent&VinalPrinting.PNG",
    turnaround: "24 - 48 Hours",
    tag: "Multi-Surface Solution",
    offerings: [
          "Eco-Solvent Printing",
          "Vinyl Sticker Printing",
          "Self-Adhesive Vinyl Printing",
          "One-Way Vision Printing",
          "Frosted Film Printing",
          "Window Graphics",
          "Wall Graphics",
          "Vehicle Graphics",
          "Vehicle Branding",
          "Product Label Printing",
          "Custom Sticker Printing"
    ],
    overview: [
      "Self-adhesive vinyl is one of the most versatile branding mediums in the modern architectural and promotional landscape. From frosted glass films that provide office privacy to vibrant vehicle fleet graphics, vinyl adheres cleanly to any smooth surface.",
      "At Ravi Arts Enterprises, we use Avery Dennison, 3M, and LG grade vinyl media printed on high-resolution eco-solvent plotters. Every graphic is laminated for scratch, fuel, and chemical resistance.",
    ],
    features: [
      "High-Tack Permanent & Removable Cast Vinyl Media",
      "Executive Frosted Privacy Film with Custom CNC Cutout Patterns",
      "Commercial Fleet Branding & Van / Truck Wraps",
      "Perforated One-Way Vision Films for Showroom Windows",
      "Precision Contour Die-Cut Product & Packaging Stickers",
      "Matte & Gloss Scratch-Resistant Clear Overlaminates",
    ],
    specifications: [
      { label: "Vinyl Brands", value: "3M, Avery Dennison, LG Hausys, Premium Calendered" },
      { label: "Print Resolution", value: "Up to 1440 DPI Photorealistic Output" },
      { label: "Inks Used", value: "Original Eco-Solvent Waterproof & Odorless Inks" },
      { label: "Durability", value: "3 to 5+ Years Outdoor Without Peeling or Curling" },
      { label: "Turnaround Time", value: "24 to 48 Hours" },
      { label: "Adhesive Type", value: "Bubble-Free Air Release Technology" },
    ],
    applications: [
      "Corporate Office Glass Partitions & Meeting Rooms",
      "Commercial Delivery Vans, Trucks & Auto Branding",
      "Retail Showroom Windows & Mall Facades",
      "Custom Product Packaging & Brand Label Stickers",
      "Floor Graphics & Warehouse Safety Wayfinding",
      "Indoor Accent Wall Murals & Decals",
    ],
    whyChoose: [
      {
        title: "Bubble-Free Professional Application",
        desc: "Our certified vinyl applicators use wet and dry squeegee techniques to eliminate bubbles, creases, and lifting.",
      },
      {
        title: "Residue-Free Clean Removal",
        desc: "Premium adhesive formulations remove cleanly when required without damaging glass or automotive paint.",
      },
      {
        title: "Micron Contour Cutting",
        desc: "Digital optical-eye cutters follow exact sticker contour silhouettes down to sub-millimeter precision.",
      },
      {
        title: "Same-Day Sticker Runs Available",
        desc: "Need 500 die-cut product labels on short notice? We print and cut on demand in Kasna.",
      },
    ],
    faqs: [
      {
        q: "What is One-Way Vision film?",
        a: "One-Way Vision is a perforated vinyl that allows people inside to look out clearly through glass while displaying full-color graphics to pedestrians looking from the outside, while also providing solar glare reduction.",
      },
      {
        q: "Does frosted film damage office glass partitions?",
        a: "Not at all. High-grade frosted film adheres securely to glass without etching or damaging it, and can be cleanly removed or replaced anytime your office rebrands.",
      },
      {
        q: "Will vehicle branding wraps withstand car washes and rain?",
        a: "Yes! Our vehicle wraps use outdoor cast vinyl sealed with UV overlaminate that withstands pressure washing, monsoon rains, and harsh highway driving.",
      },
      {
        q: "What is the minimum order quantity for custom stickers?",
        a: "We cater to flexible orders starting from as few as 100 stickers up to tens of thousands for industrial manufacturers.",
      },
    ],
  },
  {
    slug: "graphic-design",
    id: "graphic-design",
    title: "Branding & Graphic Design",
    subtitle: "Logo Creation, Brand Guidelines, Marketing Collateral & Social Kits",
    metaTitle: "Creative Graphic Design & Branding Studio Kasna Greater Noida | Logo Design",
    metaDescription: "Professional graphic design & branding services in Kasna, Greater Noida. Logo design, vector art, corporate identity, packaging layout, and print-ready production files.",
    keywords: [
      "graphic design kasna",
      "logo design greater noida",
      "branding studio kasna",
      "brochure design greater noida",
      "packaging design kasna",
      "corporate identity greater noida",
    ],
    heroHeading: "Strategic Brand Identity & Print-Ready Graphic Design in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Bridge the gap between imagination and physical production. Our creative design studio works directly alongside our print technicians, ensuring every logo, brochure, and sign layout is optimized for flawless output.",
    image: "/images/services/branding&GraphicDesign.PNG",
    turnaround: "1 - 3 Business Days",
    tag: "Complete Creative Studio",
    offerings: [
          "Logo Design",
          "Brand Identity Design",
          "Business Card Design",
          "Brochure Design",
          "Catalogue Design",
          "Flyer & Poster Design",
          "Social Media Creatives",
          "Flex & Banner Design",
          "Signage Artwork Design",
          "Packaging Design",
          "Print-Ready Artwork",
          "Corporate Branding"
    ],
    overview: [
      "A stunning design on a computer screen is only valuable if it translates accurately to print, laser cutting, and large-format fabrication. Many businesses face costly misprints when using freelance designers unfamiliar with physical production constraints.",
      "At Ravi Arts Enterprises, our graphic design department works directly inside our printing facility in Kasna. We engineer logos, marketing materials, and signage concepts built from the ground up for immaculate physical execution.",
    ],
    features: [
      "Original Vector Logo Design & Corporate Identity Formulations",
      "Comprehensive Brand Guidelines (Typography, Color Palettes & Dos/Don'ts)",
      "Print-Ready CMYK Layouts with Verified Bleeds & Safe Zones",
      "Signage Scale Layouts with 3D Photorealistic Day & Night Previews",
      "Packaging, Pouch & Box Die-Line Artwork Creation",
      "Social Media Marketing Graphics & Digital Brochure Kits",
    ],
    specifications: [
      { label: "Deliverable Formats", value: "Vector AI, CDR, EPS, High-Res PDF, PNG & SVG" },
      { label: "Color Profiles", value: "Calibrated CMYK for Print + RGB for Digital Use" },
      { label: "Turnaround Time", value: "1 to 3 Business Days per Milestone" },
      { label: "Revision Policy", value: "Comprehensive Iterations Until 100% Client Satisfaction" },
      { label: "Intellectual Property", value: "Complete 100% Commercial Copyright Transfer" },
      { label: "Design Tools", value: "Adobe Illustrator, Photoshop, CorelDraw, InDesign" },
    ],
    applications: [
      "New Startup Brand Launch Kits",
      "Corporate Rebranding & Modernization",
      "Product Packaging & FMCG Label Formulations",
      "Exhibition Stall Graphic Layouts",
      "Corporate Brochures, Annual Reports & Flyers",
      "Shop Front & Architectural Signboard Mockups",
    ],
    whyChoose: [
      {
        title: "Print-Technician Synergy",
        desc: "Zero surprises at print time — our designers know exact bleed tolerances, paper absorptions, and laser kerfs.",
      },
      {
        title: "100% Original Vector Artwork",
        desc: "Scalable from a tiny business card icon up to a 50-foot roadside flex hoarding without pixelation.",
      },
      {
        title: "3D Photorealistic Previews",
        desc: "See exactly how your signboard will look on your building exterior before fabricating a single bolt.",
      },
      {
        title: "In-Person Consultation in Kasna",
        desc: "Sit down face-to-face with our design team to collaborate on concepts and test color proofs.",
      },
    ],
    faqs: [
      {
        q: "What files will I receive upon project completion?",
        a: "You receive all master vector source files (AI, CorelDraw CDR, EPS) along with print-ready PDFs and web-optimized PNG/JPEG files in full resolution.",
      },
      {
        q: "How many design concepts do you provide for logos?",
        a: "We typically present 3 to 4 distinct conceptual directions based on your initial briefing, followed by iterative refinement on your chosen favorite.",
      },
      {
        q: "Can you recreate my low-resolution logo into sharp vector format?",
        a: "Yes! If you only have a blurry phone photo or low-res JPEG, our team can vectorize and recreate it into a crisp, infinite-resolution vector file.",
      },
      {
        q: "Do you design social media posts as well?",
        a: "Yes, we create branded social media templates, WhatsApp promotional banners, and digital flyers matching your brand style.",
      },
    ],
  },
  {
    slug: "corporate-gifts",
    id: "corporate-gifts",
    title: "Corporate Gifts & Promotional Products",
    subtitle: "Custom Mugs, T-Shirts, Pens, Diaries, Bags & Executive Gift Kits",
    metaTitle: "Corporate Gifts Manufacturer Kasna Greater Noida | Promotional Products",
    metaDescription: "Customized corporate gifts & promotional merchandise in Kasna, Greater Noida. Branded coffee mugs, embroidered t-shirts, laser engraved metal pens, diaries, and executive hampers.",
    keywords: [
      "corporate gifts kasna",
      "promotional products greater noida",
      "custom t shirt printing kasna",
      "custom mug printing greater noida",
      "executive gift hampers kasna",
      "corporate diary printing greater noida",
    ],
    heroHeading: "Customized Corporate Gifts & Promotional Merchandise in",
    heroHeadingHighlight: "Kasna, Greater Noida",
    heroDescription:
      "Deepen client trust and boost employee morale with premium custom branded gifts. From laser-engraved metal pens and insulated executive mugs to conference bags and festive hampers.",
    image: "/images/services/CorporateGifts&PromotionalProducts.PNG",
    turnaround: "3 - 5 Business Days",
    tag: "Popular for Corporate Branding",
    offerings: [
          "Customised T-Shirts",
          "Printed Mugs",
          "Corporate Diaries",
          "Promotional Pens",
          "Customised Caps",
          "Keychains",
          "Corporate Gift Sets",
          "Promotional Bags",
          "Branded Merchandise",
          "Event Giveaways",
          "Customised Office Gifts"
    ],
    overview: [
      "Corporate gifting is a powerful branding strategy that keeps your company top-of-mind every day. When your clients and employees use a beautifully branded pen, coffee mug, or notebook, your company earns enduring goodwill.",
      "At Ravi Arts Enterprises, we supply and customize premium promotional products for corporations, industrial plants, universities, and event organizers across Kasna and Greater Noida. We handle laser engraving, screen printing, UV printing, and embroidery in-house.",
    ],
    features: [
      "Ceramic & Stainless Steel Double-Wall Vacuum Insulated Mugs",
      "Screen Printed & Embroidered 100% Cotton Corporate T-Shirts",
      "Laser-Engraved Metal Rollerball Pens & Luxury Stylus Pens",
      "Hardbound Executive PU Leather Diaries, Organizers & Notebooks",
      "Heavy-Duty Canvas, Jute & Laptop Conference Bags",
      "Curated Festive Hampers & Employee Welcome Onboarding Kits",
    ],
    specifications: [
      { label: "Printing Techniques", value: "Laser Engraving, UV Flatbed, Screen Print, Sublimation, Embroidery" },
      { label: "Branding Durability", value: "Permanent, Dishwasher-Safe & Fade-Resistant" },
      { label: "Packaging Options", value: "Custom Rigid Gift Boxes, Foil-Stamped Sleeves, Velvet Pouches" },
      { label: "Turnaround Time", value: "3 to 5 Business Days" },
      { label: "Order Quantities", value: "Flexible Batches (50+) to Large Corporate Orders (10,000+)" },
      { label: "Sample Availability", value: "Physical Product Samples Available at Kasna Workshop" },
    ],
    applications: [
      "New Employee Welcome & Onboarding Kits",
      "Diwali & New Year Corporate Client Gifting",
      "Trade Shows & Exhibitions at India Expo Mart",
      "Annual Corporate General Meetings & Conferences",
      "Dealer, Vendor & Distributor Appreciation Gifts",
      "University Seminars & Alumni Gatherings",
    ],
    whyChoose: [
      {
        title: "In-House Laser & UV Printing",
        desc: "We own our customization machinery in Kasna, ensuring sharp logo placement and rapid fulfillment.",
      },
      {
        title: "Wholesale Bulk Corporate Pricing",
        desc: "Tiered wholesale discounts designed to maximize your corporate gifting budget.",
      },
      {
        title: "Curated Premium Quality Products",
        desc: "We only source durable, executive-grade merchandise that reflects positively on your brand reputation.",
      },
      {
        title: "Custom Rigid Box Packaging",
        desc: "We formulate branded presentation packaging so your gift makes a stunning initial impression.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum order quantity for corporate gifts?",
        a: "Most items like customized mugs, pens, and t-shirts start at a modest minimum of 50 pieces, with significant price discounts for larger quantities.",
      },
      {
        q: "Can you assemble custom employee onboarding welcome kits?",
        a: "Yes! We can bundle a branded t-shirt, diary, pen, insulated mug, and ID lanyard inside a customized presentation box with your corporate welcome card.",
      },
      {
        q: "What printing technique is best for metal pens and insulated bottles?",
        a: "Precision fiber laser engraving is best for metal surfaces — it vaporizes the outer coating to reveal crisp, permanent metallic lettering that never rubs off.",
      },
      {
        q: "How early should we place orders for Diwali corporate gifting?",
        a: "Due to high festive demand across Greater Noida, we recommend finalizing your gift selections and artwork 2 to 3 weeks prior to Diwali.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItemData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}

