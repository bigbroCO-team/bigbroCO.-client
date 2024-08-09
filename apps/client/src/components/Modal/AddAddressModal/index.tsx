import * as S from './style';
import { LeftArrow } from 'client/assets';
import { DisabledInput, FormInput } from 'client/components/Input';
import { AddAddressFormType, InputType } from 'client/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddAddressFormSchema } from 'client/schemas';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect, useState } from 'react';
import { getAddress } from 'shared/apis';
import { addressQueryKeys, usePostAddress, usePutAddress } from 'shared';
import { toast } from 'react-toastify';
import { invalidateQueries } from 'shared/utils';
import { useRouter } from 'next/navigation';

interface AddAddressModal {
  id: number | null;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAddressModal: React.FC<AddAddressModal> = ({ setIsModal, id }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddAddressFormType>({
    resolver: zodResolver(AddAddressFormSchema),
  });
  const daumPostCode = useDaumPostcodePopup();
  const [isModify, setIsModify] = useState(false);
  const { push } = useRouter();

  const onSuccess = (text: string) => {
    toast.success(text);
    invalidateQueries(addressQueryKeys.getAddress());
    setIsModal(false);
    push('/address');
  };

  const onError = () => {
    toast.error('에러가 발생하였습니다.');
    setIsModal(false);
    push('/address');
  };

  const { mutate: putAddressMutate } = usePutAddress({
    onSuccess: () => onSuccess('주소가 수정되었습니다.'),
    onError: onError,
  });

  const { mutate: postAddressMutate } = usePostAddress({
    onSuccess: () => onSuccess('주소가 추가되었습니다.'),
    onError: onError,
  });

  const handleBackButtonClick = () => setIsModal(false);

  const handleDaumPostCodePopupComplete = ({ address, zonecode }: Address) => {
    setValue('address', address);
    setValue('zipcode', zonecode);
  };

  const handleZipCodeButtonClick = () =>
    daumPostCode({
      popupTitle: 'BIGBRO COMPANY',
      onComplete: handleDaumPostCodePopupComplete,
    });

  const handleFormSubmit: SubmitHandler<AddAddressFormType> = (data) => {
    if (isModify && id) {
      const body = {
        id: id,
        body: data,
      };

      putAddressMutate(body);
    } else {
      postAddressMutate(data);
    }
  };

  const getPrevAddress = async (id: number) => {
    const { tag, name, zipcode, address, detail, phone } = await getAddress(id);
    setValue('tag', tag);
    setValue('name', name);
    setValue('zipcode', zipcode);
    setValue('address', address);
    setValue('detail', detail);
    setValue('phone', phone);
  };

  useEffect(() => {
    if (id) {
      setIsModify(true);
      getPrevAddress(id);
    }
  }, []);

  return (
    <>
      <S.Container>
        <S.InnerContainer>
          <S.ModalHeader>
            <S.BackButton onClick={handleBackButtonClick}>
              <LeftArrow />
            </S.BackButton>
            배송지 추가
          </S.ModalHeader>
          <S.AddAddressForm onSubmit={handleSubmit(handleFormSubmit)}>
            <FormInput
              title='배송지 이름'
              type={InputType.TEXT}
              placeholder='Ex. 집 학교 등'
              errorMessage={errors.tag?.message}
              {...register('tag')}
            />
            <FormInput
              title='받는 분'
              type={InputType.TEXT}
              placeholder='받는 분의 이름을 입력해주세요'
              errorMessage={errors.name?.message}
              {...register('name')}
            />
            <S.ZipCodeBox>
              <DisabledInput
                title='우편번호'
                placeholder='우편번호 검색시 자동으로 입력됩니다'
                errorMessage={errors.zipcode?.message}
                {...register('zipcode')}
              />
              <S.ZipCodeButton type='button' onClick={handleZipCodeButtonClick}>
                우편번호
              </S.ZipCodeButton>
            </S.ZipCodeBox>
            <DisabledInput
              title='주소'
              placeholder='우편번호 검색시 자동으로 입력됩니다'
              errorMessage={errors.address?.message}
              {...register('address')}
            />
            <FormInput
              title='상세 주소'
              type={InputType.TEXT}
              placeholder='Ex. xxx동 xxx호'
              errorMessage={errors.detail?.message}
              {...register('detail')}
            />
            <FormInput
              title='전화번호'
              type={InputType.TEXT}
              placeholder='숫자만 입력해주세요'
              errorMessage={errors.phone?.message}
              {...register('phone')}
            />
            <S.AddAddressButton type='submit'>추가</S.AddAddressButton>
          </S.AddAddressForm>
        </S.InnerContainer>
      </S.Container>
    </>
  );
};

export default AddAddressModal;
