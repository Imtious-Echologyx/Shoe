
export type Product = {
  id: string; slug: string; name: string; code: string; category: string;
  description: string; images: string[]; upper?: string; lining?: string;
  insole?: string; outsole?: string; closure?: string; sizes?: string[];
  colors?: string[]; moq?: string; customization?: boolean; privateLabel?: boolean;
  featured?: boolean;
}
export const categories = ["Men's","Women's","Kids","Sports","Casual","Formal","Safety/Work"] as const;

export const products: Product[] = [
  {
    id: "1", slug: "mens-running-sneaker", name: "Men's Performance Runner", code: "EB-2026-001",
    category: "Sports", description: "Lightweight breathable mesh running sneaker for global athletic brands. Export-ready.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&q=80"
    ],
    upper: "Breathable Mesh + TPU", lining: "Mesh", insole: "EVA + Memory Foam", outsole: "Rubber", closure: "Lace-up",
    sizes: ["39-45 EU"], colors: ["White/Blue","Black/Orange"], moq: "1200 pairs/style", customization: true, privateLabel: true, featured: true
  },
  {
    id: "2", slug: "womens-casual-loafer", name: "Women's Casual Loafer", code: "EB-2026-002",
    category: "Casual", description: "Premium casual loafer with soft lining for all-day comfort.",
    images: ["https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=1200&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80"],
    upper: "Genuine Leather", lining: "Leather", insole: "Leather", outsole: "TPR", sizes: ["36-41 EU"], colors: ["Tan","Black"], moq: "1000 pairs", customization: true, privateLabel: true, featured: true
  },
  {
    id: "3", slug: "safety-work-boot", name: "Industrial Safety Boot S3", code: "EB-2026-003",
    category: "Safety/Work", description: "CE certified safety boot with steel toe, anti-slip outsole.",
    images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1200&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"],
    upper: "Nubuck Leather", lining: "Mesh", outsole: "PU/Rubber", sizes: ["39-47 EU"], colors: ["Brown","Black"], moq: "800 pairs", customization: true, privateLabel: true, featured: true
  },
  {
    id: "4", slug: "mens-formal-oxford", name: "Men's Formal Oxford", code: "EB-2026-004",
    category: "Formal", description: "Classic Oxford for private label formal collections.",
    images: ["https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=80"], upper: "Full Grain Leather", lining: "Leather", outsole: "Leather", sizes: ["39-46"], colors: ["Black","Cognac"], moq: "1000", customization: true, privateLabel: true, featured: true
  },
  {
    id: "5", slug: "kids-sneaker-light", name: "Kids Light-up Sneaker", code: "EB-2026-005",
    category: "Kids", description: "Playful kids sneaker with light sole and velcro closure.",
    images: ["https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1200&q=80"], upper: "Canvas + Synthetic", lining: "Mesh", outsole: "TPR", sizes: ["26-35 EU"], colors: ["Multi"], moq: "1500", customization: true, privateLabel: true
  },
  {
    id: "6", slug: "womens-sport-sandal", name: "Women's Sport Sandal", code: "EB-2026-006",
    category: "Women's", description: "Outdoor sport sandal with adjustable straps.",
    images: ["https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=1200&q=80"], upper: "Synthetic Webbing", lining: "Neoprene", outsole: "EVA/Rubber", sizes: ["36-41"], colors: ["Pink","Grey"], moq: "1200", customization: true, privateLabel: true
  },
  {
    id: "7", slug: "mens-casual-chukka", name: "Men's Chukka Boot", code: "EB-2026-007",
    category: "Men's", description: "Suede chukka for casual FW collections.",
    images: ["https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=1200&q=80"], upper: "Suede", lining: "Textile", outsole: "Crepe", sizes: ["40-45"], colors: ["Sand","Navy"], moq: "1000", customization: true, privateLabel: true, featured: true
  },
  {
    id: "8", slug: "womens-knit-runner", name: "Women's Knit Runner", code: "EB-2026-008",
    category: "Sports", description: "Seamless knit runner ultra-light.",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80"], upper: "Flyknit", lining: "Mesh", outsole: "Phylon", sizes: ["36-41"], colors: ["White","Black"], moq: "1200", customization: true, privateLabel: true
  },
  { id: "9", slug: "formal-monk-strap", name: "Monk Strap Formal", code: "EB-2026-009", category: "Formal", description: "Double monk strap for premium private label.", images: ["https://images.unsplash.com/photo-1614253429381-9a2c2a0e0c0c?w=1200&q=80"], upper: "Leather", lining: "Leather", outsole: "Leather", sizes: ["39-45"], colors: ["Brown"], moq: "800", customization: true, privateLabel: true },
  { id: "10", slug: "trail-running-shoe", name: "Trail Running Shoe", code: "EB-2026-010", category: "Sports", description: "Aggressive tread trail runner.", images: ["https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=1200&q=80"], upper: "Mesh + Synthetic", lining: "Mesh", outsole: "Rubber", sizes: ["39-47"], colors: ["Orange/Black"], moq: "1000", customization: true, privateLabel: true },
  { id: "11", slug: "canvas-slip-on", name: "Canvas Slip-On", code: "EB-2026-011", category: "Casual", description: "Everyday canvas slip-on vulcanized.", images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&q=80"], upper: "Canvas", lining: "Cotton", outsole: "Vulcanized Rubber", sizes: ["36-45"], colors: ["White","Navy"], moq: "2000", customization: true, privateLabel: true },
  { id: "12", slug: "womens-heel-pump", name: "Women's Heel Pump", code: "EB-2026-012", category: "Women's", description: "Mid-heel pump for fashion brands.", images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&q=80"], upper: "Synthetic Leather", lining: "Synthetic", outsole: "TPR", sizes: ["36-41"], colors: ["Black","Red"], moq: "1200", customization: true, privateLabel: true }
]
