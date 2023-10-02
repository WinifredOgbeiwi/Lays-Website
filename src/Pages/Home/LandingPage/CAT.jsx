import React from 'react'
import Heading2 from '../../../Component/Heading2'
import Button from '../../../Component/Button'
import BG from '../../../assests/bg-cat.png'
function Cat() {
    return (
        <section className='bg-[#FFD36A]'>
            <div
            style={{backgroundImage:`url(${BG})`, backgroundSize:'cover'}}
                className='flex flex-col justify-center items-center text-[#182327] pb-24'>
                    <div className=' w-full md:w-[470px] text-center'>
             <Heading2 heading={'Find a Crisps Store Near You'} />
                <p className='mt-[18px] mb-[38px]'>Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel.</p>
                <Button text={"Find Store"} />
                    </div>
   

            </div>
        </section>
    )
}

export default Cat