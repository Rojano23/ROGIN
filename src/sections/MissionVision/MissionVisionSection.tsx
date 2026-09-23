import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig, roginMissionImage } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function MissionVisionSection() {
    const { company } = clientConfig;

    return (
        <Section ariaLabel="Misión y visión" id="mision-vision" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Nuestra esencia"
                    title="Misión y visión"
                    subtitle="Calidad, cumplimiento y valor para la sociedad."
                />

                <div className="hero-grid" style={{ display: 'grid', gap: designTokens.spacing.lg, alignItems: 'stretch' }}>
                    <figure style={{ margin: 0 }}>
                        <img
                            src={roginMissionImage.src}
                            alt={roginMissionImage.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '18rem',
                                objectFit: 'cover',
                                borderRadius: designTokens.radius.lg,
                                border: `1px solid ${theme.borderColor}`,
                                boxShadow: theme.shadow,
                            }}
                        />
                    </figure>

                    <div style={{ display: 'grid', gap: designTokens.spacing.md }}>
                        <BaseCard ariaLabel="Misión de ROGIN" style={{ height: '100%' }}>
                            <h3 style={{ margin: `0 0 ${designTokens.spacing.sm}` }}>Misión</h3>
                            <p style={{ margin: 0, lineHeight: 1.7 }}>{company.mission}</p>
                        </BaseCard>

                        {company.missionQuote ? (
                            <blockquote
                                style={{
                                    margin: 0,
                                    borderLeft: `4px solid ${theme.accentColor}`,
                                    padding: `${designTokens.spacing.sm} 0 ${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                                    color: theme.textSecondaryColor,
                                    fontStyle: 'italic',
                                    lineHeight: 1.8,
                                }}
                            >
                                {`“${company.missionQuote}”`}
                            </blockquote>
                        ) : null}

                        <BaseCard ariaLabel="Visión de ROGIN" style={{ height: '100%' }}>
                            <h3 style={{ margin: `0 0 ${designTokens.spacing.sm}` }}>Visión</h3>
                            <p style={{ margin: 0, lineHeight: 1.7 }}>{company.vision}</p>
                        </BaseCard>
                    </div>
                </div>
            </div>
        </Section>
    );
}
