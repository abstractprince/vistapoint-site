import Link from "next/link";
import type { Locale } from "@/config/site";
import { footerLinks } from "@/config/site";
import { getContent } from "@/content";

export function Footer({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-base grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="text-lg font-semibold">Vista Point®</div>
          <p className="mt-3 text-sm text-slate-600">
            {content.home.hero.subtitle}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{content.footer.company}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {footerLinks.company.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:text-[var(--vp-blue)]">
                  {content.footer.links[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{content.footer.social}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {footerLinks.social.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:text-[var(--vp-blue)]">
                  {content.footer.links[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{content.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <Link href={`mailto:${content.footer.contactDetails.email}`} className="hover:text-[var(--vp-blue)]">
                {content.footer.contactDetails.email}
              </Link>
            </li>
            <li>
              <Link href={`tel:${content.footer.contactDetails.phone}`} className="hover:text-[var(--vp-blue)]">
                {content.footer.contactDetails.phone}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--vp-blue)]">
                {content.footer.contactDetails.address}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
