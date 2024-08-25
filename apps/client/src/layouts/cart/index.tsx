'use client';

import * as S from './style';

import { PCHeader } from 'shared';
import { SelectShoppingCart, PaymentInfo } from 'client/components';

import { useGetCartInfo } from 'shared/hooks';

const CartLayout = () => {
  const { data: data } = useGetCartInfo();

  const MokProduct =
    data?.map((item) => {
      return {
        productImg: item.product.images[0].url,
        productName: item.product.name,
        productColor: item.option.name,
        productPrice: item.product.price,
        productPercent: item.product.discount * 100,
        isSale: item.option.status === 'on_sale',
      };
    }) || [];

  return (
    <>
      <PCHeader type={'client_clear'} />
      <S.Wrapper>
        <S.Container>
          <S.LeftBox>
            <SelectShoppingCart products={MokProduct} />
          </S.LeftBox>
          <S.RightBox>
            <PaymentInfo
              productPrice={''}
              discountPrice={''}
              deliveryPrice={''}
              requiredPrice={''}
              isFreeDelivery={false}
            />
            <S.TextBox>
              <S.InfoText>
                [주문완료] 상태일 경우에만 주문 취소 가능해요.
              </S.InfoText>
              <S.InfoText>
                [마이페이지 {'>'} 주문내역]에서 취소하실 수 있어요.{' '}
              </S.InfoText>
            </S.TextBox>
          </S.RightBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CartLayout;
