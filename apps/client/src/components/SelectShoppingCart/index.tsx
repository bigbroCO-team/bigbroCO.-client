import * as S from './style';
import { CheckBox } from 'client/assets';
import { useState } from 'react';
import { CheckProduct } from 'client/components';

interface Props {
  products: Product[];
}

interface Product {
  productImg: string;
  productName: string;
  productColor: string;
  productPrice: number;
  productPercent: number;
  isSale: boolean;
}

const SelectShoppingCart: React.FC<Props> = ({ products: initialProducts }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [clickedCount, setClickedCount] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [productClickedStates, setProductClickedStates] = useState<boolean[]>(initialProducts.map(() => false));
  const [removingProductIndex, setRemovingProductIndex] = useState<number | null>(null);

  const handleAllClick = () => {
    const newIsAllClicked = !isClicked;
    setIsClicked(newIsAllClicked);
    setClickedCount(newIsAllClicked ? products.length : 0);
    setProductClickedStates(products.map(() => newIsAllClicked));
  };

  const handleProductClick = (index: number, clicked: boolean) => {
    const newProductClickedStates = [...productClickedStates];
    newProductClickedStates[index] = clicked;

    const newClickedCount = newProductClickedStates.filter(Boolean).length;
    setClickedCount(newClickedCount);
    setIsClicked(newClickedCount === products.length);
    setProductClickedStates(newProductClickedStates);
  };

  const handleDeleteClick = (index: number) => {
    setRemovingProductIndex(index);
    setTimeout(() => {
      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);

      const newProductClickedStates = [...productClickedStates];
      newProductClickedStates.splice(index, 1);
      setProductClickedStates(newProductClickedStates);

      const newClickedCount = newProductClickedStates.filter(Boolean).length;
      setClickedCount(newClickedCount);
      setIsClicked(newClickedCount === newProducts.length);
      setRemovingProductIndex(null);
    }, 300);
  };

  return (
    <S.Wrapper>
      <S.SelectAllContainer>
        <S.SelectAllBox>
          <S.SelectButtonProvider onClick={handleAllClick}>
            <CheckBox isClicked={products.length === 0 ? false : isClicked} />
          </S.SelectButtonProvider>
          <S.SelectAllText>{`전체선택(${clickedCount}/${products.length})`}</S.SelectAllText>
        </S.SelectAllBox>

        <S.GrayBar />

        <S.DeleteButton>선택삭제</S.DeleteButton>
      </S.SelectAllContainer>

      <S.MapGrayBar />

      {products.map((product, index) => (
        <S.ProductBox isRemoving={index === removingProductIndex}>
          <CheckProduct
            key={index}
            productImg={product.productImg}
            productName={product.productName}
            productColor={product.productColor}
            productPrice={product.productPrice}
            productPercent={product.productPercent}
            isSale={product.isSale}
            allClick={productClickedStates[index]}
            onClick={(clicked) => handleProductClick(index, clicked)}
            onDelete={() => handleDeleteClick(index)}
          />
          {index < products.length - 1 && <S.MapGrayBar />}
        </S.ProductBox>
      ))}
    </S.Wrapper>
  );
};

export default SelectShoppingCart;