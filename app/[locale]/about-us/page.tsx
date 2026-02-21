import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          {content.about.title}
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Mission</h2>
            <p className="mt-3 text-sm text-slate-600">{content.about.mission}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Vision</h2>
            <p className="mt-3 text-sm text-slate-600">{content.about.vision}</p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Why Choose Us</h2>
          <p className="mt-3 text-sm text-slate-600">{content.about.whyChoose}</p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-slate-900">Core Values</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.about.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h4 className="text-base font-semibold text-slate-900">{value.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.about.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
