import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  width: 100%;
  background: ${({ theme }) => theme.color.background}; //문제 시 삭제
`;

export const SelectAllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const SelectAllBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const SelectButtonProvider = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;

export const SelectAllText = styled.p`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
`;

export const GrayBar = styled.div`
  width: 0.0625rem;
  height: 1.25rem;
  background: ${({ theme }) => theme.color.grey[800]};
`;

export const DeleteButton = styled.button`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.error};
`;

export const MapGrayBar = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${({ theme }) => theme.color.grey[800]};
`;

export const ProductBox = styled.div<{ isRemoving: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  transition:
    opacity 0.3s ease-in,
    max-height 0.3s ease-in-out,
    margin 0.3s ease-in-out;
  opacity: ${({ isRemoving }) => (isRemoving ? 0 : 1)};
  overflow: hidden;
`;
