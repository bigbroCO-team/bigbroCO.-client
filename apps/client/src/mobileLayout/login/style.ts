import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.8125rem;

  & > a {
    position: absolute;
    bottom: 2.81rem;
  }
`;

export const SVGBundleContainer = styled.div`
  height: 19.5rem;
  display: flex;
  gap: 0.69rem;
  position: relative;
  margin-top: 0.5rem;
`;

export const SVGBundleLeftBox = styled.div`
  display: flex;
  align-items: end;
`;

export const LeftImg = styled(Image)`
  width: 7.5rem;
  height: 18.4375rem;
`;

export const SVGBundleMiddleImg = styled(Image)`
  margin: 0.62rem 0 2.94rem 0;
  width: 11.9375rem;
  height: 8.0625rem;
`;

export const SVGBundleBottomBox = styled.div`
  margin-left: 3.81rem;

  .LoginSVG2 {
    width: 4.9375rem;
    height: 2.875rem;
  }
`;

export const SVGBundleRightBox = styled.div`
  display: flex;
  flex-direction: column;

  .LoginSVG1 {
    width: 12.1519rem;
    height: 5.0163rem;
  }
`;

export const AbsoluteImg = styled(Image)`
  position: absolute;
  left: 7.81rem;
  bottom: 0;
  width: 3.625rem;
  height: 7.5625rem;
`;
