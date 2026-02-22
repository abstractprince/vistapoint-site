import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryItems } from "@/config/site";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <>
      <section className="section-spacing">
        <div className="container-base flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
            {content.home.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--vp-muted)]">
            {content.home.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href={localePath(params.locale, "/products")}
              className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.home.hero.primaryCta}
            </Link>

            <Link
              href={localePath(params.locale, "/contact")}
              className="rounded-full border border-[var(--vp-border)] px-6 py-3 text-sm font-semibold text-[var(--vp-text)]"
            >
              {content.home.hero.secondaryCta}
            </Link>
          </div>

          <div className="relative mt-10 w-full max-w-[1080px] overflow-hidden rounded-[var(--vp-radius)] border border-[var(--vp-border)]">
            <Image
              src="/images/hero/hero-v2.webp"
              alt="Vista Point hero"
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 1080px"
              className="object-cover min-h-[260px] md:min-h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing relative">
        <div className="container-base">
          <h2 className="text-center text-2xl font-semibold text-[var(--vp-text)] md:absolute md:left-1/2 md:-translate-x-1/2">
            {content.home.categories.title}
          </h2>

          <div className="grid gap-6 pt-8 sm:grid-cols-2 md:pt-12 lg:grid-cols-3">
            {categoryItems.map((item) => (
              <CategoryCard
                key={item.key}
                href={localePath(params.locale, item.path)}
                imageLabel="Category Image"
                title={content.home.categories.items[item.key].listTitle}
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
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--vp-text)]">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--vp-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-base flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-4">
          <h2 className="text-2xl font-semibold text-[var(--vp-text)]">
            {content.home.cta.title}
          </h2>

          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.home.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
