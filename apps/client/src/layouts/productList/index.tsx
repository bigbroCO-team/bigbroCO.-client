'use client';

import { BrandType } from 'shared/types';
import * as S from './style';
import { backgroundImg } from 'client/public';
import { Header, useGetProductList } from 'shared';
import { ProductItem } from 'client/components';
import { minutesToMs } from 'client/utils';

interface ProuctListLayoutProps {
  brand: BrandType;
}

const PorductListLayout: React.FC<ProuctListLayoutProps> = ({ brand }) => {
  const { data } = useGetProductList(brand, {
    staleTime: minutesToMs(10),
    gcTime: minutesToMs(10),
  });

  return (
    <S.Container>
      <Header type='client_img' />
      <S.ShadowBox>
        <S.InnerContainer>
          <S.Title>{brand}</S.Title>
          <S.ProductContainer>
            {data &&
              data.map(({ id, name, price, images, discount }) => (
                <ProductItem
                  id={id}
                  key={id}
                  productImgUrl={images[0].url}
                  discountPercent={discount}
                  price={price}
                  name={name}
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
