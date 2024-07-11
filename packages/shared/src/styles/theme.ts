const typo = {
  title: {
    large: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: '3.625rem',
    },
    medium: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: '2.6875rem',
    },
    small: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '1.9375rem',
    },
  },
  subtitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: '1.6875rem',
  },
  body: {
    large: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.6875rem',
    },
    medium: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.375rem',
    },
    small: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
    },
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
};

const color = {
  main: { 50: '#FF952B', 100: '#2C46FF', 150: '#288BE1' },
  error: '#DF454A',
  grey: {
    25: '#252525',
    50: '#F2F2F2',
    100: '#E8E8E8',
    200: '#D1D1D1',
    300: '#BABABA',
    400: '#A3A3A3',
    500: '#8C8C8C',
    600: '#757575',
    700: '#5E5E5E',
    800: '#474747',
    900: '#303030',
  },
  background: '#1A1918',
  white: '#FFFFFF',
  black: '#1A1918',
} as const;

const theme = {
  typo,
  color,
} as const;

export default theme;
