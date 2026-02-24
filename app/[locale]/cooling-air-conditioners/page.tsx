import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

const HERO_SRC = "/images/categories/cooling/hero.webp";
const GALLERY = [
  "/images/categories/cooling/gallery-1.webp",
  "/images/categories/cooling/gallery-2.webp",
  "/images/categories/cooling/gallery-3.webp",
  "/images/categories/cooling/gallery-4.webp",
];

export default function CoolingPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <>
      <section className="section-spacing">
        <div className="container-base">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
            {content.categoryPages.cooling.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base text-[var(--vp-muted)]">
            {content.categoryPages.cooling.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={localePath(params.locale, "/contact")}
              className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.categoryPages.cta}
            </Link>

            <Link
              href={localePath(params.locale, "/products")}
              className="rounded-full border border-[var(--vp-border)] px-6 py-3 text-sm font-semibold text-[var(--vp-text)]"
            >
              {content.categoryPages.backToProducts}
            </Link>
          </div>

          {/* HERO */}
          <div className="mt-10 overflow-hidden rounded-[var(--vp-radius)] border border-[var(--vp-border)]">
            <div className="relative min-h-[260px] md:min-h-[420px]">
              <Image
                src={HERO_SRC}
                alt={content.categoryPages.cooling.title}
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 1080px"
                className="object-cover"
              />
            </div>
          </div>

          {/* BENEFITS */}
          <h2 className="mt-12 text-2xl font-semibold text-[var(--vp-text)]">Benefits</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.categoryPages.benefits.map((b) => (
              <div
                key={b}
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6"
              >
                <p className="text-sm font-semibold text-[var(--vp-text)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-spacing">
        <div className="container-base">
          <h2 className="text-2xl font-semibold text-[var(--vp-text)]">
            {content.categoryPages.galleryLabel}
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((src, idx) => (
              <div
                key={src}
                className="overflow-hidden rounded-[var(--vp-radius)] border border-[var(--vp-border)]"
              >
                <div className="relative min-h-[180px]">
                  <Image
                    src={src}
                    alt={`${content.categoryPages.cooling.title} — gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-spacing">
        <div className="container-base flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-4">
          <h2 className="text-2xl font-semibold text-[var(--vp-text)]">
            {content.categoryPages.bottomCtaTitle}
          </h2>
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.categoryPages.bottomCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
