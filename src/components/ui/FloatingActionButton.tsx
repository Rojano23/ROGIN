import type { CSSProperties } from 'react';

import { company } from '../../data/company';
import { features } from '../../data/features';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

function buildWhatsAppUrl(phone: string, message?: string): string {
  const normalizedPhone = phone.replace(/\D+/g, '');
  if (!message) {
    return `https://wa.me/${normalizedPhone}`;
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function FloatingActionButton() {
  if (!features.whatsapp || !company.whatsapp) {
    return null;
  }

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    right: `clamp(${designTokens.spacing.md}, 2vw, ${designTokens.spacing.xl})`,
    bottom: `clamp(${designTokens.spacing.md}, 2vw, ${designTokens.spacing.xl})`,
    zIndex: 50,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '3.25rem',
    minHeight: '3.25rem',
    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
    borderRadius: '999px',
    border: `1px solid ${theme.primaryColor}`,
    backgroundColor: '#25D366',
    color: '#ffffff',
    boxShadow: theme.shadow,
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.02em',
  };

  return (
    <a
      href={buildWhatsAppUrl(company.whatsapp, company.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por WhatsApp a ${company.companyName}`}
      title="WhatsApp"
      style={buttonStyle}
      className="focus-ring"
    >
      WhatsApp
    </a>
  );
}