import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80vw;
  height: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  width: 56.25rem;
`;

export const RightBox = styled.div`
  width: 25rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  margin-top: 3.5rem;
`;

export const SaveButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.main[50]};
  display: flex;
  width: 100%;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const InfoText = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[500]};
`;
