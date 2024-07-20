'use client';

import * as S from './style';
import type { HeaderType, HeaderPositionType } from 'shared/types';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  type: HeaderType;
  position?: HeaderPositionType;
}

const Header: React.FC<Props> = ({ type, position = 'fixed' }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <S.Container type={type} position={position} segment={segment}>
      <S.BIGBROCOMPANY href='/'>BIGBRO COMPANY</S.BIGBROCOMPANY>
      <S.NavContainer>
        {type !== 'admin' && (
          <>
            <S.LogoWrapper href='/CBWAS'>CBWAS</S.LogoWrapper>
            <S.LogoWrapper href='/S.C.B'>S.C.B</S.LogoWrapper>
            <S.LogoWrapper href='/BIGBRO'>BIGBRO</S.LogoWrapper>
            <S.LogoWrapper href='/GONGNEWGI'>GONGNEWGI</S.LogoWrapper>
            <S.LogoWrapper href='/SCULFEE'>SCULFEE</S.LogoWrapper>
          </>
        )}
        {type === 'admin' && (
          <>
            <S.AdminNav href='/'>상품 관리</S.AdminNav>
            <S.AdminNav href='/'>주문 내역</S.AdminNav>
          </>
        )}
      </S.NavContainer>
      <S.LoginButton href='/login'>Login</S.LoginButton>
      {/* <S.LogoutButton href='/logout'>
        Logout
      </S.LogoutButton>
      <S.MyPageButton href='/'>
        my page
      </S.MyPageButton> */}
    </S.Container>
  );
};

export default Header;
