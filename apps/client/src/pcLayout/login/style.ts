import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

export const BackgroundImg = styled(Image)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const LeftBox = styled.div`
  width: 45vw;
  z-index: 1;
`;

export const RightBox = styled.div`
  width: 55vw;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ShadowBox = styled.div`
  ${({ theme }) => theme.typo.imfeel.small};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const LoginForm = styled.form`
  margin-top: 2rem;
  display: flex;
  width: 22.5rem;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;

export const ButtonBox = styled.div`
  ${({ theme }) => theme.typo.body.small}
  color: ${({ theme }) => theme.color.grey[600]};
  margin-top: 3rem;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  background-color: ${({ theme }) => theme.color.grey[900]};
  color: ${({ theme }) => theme.color.grey[600]};
  width: 22.5rem;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpButton = styled(Link)`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.main[50]};
  border: 0.0625rem solid ${({ theme }) => theme.color.main[50]};
  width: 22.5rem;
  height: 2.875rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FindPasswordButton = styled(Link)`
  ${({ theme }) => theme.typo.label};
  color: ${({ theme }) => theme.color.main[150]};
  position: absolute;
  right: 0.25rem;
  top: 12rem;
`;

export const SVGBundleContainer = styled.div`
  width: 38.24619rem;
  height: 36.5rem;
  display: flex;
  gap: 1.25rem;
  position: relative;
`;

export const SVGBundleLeftBox = styled.div`
  display: flex;
  align-items: end;
`;

export const SVGBundleMiddleImg = styled(Image)`
  margin: 1.13rem 0 5.5rem 0;
`;

export const SVGBundleBottomBox = styled.div`
  margin-left: 5.81rem;
`;

export const SVGBundleRightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AbsoluteImg = styled(Image)`
  position: absolute;
  left: 14.62rem;
  bottom: 0;
`;
