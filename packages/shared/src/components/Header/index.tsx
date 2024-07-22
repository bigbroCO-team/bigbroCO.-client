'use client';

import * as S from './style';
import type { HeaderType, HeaderPositionType, BrandType } from 'shared/types';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  type: HeaderType;
  position?: HeaderPositionType;
}

const brandArray: BrandType[] = [
  'CBWAS',
  'S.C.B',
  'BIGBRO',
  'GONGNEWGI',
  'SCULFEE',
] as const;

const Header: React.FC<Props> = ({ type, position = 'fixed' }) => {
  const segment = usePathname();
  const { push } = useRouter();

  return (
    <S.Container type={type} position={position}>
      <S.BIGBROCOMPANY href='/'>BIGBRO COMPANY</S.BIGBROCOMPANY>
      <S.NavContainer>
        {type !== 'admin' ? (
          <>
            {brandArray.map((brand) => {
              const path = `/${brand}`;
              const isMyBrand = path === segment;
              const handleBrandClick = () => push(path);

              return (
                <S.BrandWrapper
                  onClick={handleBrandClick}
                  isMyBrand={isMyBrand}
                  key={brand}
                >
                  {brand}
                </S.BrandWrapper>
              );
            })}
          </>
        ) : (
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
