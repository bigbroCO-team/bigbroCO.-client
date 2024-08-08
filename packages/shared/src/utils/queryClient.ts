import { QueryClient } from '@tanstack/react-query';

export const bigbroQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 300000, // 5분
      gcTime: 300000,
    },
  },
});

export const invalidateQueries = (query: string[]) => {
  bigbroQueryClient.invalidateQueries({ queryKey: query });
};
