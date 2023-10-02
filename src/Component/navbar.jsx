import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Logo from '../assests/logo.png'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <div className='flex flex-row space-x-5 p-10 md:p-0 justify-between md:justify-center items-center bg-white py-7'>
        <img src={Logo} alt="logo" />
        <AiOutlineMenuUnfold onClick={()=>setNavbar(!navbar)} className='md:hidden' />
        <div className=' hidden md:flex flex-row space-x-5 justify-around items-center bg-white py-7'>
          <li>Products</li>
          <li>About Us</li>
          <li>Videos</li>
          <li>Recipes</li>
          <li>Where to Buy</li>
          <div className='flex flex-row justify-around items-center lg:border-2 py-3 lg:w-80 rounded-lg'>
            <BiSearch className="text-xl mx-3" />
            <input type="text" name="" id="" placeholder='Search collection, item or user' className="w-full placeholder:text-sm hidden lg:block" />
          </div>
          <div className=" bg-black white text-white rounded-full text-xl p-3">
            <CgProfile />
          </div>

          <button className=" bg-black white text-white rounded-lg  py-3 px-6"> Sign Up</button>
        </div>
        {navbar &&(
          <div>people</div>
        )}
      </div>
    </>
  )
}

export default Navbar