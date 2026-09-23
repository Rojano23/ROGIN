import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { roginValues } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function ValuesSection() {
    return (
        <Section ariaLabel="Nuestros compromisos" id="compromisos" spacing="lg">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Nuestros compromisos"
                    title="Calidad, seguridad y responsabilidad"
                    subtitle="Principios que orientan cada proyecto y cada decisión en obra."
                />

                <div className="values-grid" role="list" aria-label="Nuestros compromisos de ROGIN">
                    {roginValues.map((value) => (
                        <div key={value.id} role="listitem" style={{ display: 'flex' }}>
                            <BaseCard
                                ariaLabel={value.title}
                                style={{
                                    width: '100%',
                                    display: 'grid',
                                    gap: designTokens.spacing.sm,
                                    minHeight: '12.2rem',
                                }}
                            >
                                <span
                                    aria-hidden="true"
                                    style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        borderRadius: '999px',
                                        display: 'inline-grid',
                                        placeItems: 'center',
                                        backgroundColor: `${theme.accentColor}22`,
                                        color: theme.accentColor,
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                    }}
                                >
                                    •
                                </span>
                                <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{value.title}</h3>
                                <p style={{ margin: 0, lineHeight: 1.65, color: theme.textOnDarkColor }}>{value.description}</p>
                            </BaseCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
