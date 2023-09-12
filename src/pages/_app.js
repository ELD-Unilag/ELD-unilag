import '@/styles/globals.css'
import Nav from '@/components/Layout/Header/nav'
import Footer from '@/components/Layout/Footer/footer'
import { useRouter } from 'next/router'
import localFont from 'next/font/local'


const satoshi = localFont({
  src: [
    {
      path: '../../public/font/Satoshi-Variable.ttf',
      weight: '400'
    }
  ],
  variable: '--font-satoshi'
})
const Grotely = localFont({
  src: [
    {
      path: '../../public/font/GrotleyRegular-mLEWv.otf',
      weight: '400'
    }
  ],
  variable: '--font-Grotely'
})


export default function App({ Component, pageProps }) {
  // simple function to not include the nav and footer components if the admin is part of the page pathname
  const router = useRouter()
  const pathname = router.pathname
  const check = '/admin'
  const layout = pathname.includes(check, 0)
  return <main className={`${satoshi.variable} ${Grotely.variable}`}>
         { !layout && <Nav /> }
          <Component {...pageProps} />
         { !layout && <Footer />}
        </main>
}
