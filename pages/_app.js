import '../styles/globals.css'
import { RobinhoodProvider } from '../context/RobinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {


  return (
    <MoralisProvider
      serverUrl='https://fhr72nbvtx1m.usemoralis.com:2053/server'
      appId='B8Cr0w3D7xtfePOwpQWuiwsMGH47IcVHxgTMcrUa'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
