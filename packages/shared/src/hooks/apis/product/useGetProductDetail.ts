import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { get, productQueryKeys, productUrl } from 'shared/libs';
import { ProductType } from 'shared/types';

export const useGetProductDetail = (
  id: number,
  options?: Omit<UseQueryOptions<ProductType, AxiosError>, 'queryKey'>
) =>
  useQuery({
    queryKey: productQueryKeys.getProductDetailById(id),
    queryFn: () => get<ProductType>(productUrl.getProductDetailById(id)),
    ...options,
  });
