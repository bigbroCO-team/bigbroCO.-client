'use client';

import { CheckBox, MinusIcon, PlusIcon, XIcon } from 'client/assets';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useStore } from 'client/stores';
import { MobileWidth } from 'shared/constants';

interface Props {
  productImg: string;
  productName: string;
  productColor: string;
  productPrice: number;
  productPercent: number;
  isSale: boolean;
  allClick: boolean;
  onClick: (clicked: boolean) => void;
  onDelete: () => void;
}

const CheckProduct: React.FC<Props> = ({
  productImg,
  productName,
  productColor,
  productPrice,
  productPercent,
  isSale,
  allClick,
  onClick,
  onDelete,
}) => {
  const [priceCount, setPriceCount] = useState<number>(1);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { width } = useStore();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width <= MobileWidth);
  }, [width]);

  useEffect(() => {
    setIsClicked(allClick);
  }, [allClick]);

  productPrice = productPrice * priceCount;

  const handleCheckboxClick = () => {
    const newIsClicked = !isClicked;
    setIsClicked(newIsClicked);
    onClick(newIsClicked);
  };

  const cntCalculator = (isPlus: boolean) => {
    setPriceCount((prev) => {
      const newCount = isPlus ? prev + 1 : prev - 1;
      return newCount < 1 ? 1 : newCount;
    });
  };

  const salePrice = isSale
    ? (productPrice * (1 - productPercent / 100)).toLocaleString()
    : productPrice.toLocaleString();

  return (
    <S.Wrapper isMobile={isMobile}>
      <S.ProductInfoBox>
        <S.CheckBoxContainer onClick={handleCheckboxClick}>
          <CheckBox isClicked={isClicked} />
        </S.CheckBoxContainer>
        <S.ProductMainInfo>
          <S.ProductImg src={productImg} />

          <S.ProductTextBox>
            <S.ProductName>{productName}</S.ProductName>
            <S.ProductColor>{productColor}</S.ProductColor>
          </S.ProductTextBox>
        </S.ProductMainInfo>
      </S.ProductInfoBox>

      <S.PriceInfoBox isMobile={isMobile}>
        <S.PriceCount>
          <S.CountBtn onClick={() => cntCalculator(false)}>
            <MinusIcon />
          </S.CountBtn>

          <S.CountText>{priceCount}</S.CountText>

          <S.CountBtn onClick={() => cntCalculator(true)}>
            <PlusIcon />
          </S.CountBtn>
        </S.PriceCount>

        <S.DetailPriceInfo>
          <S.PriceTextBox isMobile={isMobile}>
            {isSale ? (
              <>
                <S.PriceText>{salePrice}원</S.PriceText>
                <S.BeforeText>{productPrice.toLocaleString()}원</S.BeforeText>
              </>
            ) : (
              <S.PriceText>{productPrice.toLocaleString()}원</S.PriceText>
            )}
          </S.PriceTextBox>
          <S.XButton onClick={onDelete} isMobile={isMobile}>
            <XIcon />
          </S.XButton>
        </S.DetailPriceInfo>
      </S.PriceInfoBox>
    </S.Wrapper>
  );
};

export default CheckProduct;
