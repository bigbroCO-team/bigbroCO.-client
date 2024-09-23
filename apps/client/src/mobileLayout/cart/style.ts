import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  margin-top: 4.6875rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TopBox = styled.div`
  width: 100%;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  margin-top: 3.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const InfoText = styled.span<{ isTitle?: boolean }>`
  ${({ theme }) => theme.typo.label};
  color: ${({ theme, isTitle }) =>
    isTitle ? theme.color.grey[600] : theme.color.grey[500]};
`;
