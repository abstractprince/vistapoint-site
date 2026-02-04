// src/lib/locale.ts
import { locales } from "@/config/site";

/**
 * Locales list must be declared in "@/config/site" like:
 * export const locales = ["en", "ru"] as const;
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
export function localePath(locale: Locale, path: string = "/"): string {
  if (!path || path === "/") return `/${locale}`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

/**
 * Replace (or insert) locale segment at the start of a pathname.
 * "/en/products" -> "/ru/products"
 * "/products" -> "/en/products"
 */
export function replaceLocaleInPathname(
  pathname: string,
  nextLocale: Locale
): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = clean.split("/").filter(Boolean);

  if (segments.length === 0) return `/${nextLocale}`;

  const [first, ...rest] = segments;
  if (isLocale(first)) {
    return `/${nextLocale}/${rest.join("/")}`.replace(/\/$/, "");
  }
  return `/${nextLocale}/${segments.join("/")}`.replace(/\/$/, "");
}
