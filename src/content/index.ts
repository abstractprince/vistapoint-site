import type { Locale } from "@/config/site";
import { en } from "./en";
import { es } from "./es";
import { ru } from "./ru";
import type { LocaleContent } from "./types";

const contentMap: Record<Locale, LocaleContent> = {
  en,
  es,
  ru
};

export function getContent(locale: Locale) {
  return contentMap[locale] ?? contentMap.en;
}
