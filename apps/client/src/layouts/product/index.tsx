'use client';

import { Header, useGetProductDetail } from 'shared';
import * as S from './style';
import { BackIcon } from 'client/assets';
import {
  ImgDisplay,
  ProductCount,
  ProductDetailInfo,
  ProductOption,
} from 'client/components';
import { useState } from 'react';
import { SelectOptionType } from 'client/types';
import { toLocaleString } from 'client/utils';

interface ProductLayoutProps {
  id: string;
}

const defaultData = {
  name: '상품',
  discount: 0,
  price: 0,
  description: '상품 설명',
  options: [],
} as const;

const ProductLayout: React.FC<ProductLayoutProps> = ({ id }) => {
  const { data } = useGetProductDetail(Number(id));

  const { name, discount, price, description, options } = data || defaultData;

  const [selectedProductList, setSelectedProductList] = useState<
    SelectOptionType[]
  >([]);

  const totalPrice =
    selectedProductList.reduce((a, c) => a + c.count, 0) * price;

  return (
    <S.Container>
      <Header type='client_black' />
      <S.LeftContainer>
        <S.BackButton href={`/${data?.category}`}>
          <BackIcon /> 돌아가기
        </S.BackButton>
        {data && <ImgDisplay imgList={data.images} />}
      </S.LeftContainer>
      <S.RightContainer>
        <ProductDetailInfo
          name={name}
          discount={discount}
          price={price}
          description={description}
        />
        <S.Hr />
        <S.DeliveryBox>
          <S.DeliveryText>배송</S.DeliveryText>
          <S.DeliveryText>로젠택배 (출고 후 2~3일 소요)</S.DeliveryText>
        </S.DeliveryBox>
        <S.Hr />
        <S.OptionWrapper>
          <ProductOption
            options={[...options]}
            selectedProductList={selectedProductList}
            setSelectedProductList={setSelectedProductList}
          />
          {selectedProductList.map(({ id, name }) => (
            <ProductCount
              key={id}
              id={id}
              name={name}
              selectedProductList={selectedProductList}
              setSelectedProductList={setSelectedProductList}
              price={price}
            />
          ))}
        </S.OptionWrapper>
        <S.Hr />
        <S.BottomBox>
          <S.PriceBox>
            총 상품 금액:
            <S.TotalPrice>{toLocaleString(totalPrice)}원</S.TotalPrice>
          </S.PriceBox>
          <S.ButtonBox>
            <S.CartButton>장바구니</S.CartButton>
            <S.BuyButton>구매하기</S.BuyButton>
          </S.ButtonBox>
        </S.BottomBox>
      </S.RightContainer>
    </S.Container>
  );
};

export default ProductLayout;
