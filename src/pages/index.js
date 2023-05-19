
import Nav from "../components/header/nav" ;


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div>
        <Nav />
        <h1>Welcome to the Home page</h1>
      </div>
    </main>
  )
}
