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
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={localePath(locale, "/contact")}
            className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.categoryPages.cta}
          </Link>
          <Link
            href={localePath(locale, "/products")}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            {content.categoryPages.backToProducts}
          </Link>
        </div>
        <div className="mt-8">
          <ImagePlaceholder label="Category Hero" width={16} height={9} className="rounded-2xl" />
        </div>
        {hasPalette ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ImagePlaceholder
              label={paletteLabel ?? "Palette"}
              width={16}
              height={9}
              className="rounded-2xl"
            />
            <ImagePlaceholder
              label={productLabel ?? "Actual product"}
              width={16}
              height={9}
              className="rounded-2xl"
            />
          </div>
        ) : null}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Benefits</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {content.categoryPages.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Gallery</h2>
          <div className="mt-4">
            <GalleryGrid label={content.categoryPages.galleryLabel} />
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h3 className="text-xl font-semibold text-slate-900">
              {content.categoryPages.bottomCtaTitle}
            </h3>
            <Link
              href={localePath(locale, "/contact")}
              className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
            >
              {content.categoryPages.bottomCtaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
