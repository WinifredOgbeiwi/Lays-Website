import React from 'react'

function Heading2(props) {
  return (
    <>
      <h2 className=' leading-tight font-extrabold text-center max-[400px]:text-start text-[2.625rem]'>{props.heading}</h2>
      <p className=' text-grey text-[18px] max-w-xl text-center mt-4'>{props.paragraph}</p>
    </>

  )
}

export default Heading2