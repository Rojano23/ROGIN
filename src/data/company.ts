import type { Company } from '../types';


export const company: Company = {
  companyName: '',
  logo: {
    src: new URL('../assets/client/MTVS/mtvs_logo_web.png', import.meta.url).href,
    alt: 'Logotipo de MORE THAN VALVS (MTVS).',
    width: 156,
    height: 80,
  },
  descriptor: '',
  tagline: 'CAPACITACIÓN · CONSULTORÍA · COACHING',
  description:
    'MORE THAN VALVS (MTVS) brinda capacitación técnico-estratégica para la industria con enfoque práctico y aplicable en planta.',
  heroTitle: 'Capacitación técnica para la industria real',
  heroDescription:
    'Desarrollamos competencias técnicas, estratégicas e industriales con formación especializada basada en necesidades reales de operación.',
  primaryCTA: {
    label: 'Conoce nuestros cursos',
    href: '#cursos',
    ariaLabel: 'Ir a la sección de cursos',
  },
  secondaryCTA: {
    label: 'Solicitar información',
    href: '#contacto',
    ariaLabel: 'Ir a la sección de contacto para solicitar información',
  },
  heroImage: new URL('../assets/client/MTVS/hero_industrial_training.png', import.meta.url).href,
  heroImageAlt: 'Sesión de capacitación técnica industrial para personal operativo y de mantenimiento.',
  heroBackgroundImage: '',
  heroVideoBackground: '',
  heroStatistics: [],
  heroBadges: ['Capacitación', 'Consultoría', 'Coaching'],
  heroTrustIndicators: ['+100 profesionales capacitados'],
  aboutTitle: 'Quiénes somos',
  aboutSubtitle: 'Formación especializada para resultados reales en planta.',
  aboutDescription:
    'Somos una marca apasionada por la formación técnico-estratégica. Brindamos capacitación especializada a empresas, profesionistas y estudiantes universitarios, impulsando el conocimiento mediante herramientas de capacitación real en válvulas, tuberías, ductos, materiales, corrosión y mantenimiento, con base en las necesidades y mejores prácticas de la industria ASME, ISO y ASTM.',
  aboutParagraphs: [
    'Somos una marca apasionada por la formación técnico-estratégica. Brindamos capacitación especializada a empresas, profesionistas y estudiantes universitarios, impulsando el conocimiento mediante herramientas de capacitación real en válvulas, tuberías, ductos, materiales, corrosión y mantenimiento, con base en las necesidades y mejores prácticas de la industria ASME, ISO y ASTM.',
    'Nuestro enfoque tecnológico nos permite desarrollar talento y formar profesionistas con habilidades laborales y competencias industriales que acompañan a personas y organizaciones a expandir su capacidad de generar resultados.',
    'Somos una solución a las necesidades de capacitación de las empresas, formando profesionales que resuelven problemas reales, generan valor sostenible y resultados en planta.',
  ],
  aboutHighlights: [
    'Formación técnica',
    'Aplicación industrial real',
    'Mejores prácticas',
    'Desarrollo de talento',
  ],
  mission:
    'Desarrollar competencias técnicas, estratégicas e industriales en profesionales de todos los niveles, promoviendo una cultura de aprendizaje continuo donde cada persona aporte valor, hable el mismo idioma y genere resultados.',
  missionQuote:
    'Creemos que la verdadera ventaja competitiva no está en los activos, sino en la capacidad de las personas para aprender, adaptarse y crear valor juntos.',
  vision:
    'Ser el referente en capacitación técnico-estratégica que impulse y transforme la industria desde el conocimiento real y el aprendizaje colectivo, rompiendo paradigmas de modelos rígidos hacia un enfoque tecnológico y sistemático.',
  differentiators: [
    {
      id: 'specialized-knowledge',
      title: 'Conocimiento especializado',
      description:
        'Contenido enfocado en válvulas industriales API, materiales para tubería, corrosión y servicios auxiliares.',
    },
    {
      id: 'practical-approach',
      title: 'Enfoque práctico',
      description: 'Aprendizaje conectado con situaciones reales.',
    },
    {
      id: 'industrial-vision',
      title: 'Visión industrial',
      description: 'Formación diseñada pensando en las necesidades de la operación.',
    },
    {
      id: 'professional-development',
      title: 'Desarrollo profesional',
      description: 'Conocimiento para fortalecer competencias y crecimiento.',
    },
  ],
  aboutMetrics: [],
  aboutCertifications: ['ASME', 'ISO', 'ASTM'],
  phone: '442 580 5203',
  email: 'morethanvalvs@gmail.com',
  whatsapp: '+52 442 580 5203',
  whatsappMessage: 'Hola, me gustaría recibir información sobre los cursos y servicios de MTVS.',
  address: '',
  businessHours: '',
  googleMapsUrl: '',
  socialLinks: {
    linkedin: '',
    instagram: '',
    facebook: '',
  },
};
