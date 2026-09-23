import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig, roginContactImage } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { ContactDetails } from './ContactDetails';
import { ContactFormPlaceholder } from './ContactFormPlaceholder';
import { ContactMap } from './ContactMap';
import { ContactMethods } from './ContactMethods';

export function ContactSection() {
  const { company, featureFlags } = clientConfig;

  return (
    <Section ariaLabel="Contacto" id="contacto" spacing="lg" style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        <SectionTitle
          as="h2"
          eyebrow="Contacto"
          title="Hablemos de su proyecto"
          subtitle="Atendemos solicitudes de obra civil, infraestructura, mantenimiento e instalaciones."
        />

        <div className="contact-grid" style={{ display: 'grid', gap: designTokens.spacing.lg }}>
          <div>
            <ContactDetails company={company} />
          </div>
          <div>
            <ContactMethods company={company} showSocialLinks={featureFlags.socialLinks} />
          </div>

          {roginContactImage.src ? (
            <div className="contact-full">
              <img
                src={roginContactImage.src}
                alt={roginContactImage.alt}
                style={{
                  width: '100%',
                  borderRadius: designTokens.radius.lg,
                  border: `1px solid ${theme.borderColor}`,
                  boxShadow: theme.shadow,
                  objectFit: 'cover',
                  objectPosition: 'center 22%',
                  maxHeight: '14rem',
                }}
                loading="lazy"
              />
            </div>
          ) : null}

          {featureFlags.maps && (
            <div className="contact-full">
              <ContactMap company={company} showMap={featureFlags.maps} />
            </div>
          )}
          {featureFlags.contactForm && (
            <div className="contact-full">
              <ContactFormPlaceholder />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
