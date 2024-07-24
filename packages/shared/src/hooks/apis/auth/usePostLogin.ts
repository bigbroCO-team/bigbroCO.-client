import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { authQueryKeys, authUrl, post } from 'shared/libs';
import { LoginType } from 'shared/types';

interface ReturnDataType {
  refresh: string;
  access: string;
}

export const usePostLogin = (
  options?: UseMutationOptions<ReturnDataType, AxiosError, LoginType>
) =>
  useMutation({
    mutationKey: authQueryKeys.postLogin(),
    mutationFn: (data: LoginType) =>
      post<ReturnDataType>(authUrl.postLogin(), data),
    ...options,
  });
