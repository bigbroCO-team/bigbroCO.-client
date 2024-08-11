'use client';

import { forwardRef, useState } from 'react';
import * as S from './style';
import { InputType } from 'client/types';
import { CloseEyesIcon, OpenEyesIcon } from 'client/assets';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type: InputType;
  errorMessage?: string | undefined;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ title, type, errorMessage, ...attributes }, ref) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const handleHiddenButtonClick = () => setIsHidden((prev) => !prev);

    return (
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.InputWrapper>
          <S.Input
            type={
              type === InputType.TEXT || !isHidden
                ? InputType.TEXT
                : InputType.PASSWORD
            }
            isError={!!errorMessage}
            ref={ref}
            {...attributes}
          />
          {type === InputType.PASSWORD && (
            <S.HiddenButton type='button' onClick={handleHiddenButtonClick}>
              {isHidden ? <CloseEyesIcon /> : <OpenEyesIcon />}
            </S.HiddenButton>
          )}
        </S.InputWrapper>
        <S.Error>{errorMessage}</S.Error>
      </S.Container>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
