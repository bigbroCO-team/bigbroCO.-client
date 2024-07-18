import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { font } from 'shared/styles';
import type { HeaderPositionType, HeaderType } from 'shared/types';

export const Container = styled.header<{
  type: HeaderType;
  position: HeaderPositionType;
  segment: string | null;
}>`
  width: 100vw;
  height: 4.8125rem;
  padding: 0 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${({ position }) => position};
  z-index: 10;
  transition: all 0.3s;
  font-family: ${font.ImFellGreatPrimer};

  ${({ type, theme }) => {
    if (type === 'client_clear')
      return css`
        background-color: transparent;
      `;

    if (type === 'client_white')
      return css`
        background-color: ${theme.color.white};
      `;

    if (type === 'client_img')
      return css`
        background-image: url('https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/4355f01f-7bfd-4b1a-a711-dd49e24cf0c1');
      `;

    if (type === 'admin' || type === 'client_black')
      return css`
        background-color: ${theme.color.black};
      `;
  }};

  // type에 맞는 컬려 변경 로직
  ${({ theme, type }) =>
    type === 'client_white'
      ? css`
          color: ${theme.color.grey[600]};
        `
      : type === 'client_clear'
        ? css`
            color: ${theme.color.white};
          `
        : css`
            color: ${theme.color.grey[500]};
          `}
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  color: inherit;
`;

export const AdminNav = styled(Link)`
  // theme에 정의 되어 있지 않아서 임시로 지정
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const MyPageButton = styled(Link)`
  ${({ theme }) => theme.typo.imfeel.medium};
  display: flex;
  justify-content: end;
  width: 5rem;
  color: inherit;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.color.main[50]} !important;
  }
`;

export const LoginButton = styled(MyPageButton)``;

export const LogoutButton = styled(MyPageButton)``;

export const LogoWrapper = styled(Link)`
  ${({ theme }) => theme.typo.imfeel.medium};
  color: inherit;
  display: flex;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.color.main[50]} !important;
  }
`;

export const BIGBROCOMPANY = styled(Link)`
  ${({ theme }) => theme.typo.imfeel.medium};
  color: ${({ theme }) => theme.color.white};
  user-select: none;
  display: flex;
`;
