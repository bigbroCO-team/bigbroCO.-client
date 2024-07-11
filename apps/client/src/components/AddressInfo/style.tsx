import styled from '@emotion/styled';

export const Container = styled.div<{ state: boolean }>`
  display: flex;
  width: 37.5rem;
  height: 14.3125rem;
  padding: 1.5rem;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.white};
  border: ${({ state, theme }) =>
    state ? `0.0625rem solid ${theme.color.main[50]}` : 'none'};
  gap: 0.75rem;
`;

export const TitleSmall = styled.div`
  ${({ theme }) => theme.typo.titleSmall};
`;

export const BodySmall = styled.div`
  ${({ theme }) => theme.typo.bodySmall};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 34.375rem;
  justify-content: space-between;
`;

export const InfoButtonContainer = styled.div`
  display: flex;
`;

export const InfoButton = styled.button`
  display: flex;
  height: 3rem;
  color: ${({ theme }) => theme.color.grey[300]};
  ${({ theme }) => theme.typo.bodyMedium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const IsSelectButton = styled.button<{ selected: boolean }>`
  display: flex;
  height: 3rem;
  color: ${({ selected, theme }) =>
    selected ? theme.color.black : theme.color.grey[600]};
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.main[50] : theme.color.grey[300]};
  ${({ theme }) => theme.typo.bodyMedium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${({ selected }) => {
    if (selected) return 'none';
  }};
`;
