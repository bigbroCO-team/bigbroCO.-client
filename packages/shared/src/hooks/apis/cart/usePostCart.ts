import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { cartQueryKeys, cartUrl, post } from 'shared/libs';
import { PostCartType } from 'shared/types';

export const usePostCart = (
  options?: UseMutationOptions<unknown, AxiosError, PostCartType[]>
) =>
  useMutation({
    mutationKey: cartQueryKeys.postCart(),
    mutationFn: (data: PostCartType[]) => post(cartUrl.postCart(), data),
    ...options,
  });
