import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {content.services.title}
          </h1>
          <p className="mt-4 text-base text-slate-600">{content.services.lead}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {content.services.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.services.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
