import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { mtvsTeam } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function TeamSection() {
    if (!mtvsTeam.length) {
        return null;
    }

    return (
        <Section ariaLabel="Equipo" id="equipo" spacing="md">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle as="h2" eyebrow="Equipo" title="Liderazgo MTVS" subtitle="Perfiles responsables de consultoría, operaciones y capacitación." />

                <div className="team-grid" role="list" aria-label="Equipo MTVS">
                    {mtvsTeam.map((member) => (
                        <div key={member.id} role="listitem" style={{ display: 'flex' }}>
                            <BaseCard ariaLabel={member.name} style={{ width: '100%', display: 'grid', gap: designTokens.spacing.sm }}>
                                <img
                                    src={member.image}
                                    alt={member.imageAlt}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '4 / 5',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        borderRadius: designTokens.radius.md,
                                        border: `1px solid ${theme.borderColor}`,
                                    }}
                                    loading="lazy"
                                />
                                <h3 style={{ margin: 0 }}>{member.name}</h3>
                                <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.95 }}>{member.role}</p>
                            </BaseCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
