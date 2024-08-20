import styled from '@emotion/styled';
import Link from 'next/link';
import { font } from 'shared/styles';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LeftBox = styled.div<{ isLogo: boolean }>`
  display: flex;
  ${({ isLogo, theme }) =>
    isLogo ? theme.typo.imfeel.small : theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
  gap: 12px;
  align-items: center;
`;

export const MoreButton = styled.button`
  width: 1.5rem;
  height: 1.5625rem;
`;

export const RightBox = styled.div``;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const SideBar = styled.div`
  background-color: ${({ theme }) => theme.color.grey[25]};
  height: 100%;
  width: 11.25rem;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
`;

export const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: fit-content;
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.color.grey[300]};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: ${font.ImFellGreatPrimer};
`;

export const Hr = styled.div`
  background-color: ${({ theme }) => theme.color.grey[600]};
  height: 0.0625rem;
  width: 100%;
`;

export const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ControlButton = styled(Link)`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.grey[300]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1.75rem;
  width: fit-content;
`;
