import { locales } from "@/config/site";
import type { Locale } from "@/config/site";

export type { Locale } from "@/config/site";

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = "") {
  if (!path || path === "/") return `/${locale}`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${nextLocale}`;
  const [, ...rest] = segments;
  return `/${[nextLocale, ...rest].join("/")}`;
}
