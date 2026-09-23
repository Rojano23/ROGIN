import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function TrustSection() {
    return (
        <Section ariaLabel="Compromisos" id="compromisos-institucionales" spacing="md" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Confianza"
                    title="Compromiso con la ejecución"
                    subtitle="Trabajamos con procesos, seguridad y responsabilidad en cada etapa del proyecto."
                />

                <BaseCard
                    ariaLabel="Compromiso institucional"
                    style={{
                        display: 'grid',
                        gap: designTokens.spacing.md,
                        backgroundColor: theme.secondaryColor,
                        padding: `clamp(${designTokens.spacing.lg}, 2.5vw, ${designTokens.spacing.xl})`,
                        maxWidth: '40rem',
                    }}
                >
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: theme.textOnDarkColor }}>
                        Calidad · Seguridad · Responsabilidad ambiental
                    </p>
                    <p style={{ margin: 0, color: theme.textOnDarkColor, lineHeight: 1.7 }}>
                        Nuestra forma de operar se orienta a la entrega de obras con cumplimiento, orden administrativo y atención responsable a las necesidades de cada cliente.
                    </p>
                </BaseCard>
            </div>
        </Section>
    );
}
