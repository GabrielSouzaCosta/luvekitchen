import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import Container from './_container';
import { ContextProvider } from '../context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

const REFETCH_DATA_AFTER_ONE_DAY = 86400;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime: REFETCH_DATA_AFTER_ONE_DAY,
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container {...pageProps} Component={Component} />
        </ThemeProvider>
      </ContextProvider>
    </QueryClientProvider>
  )
}
