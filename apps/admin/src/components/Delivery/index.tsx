'use client';

import { useState } from 'react';
import * as S from './style';
import { CheckIcon, DetailArrow } from 'admin/assets';
import { CustomInput, Select } from 'admin/components';

interface Props {
  year: string;
  time: string;
  product: string[];
  price: number;
  name: string;
  address: string;
  phoneNumber: number;
  id: string;
}

const Delivery: React.FC<Props> = ({
  year,
  time,
  product,
  price,
  name,
  address,
  phoneNumber,
  id,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const deliveryCompany = ['로젠택배'];

  const orderState = [
    '입금확인전',
    '입금확인',
    '배송준비중',
    '배송시작',
    '환불시작',
  ];

  const formatPhoneNumber = (number: number): string => {
    const numberStr = number.toString();
    if (numberStr.length === 8) {
      return `${numberStr.slice(0, 4)}-${numberStr.slice(4)}`;
    }
    return numberStr;
  };

  return (
    <S.Wrapper>
      <S.CheckBox onClick={() => setIsChecked(!isChecked)}>
        <CheckIcon isChecked={isChecked} />
      </S.CheckBox>
      <S.TextBox>
        <S.Text>{year}</S.Text>
        <S.Text>{time}</S.Text>
      </S.TextBox>
      <S.TextBox>
        {product.map((item, index) => (
          <S.Text key={index}>{item}</S.Text>
        ))}
      </S.TextBox>
      <S.Text>{price.toLocaleString()}</S.Text>
      <S.Text>{name}</S.Text>

      <S.TextBox>
        {address.split('\n').map((line, index) => (
          <S.Text key={index}>{line}</S.Text>
        ))}
      </S.TextBox>
      <S.Text>010-{formatPhoneNumber(phoneNumber)}</S.Text>
      <S.Text>{id}</S.Text>

      <Select options={[...deliveryCompany]} defaultValue='배송사 선택' />
      <CustomInput placeholder='운송장번호를입력해주세요' />
      <Select options={[...orderState]} />

      <S.DetailBox>
        <S.Text>보기</S.Text>
        <button>
          <DetailArrow />
        </button>
      </S.DetailBox>
    </S.Wrapper>
  );
};

export default Delivery;
