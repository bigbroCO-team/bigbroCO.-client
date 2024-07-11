import type { Meta, StoryObj } from '@storybook/react';

import AddressInfo from '.';

const meta = {
  component: AddressInfo,
} satisfies Meta<typeof AddressInfo>;

export default meta;

type Story = StoryObj<typeof AddressInfo>;

export const Primary: Story = {
  args: {
    Id: 1,
    AddressName: '홍길동(집)',
    PhoneNumber: '010-1234-5678',
    Address: '광주광역시 광산구 송정로 123',
    Detail: '광주소프트웨어마이스터고',
    IsSelected: false,
  },
};

export const Selected: Story = {
  args: {
    Id: 1,
    AddressName: '홍길동(집)',
    PhoneNumber: '010-1234-5678',
    Address: '광주광역시 광산구 송정로 123',
    Detail: '광주소프트웨어마이스터고',
    IsSelected: true,
  },
};
