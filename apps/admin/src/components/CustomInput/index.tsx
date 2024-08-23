'use client';

import * as S from './style';

interface Props {
  placeholder: string;
}

const CustomInput: React.FC<Props> = ({ placeholder }) => {
  return (
    <S.Wrapper>
      <S.Input placeholder={placeholder} />
    </S.Wrapper>
  );
};

export default CustomInput;
