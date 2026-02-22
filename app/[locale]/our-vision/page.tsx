import Link from "next/link";
import { getContent } from "@/src/content";
import { localePath, type Locale } from "@/src/lib/locale";

export default function OurVisionPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
            {content.footer.links.ourVision}
          </h1>

          <p className="mt-4 text-base text-[var(--vp-muted)]">
            {content.about.vision}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
              <p className="text-sm leading-6 text-[var(--vp-muted)]">{content.about.mission}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--vp-muted)]">{content.about.whyChoose}</p>
            </div>

            <div className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
              <ul className="space-y-4">
                {content.about.values.map((value) => (
                  <li key={value.title}>
                    <div className="text-sm font-semibold text-[var(--vp-text)]">{value.title}</div>
                    <div className="mt-1 text-sm leading-6 text-[var(--vp-muted)]">{value.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={localePath(params.locale, "/products")}
              className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.nav.products}
            </Link>

            <Link
              href={localePath(params.locale, "/contact")}
              className="rounded-full border border-[var(--vp-border)] px-6 py-3 text-sm font-semibold text-[var(--vp-text)]"
            >
              {content.nav.contactUs}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
