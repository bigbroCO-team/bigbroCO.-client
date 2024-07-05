import Chart from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chart> = {
  component: Chart,
  args: {
    subScriberNumber: ['10', '0', '90', '30', '40', '25', '30'],
    todaySubScriber: ['11', '1', '91', '31', '41', '21', '31'],
    date: [10, 11, 12, 13, 14, 15, 16],
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Primary: Story = {};
