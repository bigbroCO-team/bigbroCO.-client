import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { authQueryKeys, authUrl, get } from 'shared/libs';
import { VerifyType } from 'shared/types';

export const useGetVerify = (
  options?: Omit<UseQueryOptions<VerifyType | null, AxiosError>, 'queryKey'>
) =>
  useQuery({
    queryKey: authQueryKeys.getVerify(),
    queryFn: () => get<VerifyType>(authUrl.postVerify()),
    ...options,
  });
