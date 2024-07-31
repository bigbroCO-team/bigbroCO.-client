import ProductOption from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductOption> = {
  component: ProductOption,
  args: {
    options: [
      { id: 1, name: 'small', product: 1, status: 'on_sale' },
      { id: 2, name: 'medium', product: 1, status: 'sold_out' },
      { id: 3, name: 'large', product: 1, status: 'stop_sale' },
      { id: 4, name: 'xlarge', product: 1, status: 'discontinued' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ProductOption>;

export const Primary: Story = {};
