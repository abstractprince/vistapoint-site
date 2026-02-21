import { CategoryPageTemplate } from "@/components/CategoryPageTemplate";
import { getContent } from "@/content";
import type { Locale } from "@/lib/locale";

export default function FlooringPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <CategoryPageTemplate
      locale={params.locale}
      title={content.categoryPages.flooring.title}
      intro={content.categoryPages.flooring.intro}
      paletteLabel={content.categoryPages.flooring.paletteLabel}
      productLabel={content.categoryPages.flooring.productLabel}
    />
  );
}
