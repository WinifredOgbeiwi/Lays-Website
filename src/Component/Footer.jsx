import React from 'react'
import Footer_img from '../assests/footer.png'
import Logo from '../assests/logo.png'
import { TfiFacebook, TfiTwitterAlt } from 'react-icons/tfi'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-gradient-footer flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden px-4 md:pl-[135px] pb-[55px] md:pb-0'>
      <div>
        <img src={Logo} alt="" />
        <ul className='flex space-x-10 my-6 max-[550px]:flex-col max-[550px]:space-x-0 max-[550px]:space-y-4'>
          <li>Products</li>
          <li>About Us</li>
          <li>Videos</li>
          <li>Recipes</li>
          <li>Where to Buy</li>
        </ul>
        <h5 className='text-xl font-extrabold'>Follow Us</h5>
        <div className='flex space-x-4 mt-4 mb-10'>
          <div className='bg-black text-white rounded-full w-8 h-8 flex items-center justify-center'>
            <TfiFacebook />
          </div>

          <div className='bg-black text-white rounded-full w-8 h-8 flex items-center justify-center'>
            <AiFillInstagram />
          </div>
          <div  className='bg-black text-white rounded-full w-8 h-8 flex items-center justify-center'>
            <TfiTwitterAlt />
          </div>
          <div className='bg-black text-white rounded-full w-8 h-8 flex items-center justify-center'><AiFillYoutube /></div>
        </div>
        <p>Copyright © 2022 UIHUT all rights reserved.</p>
      </div>
      <div><img src={Footer_img} alt="" /></div>
    </footer>
  )
}

export default Footer