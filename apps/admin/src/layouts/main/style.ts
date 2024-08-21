import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  width: 51.875rem;
  flex-direction: column;
  gap: 1.5rem;
`;

export const GraphBox = styled.div`
  display: flex;
  width: 100%;
  padding: 2.25rem;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.color.grey[25]};
`;

export const Graph = styled.div`
  width: 100%;
  height: 18.5rem;
`;

export const SubscriberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const SubscriberTitle = styled.p`
  ${({ theme }) => theme.typo.body.large};
  color: ${({ theme }) => theme.color.white};
`;

export const SubscriberNumber = styled.p`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
`;
