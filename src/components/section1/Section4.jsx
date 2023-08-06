import React from 'react';
import mans from '../../assets/3d-fluency-three-men.png'
import star from '../../assets/icons8-star-48.png'
import rocket from '../../assets/3d-fluency-launch.png'
import percetn from '../../assets/3d-fluency-discount (1).png'
import arrow from '../../assets/arrow-narrow-up-right.png'

const Section4 = () => {
    return (
        <div  className='grid lg:grid-cols-2  justify-items-center mt-5 lg:mt-10'>
                      <p style={{fontWeight:"700"}} className='text-black lg:text-5xl 
     tracking-tight text-medium  lg:hidden   detailFont text-3xl  '>Numbers Speak Louder</p>
      <p className='text-black lg:ms-8 ms-5 py-5 lg:hidden'>Our proven track record is not just a claim but delivered with evidence</p>
              <div  className=' lg:hidden md:hidden'>
               <div className='grid lg:grid-cols-2 lg:mb-16  '>
               <div className='my-4 lg:my-0'>
<div className='flex '><img className='w-10 ' src={rocket } alt="" /> <p className='text-3xl font-bold'>350 +</p></div>
<p className='ms-10' >Product Launches</p>
                </div> 
                <div className='my-4 lg:my-0'>
<div className='flex'><img className='w-10 ' src={mans } alt="" /> <p className='text-3xl font-bold'>37 K</p></div>
<p  className='ms-10'> Potential Reviewers all across India</p>
                </div>
               </div>
            <div className='grid lg:grid-cols-2 lg:mb-16 '>
            <div className='my-4 lg:my-0'>
<div className='flex'><img className='w-10 ' src={star } alt="" /> <p className='text-3xl font-bold'>20 K</p></div>
<p  className='ms-10'> Customer Reviews Published</p>
                </div>
                <div className='my-4 lg:my-0'>
<div className='flex'><img className='w-10 ' src={percetn } alt="" /> <p className='text-3xl font-bold'>90 %</p></div>
<p  className='ms-10'> Customer Reviews get published</p>
                </div>
            </div>

            </div>
          <div data-aos="fade-up"
     data-aos-duration="1000">
          <p style={{fontWeight:"700"}} className='text-black lg:text-4xl 
     tracking-tight text-medium   detailFont text-3xl hidden lg:block '>Empowering Brands with <br /> Reviews</p>
     <p className='text-black lg:ms-8 ms-5 py-5'>Unveiling Our Remarkable Achievements</p>
     <div className='lg:flex'>
<div className='grid lg:grid-cols-2 justify-items-center gap-5 lg:gap-2 '>
<div className='grid justify-items-center shadow-md shadow-gray-400  bg-[rgb(52,141,219)] h-12   w-[336px] lg:w-[151px] mx-auto text-center rounded-2xl lg:rounded-3xl px-3 py-2 font-medium '>  <div>
<button className=' flex  pt-1 ps-2'>Call us Now <img className='   w-8 p-1 py-auto' src={arrow} alt="" /></button ></div> </div>
     <div className='h-12 shadow-md shadow-gray-400  w-[320px]   lg:w-40 border-2 text-center font-medium border-gray-900  rounded-2xl py-2   '>
     Schedule a Meeting
     </div>
    </div>
</div>
            </div>  
            <div data-aos="zoom-in" className='px-10 hidden lg:block'>
               <div className='grid grid-cols-2 mb-16  '>
               <div>
<div className='flex'><img className='w-10 ' src={rocket } alt="" /> <p className='text-3xl font-bold'>350 +</p></div>
<p className='ms-10' >Product Launches</p>
                </div> 
                <div>
<div className='flex'><img className='w-10 ' src={mans } alt="" /> <p className='text-3xl font-bold'>37 K</p></div>
<p  className='ms-10'> Potential Reviewers all across India</p>
                </div>
               </div>
            <div className='grid grid-cols-2 mb-16 '>
            <div>
<div className='flex'><img className='w-10 ' src={star } alt="" /> <p className='text-3xl font-bold'>20 K</p></div>
<p  className='ms-10'> Customer Reviews Published</p>
                </div>
                <div>
<div className='flex'><img className='w-10 ' src={percetn } alt="" /> <p className='text-3xl font-bold'>90 %</p></div>
<p  className='ms-10'> Customer Reviews get published</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Section4;