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
    primary: '#07572D',
    secondary: '#333B75',
    accent: '#DEA300',
    background: '#F5F7F8',
    text: '#202733',
    textSecondary: '#67688F',
    textOnDark: '#FFFFFF',
    muted: '#999CAB',
    border: '#D6D9E7',
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
  shadow: '0 12px 30px rgba(11, 22, 32, 0.12)',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};
