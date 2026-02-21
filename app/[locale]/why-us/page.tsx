import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function WhyUsPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">{content.whyUs.title}</h1>
          <p className="mt-4 text-base text-[var(--vp-muted)]">{content.whyUs.intro}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {content.whyUs.blocks.map((block) => (
              <article
                key={block.title}
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6"
              >
                <h2 className="text-lg font-semibold text-[var(--vp-text)]">{block.title}</h2>
                <p className="mt-3 text-sm text-[var(--vp-muted)]">{block.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--vp-text)]">{content.whyUs.listTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--vp-muted)]">
              {content.whyUs.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <p className="text-sm text-[var(--vp-muted)]">{content.whyUs.ctaLine}</p>
            <Link
              href={localePath(params.locale, "/contact")}
              className="mt-4 inline-flex rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.whyUs.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
