import '@/styles/globals.css'
import Nav from '../components/Header/nav'
// import Footer from '@/components/footer/footer'


export default function App({ Component, pageProps }) {
  return <>
          <Nav />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </>
}
