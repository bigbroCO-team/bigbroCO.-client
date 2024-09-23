import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'inline-block' : 'flex')};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background}; //문제 시 삭제
`;

export const ProductInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckBoxContainer = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
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
  object-fit: contain;
`;

export const ProductTextBox = styled.div`
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

export const PriceInfoBox = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ isMobile }) => (isMobile ? '100%' : 'none')};
  padding-left: ${({ isMobile }) => (isMobile ? '2rem' : '0')};
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'none')};
  gap: 60px;
`;

export const PriceCount = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const CountBtn = styled.button`
  display: flex;
  width: 1rem;
  height: 1rem;
  justify-content: center;
  align-items: center;
`;

export const CountText = styled.p`
  display: flex;
  width: 0.5rem;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const DetailPriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const XButton = styled.button<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const PriceTextBox = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'row-reverse' : 'column')};
  align-items: flex-start;
  gap: 0.75rem;
`;

export const PriceText = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.white};
`;

export const BeforeText = styled.p`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.grey[500]};
  text-decoration: line-through;
`;
