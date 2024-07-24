import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const BackgroundImg = styled(Image)`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const TopShadowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  & > header {
    left: 0;
    top: 0;
  }
`;

export const SVGBundle1Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 71.5625rem;
  height: 23.875rem;
`;

export const SVGBundle1Text1 = styled.h1`
  ${({ theme }) => theme.typo.extra.medium};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  gap: 2rem;
  user-select: none;
`;

export const SVGBundle1Text2 = styled.div`
  margin-left: 10.44rem;
`;

export const SVGBundle2Container = styled.div`
  ${({ theme }) => theme.typo.stoopid.small};
  width: 79.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.color.white};
`;

export const SVGBundle2TopBox = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const SVGBundle2BottomBox = styled.div`
  display: flex;
  gap: 3.75rem;
  margin-top: 17.5rem;
  align-items: end;
  position: relative;
`;

export const SVGBundle2ImgBox = styled.div`
  position: absolute;
  top: 5rem;
  right: -4rem;
`;

export const SVGBundle2Text = styled.h1`
  ${({ theme }) => theme.typo.stoopid.medium};
  transform: rotate(90deg);
  position: relative;
  letter-spacing: 0.5rem;
  right: 1.7rem;
  bottom: 21.3rem;
`;

export const DescribeBox = styled.div`
  min-width: 49.25rem;
  height: 14rem;
  ${({ theme }) => theme.typo.body.small};
`;

export const SVGBundle2MiddleBox = styled.div`
  position: absolute;
  top: 19.25rem;
  display: flex;

  & > img {
    z-index: 1;
  }

  & > img:last-child {
    position: relative;
    right: 12.125rem;
    z-index: 0;
  }
`;

export const SVGBundle2MiddleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25rem;
  gap: 1.44rem;
`;

export const SVGBundle2MiddleText1 = styled.h1`
  width: 24.75rem;
  height: 14.5rem;
  ${({ theme }) => theme.typo.stoopid.extraLarge};
  padding-left: 0.5rem;
`;

export const SVGBundle2MiddleText2 = styled.h1`
  ${({ theme }) => theme.typo.stoopid.large};
  color: ${({ theme }) => theme.color.main[50]};
  margin-left: 13.19rem;
  padding-left: 0.5rem;
  height: 10.1875rem;
  display: flex;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  height: 228rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Hr = styled.div`
  width: 73vw;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.white};
  margin: 10rem 0 8.75rem 0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BrandShadowBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
  transition: all 0.3s;

  & > * {
    visibility: hidden;
  }

  &:hover {
    & > * {
      visibility: visible;
    }
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const BrandText = styled.p`
  ${({ theme }) => theme.typo.imfeel.large};
  color: ${({ theme }) => theme.color.white};
`;

export const BrandBox = styled.div`
  position: relative;
  width: 20vw;
  height: calc(100vh - 4.8125rem);
  cursor: pointer;
`;

export const SVGBundle3TopText = styled.h1`
  z-index: 2;
  color: ${({ theme }) => theme.color.white};
  padding: 0.69rem 0 0 4.3125rem;
  width: 100%;
  display: flex;
`;

export const SVGBundle3MiddleText = styled(SVGBundle3TopText)`
  padding: 4.94rem 9.75rem 0 0;
  justify-content: end;
  box-sizing: border-box;
`;

export const SVGBundle3BottomText = styled(SVGBundle3TopText)`
  padding: 9.12rem 0 0 4.3125rem;
  z-index: 0;
`;

export const SVGTopWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const SVGBottomWrapper = styled(SVGTopWrapper)`
  justify-content: end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const SVGBundle3Container = styled.div`
  ${({ theme }) => theme.typo.extra.large};
  width: 87.50231rem;
  height: 69.5625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  & > img {
    position: absolute;
    z-index: 1;
    top: 6.06rem;
  }
`;

export const BrandBackgroundImage = styled(Image)`
  width: 20vw;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;
