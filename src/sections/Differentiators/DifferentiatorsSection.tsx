import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { DifferentiatorsGrid } from './DifferentiatorsGrid';

export function DifferentiatorsSection() {
  const { featureFlags, company } = clientConfig;

  if (!featureFlags.differentiators || company.differentiators.length === 0) {
    return null;
  }

  return (
    <Section ariaLabel="Por qué MTVS" id="por-que-mtvs" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg, maxWidth: '56rem' }}>
        <SectionTitle
          as="h2"
          eyebrow="Por qué MTVS"
          title="Por qué MTVS"
          subtitle="Capacitación orientada a la operación real, el desempeño técnico y el desarrollo profesional."
        />
        <DifferentiatorsGrid items={company.differentiators} />
      </div>
    </Section>
  );
}
