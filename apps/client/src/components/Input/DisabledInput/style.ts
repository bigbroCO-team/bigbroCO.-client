import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Name = styled.h1`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const Input = styled.input`
  &:disabled {
    ${({ theme }) => theme.typo.body.small};
    color: ${({ theme }) => theme.color.grey[600]};
    background-color: ${({ theme }) => theme.color.grey[800]};
    height: 3rem;
    border: 0.0625rem solid ${({ theme }) => theme.color.grey[700]};
    padding: 0.5rem 1rem;
  }
`;
