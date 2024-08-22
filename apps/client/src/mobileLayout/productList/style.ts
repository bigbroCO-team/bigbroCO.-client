import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  padding-top: 3.8125rem;
  overflow-y: scroll;
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;
`;
