import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.125rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.grey[700]};
  background: ${({ theme }) => theme.color.background};
`;

export const CheckBox = styled.button`
  width: 1rem;
  height: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[500]};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Text = styled.p`
  text-align: center;
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const DetailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
