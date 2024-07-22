import styled from '@emotion/styled';
import Image from 'next/image';
import { font } from 'shared';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgroundImg = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

export const ShadowBox = styled.div`
  padding-top: 4.8125rem;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.imfeel.medium};
  color: ${({ theme }) => theme.color.white};
  font-family: ${font.ImFellGreatPrimer};
  margin: 2.5rem 0 3rem 0;
`;

export const ProductContainer = styled.div`
  width: 105rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
