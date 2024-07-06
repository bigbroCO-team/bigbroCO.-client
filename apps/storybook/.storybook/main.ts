import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../../client/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../admin/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/shared/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (config) => ({
    ...config,
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        },
      ],
    ],
  }),
};
export default config;
