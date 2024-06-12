import * as S from './style';
import { numberLocalString } from 'client/utils';

interface Props {
  productPrice: string;
  discountPrice: string;
  deliveryPrice: string;
  requiredPrice: string;
  totalPrice: string;
}

const PaymentInfo: React.FC<Props> = ({
  productPrice,
  discountPrice,
  deliveryPrice,
  requiredPrice,
  totalPrice,
}) => {
  return (
    <S.Wrapper>
      <S.ProductContainer>
        <S.ProductText>상품금액</S.ProductText>
        <S.PriceText>{numberLocalString(productPrice)} 원</S.PriceText>
      </S.ProductContainer>

      <S.ProductContainer>
        <S.ProductText>할인금액</S.ProductText>
        <S.PriceText>-{numberLocalString(discountPrice)} 원</S.PriceText>
      </S.ProductContainer>

      <S.DeliveryContainer>
        <S.ProductContainer>
          <S.ProductText>배송비</S.ProductText>
          <S.PriceText>+{numberLocalString(deliveryPrice)} 원</S.PriceText>
        </S.ProductContainer>
        {Number(requiredPrice) !== 0 && (
          <S.AddOrderText>
            {numberLocalString(requiredPrice)}원 추가주문 시, 무료배송
          </S.AddOrderText>
        )}
      </S.DeliveryContainer>

      <S.BorderBar />

      <S.ProductContainer>
        <S.ProductText>결제예정금액</S.ProductText>
        <S.TotalPriceText>{numberLocalString(totalPrice)} 원</S.TotalPriceText>
      </S.ProductContainer>
    </S.Wrapper>
  );
};

export default PaymentInfo;
