import '@/styles/globals.css';
import AppWrapper from '@/components/AppWrapper';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
