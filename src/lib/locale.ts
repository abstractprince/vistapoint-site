import { locales, type Locale } from "@/config/site";

export type { Locale } from "@/config/site";

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = "/") {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${nextLocale}`;
  const [, ...rest] = segments;
  return `/${[nextLocale, ...rest].join("/")}`;
}
