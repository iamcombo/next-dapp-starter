import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import 'antd/dist/antd.variable.min.css';
import Web3Provider from '../components/Web3Provider';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <ThemeProvider>
      <Web3Provider>
        <Header />
        <Component {...pageProps} />
      </Web3Provider>
    </ThemeProvider>
  ) 
}

export default MyApp
