'use client';

import { AddressInfo } from 'client/components';
import * as S from './style';
import { LeftArrow } from 'client/assets';
import { useGetAddress } from 'shared/hooks';

const AddressLayout = () => {
  const { data: address } = useGetAddress();
  const Length = address !== null && address !== undefined ? address.length : 0;

  return (
    <S.Container length={Length}>
      <div>
        <S.TitleWrapper>
          <S.BackButton href={''}>
            <LeftArrow />
          </S.BackButton>
          <S.Title>배송지 변경</S.Title>
          <S.AddOtherAddressButton href={''}>
            배송지 추가
          </S.AddOtherAddressButton>
        </S.TitleWrapper>
        <p>이전 배송지가 자동으로 기본 배송지로 설절돼요</p>
        <S.AddressInfoWrapper>
          {address
            ? address.map((address) => {
                return (
                  <AddressInfo
                    Key={address.id}
                    AddressTag={address.tag}
                    PhoneNumber={address.phone}
                    Address={address.address}
                    Detail={address.detail}
                    IsSelected={false}
                  />
                );
              })
            : '저장한 주소가 하나도 없습니다'}
        </S.AddressInfoWrapper>
      </div>
    </S.Container>
  );
};

export default AddressLayout;
