import React, { useEffect, useRef } from 'react';
import 'animate.css';
import ScrollReveal from 'scrollreveal';
import sidebar from '../../assets/Left Band 3 (1).png'

import bannerPhoto from '../../assets/80 NEW REVIEWS (1000 × 1000 px) 1.png'
import star from '../../assets/icons8-star-48.png'
import bannerMinipic1 from '../../assets/hero-testimonial-2.jpg (2).png'
import bannerMinipic2 from '../../assets/hero-testimonial-2.jpg (3).png'
import bannerMinipic3 from '../../assets/hero-testimonial-2.jpg (4).png'
import bannerMinipic4 from '../../assets/hero-testimonial-2.jpg (5).png'
import bannerMinipic5 from '../../assets/hero-testimonial-2.jpg (6).png'
import bannerMinipic6 from '../../assets/hero-testimonial-2.jpg (7).png'
import bannerMinipic7 from '../../assets/hero-testimonial-2.jpg (8).png'
import bannerMinipic8 from '../../assets/hero-testimonial-2.jpg (9).png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HomeBanner = () => {

   



  
    return (
    <div>
          <div  className='lg:flex lg:flex-row-reverse  justify-center mt-14' >

<div className='relative '>

    <img className='lg:w-[510px] lg:h-[514px] h-[251px] w-[250px] mx-auto '  src={bannerPhoto} alt="" />



    <div  data-aos="fade-up-left" className="h-[500px]  hidden lg:block carousel w-[450px] top-20 left-44 absolute carousel-vertical rounded-box">
<div className="carousel-item h-full grid ">
<div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic1} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>AHAN </small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Refreshing</p>
               <small className='headerText text-[rgb(70,70,98)]'>Keeps water ice-cold all day. A must-have for refreshing hydratio</small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic2} alt="" />
              <p className='pt-4'>  <small  className='text-center  text-xs   text-[rgb(116,116,137)]'>AANYA</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Adventure-ready</p>
               <small className='headerText   text-[rgb(70,70,98)]'>Keeps water ice-cold all day. A must-have for refreshing hydratio</small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-11 rounded-full' src={bannerMinipic3} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>ROHAN.S</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Sleek and Insulated</p>
               <small className='headerText text-[rgb(70,70,98)]'> Sleek design, excellent insulation, a must-have!Stylish and functional </small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic4} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>RIYA.K</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'> Portable and reliable.</p>
               <small className='headerText text-[rgb(70,70,98)]'>Fits in bag, keeps drink hot for hours...Portable and reliable.</small>

            </div>
        </div>
    
</div> 
<div className="carousel-item h-full  grid ">
<div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic5} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'> Yash T.</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Summer Savior</p>
               <small className='headerText text-[rgb(70,70,98)]'> Stays cold for hours Perfect for hot summers </small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-14 rounded-full' src={bannerMinipic6} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>PRIYA </small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Rugged Warrior</p>
               <small className='headerText text-[rgb(70,70,98)]'>Keeps water ice-cold all day. A must-have for refreshing hydratio</small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic7} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>ARJUN</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>Practical Elegance</p>
               <small className='headerText text-[rgb(70,70,98)]'>Sleek and practical design! Keeps beverages at the right temperature.</small>

            </div>
        </div>
        <div   className=' flex w-[370px]    child    bg-white rounded-xl shadow-md shadow-gray-400'>
            <div className='my-auto mx-2'>
                <img className=' w-12 rounded-full' src={bannerMinipic8} alt="" />
              <p className='pt-4'>  <small className='text-center  text-xs  text-[rgb(116,116,137)]'>ROHAN.S</small></p>
            </div>
            <div className='ms-2'>
               <div className='flex w-4'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
               <p className='font-bold tracking-wide text-gray-900 headerText'>On-the-go Essential</p>
               <small className='headerText text-[rgb(70,70,98)]'>Compact and efficient.Ideal for on-the-go hydration</small>

            </div>
        </div>
</div> 

</div>
   




</div>
<div  data-aos="fade-up" className='my-auto mx-5 px-10' >
    <p style={{fontWeight:"700"}} className='text-gray-900 lg:text-5xl 
     tracking-tight  my-component  text-3xl mt-16 lg:leading-normal'>Maximise Visibility through <br /> Customer <span className='text-[rgb(251,188,29)]'>Reviews.</span></p>
    <p  className=' mt-4 mb-7  text-[rgb(70,70,98)] headerText'>Unlock the Power of Product Reviews and Drive Your Sales to New  Heights</p>
    <div className='flex gap-4'>
        <button className='bg-[rgb(251,188,29)] rounded-xl px-3 py-2 font-medium '>Call us Now</button>
        <button className='border px-3 font-medium border-gray-900 rounded-xl py-2'>Schedule a Meeting</button>
    </div>
</div>
</div>
{/* <img className='w-full h-117px' src={sidebar} alt="" /> */}
    </div>
    );
};

export default HomeBanner;