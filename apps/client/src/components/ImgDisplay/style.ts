import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MainImg = styled.img`
  width: 37.5rem;
  height: 37.5rem;
  object-fit: contain;
`;

export const SubImgContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 37.5rem;
`;

export const SubImg = styled.img<{ isSelected: boolean }>`
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      border: 0.125rem solid ${theme.color.main[50]};
    `};
  width: 5.625rem;
  min-width: 5.625rem;
  height: 5.625rem;
  object-fit: contain;
  cursor: pointer;
`;
