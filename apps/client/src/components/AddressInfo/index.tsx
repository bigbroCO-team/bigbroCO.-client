'use client';

import * as S from './style';
import { AddressDataType, addressQueryKeys, useDeleteAddress } from 'shared';
import { useStore } from 'client/stores';
import { toast } from 'react-toastify';
import { invalidateQueries, toTelFormat } from 'shared/utils';
import { useRouter } from 'next/navigation';

interface Props extends AddressDataType {}

const AddressInfo: React.FC<Props> = ({ id, tag, phone, address, detail }) => {
  const { selectedAddress, setSelectedAddress } = useStore();
  const { push } = useRouter();
  const { mutate: deleteAddress } = useDeleteAddress(id, {
    onSuccess: () => {
      toast.success('삭제 되었습니다.');
      invalidateQueries(addressQueryKeys.getAddress());
    },
    onError: () => toast.error('에러가 발생하였습니다.'),
  });
  const isSelected = selectedAddress === id;

  const handleDeleteButtonClick = () => {
    deleteAddress();
  };

  const handleSelectButtonClick = () => {
    setSelectedAddress(id);
    push('/payment');
  };

  return (
    <S.Container isSelected={isSelected}>
      <S.TitleSmall>{tag}</S.TitleSmall>
      <S.InfoWrapper>
        <S.BodySmall>{toTelFormat(phone)}</S.BodySmall>
        <S.BodySmall>{address}</S.BodySmall>
        <S.BodySmall>{detail}</S.BodySmall>
      </S.InfoWrapper>
      <S.ButtonContainer>
        <S.InfoButtonContainer>
          <S.ModifyButton href={`/address?id=${id}`}>수정</S.ModifyButton>
          <S.DeleteButton onClick={handleDeleteButtonClick}>
            삭제
          </S.DeleteButton>
        </S.InfoButtonContainer>
        <S.IsSelectButton
          onClick={handleSelectButtonClick}
          isSelected={isSelected}
        >
          선택
        </S.IsSelectButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddressInfo;
