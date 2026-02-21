"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { locales, navItems, type Locale } from "@/config/site";
import { localePath, replaceLocaleInPathname } from "@/lib/locale";
import { getContent } from "@/content";

export function Header({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const localizedNav = useMemo(
    () =>
      navItems.map((item) => ({
        href: localePath(locale, item.path),
        label: content.nav[item.key]
      })),
    [content.nav, locale]
  );

  const languageOptions = locales.map((option) => ({
    value: option,
    label: getContent(option).languageLabel
  }));

  const currentLanguageLabel = getContent(locale).languageLabel;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--vp-border)] bg-[var(--vp-bg)]/95 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between gap-4">
        <Link href={localePath(locale, "/")} className="text-lg font-semibold text-[var(--vp-text)]">
          Vista Point®
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {localizedNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--vp-muted)] transition hover:text-[var(--vp-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[var(--vp-border)] px-3 py-1.5 text-xs font-semibold text-[var(--vp-muted)] transition hover:border-[var(--vp-text)]"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((open) => !open)}
            >
              {currentLanguageLabel}
              <span aria-hidden="true">▼</span>
            </button>
            {langOpen ? (
              <ul
                className="absolute right-0 mt-2 w-20 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-1 shadow-lg"
                role="listbox"
              >
                {languageOptions.map((option) => (
                  <li key={option.value}>
                    <Link
                      href={replaceLocaleInPathname(pathname, option.value)}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-[var(--vp-muted)] hover:bg-[var(--vp-bg-muted)]"
                      onClick={() => setLangOpen(false)}
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <button
            type="button"
            className="flex items-center rounded-md border border-[var(--vp-border)] p-2 text-[var(--vp-muted)] md:hidden"
            aria-label="Toggle menu"
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div id="mobile-navigation" className="border-t border-[var(--vp-border)] bg-[var(--vp-bg)] md:hidden">
          <nav className="container-base flex flex-col gap-4 py-4" aria-label="Mobile">
            {localizedNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--vp-muted)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
