'use client';

import { Header } from 'shared';
import * as S from './style';
import { DeliveryInfo } from 'client/components';

interface items {
  whenDelivery: string;
  productImg: string;
  productName: string;
  productColorName: string;
  productNumber: number;
  productPrice: string;
  beforeDiscountPrice: string;
}

const users = [
  {
    whenDelivery: '5.19(일)',
    productImg:
      'data:image/jpeg;base64,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',
    productName: 'Big Bro T-shirt',
    productColorName: 'Big Bro T-shirt_White',
    productNumber: 1,
    productPrice: '25,000',
    beforeDiscountPrice: '30,000',
  },
];

const user = {
  name: '홍길동',
};

const MyPageLayout = () => {
  return (
    <>
      <Header type='client_clear' />
      <S.Container>
        <S.TitleWrapper>
          <S.UserName>
            {user.name} <span>님</span>
          </S.UserName>
          <S.ModifyInfo href='/modifyInfo'>정보 수정</S.ModifyInfo>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          {users.map((info: items, idx: number) => (
            <DeliveryInfo
              key={idx}
              isPreparing={true}
              whenDelivery={info.whenDelivery}
              isArrive={false}
              productImg={info.productImg}
              productName={info.productName}
              productColorName={info.productColorName}
              productNumber={info.productNumber}
              productPrice={info.productPrice}
              beforeDiscountPrice={info.beforeDiscountPrice}
            />
          ))}
          <S.Hr />
          {users.map((info: items, idx: number) => (
            <DeliveryInfo
              key={idx}
              isPreparing={false}
              whenDelivery={info.whenDelivery}
              isArrive={false}
              productImg={info.productImg}
              productName={info.productName}
              productColorName={info.productColorName}
              productNumber={info.productNumber}
              productPrice={info.productPrice}
              beforeDiscountPrice={info.beforeDiscountPrice}
            />
          ))}
          <S.Hr />
          {users.map((info: items, idx: number) => (
            <DeliveryInfo
              key={idx}
              isPreparing={true}
              whenDelivery={info.whenDelivery}
              isArrive={true}
              productImg={info.productImg}
              productName={info.productName}
              productColorName={info.productColorName}
              productNumber={info.productNumber}
              productPrice={info.productPrice}
              beforeDiscountPrice={info.beforeDiscountPrice}
            />
          ))}
        </S.ContentsWrapper>
      </S.Container>
    </>
  );
};

export default MyPageLayout;
