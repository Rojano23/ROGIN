import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { mtvsSpecialist } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function SpecialistSection() {
    return (
        <Section ariaLabel="Nuestro especialista" id="especialista" spacing="lg">
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Experiencia técnica"
                    title="Nuestro especialista"
                    subtitle={mtvsSpecialist.name}
                />

                <div className="hero-grid" style={{ display: 'grid', gap: designTokens.spacing.lg, alignItems: 'start' }}>
                    <figure style={{ margin: 0 }}>
                        <img
                            src={mtvsSpecialist.image}
                            alt={mtvsSpecialist.imageAlt}
                            style={{
                                width: '100%',
                                minHeight: '24rem',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                borderRadius: designTokens.radius.lg,
                                border: `1px solid ${theme.borderColor}`,
                                boxShadow: theme.shadow,
                            }}
                            loading="lazy"
                        />
                    </figure>

                    <BaseCard
                        ariaLabel={mtvsSpecialist.name}
                        style={{ display: 'grid', gap: designTokens.spacing.lg, padding: `clamp(${designTokens.spacing.lg}, 2.4vw, 2rem)` }}
                    >
                        <p style={{ margin: 0, color: theme.accentColor, fontWeight: 700 }}>{mtvsSpecialist.role}</p>

                        {mtvsSpecialist.bio.map((paragraph) => (
                            <p key={paragraph.slice(0, 28)} style={{ margin: 0, lineHeight: 1.75 }}>
                                {paragraph}
                            </p>
                        ))}

                        <div style={{ display: 'grid', gap: designTokens.spacing.sm }}>
                            <h3 style={{ margin: 0, fontSize: '1rem' }}>Temas de entrenamiento especializado</h3>
                            <ul
                                style={{
                                    margin: 0,
                                    paddingLeft: designTokens.spacing.lg,
                                    display: 'grid',
                                    gap: designTokens.spacing.sm,
                                    lineHeight: 1.6,
                                }}
                            >
                                {mtvsSpecialist.topics.map((topic) => (
                                    <li key={topic}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    </BaseCard>
                </div>
            </div>
        </Section>
    );
}
