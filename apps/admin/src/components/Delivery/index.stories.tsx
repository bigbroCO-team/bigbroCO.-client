import Delivery from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Delivery> = {
  component: Delivery,
  args: {
    year: '2024-05-15',
    time: '21:19:59',
    product: [
      'Big Bro T-sh... (15,000원/1개)',
      'Big Bro T-sh... (15,000원/1개)',
    ],
    price: 30000,
    name: '홍길동',
    address: '',
    phoneNumber: '01012345678',
    id: 'abcd1234',
  },
};

export default meta;

type Story = StoryObj<typeof Delivery>;

export const Primary: Story = {};
