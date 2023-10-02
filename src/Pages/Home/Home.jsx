import React from 'react'
import Hero from './LandingPage/Hero'
import BestChip from './LandingPage/BestChip'
import FindBest from './LandingPage/FindBest'
import PopularCrispy from './LandingPage/PopularCrispy'
import Review from './LandingPage/Review'
import Cat from './LandingPage/CAT'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestChip />
      <FindBest />
      <PopularCrispy />
      <Review />
      <Cat />
    </div>
  )
}

export default Home