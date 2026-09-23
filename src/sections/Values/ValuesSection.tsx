import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { mtvsValues } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function ValuesSection() {
    return (
        <Section ariaLabel="Valores" id="valores" spacing="lg">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Nuestra cultura"
                    title="Valores"
                    subtitle="Capacitación real basada en ASME, ISO y ASTM."
                />

                <div className="values-grid" role="list" aria-label="Valores MTVS">
                    {mtvsValues.map((value) => (
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
