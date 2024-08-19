import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-top: 116px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 56.25rem;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const UserName = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  color: ${({ theme }) => theme.color.white};

  span {
    ${({ theme }) => theme.typo.title.small};
  }
`;

export const ModifyInfo = styled(Link)`
  color: ${({ theme }) => theme.color.grey[500]};
  ${({ theme }) => theme.typo.body.medium};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.25rem;
  gap: 24px;
  margin-bottom: 27px;
`;

export const Hr = styled.hr`
  width: 900px;
  height: 1px;
  border-color: ${({ theme }) => theme.color.grey[800]};
`;
