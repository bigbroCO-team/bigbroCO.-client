import styled from '@emotion/styled';

export const TextWrppaer = styled.div`
  display: flex;
  width: 16.875rem;
  padding: 0rem 1rem 0.9375rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const DeleteTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

export const QustionText = styled.p`
  ${({ theme }) => theme.typo.bodyLarge};
  color: ${({ theme }) => theme.color.white};
`;

export const ExplainText = styled.p`
  ${({ theme }) => theme.typo.bodySmall};
  color: ${({ theme }) => theme.color.grey[600]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 16.875rem;
  align-items: flex-start;
  border-top: 0.0208rem solid
    var(--Separators-Non-opaque---Dark, rgba(84, 84, 88, 0.65));
`;

export const CancelButton = styled.button`
  display: flex;
  padding: 0.6875rem 0rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  color: ${({ theme }) => theme.color.grey[600]};
  border-right: 0.0208rem solid
    var(--Separators-Non-opaque---Dark, rgba(84, 84, 88, 0.65));
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 0.6875rem 0rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  color: ${({ theme }) => theme.color.main[50]};
`;
