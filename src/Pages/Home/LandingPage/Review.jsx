import React, { useState } from 'react'
import Reviwer from '../../../assests/reviewImg.png'
import Heading2 from '../../../Component/Heading2';
import { reviews } from '../../../Data/Reviews';


const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className=' bg-[#80E2FF]'>
            <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pb-28 md:gap-10'>
                <div className=' max-w-[35.625rem]'>
                    <Heading2 heading="What Our Customer Say" />
                    <div>
                        <p className='mt-7 md:mt-16 mb-8 text-xl italic font-medium'>{reviews[currentIndex].review}</p>
                        <hr className=' border-[#0f6d89]' />
                        <div className=' mt-7 flex max-[400px]:flex-col items-center max-[400px]:justify-center  justify-between'>
                            <div className='max-[400px]:text-center '>
                                <p className=' text-xl font-medium'>{reviews[currentIndex].name}</p>
                                <p>{reviews[currentIndex].age} years of Age</p>
                            </div>
                            <div className='mt-3'>
                                <button className="border border-[#182327] mr-5 max-[400px]:mr-10 rounded-full w-10 h-10" onClick={prevSlide}>
                                    &lt;
                                </button>
                                <button className="border border-[#182327] rounded-full w-10 h-10" onClick={nextSlide}>
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Reviwer} alt="" className='mb-9 w-full md:mb-0 min-[768px]:w-5/12 md:w-full ' />
            </div>
        </section>
    )
}

export default Review


//     < div className = ' max-w-[35.625rem]' >
//                    
//                     

//                     

// {/* <div>

//                         {/* icons */}
// {/* </div> */ }
//                 </div >