import ShoppingModal from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShoppingModal> = {
  component: ShoppingModal,
  args: {
    selectedCount: 2,
  },
};

export default meta;

type Story = StoryObj<typeof ShoppingModal>;

export const Primary: Story = {};
