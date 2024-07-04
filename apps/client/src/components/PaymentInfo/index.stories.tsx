import PaymentInfo from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PaymentInfo> = {
  component: PaymentInfo,
  args: {
    productPrice: '60000',
    discountPrice: '9000',
    totalPrice: '54000',
  },
};

export default meta;

type Story = StoryObj<typeof PaymentInfo>;

export const Delivery: Story = {
  args: {
    deliveryPrice: '3000',
    requiredPrice: '9000',
  },
};

export const FreeDelivery: Story = {
  args: {
    deliveryPrice: '0',
    requiredPrice: '0',
  },
};
