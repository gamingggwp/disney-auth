import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles.css'
import {SessionProvider} from "next-auth/react"
// import styled from 'styled-components';

function MyApp({ Component, pageProps:{ session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider
      session={session}
      // basePath="cool-app"
      // refetchInterval={5*60}
      // refetchOnWindowFocus={true}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
