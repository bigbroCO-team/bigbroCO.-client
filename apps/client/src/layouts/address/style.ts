import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};

  p {
    ${({ theme }) => theme.typo.body};
    color: ${({ theme }) => theme.color.grey[700]};
    margin: 1.5625rem 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: 1.9375rem;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.white};
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 3.8125rem;
`;

export const AddOtherAddressButton = styled(Link)`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.body}
  color: ${({ theme }) => theme.color.main[50]};
`;

export const AddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
