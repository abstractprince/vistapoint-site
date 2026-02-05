import { locales } from "@/lib/locale";

export { locales };
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
    { key: "aboutUs", href: "/about-us" },
    { key: "whyUs", href: "/why-us" },
    { key: "ourVision", href: "/our-vision" },
    { key: "ourBrands", href: "#" }
  ] as const,
  social: [
    { key: "facebook", href: "#" },
    { key: "instagram", href: "#" },
    { key: "youtube", href: "#" }
  ] as const
} as const;
