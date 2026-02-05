import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
          {content.about.title}
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <h2 className="text-lg font-semibold text-[var(--vp-text)]">Mission</h2>
            <p className="mt-3 text-sm text-[var(--vp-muted)]">{content.about.mission}</p>
          </div>
          <div className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <h2 className="text-lg font-semibold text-[var(--vp-text)]">Vision</h2>
            <p className="mt-3 text-sm text-[var(--vp-muted)]">{content.about.vision}</p>
          </div>
        </div>
        <div className="mt-6 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--vp-text)]">Why Choose Us</h2>
          <p className="mt-3 text-sm text-[var(--vp-muted)]">{content.about.whyChoose}</p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--vp-text)]">Core Values</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.about.values.map((value) => (
              <div
                key={value.title}
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6"
              >
                <h4 className="text-base font-semibold text-[var(--vp-text)]">{value.title}</h4>
                <p className="mt-3 text-sm text-[var(--vp-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.about.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
