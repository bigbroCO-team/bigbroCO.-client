'use client';

import { AddressInfo } from 'client/components';
import * as S from './style';
import { LeftArrow } from 'client/assets';

const AddressLayout = () => {
  return (
    <>
      <S.Container>
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
            <AddressInfo
              Id={0}
              AddressName={'내 집'}
              PhoneNumber={'010-1234-5678'}
              Address={'광주광역시 광산구 상무대로 312'}
              Detail={'광주소프트웨어마이스터고등학교'}
              IsSelected={true}
            />
            <AddressInfo
              Id={0}
              AddressName={'내 집'}
              PhoneNumber={'010-1234-5678'}
              Address={'광주광역시 광산구 상무대로 312'}
              Detail={'광주소프트웨어마이스터고등학교'}
              IsSelected={false}
            />
          </S.AddressInfoWrapper>
        </div>
      </S.Container>
    </>
  );
};

export default AddressLayout;
