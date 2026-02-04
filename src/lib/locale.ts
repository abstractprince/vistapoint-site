import { locales } from "@/config/site";

/**
 * Supported locale codes derived from config.
 * Example: ["en", "ru"] as const  -> Locale becomes "en" | "ru"
 */
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Build a locale-aware path.
 * "/" -> "/en"
 * "/products" -> "/en/products"
 */
export function localePath(locale: Locale, path: string = "/") {
  if (path === "/" || path === "") return `/${locale}`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

/**
 * Replace (or insert) locale segment at the start of a pathname.
 * "/en/products" + "ru" -> "/ru/products"
 * "/products" + "en" -> "/en/products"
 */
export function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return `/${nextLocale}`;

  const [first, ...rest] = segments;

  // If first segment is a supported locale, replace it; otherwise prepend locale.
  if ((locales as readonly string[]).includes(first)) {
    return `/${nextLocale}/${rest.join("/")}`.replace(/\/$/, "");
  }

  return `/${nextLocale}/${segments.join("/")}`.replace(/\/$/, "");
}
