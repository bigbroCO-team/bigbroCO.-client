import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 2.25rem;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.grey[25]};
`;
