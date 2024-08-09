import type { Meta, StoryObj } from '@storybook/react';

import AddressInfo from '.';

const meta = {
  component: AddressInfo,
} satisfies Meta<typeof AddressInfo>;

export default meta;

type Story = StoryObj<typeof AddressInfo>;

export const Primary: Story = {
  args: {
    id: 1,
    tag: '학교',
    phone: '01012345678',
    address: '광주소프트웨어마이스터고등학교',
    detail: '기숙사 택배보관함',
  },
};
