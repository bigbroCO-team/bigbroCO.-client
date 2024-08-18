import KaKaoLoginButton from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof KaKaoLoginButton> = {
  component: KaKaoLoginButton,
};

export default meta;

type Story = StoryObj<typeof KaKaoLoginButton>;

export const Primary: Story = {};
