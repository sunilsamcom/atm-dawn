import '@app/styles/global.css'
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react"
export default MyApp

function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return <>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps}/>
    </SessionProvider>
  </>

}
