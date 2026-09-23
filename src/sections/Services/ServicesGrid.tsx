import type { ContentTextAlignment, Service } from '../../types';
import { ServiceCard } from './ServiceCard';

export interface ServicesGridProps {
  services: Service[];
  contentAlignment: ContentTextAlignment;
}

export function ServicesGrid({ services, contentAlignment }: ServicesGridProps) {
  return (
    <div className="courses-grid" role="list" aria-label="Lista de cursos">
      {services.map((service) => (
        <div key={service.id} role="listitem" style={{ display: 'flex' }}>
          <ServiceCard service={service} contentAlignment={contentAlignment} />
        </div>
      ))}
    </div>
  );
}
