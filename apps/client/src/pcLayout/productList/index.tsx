'use client';

import { BrandType, ProductType } from 'shared/types';
import * as S from './style';
import { backgroundImg } from 'client/public';
import { PCHeader } from 'shared';
import { ProductItem } from 'client/components';

interface ProductListPCLayoutProps {
  brand: BrandType;
  productList: ProductType[] | undefined;
}

const ProductListPCLayout: React.FC<ProductListPCLayoutProps> = ({
  brand,
  productList,
}) => {
  return (
    <S.Container>
      <PCHeader type='client_img' />
      <S.ShadowBox>
        <S.InnerContainer>
          <S.Title>{brand}</S.Title>
          <S.ProductContainer>
            {productList &&
              productList.map(({ id, name, price, images, discount }) => (
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

export default ProductListPCLayout;
