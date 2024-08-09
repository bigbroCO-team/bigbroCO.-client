import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addressQueryKeys, addressUrl, get } from 'shared/libs';
import { AddressDataType } from 'shared/types';

export const useGetAddress = (
  options?: Omit<
    UseQueryOptions<AddressDataType[] | null, AxiosError>,
    'queryKey'
  >
) =>
  useQuery({
    queryKey: addressQueryKeys.getAddress(),
    queryFn: () => get<AddressDataType[]>(addressUrl.getAddress()),
    ...options,
  });
