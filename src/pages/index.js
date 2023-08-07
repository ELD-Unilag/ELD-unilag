import FlipCards from '@/components/Home/Card/Cards';
import Gallery from '@/components/Home/Gallery/Gallery';
import HomeWCW from '@/components/Home/HomeWCW';
import React from 'react'

const Home = () => {
  return (
    <main className={``}>
      <div>
        <HomeWCW/>
      </div>
      <FlipCards />
      <Gallery />
    </main>
  )
}

export default Home;

