import React, { useState } from 'react';

const Carousel = ({ details }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % details.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? details.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>
                &lt;
            </button>
            <div className=' max-w-[35.625rem]'>
                <p> {details[currentIndex].review}</p>
                 <hr className='bg-[#0e7797]' />
                 <div>
                                 <p className='mt-16 mb-12 text-xl italic'>{details[currentIndex].name}</p>
                    <p className='mt-16 mb-12 text-xl italic'>{details[currentIndex].age}</p>
                 </div>
   

            </div>

            {/* alt={`Slide ${currentIndex + 1}`} /> */}
            <button className="next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
