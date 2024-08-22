'use client';

import { toLocaleString } from 'client/utils';
import * as S from './style';

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
}) => (
  <S.Wrapper href={`product/${id}`}>
    <S.ImgContainer src={productImgUrl} />
    <S.PriceInform>
      {!!discountPercent && (
        <S.DiscountText>{discountPercent * 100}%</S.DiscountText>
      )}
      <S.PriceText>{toLocaleString(String(price))}</S.PriceText>
    </S.PriceInform>
    <S.ProductName>{name}</S.ProductName>
    {isEdit && <S.EditText>수정하기</S.EditText>}
  </S.Wrapper>
);

export default ProductItem;
