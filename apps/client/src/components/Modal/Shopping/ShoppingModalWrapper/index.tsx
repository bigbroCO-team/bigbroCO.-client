/**@jsxImportSource @emotion/react */

'use client';

import React from 'react';

import * as S from './style';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const ShoppingModalWrapper: React.FC<Props> = ({ children, closeModal }) => (
  <S.ModalWrapper onClick={closeModal}>
    <S.ModalInner onClick={(e) => e.stopPropagation()}>{children}</S.ModalInner>
  </S.ModalWrapper>
);

export default ShoppingModalWrapper;
