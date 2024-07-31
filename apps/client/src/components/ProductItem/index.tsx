'use client';

import * as S from './style';
import { toLocalString } from 'client/utils';

interface Props {
  id: number;
  productImgUrl: string;
  discountPercent: number;
  price: number;
  name: string;
  isEdit?: true;
}

const ProductItem: React.FC<Props> = ({
  id,
  productImgUrl,
  discountPercent,
  price,
  name,
  isEdit,
}) => {
  const productPrice = toLocalString(String(price));

  return (
    <S.Wrapper href={`product/${id}`}>
      <S.ImgContainer src={productImgUrl} />
      <S.PriceInform>
        {!!discountPercent && (
          <S.DiscountText>{discountPercent}%</S.DiscountText>
        )}
        <S.PriceText>{productPrice}</S.PriceText>
      </S.PriceInform>
      <S.ClothesText>{name}</S.ClothesText>
      {isEdit && <S.EditText>수정하기</S.EditText>}
    </S.Wrapper>
  );
};

export default ProductItem;
