import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
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
          .BIGBRO,
          .CBWAS,
          .GONGNEWGI,
          .SCB,
          .SCULFEE,
          .Text {
            fill: ${theme.color.grey[600]};
          }

          .BIGBROCOMPANY {
            fill: ${theme.color.black};
          }
        `
      : type === 'client_clear'
        ? css`
            .BIGBRO,
            .CBWAS,
            .GONGNEWGI,
            .SCB,
            .SCULFEE,
            .Text {
              fill: ${theme.color.white};
            }

            .BIGBROCOMPANY {
              fill: ${theme.color.white};
            }
          `
        : css`
            .BIGBRO,
            .CBWAS,
            .GONGNEWGI,
            .SCB,
            .SCULFEE,
            .Text {
              fill: ${theme.color.grey[500]};
            }

            .BIGBROCOMPANY {
              fill: ${theme.color.white};
            }
          `}

  ${({ theme, segment }) => {
    if (segment === 'CBWAS')
      return css`
        .CBWAS {
          fill: ${theme.color.main[50]} !important;
        }
      `;
    if (segment === 'S.C.B')
      return css`
        .SCB {
          fill: ${theme.color.main[50]} !important;
        }
      `;
    if (segment === 'BIGBRO')
      return css`
        .BIGBRO {
          fill: ${theme.color.main[50]} !important;
        }
      `;
    if (segment === 'GONGNEWGI')
      return css`
        .GONGNEWGI {
          fill: ${theme.color.main[50]} !important;
        }
      `;
    if (segment === 'SCULFEE')
      return css`
        .SCULFEE {
          fill: ${theme.color.main[50]} !important;
        }
      `;
  }};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
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
  display: flex;
`;

export const LoginButton = styled(MyPageButton)`
  margin-left: 1.1875rem;
  display: flex;
`;

export const LogoutButton = styled(MyPageButton)`
  margin-left: 0.3125rem;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
`;
