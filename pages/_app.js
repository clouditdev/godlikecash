import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>GodlikeCash - Прокачай свой CS:GO инвентарь</title>
        <link rel="icon" type="favicon" href="/godlikecash-logo.svg"></link>
      </Head>
      <Component className="flex overflow-hidden" {...pageProps} />
    </SessionProvider>
  )
}
