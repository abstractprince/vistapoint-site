import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryItems } from "@/config/site";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <>
      <section className="section-spacing">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {content.home.hero.title}
            </h1>
            <p className="mt-4 text-base text-slate-600">
              {content.home.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={localePath(params.locale, "/products")}
                className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
              >
                {content.home.hero.primaryCta}
              </Link>
              <Link
                href={localePath(params.locale, "/contact")}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
              >
                {content.home.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            label={content.home.hero.heroLabel}
            width={16}
            height={9}
            className="rounded-2xl"
          />
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="container-base">
          <h2 className="text-2xl font-semibold text-slate-900">
            {content.home.categories.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryItems.map((item) => (
              <CategoryCard
                key={item.key}
                href={localePath(params.locale, item.path)}
                imageLabel="Category Image"
                title={content.home.categories.items[item.key].title}
                description={content.home.categories.items[item.key].description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-base">
          <div className="grid gap-6 md:grid-cols-3">
            {content.home.valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="container-base flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold text-slate-900">{content.home.cta.title}</h2>
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.home.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
