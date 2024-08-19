'use client';

import * as S from './style';
import type { HeaderType, HeaderPositionType } from 'shared/types';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useGetVerify } from 'shared/hooks';
import { brandArray } from 'shared/constants';

interface Props {
  type: HeaderType;
  position?: HeaderPositionType;
}

const PCHeader: React.FC<Props> = ({ type, position = 'fixed' }) => {
  const segment = usePathname();
  const { push } = useRouter();
  const { data } = useGetVerify();

  return (
    <S.Container type={type} position={position}>
      <S.BIGBROCOMPANY href='/' scroll={false}>
        BIGBRO COMPANY
      </S.BIGBROCOMPANY>
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
            <S.AdminNav href='/' scroll={false}>
              상품 관리
            </S.AdminNav>
            <S.AdminNav href='/' scroll={false}>
              주문 내역
            </S.AdminNav>
          </>
        )}
      </S.NavContainer>
      <S.SideButtonBox>
        {data?.isValidToken ? (
          <>
            <S.MyPageButton href='/mypage'>my page</S.MyPageButton>
            <S.LogoutButton href='/logout'>Logout</S.LogoutButton>
          </>
        ) : (
          <S.LoginButton href='/login' scroll={false}>
            Login
          </S.LoginButton>
        )}
      </S.SideButtonBox>
    </S.Container>
  );
};

export default PCHeader;
