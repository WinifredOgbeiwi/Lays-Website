import React from 'react'
import HeroImg from '../../../assests/hero-img.png'
import Lays from '../../../assests/lays-on-plate.png'
import Button from '../../../Component/Button'

function Hero() {
  return (
    <main className='bg-gradient  flex flex-col-reverse md:flex-row items-center overflow-hidden px-4 md:pl-[135px] pb-[55px] md:pb-0 '>
<div className='mt-16'>
        <h1 className='leading-tight text-3xl sm:text-5xl md:text-6xl font-semibold font-hero'>Feel the Best 
          <div>Taste With Lays</div>
          <div>Crisps<img src={Lays} alt="lays on plate" className=' inline w-14 md:w-fit'/></div></h1>
        <p className='leading-8 mt-5 mb-10 text-xl max-w-[570px]'>Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel the wonder taste of this awesome product.</p>
        <Button text="All Crisps"/>
</div>


      <div className=''>
        <img src={HeroImg} alt="hero" className=' w-full '/>
</div>
      </main>
  )
}

export default Hero