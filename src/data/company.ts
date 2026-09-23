import type { Company } from '../types';

export const company: Company = {
  companyName: 'CONSTRUCTORA ROGIN S.A. DE C.V.',
  logo: {
    src: new URL('../assets/client/ROGIN/rogin_logo_web.png', import.meta.url).href,
    alt: 'Logotipo de Constructora ROGIN.',
    width: 320,
    height: 320,
    navbarWidth: 58,
    navbarHeight: 58,
  },
  descriptor: 'S.A. DE C.V.',
  tagline: 'Construcción · Infraestructura · Mantenimiento',
  description:
    'Constructora ROGIN S.A. de C.V. desarrolla soluciones de construcción e infraestructura con calidad, seguridad y experiencia.',
  heroTitle: 'Construimos infraestructura que genera valor',
  heroDescription:
    'Experiencia en obra civil, edificación, infraestructura hidráulica, pavimentación, mantenimiento e instalaciones para instituciones públicas, municipios y clientes particulares.',
  primaryCTA: {
    label: 'Ver proyectos',
    href: '#proyectos',
    ariaLabel: 'Ir a la sección de proyectos',
  },
  secondaryCTA: {
    label: 'Contactar',
    href: '#contacto',
    ariaLabel: 'Ir a la sección de contacto',
  },
  heroImage: new URL('../assets/client/ROGIN/hero_infraestructura_xalapa.jpg', import.meta.url).href,
  heroImageAlt: 'Obra de infraestructura urbana en Xalapa con pavimentación, drenaje y alumbrado público.',
  heroBackgroundImage: '',
  heroVideoBackground: '',
  heroStatistics: [],
  heroBadges: ['Obra civil e infraestructura', 'Experiencia documentada desde 2014', 'Calidad · Seguridad · Cumplimiento'],
  heroTrustIndicators: [],
  aboutTitle: 'Quiénes somos',
  aboutSubtitle: 'Soluciones de construcción e infraestructura con calidad, seguridad y experiencia.',
  aboutDescription:
    'Constructora ROGIN S.A. de C.V. cuenta con experiencia en distintas áreas de la construcción y el mantenimiento, atendiendo proyectos para dependencias gubernamentales, municipios y clientes particulares. Nuestra operación integra capacidad técnica y administrativa con personal especializado en obra civil, edificación, infraestructura hidráulica, pavimentación, instalaciones y mantenimiento.',
  aboutParagraphs: [
    'Constructora ROGIN S.A. de C.V. cuenta con experiencia en distintas áreas de la construcción y el mantenimiento, atendiendo proyectos para dependencias gubernamentales, municipios y clientes particulares. Nuestra operación integra capacidad técnica y administrativa con personal especializado en obra civil, edificación, infraestructura hidráulica, pavimentación, instalaciones y mantenimiento.',
    'A lo largo de su trayectoria, ROGIN ha participado en proyectos de infraestructura urbana, educativa, hospitalaria, hidráulica y residencial, desarrollando soluciones orientadas al cumplimiento de alcance, calidad, tiempo y costo.',
  ],
  mission:
    'Somos una organización que promueve, contrata y realiza la construcción de proyectos de infraestructura con calidad, en tiempo y costo, cumpliendo con las expectativas de satisfacción y rentabilidad de nuestros usuarios, clientes y accionistas.',
  missionQuote:
    'Construimos con calidad, responsabilidad y compromiso para generar valor a la sociedad y a nuestros clientes.',
  vision:
    'Consolidar e incrementar nuestra participación en los servicios de infraestructura con tecnología, confiabilidad, calidad y personal calificado, preservando el medio ambiente para contribuir al bienestar de la sociedad.',
  differentiators: [
    {
      id: 'multidisciplinary-experience',
      title: 'Experiencia multidisciplinaria',
      description: 'Capacidad en edificación, infraestructura vial, redes hidráulicas y sanitarias, instalaciones y mantenimiento.',
    },
    {
      id: 'compliance',
      title: 'Cumplimiento',
      description: 'Ejecución orientada a alcance, calidad, tiempo, costo y normatividad aplicable.',
    },
    {
      id: 'technical-capacity',
      title: 'Capacidad técnica',
      description: 'Equipo de construcción, supervisión, administración y coordinación técnica con experiencia en obra.',
    },
    {
      id: 'integral-commitment',
      title: 'Compromiso integral',
      description: 'Calidad, seguridad, responsabilidad ambiental y mejora continua como principios de ejecución.',
    },
  ],
  aboutMetrics: [],
  aboutCertifications: [],
  phone: '(228) 8-10-30-62',
  email: 'constructora_rogin@outlook.com',
  whatsapp: '(228) 8-10-30-62',
  whatsappMessage: 'Hola, quiero información sobre servicios de construcción e infraestructura.',
  address: 'Calle Priv. de Ferrocarril Interoceánico No. 11 Int. 7, Col. 7 de Noviembre, C.P. 91143, Xalapa, Veracruz.',
  businessHours: 'Lunes a viernes de 9:00 a 18:00',
  googleMapsUrl: '',
  socialLinks: {
    linkedin: '',
    instagram: '',
    facebook: '',
  },
};
