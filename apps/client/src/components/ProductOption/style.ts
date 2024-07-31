import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.grey[300]};
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionBox = styled.div`
  width: calc(100% - 5.875rem);
  height: 3rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[800]};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  box-sizing: content-box;
  position: absolute;
  top: -0.0625rem;
  left: -0.0625rem;
  z-index: 7;
  border: 0.0313rem ${({ theme }) => theme.color.grey[800]};
  background-color: ${({ theme }) => theme.color.black};
`;

export const Option = styled.div`
  width: 100%;
  height: 4.75rem;
  cursor: pointer;
  border: 0.0313rem solid ${({ theme }) => theme.color.grey[800]};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const Name = styled.h1`
  ${({ theme }) => theme.typo.body.small};
  color: ${({ theme }) => theme.color.white};
`;

export const Status = styled(Name)`
  color: ${({ theme }) => theme.color.grey[500]};
`;
