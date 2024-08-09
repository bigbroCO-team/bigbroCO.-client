import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
`;

export const InnerContainer = styled.div`
  width: 37.5rem;
  height: 100%;
  overflow-y: scroll;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.body};
  color: ${({ theme }) => theme.color.grey[700]};
  margin: 1.5625rem 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: 1.9375rem;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 3.5625rem 0 0.5rem;
`;

export const AddAddressButton = styled.button`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.main[50]};
`;

export const AddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
