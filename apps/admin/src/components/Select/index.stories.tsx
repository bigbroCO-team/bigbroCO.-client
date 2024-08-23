import Select from '.';
import { Meta, StoryObj } from '@storybook/react';

const options = ['option1', 'option2', 'option3'];

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    options: options,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
