import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'hospital-comunidad',
        title: 'Mantenimiento integral de Hospitales de la Comunidad',
        sector: 'Mantenimiento hospitalario',
        shortDescription: 'Secretaría de Salud de Veracruz • Tempoal y Tlaquilpa, Veracruz',
        detailedDescription:
            'Pintura, impermeabilización, mantenimiento de instalaciones eléctricas, hidráulicas y sanitarias, así como señalización interior y exterior.',
        featured: true,
        image: new URL('../assets/client/ROGIN/hospital_comunidad_mantenimiento.jpg', import.meta.url).href,
        imageAlt: 'Mantenimiento integral en hospitales de la comunidad.',
        clientName: 'Secretaría de Salud de Veracruz',
        href: '#proyectos',
    },
    {
        id: 'hgz32-minatitlan',
        title: 'Remodelación integral y mejora de imagen - HGZ No. 32',
        sector: 'Edificación y remodelación',
        shortDescription: 'IMSS, OOAD Regional Veracruz Sur • Minatitlán, Veracruz',
        detailedDescription:
            'Obra civil e instalaciones para remodelación integral y mejora de imagen en baños y área de dietología.',
        featured: true,
        image: new URL('../assets/client/ROGIN/hgz32_minatitlan_dietologia.jpg', import.meta.url).href,
        imageAlt: 'Remodelación integral de baños y área de dietología en HGZ No. 32.',
        clientName: 'Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur',
        href: '#proyectos',
    },
    {
        id: 'css-cordoba',
        title: 'Rehabilitación del Centro de Seguridad Social Córdoba',
        sector: 'Rehabilitación institucional',
        shortDescription: 'IMSS, OOAD Regional Veracruz Sur • Córdoba, Veracruz',
        detailedDescription:
            'Impermeabilización de azoteas, pintura de fachadas e interiores y trabajos de plafones.',
        featured: true,
        image: new URL('../assets/client/ROGIN/css_cordoba_fachada.jpg', import.meta.url).href,
        imageAlt: 'Rehabilitación del Centro de Seguridad Social Córdoba.',
        clientName: 'Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur',
        href: '#proyectos',
    },
    {
        id: 'areas-residenciales-medicas',
        title: 'Dignificación de áreas residenciales médicas',
        sector: 'Infraestructura hospitalaria',
        shortDescription: 'HGZ No. 35 Cosamaloapan y HGZ No. 32 Minatitlán, Veracruz',
        detailedDescription:
            'Obra civil e instalaciones para remodelación integral y dignificación de áreas residenciales médicas.',
        featured: true,
        image: new URL('../assets/client/ROGIN/areas_residenciales_medicas_2025.jpg', import.meta.url).href,
        imageAlt: 'Dignificación de áreas residenciales médicas en hospitales.',
        clientName: 'Instituto Mexicano del Seguro Social, OOAD Regional Veracruz Sur',
        href: '#proyectos',
    },
    {
        id: 'xalapa-urbana',
        title: 'Infraestructura urbana integral en Col. Miguel Alemán',
        sector: 'Infraestructura urbana',
        shortDescription: 'H. Ayuntamiento Constitucional de Xalapa • Xalapa, Veracruz',
        detailedDescription:
            'Construcción de calle con pavimento de concreto hidráulico, drenaje sanitario, red de agua entubada y alumbrado público.',
        featured: true,
        image: new URL('../assets/client/ROGIN/hero_infraestructura_xalapa.jpg', import.meta.url).href,
        imageAlt: 'Infraestructura urbana integral en la colonia Miguel Alemán.',
        clientName: 'H. Ayuntamiento Constitucional de Xalapa',
        href: '#proyectos',
    },
];
