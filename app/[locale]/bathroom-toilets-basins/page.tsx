import { CategoryPageTemplate } from "@/components/CategoryPageTemplate";
import { getContent } from "@/content";
import type { Locale } from "@/lib/locale";

export default function BathroomPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <CategoryPageTemplate
      locale={params.locale}
      title={content.categoryPages.bathroom.title}
      intro={content.categoryPages.bathroom.intro}
    />
  );
}
