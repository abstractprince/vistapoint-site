export const locales = ["en", "ru", "es"] as const;
export type Locale = (typeof locales)[number];

export const navItems = [
  { key: "products", path: "/products" },
  { key: "services", path: "/services" },
  { key: "aboutUs", path: "/about-us" },
  { key: "contactUs", path: "/contact" }
] as const;

export const categoryItems = [
  { key: "cooling", path: "/cooling-air-conditioners" },
  { key: "bathroom", path: "/bathroom-toilets-basins" },
  { key: "kitchen", path: "/kitchen-cabinets" },
  { key: "flooring", path: "/flooring" },
  { key: "panels", path: "/panels" },
  { key: "pet", path: "/pet-products-pet-food" }
] as const;

export const footerLinks = {
  company: [
    { key: "aboutUs", href: "#" },
    { key: "whyUs", href: "#" },
    { key: "ourVision", href: "#" },
    { key: "ourBrands", href: "#" }
  ],
  social: [
    { key: "facebook", href: "#" },
    { key: "instagram", href: "#" },
    { key: "youtube", href: "#" }
  ]
};
