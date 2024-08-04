import { ShareIcon } from 'client/assets';
import * as S from './style';

interface Props {
  name: string;
  discount: number;
  price: number;
  description: string;
}

const ProductDetailInfo: React.FC<Props> = ({
  name,
  discount,
  price,
  description,
}) => {
  const salePrice = discount
    ? (price * (100 - discount / 100)).toLocaleString()
    : price.toLocaleString();

  const productPrice = price.toLocaleString();

  return (
    <S.Wrapper>
      <S.ProductInfoBox>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>
          <S.ProductDetailPrice>
            {discount ? (
              <>
                <S.ActualPriceBox>
                  <S.ProductPercent>{discount}%</S.ProductPercent>
                  <S.ActualPriceText>{salePrice}원</S.ActualPriceText>
                </S.ActualPriceBox>
                <S.UsuallyPrice>{productPrice}</S.UsuallyPrice>
              </>
            ) : (
              <S.ActualPriceBox>
                <S.ActualPriceText>{salePrice}원</S.ActualPriceText>
              </S.ActualPriceBox>
            )}
          </S.ProductDetailPrice>

          <S.ShareButton>
            <S.SVGBox>
              <ShareIcon />
            </S.SVGBox>
          </S.ShareButton>
        </S.ProductPrice>
      </S.ProductInfoBox>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default ProductDetailInfo;
