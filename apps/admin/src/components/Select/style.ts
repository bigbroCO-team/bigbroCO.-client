import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: inline-block;
`;

export const CustomSelect = styled.select`
  appearance: none;
  display: flex;
  width: 11.25rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[800]};
  background: ${({ theme }) => theme.color.background};
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  outline: none;
`;

export const ArrowBox = styled.div`
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 50%;
  display: flex;
  transform: translateY(-50%);
  padding: 0.3125rem 0.5rem;
  justify-content: center;
  align-items: center;
`;
