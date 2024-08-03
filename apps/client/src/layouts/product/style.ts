import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4.8125rem;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  gap: 3.75rem;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const BackButton = styled(Link)`
  color: ${({ theme }) => theme.color.grey[300]};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 1.375rem;
  width: 5rem;
  overflow-y: hidden;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const LeftContainer = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.06rem;
`;

export const RightContainer = styled.div`
  width: 48.75rem;
  height: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const Hr = styled.div`
  background-color: ${({ theme }) => theme.color.grey[800]};
  height: 0.0625rem;
  width: 100%;
  margin: 3rem 0;
`;

export const DeliveryBox = styled.div`
  display: flex;
  gap: 4.125rem;
`;

export const DeliveryText = styled.p`
  ${({ theme }) => theme.typo.body.small}
  color: ${({ theme }) => theme.color.grey[300]};
`;

export const BuyButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.main[50]};
  width: 15rem;
  height: 2.875rem;
`;

export const CartButton = styled(BuyButton)`
  color: ${({ theme }) => theme.color.main[50]};
  background-color: ${({ theme }) => theme.color.black};
  border: 0.0625rem solid ${({ theme }) => theme.color.main[50]};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: end;
`;

export const PriceBox = styled.div`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: end;
  gap: 1.5rem;
`;

export const TotalPrice = styled.h1`
  ${({ theme }) => theme.typo.title.medium};
  color: ${({ theme }) => theme.color.white};
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: end;
`;
