'use client';

import { forwardRef } from 'react';
import * as S from './style';
import { ArrowIcon } from 'admin/assets';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: any[];
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, defaultValue, value, ...attributes }, ref) => (
    <S.SelectWrapper>
      <S.CustomSelect ref={ref} value={value} {...attributes}>
        <option disabled hidden value={defaultValue}>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.CustomSelect>
      <S.ArrowBox>
        <ArrowIcon />
      </S.ArrowBox>
    </S.SelectWrapper>
  )
);

Select.displayName = 'Select';

export default Select;
