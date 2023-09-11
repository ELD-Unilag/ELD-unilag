import '@/styles/globals.css'
import Nav from '@/components/Layout/Header/nav'
import Footer from '@/components/Layout/Footer/footer'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {
  // simple function to not include the nav and footer components if the admin is part of the page pathname
  const router = useRouter()
  const pathname = router.pathname
  const check = '/admin'
  const layout = pathname.includes(check, 0)
  return <>
         { !layout && <Nav /> }
          <Component {...pageProps} />
         { !layout && <Footer />}
        </>
}
