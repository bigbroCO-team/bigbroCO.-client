import { KakaoIcon } from 'client/assets';
import { Container } from './style';

const KakaoLoginButton = () => (
  <Container href='https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=664de726688fc57faf2adf48e1f8307e&redirect_uri=https://test.bigbro.company/auth/kakao/callback'>
    <KakaoIcon />
    카카오 계정으로 로그인
  </Container>
);

export default KakaoLoginButton;
