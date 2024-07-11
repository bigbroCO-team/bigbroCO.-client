import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  background: ${({ theme }) => theme.color.background};
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const DeliveryText = styled.p<{
  isPreparing: boolean;
  isArrive: boolean;
}>`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme, isPreparing, isArrive }) =>
    isPreparing
      ? isArrive
        ? theme.color.main[50]
        : theme.color.white
      : theme.color.grey[500]};
`;

export const ShippingText = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const ProductInfoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.grey[600]};
  display: flex;
  width: 8.75rem;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
  background: ${({ theme }) => theme.color.background};
`;
