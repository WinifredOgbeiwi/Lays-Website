import React from 'react'
import BestImg from '../../../assests/best-img.png'
import Button from '../../../Component/Button'
import Chips from '../../../assests/chips.png'
import StarRating from '../../../Component/Rating'

function BestChip() {
    return (
        <section className='relative w-full py-[100px]'>
            <h2 className='font-hero text-[30px] sm:text-4xl mb-[70px]'>We Provide the Tasty and<br /> best Chips for you!</h2>
            <img src={Chips} alt="chips" className=' absolute right-0  md:top-64 top-48 w-20 md:w-3/12' />

            <div className=' flex flex-col md:flex-row md:gap-16 xl:gap-32 items-center'>
                <img src={BestImg} alt="" className=' md:w-7/12' />
                <div className='mt-[38.56px] md:mt-24'>
                    <h4 className=' text-2xl font-extrabold'>LAY'S® BLT Flavored</h4>
                    <StarRating rating={5} />
                    <p className=' text-grey font-thin mb-[10px]'>Price</p>
                    <p className=' text-[1.375rem] font-extrabold'>$ 3.93</p>
                    <p className='text-grey mt-5 max-w-[29rem]'>It all starts with farm-grown potatoes, cooked and seasoned to perfection. Then we add the sweet taste of honey and the spicy kick of BBQ sauce. So every LAY'S potato chip is perfectly crispy and delicious. Happiness in Every Bite.</p>
                    <div className='mt-10 flex items-center space-x-6'>
                        <Button text="Buy Now" />
                        <p className=' font-bold text-xl'>See More&nbsp;&gt;</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BestChip