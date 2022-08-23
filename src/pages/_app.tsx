import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import 'antd/dist/antd.variable.min.css';
import Web3Provider from '../components/Web3Provider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <ThemeProvider attribute='class'>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ThemeProvider>
  ) 
}

export default MyApp
