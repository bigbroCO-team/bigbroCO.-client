'use client';

import { AddressDataType, getAddress, PCHeader } from 'shared';
import * as S from './style';
import { SelectIcon } from 'client/assets';
import { useCallback, useEffect, useState } from 'react';
import { toLocaleString } from 'client/utils';
import { toTelFormat } from 'shared/utils';
import { useStore } from 'client/stores';

const PaymentLayout = () => {
  const [isAccordion, setIsAccordion] = useState(false);
  const { selectedAddress } = useStore();
  const [addressData, setAddressData] = useState<AddressDataType | null>(null);

  const handlePaymentProductListButtonCLick = () =>
    setIsAccordion((prev) => !prev);

  const fetchingAddress = useCallback(async () => {
    if (selectedAddress) {
      const data = await getAddress(selectedAddress);
      setAddressData(data);
    }
  }, [selectedAddress]);

  useEffect(() => {
    fetchingAddress();
  }, [fetchingAddress, selectedAddress]);

  return (
    <S.Container>
      <PCHeader type='client_black' />
      <S.InnerContainer>
        <S.PaymentProductListContainer>
          <S.PaymentProductListHeader>
            주문 상품 총 2개
            <S.PaymentProductListButton
              onClick={handlePaymentProductListButtonCLick}
              isAccordion={isAccordion}
            >
              <SelectIcon />
            </S.PaymentProductListButton>
          </S.PaymentProductListHeader>
          <S.PaymentProductListBox>
            {isAccordion &&
              [1, 2, 3].map((i) => (
                <S.ProductInfoBox key={i}>
                  <S.ProductMainInfo>
                    <S.ProductImg src={''} />
                    <S.ProductNameBox>
                      <S.ProductName>{i}</S.ProductName>
                      <S.ProductColor>{i}</S.ProductColor>
                    </S.ProductNameBox>
                  </S.ProductMainInfo>
                  <S.ProductSecondaryInfo>
                    <S.ProductNumber>{i}개</S.ProductNumber>
                    <S.ProductPriceBox>
                      <S.ProductPrice>{toLocaleString(i)}원</S.ProductPrice>
                      <S.BeforeDiscountPrice>
                        {toLocaleString(i)}원
                      </S.BeforeDiscountPrice>
                    </S.ProductPriceBox>
                  </S.ProductSecondaryInfo>
                </S.ProductInfoBox>
              ))}
          </S.PaymentProductListBox>
        </S.PaymentProductListContainer>
        <S.Hr />
        <S.DeliveryInfoBox>
          <S.DeliveryInfoHeader>
            배송지 정보
            <S.DeliveryInfoModifyButton href='/address'>
              변경하기
            </S.DeliveryInfoModifyButton>
          </S.DeliveryInfoHeader>
          {selectedAddress && addressData && (
            <>
              <S.DeliveryMiddle>
                <S.DeliveryName>{addressData.name}</S.DeliveryName>
                <S.DeliveryAdress>{addressData.address}</S.DeliveryAdress>
                <S.DeliveryPhoneNumber>
                  {toTelFormat(addressData.phone)}
                </S.DeliveryPhoneNumber>
              </S.DeliveryMiddle>
              <S.DeliveryRequestInput placeholder='배송 시 요청사항을 입력해주세요' />
            </>
          )}
        </S.DeliveryInfoBox>
        <S.Hr />
        <S.PriceInfoContainer>
          <S.TotalPaymentPrice>
            <S.Text>총 결제 금액</S.Text>
            <S.Text>{}원</S.Text>
          </S.TotalPaymentPrice>
          <S.TotalProductPrice>
            <S.Text>총 상품 금액</S.Text>
            <S.Text>{}원</S.Text>
          </S.TotalProductPrice>
          <S.PriceDiscount>
            <S.Text>상품 할인</S.Text>
            <S.Text>-{}원</S.Text>
          </S.PriceDiscount>
          <S.DeliveryFee>
            <S.Text>배송비</S.Text>
            <S.Text>{}원</S.Text>
          </S.DeliveryFee>
        </S.PriceInfoContainer>
        <S.Hr />
        <S.PaymentButton>구매하기</S.PaymentButton>
      </S.InnerContainer>
    </S.Container>
  );
};

export default PaymentLayout;
