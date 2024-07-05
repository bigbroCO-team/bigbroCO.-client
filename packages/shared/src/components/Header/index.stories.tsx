import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  component: Header,
  args: { type: 'client_black' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ClientBlack: Story = {
  args: {
    type: 'client_black',
  },
};

export const ClientWhite: Story = {
  args: {
    type: 'client_white',
  },
};

export const ClientImg: Story = {
  args: {
    type: 'client_img',
  },
};

export const Admin: Story = {
  args: {
    type: 'admin',
  },
};
