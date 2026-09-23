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
    <Section ariaLabel="Por qué ROGIN" id="por-que-rogin" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg, maxWidth: '56rem' }}>
        <SectionTitle
          as="h2"
          eyebrow="Por qué ROGIN"
          title="Por qué ROGIN"
          subtitle="Ejecución técnica, administración responsable y resultados orientados a la calidad y la seguridad."
        />
        <DifferentiatorsGrid items={company.differentiators} />
      </div>
    </Section>
  );
}
