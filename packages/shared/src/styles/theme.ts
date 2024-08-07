import { css } from '@emotion/react';
import font from 'shared/styles/font';
// todo import 문제 해결

const typo = {
  extra: {
    large: css`
      font-size: 12.5rem;
      font-weight: 800;
      line-height: 14.9375rem;
      font-family: ${font.Pretendard};
    `,
    medium: css`
      font-size: 10rem;
      font-weight: 800;
      line-height: 11.9375rem;
      font-family: ${font.Pretendard};
    `,
  },
  title: {
    large: css`
      font-size: 3rem;
      font-weight: 600;
      line-height: 3.625rem;
      font-family: ${font.Pretendard};
    `,
    medium: css`
      font-size: 2.25rem;
      font-weight: 600;
      line-height: 2.6875rem;
      font-family: ${font.Pretendard};
    `,
    small: css`
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.9375rem;
      font-family: ${font.Pretendard};
    `,
  },
  subtitle: css`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.6875rem;
    font-family: ${font.Pretendard};
  `,
  body: {
    large: css`
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.6875rem;
      font-family: ${font.Pretendard};
    `,
    medium: css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.375rem;
      font-family: ${font.Pretendard};
    `,

    small: css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.375rem;
      font-family: ${font.Pretendard};
    `,
  },
  label: css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    font-family: ${font.Pretendard};
  `,
  stoopid: {
    extraLarge: css`
      font-size: 25rem;
      font-weight: 500;
      line-height: 14rem;
      font-family: ${font.StoopidMarkers};
    `,
    large: css`
      font-size: 16.8rem;
      font-weight: 500;
      line-height: 8.2rem;
      font-family: ${font.StoopidMarkers};
    `,
    medium: css`
      font-size: 12.5rem;
      font-weight: 400;
      line-height: 10rem;
      font-family: ${font.StoopidMarkers};
    `,
    small: css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 4rem;
      font-family: ${font.StoopidMarkers};
    `,
  },
  imfeel: {
    large: css`
      font-size: 2.25rem;
      font-weight: 400;
      line-height: 2.75rem;
      font-family: ${font.ImFellGreatPrimer};
    `,
    medium: css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.4375rem;
      font-family: ${font.ImFellGreatPrimer};
    `,
    small: css`
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.8125rem;
      font-family: ${font.ImFellGreatPrimer};
    `,
  },
} as const;

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
