'use client';

import {
  PCHeader,
  PostCartType,
  useGetProductDetail,
  usePostCart,
} from 'shared';
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
import { toast } from 'react-toastify';

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
  const { mutate: postCart } = usePostCart({
    onSuccess: () => toast.success('장바구니에 추가되었습니다.'),
    onError: () => toast.error('에러가 발생하였습니다.'),
  });

  const sortedSelectedProductList = selectedProductList.sort(
    (a, b) => a.id - b.id
  );

  const totalPrice =
    selectedProductList.reduce((a, c) => a + c.count, 0) * price;

  const handleCartButtonClick = () => {
    if (!selectedProductList.length)
      return toast.error('장바구니에 추가할 상품이 없습니다.');

    const body: PostCartType[] = selectedProductList.map(
      ({ product, count, id }) => ({
        product: product,
        count: count,
        option: id,
      })
    );

    postCart(body);
  };

  return (
    <S.Container>
      <PCHeader type='client_black' />
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
          {sortedSelectedProductList.map(({ id, name }) => (
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
            <S.CartButton onClick={handleCartButtonClick}>
              장바구니
            </S.CartButton>
            <S.BuyButton>구매하기</S.BuyButton>
          </S.ButtonBox>
        </S.BottomBox>
      </S.RightContainer>
    </S.Container>
  );
};

export default ProductLayout;
