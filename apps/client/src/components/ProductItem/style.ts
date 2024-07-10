import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const ImgContainer = styled.img`
  width: 24.75rem;
  height: 24.75rem;
  object-fit: cover;
`;

export const PriceInform = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const DiscountText = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.error};
`;

export const PriceText = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
`;

export const ClothesText = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const EditText = styled.button`
  ${({ theme }) => theme.typo.bodySmall};
  color: ${({ theme }) => theme.color.grey[500]};
`;
