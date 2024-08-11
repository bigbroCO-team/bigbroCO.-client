import { forwardRef } from 'react';
import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errorMessage?: string | undefined;
}

const DisabledInput = forwardRef<HTMLInputElement, Props>(
  ({ title, errorMessage, ...attributes }, ref) => {
    return (
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Input disabled ref={ref} {...attributes} />
        <S.Error>{errorMessage}</S.Error>
      </S.Container>
    );
  }
);

DisabledInput.displayName = 'DisabledInput';

export default DisabledInput;
