import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function TeamSection() {
    return (
        <Section ariaLabel="Equipo" id="equipo" spacing="md">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle as="h2" eyebrow="Equipo" title="Liderazgo y operación" subtitle="Coordinación técnica y administrativa orientada al cumplimiento y la calidad." />

                <div className="team-grid" role="list" aria-label="Equipo de operación de ROGIN">
                    {['Supervisión de obra', 'Administración y control', 'Coordinación técnica', 'Cumplimiento y seguridad'].map((item) => (
                        <div key={item} role="listitem" style={{ display: 'flex' }}>
                            <BaseCard ariaLabel={item} style={{ width: '100%', display: 'grid', gap: designTokens.spacing.sm }}>
                                <h3 style={{ margin: 0 }}>{item}</h3>
                                <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.95 }}>
                                    Enfoque en ejecución ordenada, control de calidad y coordinación con clientes, proveedores y proveedores de obra.
                                </p>
                            </BaseCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
