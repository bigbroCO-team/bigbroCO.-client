import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { cartQueryKeys, get, cartUrl } from 'shared/libs';
import { ProductItem } from 'shared/types';

export const useGetCartInfo = (
  options?: Omit<UseQueryOptions<ProductItem[] | null, AxiosError>, 'queryKey'>
) =>
  useQuery({
    queryKey: cartQueryKeys.getCartInfo(),
    queryFn: () => get<ProductItem[]>(cartUrl.getCartInfo()),
    ...options,
  });
