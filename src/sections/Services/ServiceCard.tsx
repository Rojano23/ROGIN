import type { CSSProperties } from 'react';

import type { ContentTextAlignment, Service } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';
import { Button } from '../../components/ui';
import { Badge } from '../../components/ui';

export interface ServiceCardProps {
  service: Service;
  contentAlignment: ContentTextAlignment;
}

export function ServiceCard({ service, contentAlignment }: ServiceCardProps) {
  const isAdvanced = service.category === 'Avanzados';

  const cardStyle: CSSProperties = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.sm,
    padding: designTokens.spacing.md,
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: 'clamp(8.5rem, 20vw, 10.25rem)',
    objectFit: 'cover',
    borderRadius: theme.radius,
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: designTokens.spacing.sm,
  };

  const titleStyle: CSSProperties = {
    margin: 0,
    fontFamily: theme.fontFamilyHeading,
    fontWeight: 700,
    fontSize: 'clamp(1rem, 2vw, 1.08rem)',
    color: theme.textOnDarkColor,
    lineHeight: 1.35,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  const descriptionStyle: CSSProperties = {
    margin: 0,
    color: theme.textOnDarkColor,
    fontSize: '0.9rem',
    lineHeight: 1.55,
    textAlign: contentAlignment,
  };

  return (
    <BaseCard ariaLabel={service.title} style={cardStyle}>
      {service.image && <img src={service.image} alt={service.imageAlt} style={imageStyle} loading="lazy" />}
      <div style={headerStyle}>
        <h3 style={titleStyle}>{service.title}</h3>
        {service.category ? <Badge label={isAdvanced ? 'Nivel: Avanzado' : 'Nivel: Intermedio'} tone="border" /> : null}
      </div>
      <p style={descriptionStyle}>{service.shortDescription}</p>
      <div style={{ marginTop: 'auto' }}>
        <Button
          variant="primary"
          size="sm"
          ariaLabel={`Solicitar información para ${service.title}`}
          onClick={() => {
            window.location.hash = service.href ?? '#contacto';
          }}
        >
          Solicitar información
        </Button>
      </div>
    </BaseCard>
  );
}
