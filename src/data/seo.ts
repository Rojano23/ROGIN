import type { SEO } from '../types';

export const seo: SEO = {
  title: 'Constructora ROGIN | Construcción e Infraestructura en Veracruz',
  description:
    'Constructora ROGIN S.A. de C.V. desarrolla proyectos de obra civil, edificación, pavimentación, infraestructura hidráulica, mantenimiento e instalaciones en Veracruz.',
  keywords: [
    'construcción Veracruz',
    'obra civil Xalapa',
    'infraestructura',
    'pavimentación',
    'drenaje',
    'agua potable',
    'mantenimiento hospitalario',
    'edificación',
  ],
  favicon: new URL('../assets/client/ROGIN/rogin_logo_web.png', import.meta.url).href,
  canonical: '',
  ogTitle: 'Constructora ROGIN | Construcción e Infraestructura en Veracruz',
  ogDescription:
    'Constructora ROGIN S.A. de C.V. ofrece soluciones de obra civil, edificación, infraestructura hidráulica, pavimentación y mantenimiento para instituciones, municipios y clientes particulares.',
  ogImage: new URL('../assets/client/ROGIN/hero_infraestructura_xalapa.jpg', import.meta.url).href,
  ogType: 'website',
};
