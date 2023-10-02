import React from 'react'
import { BestProducts } from '../../../Data/BestProducts'
import StarRating from '../../../Component/Rating'
import Heading2 from '../../../Component/Heading2'

const FindBest = () => {

  return (
    <section>
      <div className=' text-center flex flex-col items-center mb-16'>
        <Heading2 heading="Find Best Taste Here" paragraph="Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel"/>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-7 space-x-5 justify-center items-center'>
        {BestProducts.map(({ price, title, id, rating, prodImg }) => {
          return (
            <div key={id} className='flex flex-col justify-center '>
              <img src={prodImg} alt="" />
              <div>
                <p className='text-[1.375rem] font-bold'>${price}</p>
                <p className='text-grey'>{title}</p>
               <StarRating rating={rating}/>
              </div>
            </div>
          )

        })}
      </div>
   



    </section>
  )
}

export default FindBest