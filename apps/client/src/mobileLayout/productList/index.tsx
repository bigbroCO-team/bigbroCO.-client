'use client';

import { BrandType, ProductType } from 'shared/types';
import * as S from './style';
import { MobileHeader } from 'shared';
import { useRouter } from 'next/navigation';
import { ProductItem } from 'client/components';

interface ProductListMobileLayoutProps {
  brand: BrandType;
  productList: ProductType[] | undefined;
}

const ProductListMobileLayout: React.FC<ProductListMobileLayoutProps> = ({
  brand,
  productList,
}) => {
  const { push } = useRouter();

  return (
    <S.Container>
      <MobileHeader logo={brand} handleBackButtonClick={() => push('/')} />
      <S.ProductContainer>
        {productList &&
          productList.map(({ id, name, price, images, discount }) => (
            <ProductItem
              id={id}
              key={id}
              productImgUrl={images[0].url}
              discountPercent={discount}
              price={price}
              name={name}
            />
          ))}
      </S.ProductContainer>
    </S.Container>
  );
};

export default ProductListMobileLayout;
