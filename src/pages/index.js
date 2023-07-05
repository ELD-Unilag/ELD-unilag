
import Nav from "../components/header/nav" ;
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className={` min-h-screen flex-col items-center justify-between p-24`}>
      <div>
        <Nav />
        <Footer/>
      </div>
    </main>
  )
}
