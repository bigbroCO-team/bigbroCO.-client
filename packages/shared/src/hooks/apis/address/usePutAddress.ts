import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addressQueryKeys, addressUrl, put } from 'shared/libs';
import { AddAddressFormType } from 'client/types';

interface MutateFunctionArgsType {
  id: number;
  body: AddAddressFormType;
}

export const usePutAddress = (
  options?: UseMutationOptions<unknown, AxiosError, MutateFunctionArgsType>
) =>
  useMutation({
    mutationKey: addressQueryKeys.putAddress(),
    mutationFn: ({ id, body }) => put(addressUrl.putAddress(id), body),
    ...options,
  });
