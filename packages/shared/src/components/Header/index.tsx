'use client';

import * as S from './style';
import * as I from 'shared/assets';
import Link from 'next/link';
import { HeaderType } from 'shared/types';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  type: HeaderType;
}

const Header: React.FC<Props> = ({ type }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <S.Container type={type} segment={segment}>
      <Link href='/'>
        <I.BIGBROCOMPANYLogo />
      </Link>
      <S.NavContainer>
        {type !== 'admin' && (
          <>
            <Link href='/CBWAS'>
              <I.CBWASLogo />
            </Link>
            <Link href='/S.C.B'>
              <I.SCBLogo />
            </Link>
            <Link href='/BIGBRO'>
              <I.BIGBROLogo />
            </Link>
            <Link href='/GONGNEWGI'>
              <I.GONGNEWGILogo />
            </Link>
            <Link href='/SCULFEE'>
              <I.SCULFEELogo />
            </Link>
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
