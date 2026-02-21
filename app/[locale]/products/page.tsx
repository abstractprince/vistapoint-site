import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryItems } from "@/config/site";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/lib/locale";

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          {content.products.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          {content.products.lead}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <CategoryCard
              key={item.key}
              href={localePath(params.locale, item.path)}
              imageLabel="Category Image"
              title={content.home.categories.items[item.key].title}
              description={content.home.categories.items[item.key].description}
              footer={content.productsCategoryCard.descriptionSuffix}
            />
          ))}
        </div>
        <div className="mt-12">
          <Link
            href={localePath(params.locale, "/contact")}
            className="rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
          >
            {content.products.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
