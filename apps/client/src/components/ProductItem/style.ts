import styled from '@emotion/styled';
import Link from 'next/link';
import { MobileWidth } from 'shared';

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${MobileWidth}px) {
    gap: 0.5rem;
  }
`;

export const ImgContainer = styled.img`
  width: 24.75rem;
  height: 24.75rem;
  object-fit: cover;

  @media (max-width: ${MobileWidth}px) {
    width: 9.625rem;
    height: 9.625rem;
  }
`;

export const PriceInform = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DiscountText = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.error};

  @media (max-width: ${MobileWidth}px) {
    ${({ theme }) => theme.typo.body.medium};
  }
`;

export const PriceText = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${MobileWidth}px) {
    ${({ theme }) => theme.typo.body.small};
  }
`;

export const ProductName = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${MobileWidth}px) {
    ${({ theme }) => theme.typo.label};
  }
`;

export const EditText = styled.button`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.grey[500]};
`;
