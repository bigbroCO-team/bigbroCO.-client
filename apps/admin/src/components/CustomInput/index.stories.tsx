import CustomInput from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

export const Primary: Story = {};
