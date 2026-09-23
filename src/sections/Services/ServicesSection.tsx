import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig, getContentAlignmentForSection } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  const { featureFlags, services, contentAlignment } = clientConfig;
  const sectionContentAlignment = getContentAlignmentForSection('services', contentAlignment);
  const foundational = services.filter((service) => service.category === 'Fundamentales / Intermedios');
  const advanced = services.filter((service) => service.category === 'Avanzados');

  if (!featureFlags.services) {
    return null;
  }

  return (
    <Section ariaLabel="Cursos" id="cursos" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Capacitación especializada"
          title="Cursos"
          subtitle="Programas editables y alineados con necesidades reales de operación industrial."
        />

        {foundational.length > 0 ? (
          <div style={{ display: 'grid', gap: designTokens.spacing.md }}>
            <h3 style={{ margin: 0 }}>Fundamentales / Intermedios</h3>
            <ServicesGrid services={foundational} contentAlignment={sectionContentAlignment} />
          </div>
        ) : null}

        {advanced.length > 0 ? (
          <div style={{ display: 'grid', gap: designTokens.spacing.md }}>
            <h3 style={{ margin: 0 }}>Avanzados</h3>
            <ServicesGrid services={advanced} contentAlignment={sectionContentAlignment} />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
