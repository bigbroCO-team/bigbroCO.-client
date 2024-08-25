import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 0.25rem 0rem;
  width: 10.75rem;
  justify-content: center;
  align-items: center;

  gap: 0.625rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.grey[600]};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;
