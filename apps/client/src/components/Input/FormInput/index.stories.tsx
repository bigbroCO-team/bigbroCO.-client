import FormInput from '.';
import { Meta, StoryObj } from '@storybook/react';
import { InputType } from 'client/types';

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  args: {
    name: 'name',
    placeHolder: '이름을 입력해주세요',
    type: InputType.TEXT,
  },
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
    errorMessage: '이름이 아닙니다',
  },
};

export const Password: Story = {
  args: {
    type: InputType.PASSWORD,
  },
};
