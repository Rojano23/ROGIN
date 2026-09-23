import type { GalleryContent } from '../types';

export const gallery: GalleryContent = {
    brandsTitle: 'Experiencia en obra',
    productsTitle: 'Obra ejecutada',
    brands: [],
    products: [
        {
            title: 'Infraestructura hidráulica y redes en Xalapa',
            image: new URL('../assets/client/ROGIN/infraestructura_redes_xalapa.jpg', import.meta.url).href,
        },
        {
            title: 'Edificio institucional y obra civil',
            image: new URL('../assets/client/ROGIN/css_cordoba_edificio.jpg', import.meta.url).href,
        },
        {
            title: 'Remodelación integral en HGZ No. 32',
            image: new URL('../assets/client/ROGIN/hgz32_minatitlan_interiores.jpg', import.meta.url).href,
        },
        {
            title: 'Hemodiálisis interna en Córdoba',
            image: new URL('../assets/client/ROGIN/hemodialisis_hgz8_detalle.jpg', import.meta.url).href,
        },
        {
            title: 'Cisternas en obra de infraestructura',
            image: new URL('../assets/client/ROGIN/cisternas_imss_2025.jpg', import.meta.url).href,
        },
    ],
};
