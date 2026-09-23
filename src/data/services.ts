import type { Service } from '../types';

const courseImageA = new URL('../assets/client/MTVS/training_session_01.jpg', import.meta.url).href;
const courseImageB = new URL('../assets/client/MTVS/training_session_02.jpg', import.meta.url).href;
const courseImageC = new URL('../assets/client/MTVS/training_session_03.jpg', import.meta.url).href;
const courseImageD = new URL('../assets/client/MTVS/training_session_04.jpg', import.meta.url).href;

export const services: Service[] = [
  {
    id: 'course-valvulas-proceso',
    title: 'Seminario: Válvulas Industriales de Proceso y Servicios Auxiliares',
    shortDescription: 'Conceptos clave para comprender el desempeño y la automatización del proceso.',
    detailedDescription:
      'Formación para fortalecer criterios técnicos de selección, funcionamiento y aplicación de válvulas industriales.',
    icon: '',
    featured: false,
    image: courseImageA,
    imageAlt: 'Participantes en sesión técnica industrial.',
    category: 'Fundamentales / Intermedios',
    href: '#contacto',
  },
  {
    id: 'course-api6d-25a',
    title: 'Seminario Tecnológico: Cambios en Especificación y Normativa API 6D (25A Edición)',
    shortDescription: 'Criterios técnicos para seleccionar soluciones alineadas a la aplicación.',
    detailedDescription:
      'Revisión técnico-normativa para decisiones de especificación y actualización en el sector energético.',
    icon: '',
    featured: false,
    image: courseImageB,
    imageAlt: 'Instructor explicando contenido técnico en capacitación.',
    category: 'Fundamentales / Intermedios',
    href: '#contacto',
  },
  {
    id: 'course-materiales-tuberias',
    title: 'Curso: Fundamentos de Especificación de Materiales para Sistemas de Tuberías',
    shortDescription: 'Buenas prácticas para mantener la confiabilidad de activos y procesos.',
    detailedDescription:
      'Fundamentos de selección y aplicación de materiales para sistemas de tubería en operación industrial.',
    icon: '',
    featured: false,
    image: courseImageC,
    imageAlt: 'Capacitación técnica sobre materiales en sistemas de tuberías.',
    category: 'Fundamentales / Intermedios',
    href: '#contacto',
  },
  {
    id: 'course-corrosion-tuberias',
    title: 'Curso: Corrosión con Enfoque en Ingeniería de Tuberías',
    shortDescription: 'Principios y aplicaciones para comprender elementos críticos del proceso.',
    detailedDescription:
      'Comprensión de mecanismos de corrosión y su relación con confiabilidad, integridad y mantenimiento.',
    icon: '',
    featured: false,
    image: courseImageD,
    imageAlt: 'Participantes en formación sobre integridad de tuberías.',
    category: 'Fundamentales / Intermedios',
    href: '#contacto',
  },
  {
    id: 'course-trunnion-api6d',
    title: 'Curso: Diseño, Instalación y Mantenimiento de Válvulas de Bola Trunnion API 6D',
    shortDescription: 'Conocimiento técnico para sistemas que respaldan la operación industrial.',
    detailedDescription:
      'Entrenamiento aplicado sobre instalación, operación y mantenimiento de válvulas Trunnion en entorno API 6D.',
    icon: '',
    featured: false,
    image: courseImageA,
    imageAlt: 'Sesión técnica de válvulas industriales en aula.',
    category: 'Fundamentales / Intermedios',
    href: '#contacto',
  },
  {
    id: 'course-maintenance-repair',
    title: 'Mantenimiento y reparación de válvulas',
    shortDescription: 'Programa avanzado orientado a ejecución en planta.',
    detailedDescription:
      'Capacitación para mejorar diagnóstico, intervención y confiabilidad operacional de válvulas industriales.',
    icon: '',
    featured: false,
    image: courseImageB,
    imageAlt: 'Entrenamiento avanzado en mantenimiento industrial.',
    category: 'Avanzados',
    href: '#contacto',
  },
  {
    id: 'course-maintenance-planning',
    title: 'Planificación integral del mantenimiento',
    shortDescription: 'Enfoque avanzado para programación y control del mantenimiento.',
    detailedDescription:
      'Metodología para estructurar estrategias integrales de mantenimiento con enfoque técnico y productivo.',
    icon: '',
    featured: false,
    image: courseImageC,
    imageAlt: 'Sesión de planificación de mantenimiento industrial.',
    category: 'Avanzados',
    href: '#contacto',
  },
  {
    id: 'course-maintenance-indicators',
    title: 'Gestión del mantenimiento e indicadores de control',
    shortDescription: 'Capacitación avanzada para seguimiento de desempeño y mejora continua.',
    detailedDescription:
      'Uso de indicadores y criterios de control para fortalecer decisiones técnicas en mantenimiento industrial.',
    icon: '',
    featured: false,
    image: courseImageD,
    imageAlt: 'Curso avanzado con enfoque en indicadores de mantenimiento.',
    category: 'Avanzados',
    href: '#contacto',
  },
];
