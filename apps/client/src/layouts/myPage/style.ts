import styled from '@emotion/styled';
import Link from 'next/link';
import { MobileWidth } from 'shared';

export const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  padding-top: 7.25rem;
  background-color: ${({ theme }) => theme.color.black};

  @media (max-width: ${MobileWidth}px) {
    padding-top: 4.6875rem;
  }
`;

export const Wrapper = styled.div`
  width: 55%;
  height: auto;

  @media (max-width: ${MobileWidth}px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: auto;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3.75rem;

  @media (max-width: ${MobileWidth}px) {
    margin-bottom: 1.5rem;
  }
`;

export const UserName = styled.div<{ isMobile: boolean }>`
  ${({ theme, isMobile }) =>
    isMobile ? theme.typo.body.large : theme.typo.title.medium};
  color: ${({ theme }) => theme.color.white};

  span {
    ${({ theme, isMobile }) =>
      isMobile ? theme.typo.body.large : theme.typo.title.small};
  }
`;

export const ModifyInfo = styled(Link)`
  color: ${({ theme }) => theme.color.grey[500]};
  ${({ theme }) => theme.typo.body.medium};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 1.5rem;
  margin-bottom: 27px;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 0.0625rem;
  border-color: ${({ theme }) => theme.color.grey[800]};
`;
