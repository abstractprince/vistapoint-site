import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">{content.about.title}</h1>
          <p className="mt-4 text-base text-[var(--vp-muted)]">{content.about.subtitle}</p>

          <div className="mt-8 space-y-6">
            <article className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
              <h2 className="text-xl font-semibold text-[var(--vp-text)]">{content.about.whoWeAreTitle}</h2>
              <p className="mt-3 text-sm text-[var(--vp-muted)]">{content.about.whoWeAreBody}</p>
            </article>
            <article className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
              <h2 className="text-xl font-semibold text-[var(--vp-text)]">{content.about.whatWeDoTitle}</h2>
              <p className="mt-3 text-sm text-[var(--vp-muted)]">{content.about.whatWeDoBody}</p>
            </article>
            <article className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
              <h2 className="text-xl font-semibold text-[var(--vp-text)]">{content.about.howWeWorkTitle}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--vp-muted)]">
                {content.about.howWeWorkItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--vp-text)]">{content.about.whatToExpectTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--vp-muted)]">
              {content.about.whatToExpectItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <p className="text-sm text-[var(--vp-muted)]">{content.about.ctaLine}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={localePath(params.locale, "/products")}
                className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
              >
                {content.about.ctaPrimary}
              </Link>
              <Link
                href={localePath(params.locale, "/contact")}
                className="rounded-full border border-[var(--vp-border)] px-6 py-3 text-sm font-semibold text-[var(--vp-text)]"
              >
                {content.about.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
