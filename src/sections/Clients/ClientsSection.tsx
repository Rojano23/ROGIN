import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { roginOrganizations } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function ClientsSection() {
    return (
        <Section ariaLabel="Instituciones y gobiernos" id="instituciones" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Experiencia institucional"
                    title="Experiencia con instituciones y gobiernos"
                    subtitle="Instituciones y gobiernos para los que ROGIN documenta experiencia"
                />

                <div className="clients-grid" role="list" aria-label="Instituciones y gobiernos con experiencia en ROGIN">
                    {roginOrganizations.map((client) => (
                        <article
                            key={client.id}
                            role="listitem"
                            style={{
                                border: `1px solid ${theme.borderColor}`,
                                borderRadius: designTokens.radius.md,
                                backgroundColor: '#FFFFFF',
                                padding: `${designTokens.spacing.md} ${designTokens.spacing.sm}`,
                                display: 'grid',
                                gap: designTokens.spacing.sm,
                                alignItems: 'center',
                                justifyItems: 'center',
                                minHeight: '7.5rem',
                            }}
                            aria-label={client.name}
                        >
                            <p style={{ margin: 0, textAlign: 'center', fontSize: '0.9rem', color: theme.textColor, lineHeight: 1.5 }}>
                                {client.name}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}
