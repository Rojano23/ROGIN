import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function SpecialistSection() {
    return (
        <Section ariaLabel="Experiencia técnica" id="experiencia-tecnica" spacing="lg">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Experiencia técnica"
                    title="Equipo y operación"
                    subtitle="Nuestra operación integra capacidad técnica y administrativa con personal especializado en obra."
                />

                <BaseCard
                    ariaLabel="Experiencia técnica"
                    style={{ display: 'grid', gap: designTokens.spacing.lg, padding: `clamp(${designTokens.spacing.lg}, 2.4vw, 2rem)` }}
                >
                    <p style={{ margin: 0, color: theme.accentColor, fontWeight: 700 }}>Capacidad técnica y administrativa</p>
                    <p style={{ margin: 0, lineHeight: 1.75 }}>
                        ROGIN desarrolla proyectos con supervisión, coordinación y administración orientadas a cumplir alcance, plazo, calidad y costo en cada intervención.
                    </p>
                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: designTokens.spacing.lg,
                            display: 'grid',
                            gap: designTokens.spacing.sm,
                            lineHeight: 1.6,
                        }}
                    >
                        <li>Obra civil y edificaciones</li>
                        <li>Infraestructura hidráulica y vial</li>
                        <li>Instalaciones y mantenimiento</li>
                        <li>Coordinación técnica y administrativa</li>
                    </ul>
                </BaseCard>
            </div>
        </Section>
    );
}
