import { Meta, StoryObj } from '@storybook/react';
import PCHeader from '.';

const meta: Meta<typeof PCHeader> = {
  component: PCHeader,
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

export const ClientClear: Story = {
  args: {
    type: 'client_clear',
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
