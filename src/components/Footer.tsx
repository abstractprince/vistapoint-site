import Link from "next/link";
import type { Locale } from "@/config/site";
import { footerLinks } from "@/config/site";
import { getContent } from "@/content";
import { localePath } from "@/lib/locale";

export function Footer({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <footer className="border-t border-[var(--vp-border)] bg-[var(--vp-bg)]">
      <div className="container-base grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="text-lg font-semibold text-[var(--vp-text)]">Vista Point®</div>
          <p className="mt-3 text-sm text-[var(--vp-muted)]">
            {content.home.hero.subtitle}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[var(--vp-text)]">{content.footer.company}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--vp-muted)]">
            {footerLinks.company.map((item) => (
              <li key={item.key}>
                <Link href={item.href.startsWith("/") ? localePath(locale, item.href) : item.href} className="hover:text-[var(--vp-text)]">
                  {content.footer.links[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[var(--vp-text)]">{content.footer.social}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--vp-muted)]">
            {footerLinks.social.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:text-[var(--vp-text)]">
                  {content.footer.links[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[var(--vp-text)]">{content.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--vp-muted)]">
            <li>
              <Link href={`mailto:${content.footer.contactDetails.email}`} className="hover:text-[var(--vp-text)]">
                {content.footer.contactDetails.email}
              </Link>
            </li>
            <li>
              <Link href={`tel:${content.footer.contactDetails.phone}`} className="hover:text-[var(--vp-text)]">
                {content.footer.contactDetails.phone}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--vp-text)]">
                {content.footer.contactDetails.address}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
