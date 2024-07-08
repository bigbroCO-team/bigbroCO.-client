import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import * as S from './style';
import { useState } from 'react';

const Header = () => {
  const { push } = useRouter();
  const segment = useSelectedLayoutSegment();
  const [scrollValue, setScrollValue] = useState(0);
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrollValue(window.scrollY);
    });
  }
  const clientNavigator = ['CBWAS', 'S.C.B', 'BIGBRO', 'GONGNEWGI', 'SCULFEE'];

  return (
    <>
      <S.Container type={scrollValue} path={segment}>
        <S.Nav type={'logo'} path={segment} onClick={() => push('/')}>
          BIGBRO COMPANY
        </S.Nav>
        <S.NavWrapper>
          {clientNavigator.map((client, idx) => (
            <S.Nav
              key={idx}
              type={client}
              path={segment}
              onClick={() => push(`/${client}`)}
            >
              {client}
            </S.Nav>
          ))}
        </S.NavWrapper>
        <S.Nav type={'Login'} path={segment} onClick={() => push(`/login`)}>
          Login
        </S.Nav>
      </S.Container>
    </>
  );
};

export default Header;
