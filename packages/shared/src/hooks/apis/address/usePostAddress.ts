import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addressQueryKeys, addressUrl, post } from 'shared/libs';
import { AddAddressFormType } from 'shared/types';

export const usePostAddress = (
  options?: UseMutationOptions<unknown, AxiosError, AddAddressFormType>
) =>
  useMutation({
    mutationKey: addressQueryKeys.postAddress(),
    mutationFn: (data) => post(addressUrl.postAddress(), data),
    ...options,
  });
