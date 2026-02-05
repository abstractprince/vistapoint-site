import type { LocaleContent } from "./types";

export const en: LocaleContent = {
  locale: "en",
  languageLabel: "EN",
  nav: {
    products: "Products",
    services: "Services",
    aboutUs: "About Us",
    contactUs: "Contact Us"
  },
  footer: {
    company: "Company",
    social: "Social",
    contact: "Contact",
    links: {
      aboutUs: "About Us",
      whyUs: "Why Us",
      ourVision: "Our Vision",
      ourBrands: "Our Brands",
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube"
    },
    contactDetails: {
      email: "info@vistapoint.com",
      phone: "+1 800 555 1234",
      address: "123 Market Ave."
    }
  },
  home: {
    hero: {
      title: "Integrated solutions for your business",
      subtitle: "Business-to-business expertise for growing companies.",
      primaryCta: "View Products",
      secondaryCta: "Contact Us",
      heroLabel: "Hero Background Image"
    },
    categories: {
      title: "Product categories",
      items: {
        cooling: {
          listTitle: "Cooling",
          description: "Energy-efficient systems tailored for commercial environments."
        },
        bathroom: {
          listTitle: "Bathroom Solutions",
          description: "Durable fixtures engineered for high-traffic facilities."
        },
        kitchen: {
          listTitle: "Kitchen Cabinets",
          description: "Modern storage solutions with dependable finishes."
        },
        flooring: {
          listTitle: "Flooring",
          description: "Versatile surfaces that perform under heavy use."
        },
        panels: {
          listTitle: "Panels",
          description: "Architectural wall and ceiling panels with clean lines."
        },
        pet: {
          listTitle: "Pet Products — Pet Food",
          description: "Trusted nutrition and accessories for pet-focused brands."
        }
      }
    },
    valueProps: [
      {
        title: "Quality standards",
        description: "We vet every supplier to meet rigorous performance requirements."
      },
      {
        title: "Reliable supply",
        description: "Global sourcing partnerships keep your pipeline resilient."
      },
      {
        title: "Expert support",
        description: "Dedicated specialists guide product and project decisions."
      }
    ],
    cta: {
      title: "Request a quote",
      button: "Contact Us"
    }
  },
  products: {
    title: "Our Product Categories",
    lead: "Curated selections that help you deliver dependable experiences across industries.",
    cta: "Contact Us"
  },
  services: {
    title: "Services that keep your projects on track",
    lead: "End-to-end support from sourcing to delivery, aligned with your timelines.",
    cards: [
      {
        title: "Sourcing",
        description: "Supplier selection based on performance, pricing, and availability."
      },
      {
        title: "Logistics",
        description: "Coordinated shipping and warehousing for predictable delivery."
      },
      {
        title: "Project support",
        description: "Cross-functional guidance from planning through installation."
      },
      {
        title: "Quality & compliance",
        description: "Documentation and testing support for regulatory requirements."
      }
    ],
    cta: "Contact Us"
  },
  about: {
    title: "About Vista Point",
    mission: "To simplify procurement for growing businesses with trusted global partners.",
    vision: "To be the most dependable B2B sourcing partner for essential interior and lifestyle categories.",
    whyChoose: "We combine category expertise with a service-first mindset to support your brand promise.",
    values: [
      {
        title: "Transparency",
        description: "Clear communication and proactive updates at every step."
      },
      {
        title: "Accountability",
        description: "We own the details and deliver against agreed milestones."
      },
      {
        title: "Partnership",
        description: "Collaborative planning to help you scale with confidence."
      },
      {
        title: "Innovation",
        description: "Continuous improvement in sourcing and logistics practices."
      }
    ],
    cta: "Contact Us"
  },
  contact: {
    title: "Contact Us",
    lead: "Tell us about your project and we will respond promptly.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message"
    },
    detailsTitle: "Contact details"
  },
  categoryPages: {
    cooling: {
      pageTitle: "Air Conditioners",
      intro: "Commercial-grade systems engineered for consistent indoor comfort."
    },
    bathroom: {
      pageTitle: "Bathroom Solutions",
      intro: "Reliable ceramics and fittings designed for everyday durability."
    },
    kitchen: {
      pageTitle: "Kitchen Cabinets",
      intro: "Flexible cabinet programs to match modern project requirements.",
      paletteLabel: "Palette",
      productLabel: "Actual product"
    },
    flooring: {
      pageTitle: "Flooring",
      intro: "Surfaces built for longevity, safety, and easy maintenance.",
      paletteLabel: "Palette",
      productLabel: "Actual product"
    },
    panels: {
      pageTitle: "Panels",
      intro: "Clean-lined panel systems with adaptable finishes."
    },
    pet: {
      pageTitle: "Pet Products — Pet Food",
      intro: "Trusted sourcing for nutrition, accessories, and retail-ready packaging."
    },
    benefits: ["Efficiency", "Durability", "Compliance"],
    galleryLabel: "Gallery image",
    cta: "Request a quote",
    backToProducts: "Back to Products",
    bottomCtaTitle: "Ready to discuss your next order?",
    bottomCtaButton: "Contact Us"
  },
  productsCategoryCard: {
    descriptionSuffix: "Learn more"
  }
};
