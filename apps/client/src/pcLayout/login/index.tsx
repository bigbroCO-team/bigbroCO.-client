'use client';

import { PCHeader } from 'shared/components';
import * as S from './style';
import { backgroundImg } from 'client/public';
import * as IMG from 'client/public';
import Image from 'next/image';
import { LoginSVG1, LoginSVG2 } from 'client/assets';
import { KakaoLoginButton } from 'client/components';

const LoginPCLayout = () => (
  <>
    <PCHeader type='client_clear' />
    <S.Container>
      <S.LeftBox>
        <S.ShadowBox>
          BIGBRO COMPANY
          <KakaoLoginButton />
        </S.ShadowBox>
      </S.LeftBox>
      <S.RightBox>
        <S.SVGBundleContainer>
          <S.SVGBundleLeftBox>
            <Image src={IMG.Login1Img} alt='로그인 이미지 1' priority={true} />
          </S.SVGBundleLeftBox>
          <S.SVGBundleRightBox>
            <LoginSVG1 />
            <S.SVGBundleMiddleImg src={IMG.Login2Img} alt='로그인 이미지 2' />
            <S.SVGBundleBottomBox>
              <LoginSVG2 />
            </S.SVGBundleBottomBox>
          </S.SVGBundleRightBox>
          <S.AbsoluteImg src={IMG.Login3Img} alt='로그인 이미지 3' />
        </S.SVGBundleContainer>
      </S.RightBox>
      <S.BackgroundImg src={backgroundImg} alt='배경화면' />
    </S.Container>
  </>
);

export default LoginPCLayout;
