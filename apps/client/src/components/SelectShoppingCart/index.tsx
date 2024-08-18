import * as S from './style';
import { CheckBox } from 'client/assets';
import { useEffect, useState } from 'react';
import { ShoppingModal } from '../Modal';
import CheckProduct from '../CheckProduct';

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
  const [productClickedStates, setProductClickedStates] = useState<boolean[]>(
    initialProducts.map(() => false)
  );
  const [removingProductIndex, setRemovingProductIndex] = useState<number[]>(
    []
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteClick, setDeleteClick] = useState<boolean>(false);

  useEffect(() => {
    if (deleteClick) {
      handleDeleteSelectedProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteClick]);

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
    setRemovingProductIndex([index]);
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
      setRemovingProductIndex([]);
    }, 300);
  };

  const handleDeleteSelectedProducts = () => {
    const indicesToRemove = productClickedStates
      .map((clicked, index) => (clicked ? index : -1))
      .filter((index) => index !== -1);

    setRemovingProductIndex(indicesToRemove);

    setTimeout(() => {
      const newProducts = products.filter(
        (_, index) => !productClickedStates[index]
      );
      const newProductClickedStates = productClickedStates.filter(
        (state) => !state
      );

      setProducts(newProducts);
      setProductClickedStates(newProductClickedStates);

      const newClickedCount = newProductClickedStates.filter(Boolean).length;
      setClickedCount(newClickedCount);
      setIsClicked(newClickedCount === newProducts.length);
      setDeleteClick(false);
      setOpenModal(false);
      setRemovingProductIndex([]);
    }, 300);
  };

  return (
    <>
      {clickedCount !== 0 && openModal === true && (
        <ShoppingModal
          selectedCount={clickedCount}
          closeModal={() => setOpenModal(false)}
          deleteClick={() => setDeleteClick(false)}
          setDeleteClick={setDeleteClick}
        />
      )}
      <S.Wrapper>
        <S.SelectAllContainer>
          <S.SelectAllBox>
            <S.SelectButtonProvider onClick={handleAllClick}>
              <CheckBox isClicked={products.length === 0 ? false : isClicked} />
            </S.SelectButtonProvider>
            <S.SelectAllText>{`전체선택(${clickedCount}/${products.length})`}</S.SelectAllText>
          </S.SelectAllBox>

          <S.GrayBar />

          <S.DeleteButton
            onClick={() => {
              clickedCount !== 0 && setOpenModal(true);
              setDeleteClick(false);
            }}
          >
            선택삭제
          </S.DeleteButton>
        </S.SelectAllContainer>

        <S.MapGrayBar />

        {products.map((product, index) => (
          <S.ProductBox
            key={index}
            isRemoving={removingProductIndex.includes(index)}
          >
            <CheckProduct
              {...product}
              allClick={productClickedStates[index]}
              onClick={(clicked) => handleProductClick(index, clicked)}
              onDelete={() => handleDeleteClick(index)}
            />
            {index < products.length - 1 && <S.MapGrayBar />}
          </S.ProductBox>
        ))}
      </S.Wrapper>
    </>
  );
};

export default SelectShoppingCart;
