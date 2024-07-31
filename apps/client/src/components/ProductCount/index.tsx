import { SelectOptionType } from 'client/types';
import * as S from './style';
import { MinusIcon, PlusIcon, XIcon } from 'client/assets';
import { toLocalString } from 'client/utils';
import { toast } from 'react-toastify';

interface ProductCountProps {
  id: number;
  price: number;
  name: string;
  selectedProductList: SelectOptionType[];
  setSelectedProductList: React.Dispatch<
    React.SetStateAction<SelectOptionType[]>
  >;
}

const ProductCount: React.FC<ProductCountProps> = ({
  id,
  name,
  price,
  selectedProductList,
  setSelectedProductList,
}) => {
  const currentProduct = selectedProductList.find(
    (product) => product.id === id
  )!;

  const count = currentProduct.count;

  const handleMinusClick = () => {
    if (currentProduct.count === 1) return toast.error('최소 수량입니다.');

    const newProduct = { ...currentProduct, count: currentProduct.count - 1 };
    const newSelectedProductList = [
      ...selectedProductList.filter((product) => id !== product.id),
      newProduct,
    ];

    setSelectedProductList(newSelectedProductList);
  };

  const handlePlusClick = () => {
    if (currentProduct.count === 99) return toast.error('최대 수량입니다.');

    const newProduct = { ...currentProduct, count: currentProduct.count + 1 };
    const newSelectedProductList = [
      ...selectedProductList.filter((product) => id !== product.id),
      newProduct,
    ];

    setSelectedProductList(newSelectedProductList);
  };

  const handleXButtonClick = () => {
    const filteredSelectedProductList = [
      ...selectedProductList.filter((product) => id !== product.id),
    ];

    setSelectedProductList(filteredSelectedProductList);
  };

  return (
    <S.Container>
      <S.Top>
        <S.Name>{name}</S.Name>
        <S.XButton onClick={handleXButtonClick}>
          <XIcon />
        </S.XButton>
      </S.Top>
      <S.Bottom>
        <S.CountWrapper>
          <S.CountButton onClick={handleMinusClick}>
            <MinusIcon />
          </S.CountButton>
          <S.Count>{count}</S.Count>
          <S.CountButton onClick={handlePlusClick}>
            <PlusIcon />
          </S.CountButton>
        </S.CountWrapper>
        <S.Price>{toLocalString(price)}원</S.Price>
      </S.Bottom>
    </S.Container>
  );
};

export default ProductCount;
