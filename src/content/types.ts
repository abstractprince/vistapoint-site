import type { Locale } from "@/config/site";

export type WhyUsContent = {
  title: string;
  intro: string;
  blocks: { title: string; body: string }[];
  listTitle: string;
  listItems: string[];
  ctaLine: string;
  ctaButton: string;
};

export type LocaleContent = {
  locale: Locale;
  languageLabel: string;
  nav: {
    products: string;
    services: string;
    aboutUs: string;
    contactUs: string;
  };
  footer: {
    company: string;
    social: string;
    contact: string;
    links: {
      aboutUs: string;
      whyUs: string;
      ourVision: string;
      ourBrands: string;
      facebook: string;
      instagram: string;
      youtube: string;
    };
    contactDetails: {
      email: string;
      phone: string;
      address: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      heroLabel: string;
    };
    categories: {
      title: string;
      items: {
        cooling: CategoryCopy;
        bathroom: CategoryCopy;
        kitchen: CategoryCopy;
        flooring: CategoryCopy;
        panels: CategoryCopy;
        pet: CategoryCopy;
      };
    };
    valueProps: { title: string; description: string }[];
    cta: { title: string; button: string };
  };
  products: {
    title: string;
    lead: string;
    cta: string;
  };
  services: {
    title: string;
    lead: string;
    cards: { title: string; description: string }[];
    cta: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    whyChoose: string;
    values: { title: string; description: string }[];
    cta: string;
  };

  // ✅ Добавить это поле, иначе падает /[locale]/why-us
  whyUs: WhyUsContent;

  contact: {
    title: string;
    lead: string;
    form: { name: string; email: string; message: string; submit: string };
    detailsTitle: string;
  };
  categoryPages: {
    cooling: CategoryPage;
    bathroom: CategoryPage;
    kitchen: CategoryPageWithPalette;
    flooring: CategoryPageWithPalette;
    panels: CategoryPage;
    pet: CategoryPage;
    benefits: string[];
    galleryLabel: string;
    cta: string;
    backToProducts: string;
    bottomCtaTitle: string;
    bottomCtaButton: string;
  };
  productsCategoryCard: {
    descriptionSuffix: string;
  };
};

export type CategoryCopy = {
  title: string;
  description: string;
};

export type CategoryPage = {
  title: string;
  intro: string;
};

export type CategoryPageWithPalette = CategoryPage & {
  paletteLabel: string;
  productLabel: string;
};