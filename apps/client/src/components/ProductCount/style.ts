import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 42.875rem;
  padding: 1.5rem;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.grey[800]};
`;

export const Name = styled.h1`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const XButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bottom = styled(Top)``;

export const CountWrapper = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[300]};
  border-radius: 0.25rem;
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

export const Count = styled.p`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
  width: 1.3rem;
  display: flex;
  justify-content: center;
`;

export const CountButton = styled.button``;

export const Price = styled(Name)`
  ${({ theme }) => theme.typo.body.medium};
`;
