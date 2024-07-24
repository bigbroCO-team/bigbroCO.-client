'use client';

import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle, theme } from 'shared/styles';
import 'react-toastify/dist/ReactToastify.css';
import { bigbroQueryClient } from 'shared/utils';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => bigbroQueryClient);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyle />
        <ToastContainer theme='dark' />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Provider;
