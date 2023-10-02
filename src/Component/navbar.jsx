import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../assests/logo.png'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  return (
    <>
      <div className='flex flex-row space-x-5 p-10 md:p-0 justify-between md:justify-center items-center bg-white py-7'>
        <img src={Logo} alt="logo" />
        <div className='md:hidden text-2xl ' onClick={()=>setNavbar(!navbar)} >
          {navbar ? <FaTimes /> : <GiHamburgerMenu /> } 
        </div> 
       
        <div className=' hidden md:flex flex-row space-x-5 justify-around items-center bg-white py-7'>
          <li>Products</li>
          <li>About Us</li>
          <li>Videos</li>
          <li>Recipes</li>
          <li>Where to Buy</li>
          <div className='flex flex-row justify-around items-center lg:border-2 py-3 lg:w-80 rounded-lg'>
            <BiSearch className="text-xl mx-3" onClick={()=>setSearchBar(!searchBar)}/>
            <input type="text" placeholder='Search collection, item or user' className="w-full placeholder:text-sm hidden lg:block outline-none" />
          </div>
          <div className=" bg-black white text-white rounded-full text-xl p-3">
            <CgProfile />
          </div>

          <button className=" bg-black white text-white rounded-lg  py-3 px-6"> Sign Up</button>
        </div>
{searchBar && (
          <div className='absolute top-20 bg-white right-0 lg:hidden max-[768px]:hidden flex flex-row justify-around items-center border-2 py-3 px-2 w-80 rounded-lg'>
      
            <input type="text" placeholder='Search collection, item or user' className="w-full placeholder:text-sm block outline-none" />
          </div>
)}

        {navbar &&(
          <div className='md:hidden w-[80%] absolute right-0 top-16'>
            <div className=' flex flex-col space-y-5 px-10 bg-white py-7'>
              <li>Products</li>
              <li>About Us</li>
              <li>Videos</li>
              <li>Recipes</li>
              <li>Where to Buy</li>
              <div className='flex flex-row justify-around items-center border-2 py-3 lg:w-80 rounded-lg'>
                <BiSearch className="text-xl mx-3" />
                <input type="text" name="" id="" placeholder='Search collection, item or user' className="w-full placeholder:text-sm outline-none" />
              </div>
              <div className='flex justify-center items-center'>
                 <div className="w-fit text-center bg-black white text-white rounded-full text-xl p-3">
                <CgProfile />
              </div>
              </div>
              <button className=" bg-black white text-white rounded-lg  py-3 px-6"> Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar