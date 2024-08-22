import { KakaoLoginButton } from 'client/components';
import * as S from './style';
import * as IMG from 'client/public';
import { LoginSVG1, LoginSVG2 } from 'client/assets';
import { MobileHeader } from 'shared';

const LoginMobileLayout = () => (
  <S.Container>
    <MobileHeader logo='BIGBRO' />
    <S.SVGBundleContainer>
      <S.SVGBundleLeftBox>
        <S.LeftImg src={IMG.Login1Img} alt='로그인 이미지 1' priority={true} />
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
    <KakaoLoginButton />
  </S.Container>
);

export default LoginMobileLayout;
