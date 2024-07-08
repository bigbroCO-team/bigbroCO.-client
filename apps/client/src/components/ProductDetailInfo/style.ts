import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6875rem;
  background: ${({ theme }) => theme.color.background};
`;

export const ProductInfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ProductName = styled.h3`
  ${({ theme }) => theme.typo.titleSmall};
  color: ${({ theme }) => theme.color.white};
`;

export const ProductPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetailPrice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ActualPriceBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const ProductPercent = styled.h2`
  ${({ theme }) => theme.typo.titleMedium};
  color: ${({ theme }) => theme.color.error};
`;

export const ActualPriceText = styled.h2`
  ${({ theme }) => theme.typo.titleMedium};
  color: ${({ theme }) => theme.color.white};
`;

export const UsuallyPrice = styled.h2`
  ${({ theme }) => theme.typo.titleMedium};
  color: ${({ theme }) => theme.color.grey[300]};
  text-decoration: line-through;
`;

export const ShareButton = styled.button`
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 50%;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const SVGBox = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
`;

export const DescriptionText = styled.p`
  ${({ theme }) => theme.typo.bodySmall};
  color: ${({ theme }) => theme.color.white};
`;
