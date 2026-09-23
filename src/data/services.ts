import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'edificacion-mantenimiento',
    title: 'Edificación y mantenimiento',
    shortDescription: 'Construcción, rehabilitación y mantenimiento de edificaciones residenciales, educativas, hospitalarias e institucionales.',
    detailedDescription:
      'Construcción, rehabilitación y mantenimiento de edificaciones residenciales, educativas, hospitalarias e institucionales.',
    icon: '',
    featured: true,
    image: new URL('../assets/client/ROGIN/css_cordoba_edificio.jpg', import.meta.url).href,
    imageAlt: 'Edificio institucional con obra ejecutada por Constructora ROGIN.',
    category: 'Construcción',
    href: '#contacto',
  },
  {
    id: 'infraestructura-vial',
    title: 'Infraestructura vial',
    shortDescription: 'Construcción de caminos, rehabilitación de pavimentos asfálticos y pavimentación con concreto hidráulico.',
    detailedDescription:
      'Construcción de caminos, rehabilitación de pavimentos asfálticos y pavimentación con concreto hidráulico.',
    icon: '',
    featured: true,
    image: new URL('../assets/client/ROGIN/hero_infraestructura_xalapa.jpg', import.meta.url).href,
    imageAlt: 'Obra vial con pavimento de concreto hidráulico en Xalapa.',
    category: 'Infraestructura',
    href: '#contacto',
  },
  {
    id: 'hidraulica-sanitaria',
    title: 'Infraestructura hidráulica y sanitaria',
    shortDescription: 'Sistemas de agua potable, captación y almacenamiento, redes de agua entubada, drenaje sanitario y colectores pluviales.',
    detailedDescription:
      'Sistemas de agua potable, captación y almacenamiento, redes de agua entubada, drenaje sanitario y colectores pluviales.',
    icon: '',
    featured: true,
    image: new URL('../assets/client/ROGIN/infraestructura_redes_xalapa.jpg', import.meta.url).href,
    imageAlt: 'Infraestructura hidráulica y redes de agua entubada en obra.',
    category: 'Infraestructura',
    href: '#contacto',
  },
  {
    id: 'obra-civil-inst',
    title: 'Obra civil e instalaciones',
    shortDescription: 'Ejecución de obra civil, adecuaciones, remodelaciones e instalaciones eléctricas, hidráulicas y sanitarias.',
    detailedDescription:
      'Ejecución de obra civil, adecuaciones, remodelaciones e instalaciones eléctricas, hidráulicas y sanitarias.',
    icon: '',
    featured: true,
    image: new URL('../assets/client/ROGIN/hgz32_minatitlan_interiores.jpg', import.meta.url).href,
    imageAlt: 'Remodelación integral y obra civil con instalaciones sanitarias.',
    category: 'Instalaciones',
    href: '#contacto',
  },
  {
    id: 'electromecanica-proteccion',
    title: 'Obra electromecánica y protección',
    shortDescription: 'Capacidad para trabajos electromecánicos, protección anticorrosiva y mantenimiento especializado.',
    detailedDescription:
      'Capacidad para trabajos electromecánicos, protección anticorrosiva y mantenimiento especializado.',
    icon: '',
    featured: false,
    image: new URL('../assets/client/ROGIN/hemodialisis_hgz8_cordoba.jpg', import.meta.url).href,
    imageAlt: 'Trabajo electromecánico y mantenimiento especializado en infraestructura hospitalaria.',
    category: 'Especialidades',
    href: '#contacto',
  },
  {
    id: 'estudios-proyectos',
    title: 'Estudios y proyectos',
    shortDescription: 'Desarrollo y ejecución de estudios y proyectos relacionados con infraestructura y construcción.',
    detailedDescription:
      'Desarrollo y ejecución de estudios y proyectos relacionados con infraestructura y construcción.',
    icon: '',
    featured: false,
    image: new URL('../assets/client/ROGIN/areas_residenciales_medicas_2025.jpg', import.meta.url).href,
    imageAlt: 'Estudio y proyecto de áreas residenciales médicas en una obra de infraestructura.',
    category: 'Proyectos',
    href: '#contacto',
  },
];
