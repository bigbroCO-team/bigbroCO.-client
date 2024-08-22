'use client';

import { AddressInfo } from 'client/components';
import * as S from './style';
import { LeftArrow } from 'client/assets';
import { useGetAddress } from 'shared/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AddAddressModal } from 'client/components';

const AddressLayout = () => {
  const params = useSearchParams();
  const [isModal, setIsModal] = useState<boolean>(false);
  const { data: address } = useGetAddress();
  const [id, setId] = useState<number | null>(null);

  const handleAddAddressButtonClick = () => setIsModal(true);

  useEffect(() => {
    if (params && params.get('id')) {
      setId(Number(params.get('id')));
      setIsModal(true);
    }
  }, [params]);

  return (
    <>
      <S.Container>
        <S.InnerContainer>
          <S.TitleWrapper>
            <S.BackButton href={'/payment'}>
              <LeftArrow />
            </S.BackButton>
            <S.Title>배송지 변경</S.Title>
            <S.AddAddressButton onClick={handleAddAddressButtonClick}>
              배송지 추가
            </S.AddAddressButton>
          </S.TitleWrapper>
          <S.Description>
            이전 배송지가 자동으로 기본 배송지로 설절되요.
          </S.Description>
          <S.AddressInfoWrapper>
            {address
              ? address.map((address) => (
                  <AddressInfo key={address.id} {...address} />
                ))
              : '저장한 주소가 하나도 없습니다'}
          </S.AddressInfoWrapper>
        </S.InnerContainer>
      </S.Container>
      {isModal && <AddAddressModal setIsModal={setIsModal} id={id} />}
    </>
  );
};

export default AddressLayout;
