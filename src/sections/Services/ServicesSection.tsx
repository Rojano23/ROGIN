import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig, getContentAlignmentForSection } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  const { featureFlags, services, contentAlignment } = clientConfig;
  const sectionContentAlignment = getContentAlignmentForSection('services', contentAlignment);

  if (!featureFlags.services) {
    return null;
  }

  return (
    <Section ariaLabel="Servicios" id="servicios" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Especialidades"
          title="Servicios"
          subtitle="Soluciones integrales de construcción, infraestructura y mantenimiento para proyectos públicos y privados."
        />

        <ServicesGrid services={services} contentAlignment={sectionContentAlignment} />
      </div>
    </Section>
  );
}
