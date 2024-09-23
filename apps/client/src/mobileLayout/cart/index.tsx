'use client';

import * as S from './style';

import { MobileHeader } from 'shared';
import { SelectShoppingCart, PaymentInfo } from 'client/components';

import { useGetCartInfo } from 'shared/hooks';

const CartMobileLayout = () => {
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
      <MobileHeader logo={'장바구니'} />
      <S.Wrapper>
        <S.Container>
          <S.TopBox>
            <SelectShoppingCart products={MokProduct} />
          </S.TopBox>
          <S.BottomBox>
            <PaymentInfo
              productPrice={''}
              discountPrice={''}
              deliveryPrice={''}
              requiredPrice={''}
              isFreeDelivery={false}
            />
            <S.TextBox>
              <S.InfoText isTitle>
                주문 내용을 확인했으며 서비스 약관 및 결제에 동의합니다.
              </S.InfoText>
              <S.InfoText>[필수] 정자결제대행 이용 동의</S.InfoText>
              <S.InfoText>[필수] 개인정보 제 3자 제공 동의</S.InfoText>
              <S.InfoText>
                [필수] 만 14세 이상 이용자, 개인정보 수집 및 이용 동의
              </S.InfoText>
              <S.InfoText isTitle>
                [마이페이지 {'>'} 주문내역]에서 취소하실 수 있어요.{' '}
              </S.InfoText>
              <S.InfoText>
                낮은 확률로 상품이 품절일 가능성이 있어요, 이에 품절 시 빠르게
                환불 처리를 도와드려요.
                <br /> 결제하신 수단으로 취소 돼요.
                <br /> 환불 받으신 날짜 기준으로 3~5일(주말 제외) 후 환불 처리
                돼요.
                <br /> 무통장 입금 환불의 경우, 예금정보가 일치해야 환불 처리가
                가능하니 은행명, 예금주명을 정확히 기재 부탁드려요.
              </S.InfoText>
            </S.TextBox>
          </S.BottomBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CartMobileLayout;
