import { Meta, StoryObj } from '@storybook/react';
import MobileHeader from '.';

const meta: Meta<typeof MobileHeader> = {
  component: MobileHeader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
