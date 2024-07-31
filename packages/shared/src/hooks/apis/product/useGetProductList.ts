import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { get, productQueryKeys, productUrl } from 'shared/libs';
import { BrandType, ProductType } from 'shared/types';

export const useGetProductList = (
  query: BrandType,
  options?: Omit<UseQueryOptions<ProductType[], AxiosError>, 'queryKey'>
) =>
  useQuery({
    queryKey: productQueryKeys.getProductListByQuery(query),
    queryFn: () => get<ProductType[]>(productUrl.getProductListByQuery(query)),
    ...options,
  });
