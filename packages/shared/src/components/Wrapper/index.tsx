import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from 'shared/styles';

interface Props {
  readonly children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Wrapper;
