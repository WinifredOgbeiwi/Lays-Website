import React from 'react'
import Hero from './LandingPage/Hero'
import BestChip from './LandingPage/BestChip'
import FindBest from './LandingPage/FindBest'
import Review from './LandingPage/Review'
import Cat from './LandingPage/CAT'
import Word from './LandingPage/Word'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestChip />
      <FindBest />
      <Review />
      <Cat />
      <Word/>
    </div>
  )
}

export default Home