import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.h1`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 0.5rem 0 0.25rem 0;
`;

export const Input = styled.input<{ isError: boolean }>`
  ${({ theme }) => theme.typo.body.small};
  height: 3rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme, isError }) =>
    isError ? theme.color.error : theme.color.grey[600]};
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[900]};

  &::placeholder {
    color: ${({ theme }) => theme.color.grey[600]};
  }

  &:focus {
    color: ${({ theme }) => theme.color.white};
    border: 0.0625rem solid ${({ theme }) => theme.color.main[100]};
    outline: none;
  }
`;

export const Error = styled.p`
  ${({ theme }) => theme.typo.label};
  color: ${({ theme }) => theme.color.error};
  padding-left: 0.25rem;
`;

export const HiddenButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  overflow: auto;
  height: 1.5rem;
`;
