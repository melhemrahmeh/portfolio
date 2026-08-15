const theme = {
  fonts: {
    // Space Grotesk is a display face — great for headings, tiring for long
    // body copy, so Inter carries the running text.
    title: '"Space Grotesk", sans-serif',
    main: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  // Colors for layout
  colors: {
    primary1: 'hsl(204,23.8%,95.9%)',
    background1: '#0F1624',
    accent1: 'hsl(34.9,98.6%,72.9%)',
    button: 'hsl(205.1,100%,36.1%)',
    background2: 'hsl(232.7,27.3%,23.7%)',

    // Surfaces
    surface1: '#141C2F',
    surface2: '#1A2338',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',

    // Text
    text: '#E8ECF5',
    textMuted: 'rgba(232, 236, 245, 0.62)',
    textSubtle: 'rgba(232, 236, 245, 0.45)',

    // Brand accents (used by the gradients below)
    cyan: '#13ADC7',
    purple: '#945DD6',
    orange: '#F46737',
    green: '#2EE6A8',
  },
  // Per-section background tints so consecutive sections read as distinct
  // bands rather than one continuous sheet.
  bands: {
    none: 'transparent',
    subtle: 'rgba(255, 255, 255, 0.018)',
    glow: 'radial-gradient(60% 50% at 50% 0%, rgba(148,93,214,0.10), transparent 70%)',
    glowCyan:
      'radial-gradient(60% 50% at 50% 0%, rgba(19,173,199,0.09), transparent 70%)',
  },
  gradients: {
    primary: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
    alt: 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
    text: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '18px',
    pill: '999px',
  },
  shadows: {
    card: '0 18px 40px -24px rgba(0, 0, 0, 0.85)',
    cardHover: '0 28px 60px -28px rgba(19, 173, 199, 0.45)',
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
};

export default theme;
