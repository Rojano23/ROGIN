export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
    textOnDark: string;
    muted: string;
    border: string;
  };
  typography: {
    body: string;
    heading: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  shadow: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const designTokens: DesignTokens = {
  colors: {
    primary: '#172A4D',
    secondary: '#0A093B',
    accent: '#E4D11F',
    background: '#F6F7FA',
    text: '#292F38',
    textSecondary: '#202A36',
    textOnDark: '#FFFFFF',
    muted: '#5A6472',
    border: '#D6DDE8',
  },
  typography: {
    body: '"Source Sans 3", "Segoe UI", Tahoma, sans-serif',
    heading: '"Rajdhani", "Arial Narrow", sans-serif',
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
  shadow: '0 10px 28px rgba(10, 9, 59, 0.16)',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};
