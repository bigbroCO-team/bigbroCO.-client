import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
  overflow-y: scroll;
`;

export const InnerContainer = styled.div`
  width: 37.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
`;

export const AddAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

export const ModalHeader = styled.header`
  ${({ theme }) => theme.typo.title.small};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  margin: 2.5rem 0 0.75rem 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ZipCodeBox = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`;

export const ZipCodeButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  border: 1px solid ${({ theme }) => theme.color.grey[300]};
  color: ${({ theme }) => theme.color.white};
  width: 7.75rem;
  height: 3rem;
  margin-top: 1.875rem;
`;

export const AddAddressButton = styled.button`
  ${({ theme }) => theme.typo.body.medium};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.main[50]};
  width: 100%;
  height: 2.875rem;
  margin-bottom: 2.5rem;
`;
