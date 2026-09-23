import type { CSSProperties } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';
import { Badge, Button } from '../../components/ui';
import type { Company } from '../../types';

export interface ContactMethodsProps {
  company: Company;
  showSocialLinks: boolean;
}

export function ContactMethods({ company, showSocialLinks }: ContactMethodsProps) {
  const socialEntries = [
    { label: 'LinkedIn', href: company.socialLinks.linkedin },
    { label: 'Instagram', href: company.socialLinks.instagram },
    { label: 'Facebook', href: company.socialLinks.facebook },
  ].filter((entry) => entry.href);

  const listStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: designTokens.spacing.sm,
    padding: 0,
    margin: 0,
    listStyle: 'none',
  };

  return (
    <section aria-label="Métodos de contacto" style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: designTokens.spacing.xs }}>
        <Badge label={`Teléfono: ${company.phone}`} tone="border" />
        <Badge label={`Correo: ${company.email}`} tone="accent" />
      </div>

      <BaseCard
        ariaLabel="Acciones de contacto"
        style={{
          display: 'grid',
          gap: designTokens.spacing.sm,
          padding: designTokens.spacing.md,
        }}
      >
        <div style={{ display: 'grid', gap: designTokens.spacing.xs }}>
          <p style={{ margin: 0, fontWeight: 700, color: theme.textOnDarkColor }}>Canales de atención</p>
          <p style={{ margin: 0, color: theme.textOnDarkColor, opacity: 0.9 }}>
            Respuesta por teléfono o correo para información de obra civil, infraestructura y mantenimiento.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: designTokens.spacing.sm }}>
          <a href={`tel:+522288103062`} className="focus-ring" style={{ textDecoration: 'none' }} aria-label="Llamar al teléfono de ROGIN">
            <Button ariaLabel="Llamar al teléfono de ROGIN" variant="primary" size="sm">
              Llamar ahora
            </Button>
          </a>

          <a href={`mailto:${company.email}`} className="focus-ring" style={{ textDecoration: 'none' }} aria-label="Enviar correo a Constructora ROGIN">
            <Button ariaLabel="Enviar correo a Constructora ROGIN" variant="secondary" size="sm">
              Enviar correo
            </Button>
          </a>
        </div>
      </BaseCard>

      {showSocialLinks && socialEntries.length > 0 && (
        <div>
          <h4 style={{ margin: 0, marginBottom: designTokens.spacing.sm, color: theme.textColor }}>Redes sociales</h4>
          <ul style={listStyle}>
            {socialEntries.map((entry) => (
              <li key={entry.label}>
                <a
                  className="focus-ring"
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.primaryColor }}
                  aria-label={`Abrir ${entry.label} en nueva pestaña`}
                >
                  {entry.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
