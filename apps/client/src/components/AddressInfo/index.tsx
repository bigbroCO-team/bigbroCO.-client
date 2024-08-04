'use client';

import React, { useState } from 'react';
import * as S from './style';

interface Props {
  Key: number;
  AddressTag: string;
  PhoneNumber: string;
  Address: string;
  Detail: string;
  IsSelected: boolean;
}

const AddressInfo: React.FC<Props> = ({
  Key,
  AddressTag,
  PhoneNumber,
  Address,
  Detail,
  IsSelected,
}) => {
  const [selected, setSelected] = useState(IsSelected);
  const information = [PhoneNumber, Address, Detail];

  const infoModify = () => {
    alert(`modify ${Key}`);
  };

  const infoDelete = () => {
    alert(`modify ${Key}`);
  };

  return (
    <S.Container state={selected}>
      <S.TitleSmall>{AddressTag}</S.TitleSmall>
      {information.map((el, idx) => (
        <S.BodySmall key={idx}>{el}</S.BodySmall>
      ))}
      <S.ButtonContainer>
        <S.InfoButtonContainer>
          <S.InfoButton onClick={() => infoModify()}>수정</S.InfoButton>
          <S.InfoButton onClick={() => infoDelete()}>삭제</S.InfoButton>
        </S.InfoButtonContainer>
        <S.IsSelectButton
          isSelected={selected}
          onClick={() => setSelected((prev) => !prev)}
        >
          선택
        </S.IsSelectButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddressInfo;
