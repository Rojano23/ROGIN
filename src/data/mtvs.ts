export interface MtvsValueItem {
    id: string;
    title: string;
    description: string;
}

export interface MtvsTrustRecord {
    title: string;
    code: string;
    logo: string;
    note: string;
}

export interface MtvsSpecialist {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    bio: string[];
    topics: string[];
}

export interface MtvsTeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    imageAlt: string;
}

export interface MtvsClientLogo {
    id: string;
    name: string;
    logo: string;
    alt: string;
}

export const mtvsValues: MtvsValueItem[] = [
    {
        id: 'customer-orientation',
        title: 'Orientación al cliente',
        description: 'Diseñamos contenidos de acuerdo con necesidades técnicas y operativas reales.',
    },
    {
        id: 'systemic-thinking',
        title: 'Pensamiento sistemático',
        description: 'Conectamos conocimiento, proceso y ejecución para generar resultados sostenibles.',
    },
    {
        id: 'teamwork',
        title: 'Trabajo en equipo',
        description: 'Promovemos colaboración entre perfiles técnicos, operativos y de liderazgo.',
    },
    {
        id: 'potential-development',
        title: 'Desarrollo de potencial',
        description: 'Fortalecemos habilidades para desempeño profesional y crecimiento continuo.',
    },
    {
        id: 'technical-excellence',
        title: 'Excelencia técnica',
        description: 'Impulsamos buenas prácticas aplicables a planta en contextos industriales exigentes.',
    },
    {
        id: 'professional-integrity',
        title: 'Integridad profesional',
        description: 'Actuamos con ética, rigor y responsabilidad en cada formación especializada.',
    },
    {
        id: 'continuous-innovation',
        title: 'Innovación continua',
        description: 'Actualizamos enfoques y herramientas para responder a los desafíos de la industria.',
    },
    {
        id: 'student-professional-responsibility',
        title: 'Responsabilidad con profesionales y estudiantes',
        description: 'Acompañamos el aprendizaje técnico con enfoque humano y sentido de futuro.',
    },
    {
        id: 'course-improvement',
        title: 'Mejora continua en cada curso',
        description: 'Refinamos programas y contenidos para elevar impacto y transferencia al trabajo.',
    },
];

export const mtvsTrustRecord: MtvsTrustRecord = {
    title: 'Agente Capacitador Externo',
    code: 'TERL-671202-JM6-0005',
    logo: new URL('../assets/client/MTVS/stps_logo.png', import.meta.url).href,
    note: 'Registro mostrado de forma informativa conforme al brochure proporcionado.',
};

export const mtvsSpecialist: MtvsSpecialist = {
    name: 'José Luis Trejo Rosales',
    role: 'Especialista en capacitación técnico-industrial',
    image: new URL('../assets/client/MTVS/specialist_jose_luis_trejo.png', import.meta.url).href,
    imageAlt: 'José Luis Trejo Rosales, especialista MTVS en capacitación técnica industrial.',
    bio: [
        'Ingeniero mecánico egresado de la Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME) y maestro en Ciencia de Materiales por la Escuela Superior de Física y Matemáticas (ESFM), del Instituto Politécnico Nacional.',
        'Experto especificador de materiales en sistemas de tubería para plataformas marinas, con trayectoria en proyectos para el Instituto Mexicano del Petróleo (IMP).',
        'En la industria privada se desempeñó como Valve Specification Manager, liderando especificaciones de válvulas de ingeniería. Actualmente está a cargo de servicios Aftermarket, con enfoque en la optimización integral del ciclo de vida de las válvulas: diseño, fabricación, pruebas, puesta en marcha, operación y mantenimiento en campo.',
    ],
    topics: [
        'Mantenimiento y reparación de válvulas',
        'Gestión y control de indicadores de mantenimiento',
        'Planificación integral del mantenimiento',
        'Sistemas de gestión de calidad API Spec Q1 / ISO 29001',
        'Normatividad de válvulas',
        'Temas relevantes de la industria energética',
    ],
};

export const mtvsTeam: MtvsTeamMember[] = [
    {
        id: 'linda-gissell',
        name: 'Linda Gissell Vázquez',
        role: 'Manager Comercial y Operaciones',
        image: new URL('../assets/client/MTVS/team_linda_vazquez.png', import.meta.url).href,
        imageAlt: 'Linda Gissell Vázquez, Manager Comercial y Operaciones MTVS.',
    },
    {
        id: 'jose-luis-trejo',
        name: 'Jose Luis Trejo',
        role: 'Manager Consultoría y Capacitación',
        image: new URL('../assets/client/MTVS/team_jose_luis_trejo.png', import.meta.url).href,
        imageAlt: 'José Luis Trejo, Manager Consultoría y Capacitación MTVS.',
    },
];

export const mtvsClients: MtvsClientLogo[] = [
    {
        id: 'imp',
        name: 'Instituto Mexicano del Petróleo (IMP)',
        logo: new URL('../assets/client/MTVS/client_imp.png', import.meta.url).href,
        alt: 'Logotipo de Instituto Mexicano del Petróleo (IMP).',
    },
    {
        id: 'grupo-protexa',
        name: 'Grupo Protexa',
        logo: new URL('../assets/client/MTVS/client_grupo_protexa.png', import.meta.url).href,
        alt: 'Logotipo de Grupo Protexa.',
    },
    {
        id: 'pemex',
        name: 'PEMEX',
        logo: new URL('../assets/client/MTVS/client_pemex.png', import.meta.url).href,
        alt: 'Logotipo de PEMEX.',
    },
    {
        id: 'amgn',
        name: 'Asociación Mexicana de Gas Natural (AMGN)',
        logo: new URL('../assets/client/MTVS/client_amgn.png', import.meta.url).href,
        alt: 'Logotipo de Asociación Mexicana de Gas Natural (AMGN).',
    },
    {
        id: 'worcester',
        name: 'Válvulas Worcester de México',
        logo: new URL('../assets/client/MTVS/client_valvulas_worcester.png', import.meta.url).href,
        alt: 'Logotipo de Válvulas Worcester de México.',
    },
];

export const mtvsMissionImage = {
    src: new URL('../assets/client/MTVS/mission_engineer.png', import.meta.url).href,
    alt: 'Ingeniera revisando documentación técnica de campo para capacitación industrial.',
};

export const mtvsContactImage = {
    src: new URL('../assets/client/MTVS/contact_team.png', import.meta.url).href,
    alt: 'Equipo MTVS en sesión de trabajo para atender requerimientos de capacitación.',
};
