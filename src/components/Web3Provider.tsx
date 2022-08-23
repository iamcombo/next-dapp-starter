import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { createClient, WagmiConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

interface Props {
  children?: ReactNode 
}

const client = createClient(
  getDefaultClient({
    appName: 'NEXT-DAPP',
    autoConnect: true,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
  })
);

const Web3Provider = ({children}: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
    </WagmiConfig>
  )
}

export default Web3Provider;