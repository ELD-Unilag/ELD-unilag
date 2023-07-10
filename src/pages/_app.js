import '@/styles/globals.css'
import Nav from '@/components/header/nav'
export default function App({ Component, pageProps }) {
  return <>
          <Nav />
          <Component {...pageProps} />
        </>
}
