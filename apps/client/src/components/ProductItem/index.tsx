'use client';

import * as S from './style';
import { numberLocalString } from 'client/utils';

interface Props {
  productImgUrl: string;
  discountPercent: string;
  price: string;
  productName: string;
  isEdit: boolean;
}

const ProductItem: React.FC<Props> = ({
  productImgUrl,
  discountPercent,
  price,
  productName,
  isEdit,
}) => {
  return (
    <S.Wrapper>
      <S.ImgContainer src={productImgUrl} />
      <S.PriceInform>
        <S.DiscountText>{discountPercent}%</S.DiscountText>
        <S.PriceText>{numberLocalString(price)}</S.PriceText>
      </S.PriceInform>
      <S.ClothesText>{productName}</S.ClothesText>
      {isEdit && <S.EditText>수정하기</S.EditText>}
    </S.Wrapper>
  );
};

export default ProductItem;
