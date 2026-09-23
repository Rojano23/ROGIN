import type { GalleryContent } from '../types';

export const gallery: GalleryContent = {
    brandsTitle: 'Experiencia y evidencia en campo',
    productsTitle: 'Galería de sesiones de capacitación',
    brands: [],
    products: [
        {
            title: 'Sesión de capacitación técnica 01',
            image: new URL('../assets/client/MTVS/training_session_01.jpg', import.meta.url).href,
        },
        {
            title: 'Sesión de capacitación técnica 02',
            image: new URL('../assets/client/MTVS/training_session_02.jpg', import.meta.url).href,
        },
        {
            title: 'Sesión de capacitación técnica 03',
            image: new URL('../assets/client/MTVS/training_session_03.jpg', import.meta.url).href,
        },
        {
            title: 'Sesión de capacitación técnica 04',
            image: new URL('../assets/client/MTVS/training_session_04.jpg', import.meta.url).href,
        },
    ],
};
