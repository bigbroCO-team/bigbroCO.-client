import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addressQueryKeys, addressUrl, del } from 'shared/libs';

export const useDeleteAddress = (
  id: number,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: addressQueryKeys.deleteAddress(id),
    mutationFn: () => del(addressUrl.deleteAddress(id)),
    ...options,
  });
