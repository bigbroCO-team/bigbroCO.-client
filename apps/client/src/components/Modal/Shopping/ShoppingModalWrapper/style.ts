import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalInner = styled.div`
  display: inline-flex;
  padding-top: 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  background: ${({ theme }) => `
    linear-gradient(0deg, ${theme.color.grey[500]} 0%, ${theme.color.grey[500]} 100%), 
    #1D1D1D
  `};
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);
`;
