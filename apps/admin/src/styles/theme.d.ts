import '@emotion/react';

import { theme } from 'shared';

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
  interface Theme extends ExtendedTheme {}
}
