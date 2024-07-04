import ProductDetailInfo from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductDetailInfo> = {
  component: ProductDetailInfo,
  args: {
    productName: 'Big Bro T-shirt',
    productPercent: 15,
    usuallyPrice: 30000,
    descriptionTitle: '🔥 스타일과 개성을 불태우다! 플레임 티셔츠 🔥',
    descriptionContent:
      '패션의 새로운 기준을 제시하는 Ewangelii 플레임 티셔츠를 소개합니다. 이 티셔츠는 단순한 의류를 넘어, 당신의 개성과 에너지를 표현하는 완벽한 아이템입니다. 눈에 띄는 불꽃 디자인이 티셔츠의 소매와 밑단을 장식하고 있어, 거리에서 단연 돋보이는 스타일을 연출할 수 있습니다. 중앙에 새겨진 강렬한 ‘Ewangelii’ 로고와 상징적인 818 숫자는 당신의 패션 감각을 한층 더 업그레이드 시켜줍니다. 고급 면 소재로 제작되어 착용감이 뛰어나며, 오래 입어도 변함없는 퀄리티를 자랑합니다. 또한, 다양한 스타일과 매치하기 좋아 캐주얼한 일상룩은 물론, 특별한 날의 포인트 아이템으로도 손색이 없습니다.',
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetailInfo>;

export const Sale: Story = {
  args: {
    isSale: true,
  },
};

export const NotSale: Story = {
  args: {
    isSale: false,
  },
};
