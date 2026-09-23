import type { ContentTextAlignment, Service } from '../../types';
import { ServiceCard } from './ServiceCard';

export interface ServicesGridProps {
  services: Service[];
  contentAlignment: ContentTextAlignment;
}

export function ServicesGrid({ services, contentAlignment }: ServicesGridProps) {
  return (
    <div className="services-grid" role="list" aria-label="Lista de servicios">
      {services.map((service) => (
        <div key={service.id} role="listitem" style={{ display: 'flex' }}>
          <ServiceCard service={service} contentAlignment={contentAlignment} />
        </div>
      ))}
    </div>
  );
}
