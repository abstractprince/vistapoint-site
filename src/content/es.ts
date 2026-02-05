import type { LocaleContent } from "./types";

export const es: LocaleContent = {
  locale: "es",
  languageLabel: "ES",
  nav: {
    products: "Productos",
    services: "Servicios",
    aboutUs: "Nosotros",
    contactUs: "Contacto"
  },
  footer: {
    company: "Compañía",
    social: "Redes",
    contact: "Contacto",
    links: {
      aboutUs: "Nosotros",
      whyUs: "Por qué nosotros",
      ourVision: "Nuestra visión",
      ourBrands: "Nuestras marcas",
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
      title: "Soluciones integradas para su negocio",
      subtitle: "Experiencia B2B para empresas en crecimiento.",
      primaryCta: "Ver productos",
      secondaryCta: "Contactar",
      heroLabel: "Imagen de fondo del héroe"
    },
    categories: {
      title: "Categorías de productos",
      items: {
        cooling: {
          listTitle: "Climatización",
          description: "Sistemas eficientes diseñados para entornos comerciales."
        },
        bathroom: {
          listTitle: "Soluciones para baño",
          description: "Accesorios duraderos para espacios de alto tráfico."
        },
        kitchen: {
          listTitle: "Gabinetes de cocina",
          description: "Soluciones modernas de almacenamiento con acabados fiables."
        },
        flooring: {
          listTitle: "Pisos",
          description: "Superficies versátiles que rinden bajo uso intensivo."
        },
        panels: {
          listTitle: "Paneles",
          description: "Paneles arquitectónicos con líneas limpias."
        },
        pet: {
          listTitle: "Productos para mascotas — alimentos",
          description: "Nutrición y accesorios confiables para marcas de mascotas."
        }
      }
    },
    valueProps: [
      {
        title: "Estándares de calidad",
        description: "Evaluamos proveedores con requisitos rigurosos."
      },
      {
        title: "Suministro confiable",
        description: "Alianzas globales que mantienen su cadena estable."
      },
      {
        title: "Soporte experto",
        description: "Especialistas dedicados para cada decisión clave."
      }
    ],
    cta: {
      title: "Solicitar cotización",
      button: "Contactar"
    }
  },
  products: {
    title: "Nuestras categorías de productos",
    lead: "Selecciones cuidadas para ofrecer experiencias confiables en cada industria.",
    cta: "Contactar"
  },
  services: {
    title: "Servicios que mantienen sus proyectos en marcha",
    lead: "Soporte integral desde el abastecimiento hasta la entrega.",
    cards: [
      {
        title: "Abastecimiento",
        description: "Selección de proveedores por rendimiento, precio y disponibilidad."
      },
      {
        title: "Logística",
        description: "Envíos coordinados y almacenamiento para entregas predecibles."
      },
      {
        title: "Soporte de proyecto",
        description: "Acompañamiento desde la planificación hasta la instalación."
      },
      {
        title: "Calidad y cumplimiento",
        description: "Documentación y pruebas para requisitos regulatorios."
      }
    ],
    cta: "Contactar"
  },
  about: {
    title: "Acerca de Vista Point",
    mission: "Simplificar compras para empresas en crecimiento con socios confiables.",
    vision: "Ser el socio B2B más confiable en categorías esenciales de interior y estilo de vida.",
    whyChoose: "Combinamos experiencia y servicio para respaldar su promesa de marca.",
    values: [
      {
        title: "Transparencia",
        description: "Comunicación clara y actualizaciones proactivas."
      },
      {
        title: "Responsabilidad",
        description: "Nos adueñamos de los detalles y los plazos."
      },
      {
        title: "Colaboración",
        description: "Planificación conjunta para escalar con confianza."
      },
      {
        title: "Innovación",
        description: "Mejora continua en abastecimiento y logística."
      }
    ],
    cta: "Contactar"
  },
  contact: {
    title: "Contacto",
    lead: "Cuéntenos sobre su proyecto y responderemos pronto.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Enviar"
    },
    detailsTitle: "Detalles de contacto"
  },
  categoryPages: {
    cooling: {
      pageTitle: "Aires acondicionados",
      intro: "Sistemas comerciales diseñados para confort constante."
    },
    bathroom: {
      pageTitle: "Soluciones para baño",
      intro: "Cerámica confiable y herrajes para el uso diario."
    },
    kitchen: {
      pageTitle: "Gabinetes de cocina",
      intro: "Programas flexibles para requisitos modernos.",
      paletteLabel: "Paleta",
      productLabel: "Producto real"
    },
    flooring: {
      pageTitle: "Pisos",
      intro: "Superficies para durabilidad, seguridad y fácil mantenimiento.",
      paletteLabel: "Paleta",
      productLabel: "Producto real"
    },
    panels: {
      pageTitle: "Paneles",
      intro: "Sistemas de paneles con acabados adaptables."
    },
    pet: {
      pageTitle: "Productos para mascotas — alimentos",
      intro: "Abastecimiento confiable para nutrición y accesorios."
    },
    benefits: ["Eficiencia", "Durabilidad", "Cumplimiento"],
    galleryLabel: "Imagen de galería",
    cta: "Solicitar cotización",
    backToProducts: "Volver a productos",
    bottomCtaTitle: "¿Listo para hablar de su próximo pedido?",
    bottomCtaButton: "Contactar"
  },
  productsCategoryCard: {
    descriptionSuffix: "Más información"
  }
};
