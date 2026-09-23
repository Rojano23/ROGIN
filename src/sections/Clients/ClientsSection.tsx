import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { mtvsClients } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function ClientsSection() {
    return (
        <Section ariaLabel="Clientes" id="clientes" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Clientes"
                    title="Organizaciones que han participado en nuestros programas de capacitación"
                />

                <div className="clients-grid" role="list" aria-label="Organizaciones participantes">
                    {mtvsClients.map((client) => (
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
                                minHeight: '8.5rem',
                            }}
                            aria-label={client.name}
                        >
                            <img
                                src={client.logo}
                                alt={client.alt}
                                style={{ maxWidth: '92%', maxHeight: '3.65rem', objectFit: 'contain', filter: 'grayscale(100%) contrast(130%)' }}
                                loading="lazy"
                            />
                            <p style={{ margin: 0, textAlign: 'center', fontSize: '0.9rem', color: theme.textColor }}>{client.name}</p>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}
