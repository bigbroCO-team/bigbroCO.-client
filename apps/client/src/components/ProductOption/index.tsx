import { ProductOptionType } from 'shared';
import * as S from './style';
import { SelectIcon } from 'client/assets';
import { useState } from 'react';
import { SelectOptionType } from 'client/types';
import { toast } from 'react-toastify';

interface ProductOptionProps {
  options: ProductOptionType[];
  selectedProductList: SelectOptionType[];
  setSelectedProductList: React.Dispatch<
    React.SetStateAction<SelectOptionType[]>
  >;
}

const optionStatusConvertor = {
  on_sale: '재고 있음',
  stop_sale: '판매 중지',
  sold_out: '품절',
  discontinued: '단종',
};

const ProductOption: React.FC<ProductOptionProps> = ({
  options,
  selectedProductList,
  setSelectedProductList,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleOptionBoxClick = () => setIsModal(true);

  const handleBackgroundClick = () => setIsModal(false);

  const handleOptionClick = (option: ProductOptionType) => {
    if (option.status !== 'on_sale') {
      toast.error('선택할 수 없는 옵션입니다');
      return setIsModal(false);
    }

    if (selectedProductList.some(({ id }) => id === option.id))
      return setIsModal(false);

    const selectedProduct = {
      id: option.id,
      name: option.name,
      product: option.product,
      count: 1,
    };

    setSelectedProductList((prev) => [...prev, selectedProduct]);
    setIsModal(false);
  };

  return (
    <>
      <S.Container>
        상품 선택
        <S.OptionBox onClick={handleOptionBoxClick}>
          상품을 선택해주세요
          <SelectIcon />
          {isModal && (
            <S.OptionWrapper onClick={(e) => e.stopPropagation()}>
              {options.map((option) => (
                <S.Option
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                >
                  <S.Name>{option.name}</S.Name>
                  <S.Status>{optionStatusConvertor[option.status]}</S.Status>
                </S.Option>
              ))}
            </S.OptionWrapper>
          )}
        </S.OptionBox>
      </S.Container>
      {isModal && <S.Background onClick={handleBackgroundClick} />}
    </>
  );
};

export default ProductOption;
