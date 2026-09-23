import { BaseCard } from '../../components/cards';
import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { mtvsTrustRecord } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function TrustSection() {
    return (
        <Section ariaLabel="Registro profesional" id="registro" spacing="md" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
                <SectionTitle
                    as="h2"
                    eyebrow="Confianza"
                    title="Registro profesional"
                    subtitle="Información institucional mostrada conforme al brochure."
                />

                <BaseCard
                    ariaLabel="Registro STPS"
                    style={{
                        display: 'grid',
                        gap: designTokens.spacing.md,
                        backgroundColor: theme.secondaryColor,
                        padding: `clamp(${designTokens.spacing.lg}, 2.5vw, ${designTokens.spacing.xl})`,
                        maxWidth: '40rem',
                    }}
                >
                    <img
                        src={mtvsTrustRecord.logo}
                        alt="Logotipo STPS"
                        width={170}
                        height={82}
                        style={{ objectFit: 'contain' }}
                    />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem' }}>{mtvsTrustRecord.title}</p>
                    <p style={{ margin: 0, color: theme.accentColor, fontFamily: theme.fontFamilyHeading, fontSize: '1.35rem', letterSpacing: '0.04em' }}>
                        {mtvsTrustRecord.code}
                    </p>
                    <p style={{ margin: 0, color: theme.textOnDarkColor }}>{mtvsTrustRecord.note}</p>
                </BaseCard>
            </div>
        </Section>
    );
}
