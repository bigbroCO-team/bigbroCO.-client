import * as S from './style';
import { toLocaleString } from 'client/utils';

interface Props {
  productPrice: string;
  discountPrice: string;
  deliveryPrice: string;
  requiredPrice: string;
  isFreeDelivery: boolean;
}

const PaymentInfo: React.FC<Props> = ({
  productPrice,
  discountPrice,
  deliveryPrice,
  requiredPrice,
  isFreeDelivery,
}) => {
  const deliveryCost = isFreeDelivery ? deliveryPrice : '0';

  const totalPrice = toLocaleString(
    (
      Number(productPrice) -
      Number(discountPrice) +
      Number(deliveryCost)
    ).toString()
  );

  return (
    <S.Wrapper>
      <S.ProductContainer>
        <S.ProductText>상품금액</S.ProductText>
        <S.PriceText>{toLocaleString(productPrice)} 원</S.PriceText>
      </S.ProductContainer>

      <S.ProductContainer>
        <S.ProductText>할인금액</S.ProductText>
        <S.PriceText>-{toLocaleString(discountPrice)} 원</S.PriceText>
      </S.ProductContainer>

      <S.DeliveryContainer>
        <S.ProductContainer>
          <S.ProductText>배송비</S.ProductText>
          <S.PriceText>+{toLocaleString(deliveryCost)} 원</S.PriceText>
        </S.ProductContainer>
        {requiredPrice !== '0' && (
          <S.AddOrderText>
            {toLocaleString(requiredPrice)}원 추가주문 시, 무료배송
          </S.AddOrderText>
        )}
      </S.DeliveryContainer>

      <S.BorderBar />

      <S.ProductContainer>
        <S.ProductText>결제예정금액</S.ProductText>
        <S.TotalPriceText>{totalPrice} 원</S.TotalPriceText>
      </S.ProductContainer>
    </S.Wrapper>
  );
};

export default PaymentInfo;
