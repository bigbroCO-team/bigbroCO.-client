'use client';

import { usePathname } from 'next/navigation';
import * as S from './style';
import { CartIcon, MoreIcon, PersonIcon } from 'shared/assets';
import { useState } from 'react';
import { brandArray } from 'shared/constants';

const pathToText: { [key: string]: string } = {
  '': 'BIGBRO',
  login: 'BIGBRO',
  BIGBRO: 'BIGBRO',
  CBWAS: 'CBWAS',
  GONGNEWGI: 'GONGNEWGI',
  'S.C.B': 'S.C.B',
  SCULFEE: 'SCULFEE',
};

const MobileHeader = () => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);
  const path = usePathname();
  const isLogo = [
    '/',
    '/login',
    '/BIGBRO',
    '/CBWAS',
    '/GONGNEWGI',
    '/S.C.B',
    '/SCULFEE',
  ].includes(path);

  const brand = pathToText[path.split('/')[1]];

  return (
    <>
      <S.Container>
        <S.LeftBox isLogo={isLogo}>{isLogo ? brand : ''}</S.LeftBox>
        <S.RightBox>
          <S.MoreButton onClick={() => setIsSideBar(true)}>
            <MoreIcon />
          </S.MoreButton>
        </S.RightBox>
      </S.Container>
      {isSideBar && (
        <S.Background onClick={() => setIsSideBar(false)}>
          <S.SideBar onClick={(e) => e.stopPropagation()}>
            <S.BrandBox>
              {brandArray.map((brand) => (
                <S.Brand key={brand} href={brand}>
                  {brand}
                </S.Brand>
              ))}
            </S.BrandBox>
            <S.Hr />
            <S.ControlBox>
              <S.ControlButton href='/cart'>
                <CartIcon />
                장바구니
              </S.ControlButton>
              <S.ControlButton href='/my'>
                <PersonIcon />
                마이페이지
              </S.ControlButton>
            </S.ControlBox>
          </S.SideBar>
        </S.Background>
      )}
    </>
  );
};

export default MobileHeader;
