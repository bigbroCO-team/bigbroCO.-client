import { DeliveryInfoType } from 'client/types';
import * as S from './style';
import { toLocaleString } from 'client/utils';

const DeliveryInfo: React.FC<DeliveryInfoType> = ({
  isPreparing,
  whenDelivery,
  isArrive,
  productImg,
  productName,
  productColorName,
  productNumber,
  productPrice,
  beforeDiscountPrice,
}) => {
  const deliveryStatus = isPreparing
    ? isArrive
      ? ['배송 완료', '배송 완료']
      : ['배송 시작', '배송중']
    : ['이내 발송', '상품 준비중'];

  const buttonList = ['배송 조회', '반품 접수', '교환 문의'];

  return (
    <S.Wrapper>
      <S.ProductInfo>
        <S.DeliveryInfo>
          <S.DeliveryText isPreparing={isPreparing} isArrive={isArrive}>
            {deliveryStatus[1]}
          </S.DeliveryText>
          <S.ShippingText>
            {whenDelivery} {deliveryStatus[0]}
          </S.ShippingText>
        </S.DeliveryInfo>

        <S.ProductInfoBox>
          <S.ProductMainInfo>
            <S.ProductImg src={productImg} />
            <S.ProductNameBox>
              <S.ProductName>{productName}</S.ProductName>
              <S.ProductColor>{productColorName}</S.ProductColor>
            </S.ProductNameBox>
          </S.ProductMainInfo>

          <S.ProductSecondaryInfo>
            <S.ProductNumber>{productNumber}개</S.ProductNumber>
            <S.ProductPriceBox>
              <S.ProductPrice>{toLocaleString(productPrice)}원</S.ProductPrice>
              <S.BeforeDiscountPrice>
                {toLocaleString(beforeDiscountPrice)}원
              </S.BeforeDiscountPrice>
            </S.ProductPriceBox>
          </S.ProductSecondaryInfo>
        </S.ProductInfoBox>
      </S.ProductInfo>

      <S.ButtonContainer>
        {isPreparing ? (
          buttonList.map((buttonText) => (
            <S.Button key={buttonText}>{buttonText}</S.Button>
          ))
        ) : (
          <S.Button>주문취소</S.Button>
        )}
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default DeliveryInfo;
