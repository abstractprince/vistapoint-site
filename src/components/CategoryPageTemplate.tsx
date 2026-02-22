import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

type BaseProps = {
  locale: Locale;
  title: string;
  intro: string;
};

type PaletteProps = {
  paletteLabel: string;
  productLabel: string;
};

export function CategoryPageTemplate({
  locale,
  title,
  intro,
  paletteLabel,
  productLabel
}: BaseProps & Partial<PaletteProps>) {
  const content = getContent(locale);
  const hasPalette = Boolean(paletteLabel && productLabel);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--vp-muted)]">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={localePath(locale, "/contact")}
            className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.categoryPages.cta}
          </Link>
          <Link
            href={localePath(locale, "/products")}
            className="rounded-full border border-[var(--vp-border)] px-6 py-3 text-sm font-semibold text-[var(--vp-text)]"
          >
            {content.categoryPages.backToProducts}
          </Link>
        </div>
        <div className="mt-8">
          <ImagePlaceholder label="Category Hero" width={16} height={9} className="rounded-[var(--vp-radius)]" />
        </div>
        {hasPalette ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ImagePlaceholder
              label={paletteLabel ?? "Palette"}
              width={16}
              height={9}
              className="rounded-[var(--vp-radius)]"
            />
            <ImagePlaceholder
              label={productLabel ?? "Actual product"}
              width={16}
              height={9}
              className="rounded-[var(--vp-radius)]"
            />
          </div>
        ) : null}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--vp-text)]">Benefits</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {content.categoryPages.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-5 text-sm font-medium text-[var(--vp-muted)]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--vp-text)]">Gallery</h2>
          <div className="mt-4">
            <GalleryGrid label={content.categoryPages.galleryLabel} />
          </div>
        </div>
        <div className="mt-12 rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-bg-muted)] p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h3 className="text-xl font-semibold text-[var(--vp-text)]">
              {content.categoryPages.bottomCtaTitle}
            </h3>
            <Link
              href={localePath(locale, "/contact")}
              className="rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.categoryPages.bottomCtaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
