import type { CSSProperties } from 'react';

import { company } from '../../data/company';
import { features } from '../../data/features';
import { getEnabledNavigationItems, navigationItems } from '../../data/navigation';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Container } from './Container';

export function Footer() {
  const enabledItems = getEnabledNavigationItems(navigationItems, features);

  const sectionTitleStyle: CSSProperties = {
    margin: 0,
    marginBottom: designTokens.spacing.sm,
    fontFamily: theme.fontFamilyHeading,
    fontSize: '0.95rem',
    color: theme.textOnDarkColor,
  };

  return (
    <footer
      aria-label="Pie de página"
      style={{
        borderTop: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.secondaryColor,
      }}
    >
      <Container
        as="div"
        style={{
          paddingBlock: designTokens.spacing.xl,
          display: 'grid',
          gap: designTokens.spacing.xl,
        }}
      >
        <div className="footer-grid" style={{ display: 'grid', gap: designTokens.spacing.lg }}>
          <section aria-label="Identidad corporativa">
            {company.logo?.src ? (
              <img
                src={company.logo.src}
                alt={company.logo.alt}
                width={company.logo.width}
                height={company.logo.height}
                style={{ width: '4.5rem', height: 'auto', objectFit: 'contain', marginBottom: designTokens.spacing.sm }}
              />
            ) : null}

            <h2 style={{ margin: `${designTokens.spacing.xs} 0 0`, fontSize: '1.125rem', color: theme.textOnDarkColor }}>
              {company.companyName}
            </h2>
            <p style={{ margin: `${designTokens.spacing.xs} 0 0`, color: theme.textOnDarkColor, maxWidth: '22ch', lineHeight: 1.45 }}>
              {company.tagline}
            </p>
          </section>

          <nav aria-label="Navegación del pie de página">
            <h3 style={sectionTitleStyle}>Navegación</h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: designTokens.spacing.xs,
              }}
            >
              {enabledItems.map((item) => (
                <li key={item.id}>
                  <a className="focus-ring" href={item.href} style={{ color: theme.textOnDarkColor, textDecoration: 'none' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Contacto en pie de página">
            <h3 style={sectionTitleStyle}>Contacto</h3>
            <p style={{ margin: `0 0 ${designTokens.spacing.xs}`, color: theme.textOnDarkColor }}>
              <a href={`tel:+522288103062`} style={{ color: theme.textOnDarkColor, textDecoration: 'none' }}>
                {company.phone}
              </a>
            </p>
            <p style={{ margin: `0 0 ${designTokens.spacing.xs}`, color: theme.textOnDarkColor }}>
              <a href={`mailto:${company.email}`} style={{ color: theme.textOnDarkColor, textDecoration: 'none' }}>
                {company.email}
              </a>
            </p>
            <p style={{ margin: 0, color: theme.textOnDarkColor }}>Xalapa, Veracruz</p>
          </section>
        </div>

        <p style={{ margin: `${designTokens.spacing.sm} 0 0`, color: '#C2C7D9', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} {company.companyName}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}