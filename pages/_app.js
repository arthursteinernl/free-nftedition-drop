import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
  sdkOptions={{
    gasless: {
      openzeppelin: {
        relayerUrl: process.env.NEXT_PUBLIC_OPENZEPPELIN_URL,
      },
    },
  }}
    desiredChainId={activeChainId}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
