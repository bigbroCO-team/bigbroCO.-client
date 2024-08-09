import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.white};
  padding: ${({ isSelected }) => (isSelected ? '1.4375rem' : '1.5rem')};
  border: ${({ isSelected, theme }) =>
    isSelected ? `0.0625rem solid ${theme.color.main[50]}` : 'none'};
  gap: 0.75rem;
`;

export const TitleSmall = styled.div`
  ${({ theme }) => theme.typo.title.small};
`;

export const BodySmall = styled.div`
  ${({ theme }) => theme.typo.body.small};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

export const InfoButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModifyButton = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.color.grey[300]};
  ${({ theme }) => theme.typo.body.medium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const DeleteButton = styled.button`
  display: flex;
  color: ${({ theme }) => theme.color.grey[300]};
  ${({ theme }) => theme.typo.body.medium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
`;

export const IsSelectButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  height: 3rem;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.black : theme.color.grey[600]};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.main[50] : theme.color.grey[300]};
  ${({ theme }) => theme.typo.body.medium};
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${({ isSelected }) => isSelected && 'none'};
`;
