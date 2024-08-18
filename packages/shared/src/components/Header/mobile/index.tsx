import { usePathname } from 'next/navigation';
import * as S from './style';
import { CartIcon, HeaderBackIcon, MoreIcon, PersonIcon } from 'shared/assets';
import { useState } from 'react';
import { brandArray } from 'shared/constants';

interface MobileHeaderProps {
  logo: string;
  handleBackButtonClick?: () => void;
}

const MobileHeader = ({ logo, handleBackButtonClick }: MobileHeaderProps) => {
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

  return (
    <>
      <S.Container>
        <S.LeftBox isLogo={isLogo}>
          {handleBackButtonClick && (
            <S.BackButton onClick={handleBackButtonClick}>
              <HeaderBackIcon />
            </S.BackButton>
          )}
          {logo}
        </S.LeftBox>
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
