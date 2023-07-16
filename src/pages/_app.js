import '@/styles/globals.css'
import Nav from '@/components/header/nav'
// import Footer from '@/components/footer/footer'


export default function App({ Component, pageProps }) {
  return <>
          <Nav />
          <Component {...pageProps} />
        </>
}
