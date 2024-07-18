import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  background: ${({ theme }) => theme.color.background}; //문제 시 삭제
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProductText = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const PriceText = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.white};
`;

export const DeliveryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

export const AddOrderText = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.error};
`;

export const BorderBar = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${({ theme }) => theme.color.grey[100]};
`;

export const TotalPriceText = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
`;
