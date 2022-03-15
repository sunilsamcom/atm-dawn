import '../styles/global.css'
import { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react"

export default MyApp

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )

}
