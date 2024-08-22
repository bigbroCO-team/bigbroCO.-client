import styled from '@emotion/styled';

export const Container = styled.a`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.yellow};
  width: 20.5rem;
  height: 3.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;
