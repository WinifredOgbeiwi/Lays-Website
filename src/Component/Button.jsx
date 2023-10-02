import React from 'react'

function Button(props) {
  return (
    <button className=" bg-black white sm:text-xl md:text-base text-white rounded-lg  py-5 px-10 md:py-3 md:px-6">{props.text}</button>
  )
}

export default Button