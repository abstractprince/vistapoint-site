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
  const page = content.categoryPages.cooling;

  return (
    <>
      <section className="section-spacing">
        <div className="container-base">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
            {page.pageTitle}
          </h1>

          <p className="mt-4 max-w-3xl text-base text-[var(--vp-muted)]">
            {page.intro}
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

          {/* HERO (как в скелете: большой блок) */}
          <div className="mt-10 overflow-hidden rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)]">
            <div className="relative min-h-[320px] md:min-h-[520px]">
              <Image
                src={HERO_SRC}
                alt={page.pageTitle}
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 1080px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS (оставляем как в скелете) */}
      <section className="section-spacing">
        <div className="container-base">
          <h2 className="text-xl font-semibold text-[var(--vp-text)]">Benefits</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.categoryPages.benefits.map((b) => (
              <div
                key={b}
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-4"
              >
                <p className="text-sm font-semibold text-[var(--vp-text)]">{b}</p>
              </div>
            ))}
          </div>

          {/* GALLERY (как в скелете: 2×2 крупные карточки) */}
          <h2 className="mt-10 text-xl font-semibold text-[var(--vp-text)]">Gallery</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {GALLERY.map((src, idx) => (
              <div
                key={src}
                className="overflow-hidden rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)]"
              >
                <div className="relative min-h-[260px] md:min-h-[360px]">
                  <Image
                    src={src}
                    alt={`${page.pageTitle} — gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
