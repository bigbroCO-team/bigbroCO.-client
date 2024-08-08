import ImgDisplay from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImgDisplay> = {
  component: ImgDisplay,
  args: {
    imgList: [
      {
        id: 1,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/c316d767-019f-4006-98bc-e8bfe66c420f',
        product: 1,
      },
      {
        id: 2,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/0b8645cb-163d-45ef-8773-fc40cc594816',

        product: 1,
      },
      {
        id: 3,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/4ce7e7b5-a41d-46c1-83c5-776953575143',
        product: 1,
      },
      {
        id: 4,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/e378b24f-a3bf-40f9-984d-9a37f5bb843a',
        product: 1,
      },
      {
        id: 5,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/7a3a69e2-0e67-4ea8-af23-a94336541ccf',
        product: 1,
      },
      {
        id: 6,
        url: 'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/47871001-7ab5-4f24-933f-7e83257a1a38',
        product: 1,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ImgDisplay>;

export const Primary: Story = {};
