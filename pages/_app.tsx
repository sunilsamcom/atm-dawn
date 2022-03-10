import '../styles/global.css'
import {AppProps} from "next/app";

export default MyApp

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
