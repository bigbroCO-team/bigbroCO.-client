import ProductCount from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductCount> = {
  component: ProductCount,
  args: {
    id: 1,
    price: 3000,
    name: '엄청난 상품',
  },
};

export default meta;

type Story = StoryObj<typeof ProductCount>;

export const Primary: Story = {};
