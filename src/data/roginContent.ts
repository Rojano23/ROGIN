export interface ROGINValueItem {
    id: string;
    title: string;
    description: string;
}

export interface ROGINOrganization {
    id: string;
    name: string;
    note?: string;
}

export const roginValues: ROGINValueItem[] = [
    {
        id: 'quality',
        title: 'Calidad',
        description: 'Realizamos obras mediante procesos, estrategias, innovación tecnológica, mejora continua y trabajo en equipo, buscando la satisfacción del cliente y el cumplimiento de la normatividad vigente.',
    },
    {
        id: 'security',
        title: 'Seguridad',
        description: 'Promovemos la seguridad e integridad del personal, las instalaciones y el entorno, reduciendo riesgos mediante vigilancia, procedimientos y mejora continua.',
    },
    {
        id: 'environmental-responsibility',
        title: 'Responsabilidad ambiental',
        description: 'Incorporamos tecnologías y procesos ambientalmente responsables, procurando el equilibrio ecológico de nuestras operaciones y el cumplimiento de la legislación aplicable.',
    },
    {
        id: 'integrity-teamwork',
        title: 'Integridad y trabajo en equipo',
        description: 'Desarrollamos nuestros proyectos con responsabilidad, valores éticos, colaboración y orientación al cumplimiento.',
    },
];

export const roginOrganizations: ROGINOrganization[] = [
    { id: 'imss', name: 'Instituto Mexicano del Seguro Social (IMSS)' },
    { id: 'caev', name: 'Comisión del Agua del Estado de Veracruz (CAEV)' },
    { id: 'secretaria-salud', name: 'Secretaría de Salud de Veracruz' },
    { id: 'diconsa', name: 'DICONSA, S.A. de C.V.' },
    { id: 'xalapa', name: 'H. Ayuntamiento Constitucional de Xalapa' },
    { id: 'san-andres', name: 'H. Ayuntamiento Constitucional de San Andrés Tuxtla' },
    { id: 'santiago', name: 'H. Ayuntamiento Constitucional de Santiago Tuxtla' },
    { id: 'misantla', name: 'H. Ayuntamiento Constitucional de Misantla' },
    { id: 'chacaltianguis', name: 'H. Ayuntamiento Constitucional de Chacaltianguis' },
    { id: 'vega', name: 'H. Ayuntamiento Constitucional de Vega de Alatorre' },
];

export const roginMissionImage = {
    src: new URL('../assets/client/ROGIN/hero_infraestructura_xalapa.jpg', import.meta.url).href,
    alt: 'Obra de infraestructura civil y vial en Xalapa con pavimentación y drenaje.',
};

export const roginContactImage = {
    src: new URL('../assets/client/ROGIN/css_cordoba_edificio.jpg', import.meta.url).href,
    alt: 'Edificio institucional con obra ejecutada por Constructora ROGIN.',
};
