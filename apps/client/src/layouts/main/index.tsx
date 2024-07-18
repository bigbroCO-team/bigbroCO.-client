'use client';

import * as S from './style';
import * as Client from 'client/assets';
import * as IMG from 'client/public';
import { Header } from 'shared/components';
import { BrandType } from 'shared/types';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const BrandLinkArray: {
  brand: BrandType;
  img: StaticImageData;
}[] = [
  {
    brand: 'CBWAS', //
    img: IMG.CBWASLinkImg,
  },
  {
    brand: 'S.C.B', //
    img: IMG.SCBLinkImg,
  },
  {
    brand: 'BIGBRO', //
    img: IMG.BIGBROLinkImg,
  },
  {
    brand: 'GONGNEWGI',
    img: IMG.GONGNEWGILinkImg,
  },
  {
    brand: 'SCULFEE', //
    img: IMG.SCULFEELinkImg,
  },
] as const;

type MainHeaderType = 'client_clear' | 'client_black';

const MainLayout = () => {
  const { push } = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [headerType, setHeaderType] = useState<MainHeaderType>('client_clear');

  const handleViewScroll = () => {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top * -1 > window.innerHeight)
        setHeaderType('client_black');
      else {
        setHeaderType('client_clear');
      }
    }
  };

  const throttle = (callback: () => void, time: number) => {
    let isWaiting = false;

    return () => {
      if (!isWaiting) {
        callback();
        isWaiting = true;

        setTimeout(() => (isWaiting = false), time);
      }
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleViewScroll, 150));
    handleViewScroll();

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <S.Container ref={ref}>
      <S.TopContainer>
        <S.BackgroundImg src={IMG.backgroundImg} alt='배경 이미지' />
        <S.TopShadowContainer>
          <Header
            type={headerType}
            position={headerType === 'client_black' ? 'fixed' : 'absolute'}
          />
          <S.SVGBundle1Container>
            <S.SVGBundle1Text1>
              BBR
              <Client.MainSVG1 />
            </S.SVGBundle1Text1>
            <S.SVGBundle1Text2>
              <Client.MainSVG2 />
            </S.SVGBundle1Text2>
          </S.SVGBundle1Container>
        </S.TopShadowContainer>
      </S.TopContainer>
      <S.MiddleContainer>
        <S.SVGBundle2Container>
          BEST SHOP
          <S.SVGBundle2TopBox>
            <Image
              src={IMG.Main1Img}
              alt='메인 페이지 이미지 1'
              quality={100}
            />
            <Image
              src={IMG.Main2Img}
              alt='메인 페이지 이미지 2'
              quality={100}
            />
          </S.SVGBundle2TopBox>
          <S.SVGBundle2BottomBox>
            <Image
              src={IMG.Main5Img}
              alt='메인 페이지 이미지 5'
              quality={100}
            />
            <S.DescribeBox>
              &quot;빅브로&quot;는 힙한 스타일을 찾는 이들을 위한 현대적이고
              독창적인 패션 아이템을 제공하는 쇼핑몰입니다.
              <br />
              우리는 당신이 독특한 개성을 표현할 수 있는 다양한 의류, 액세서리,
              신발 등을 한 자리에서 만나보실 수 있습니다.
              <br />
              빅브로는 항상 최신 트렌드를 주시하며 새로운 디자인과 스타일을
              지속적으로 선보이고 있습니다.
              <br />
              우리의 제품은 고품질 소재와 섬세한 디테일로 제작되어 있어, 당신의
              스타일에 더욱 돋보이게 할 것입니다.
              <br />
              게다가, 저희 쇼핑몰은 합리적인 가격으로 트렌디한 아이템을 제공하여
              여러분의 쇼핑 경험을 더욱 만족스럽게 만들어 드립니다.
              <br />
              우리는 당신의 패션 스타일에 새로운 활력을 불어넣고, 당신이 원하는
              룩을 완성할 수 있도록 돕기 위해 노력하고 있습니다.
              <br />
              빅브로에서 편안하고 스타일리시한 쇼핑을 경험해보세요!
            </S.DescribeBox>
            <S.SVGBundle2ImgBox>
              <Image
                src={IMG.Main6Img}
                alt='메인 페이지 이미지 3'
                quality={100}
              />
              <S.SVGBundle2Text>COMPANY</S.SVGBundle2Text>
            </S.SVGBundle2ImgBox>
          </S.SVGBundle2BottomBox>
          <S.SVGBundle2MiddleBox>
            <S.SVGBundle2MiddleTextBox>
              <S.SVGBundle2MiddleText1>BIG</S.SVGBundle2MiddleText1>
              <S.SVGBundle2MiddleText2>BRO</S.SVGBundle2MiddleText2>
            </S.SVGBundle2MiddleTextBox>
            <Image
              src={IMG.Main3Img}
              alt='메인 페이지 이미지 3'
              quality={100}
            />
            <Image
              src={IMG.Main4Img}
              alt='메인 페이지 이미지 4'
              quality={100}
            />
          </S.SVGBundle2MiddleBox>
        </S.SVGBundle2Container>
        <S.Hr />
        <S.SVGBundle3Container>
          <S.SVGTopWrapper>
            <Client.MainSVG3 />
          </S.SVGTopWrapper>
          <Image src={IMG.Main7Img} alt='메인 페이지 이미지 7' quality={100} />
          <S.SVGBundle3TopText>BBR</S.SVGBundle3TopText>
          <S.SVGBundle3MiddleText>HIP</S.SVGBundle3MiddleText>
          <S.SVGBundle3BottomText>COFFEE</S.SVGBundle3BottomText>
          <S.SVGBottomWrapper>
            <Client.MainSVG4 />
          </S.SVGBottomWrapper>
        </S.SVGBundle3Container>
      </S.MiddleContainer>
      <S.BottomContainer>
        {BrandLinkArray.map(({ brand, img }) => (
          <S.BrandBox key={brand} onClick={() => push(brand)}>
            <S.BrandShadowBox>
              <S.BrandText>{brand}</S.BrandText>
            </S.BrandShadowBox>
            <S.BrandBackgroundImage src={img} alt={brand} />
          </S.BrandBox>
        ))}
      </S.BottomContainer>
    </S.Container>
  );
};

export default MainLayout;
