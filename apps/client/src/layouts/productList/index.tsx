'use client';

import { BrandType } from 'shared/types';
import * as S from './style';
import { backgroundImg } from 'client/public';
import { Header } from 'shared';
import { ProductItem } from 'client/components';

interface ProuctListLayoutProps {
  brand: BrandType;
}

const PorductListLayout: React.FC<ProuctListLayoutProps> = ({ brand }) => {
  return (
    <S.Container>
      <Header type='client_img' />
      <S.ShadowBox>
        <S.InnerContainer>
          <S.Title>{brand}</S.Title>
          <S.ProductContainer>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <ProductItem
                key={i}
                productImgUrl='test'
                discountPercent='10'
                price='9000'
                productName='레전드 티셔츠'
              />
            ))}
          </S.ProductContainer>
        </S.InnerContainer>
      </S.ShadowBox>
      <S.BackgroundImg src={backgroundImg} alt='배경화면' />
    </S.Container>
  );
};

export default PorductListLayout;
