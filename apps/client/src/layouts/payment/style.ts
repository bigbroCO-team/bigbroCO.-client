import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4.8125rem;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

export const InnerContainer = styled.div`
  width: 56.25rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PaymentProductListContainer = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const PaymentProductListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    border-top: 0rem;
  }

  & > div:last-child {
    border-bottom: 0rem;
  }
`;

export const PaymentProductListHeader = styled.header`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PaymentProductListButton = styled.button<{ isAccordion: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  ${({ isAccordion }) =>
    isAccordion &&
    css`
      rotate: 180deg;
    `}
`;

export const Hr = styled.div`
  background-color: ${({ theme }) => theme.color.grey[800]};
  height: 0.0625rem;
  width: 100%;
  margin: 2.5rem 0;
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const TotalProductPrice = styled.div`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalPaymentPrice = styled(TotalProductPrice)`
  ${({ theme }) => theme.typo.title.small};
  margin-bottom: 0.5rem;
`;

export const PriceDiscount = styled(TotalProductPrice)``;

export const DeliveryFee = styled(TotalProductPrice)``;

export const Text = styled.p``;

export const ProductInfoBox = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.0313rem solid ${({ theme }) => theme.color.grey[800]};
  border-left: 0;
  border-right: 0;
`;

export const ProductMainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ProductImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

export const ProductNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ProductName = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.white};
`;

export const ProductColor = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const ProductSecondaryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
`;

export const ProductNumber = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const ProductPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ProductPrice = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.white};
`;

export const BeforeDiscountPrice = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.grey[500]};
  text-decoration: line-through;
`;

export const DeliveryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const DeliveryInfoHeader = styled.header`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeliveryInfoModifyButton = styled(Link)`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.main[50]};
`;

export const DeliveryName = styled.h1`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
`;

export const DeliveryAdress = styled(DeliveryName)``;

export const DeliveryPhoneNumber = styled(DeliveryName)``;

export const DeliveryMiddle = styled(DeliveryInfoBox)`
  gap: 0.5rem;
  align-items: start;
`;

export const DeliveryRequestInput = styled.input`
  ${({ theme }) => theme.typo.body.large};
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.grey[600]};
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[800]};
  width: 100%;
  height: 3.6875rem;
  padding: 1rem 0.875rem;

  &:focus {
    color: ${({ theme }) => theme.color.white};
    outline: none;
  }
`;

export const PaymentButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.main[50]};
  width: 100%;
  min-height: 2.875rem;
  margin-bottom: 3.31rem;
`;
