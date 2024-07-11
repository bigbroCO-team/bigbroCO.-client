'use client';

import * as S from './style';
import * as I from 'shared/assets';
import { HeaderType } from 'shared/types';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  type: HeaderType;
}

const Header: React.FC<Props> = ({ type }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <S.Container type={type} segment={segment}>
      <S.LogoWrapper href='/'>
        <I.BIGBROCOMPANYLogo />
      </S.LogoWrapper>
      <S.NavContainer>
        {type !== 'admin' && (
          <>
            <S.LogoWrapper href='/CBWAS'>
              <I.CBWASLogo />
            </S.LogoWrapper>
            <S.LogoWrapper href='/S.C.B'>
              <I.SCBLogo />
            </S.LogoWrapper>
            <S.LogoWrapper href='/BIGBRO'>
              <I.BIGBROLogo />
            </S.LogoWrapper>
            <S.LogoWrapper href='/GONGNEWGI'>
              <I.GONGNEWGILogo />
            </S.LogoWrapper>
            <S.LogoWrapper href='/SCULFEE'>
              <I.SCULFEELogo />
            </S.LogoWrapper>
          </>
        )}
        {type === 'admin' && (
          <>
            <S.AdminNav href='/'>상품 관리</S.AdminNav>
            <S.AdminNav href='/'>주문 내역</S.AdminNav>
          </>
        )}
      </S.NavContainer>
      <S.LoginButton href='/login'>
        <I.LoginText />
      </S.LoginButton>
      {/* <S.LogoutButton href='/logout'>
        <I.LogoutText />
      </S.LogoutButton>
      <S.MyPageButton href='/'>
        <I.MyPageText />
      </S.MyPageButton> */}
    </S.Container>
  );
};

export default Header;
