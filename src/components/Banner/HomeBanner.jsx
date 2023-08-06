import React, { useEffect, useRef } from 'react';
import 'animate.css';
import Marquee from "react-fast-marquee";

import bannerPhoto from '../../assets/bannerfirst.jpg'
import bannerPhoto2 from '../../assets/80 NEW REVIEWS (1000 × 1000 px) 1.png'
import star from '../../assets/icons8-star-48.png'
import bannerMinipic1 from '../../assets/hero-testimonial-2.jpg (2).png'
import bannerMinipic2 from '../../assets/hero-testimonial-2.jpg (3).png'
import bannerMinipic3 from '../../assets/hero-testimonial-2.jpg (4).png'
import bannerMinipic4 from '../../assets/hero-testimonial-2.jpg (5).png'
import bannerMinipic5 from '../../assets/hero-testimonial-2.jpg (6).png'
import bannerMinipic6 from '../../assets/hero-testimonial-2.jpg (7).png'
import bannerMinipic7 from '../../assets/hero-testimonial-2.jpg (8).png'
import bannerMinipic8 from '../../assets/hero-testimonial-2.jpg (9).png'
import amazon from '../../assets/amazon.png'
import amazon3 from '../../assets/Screenshot 2023-05-30 105535.png'
import amazon4 from '../../assets/Screenshot 2023-05-30 105754.png'
import amazon2 from '../../assets/d2023-05-30 110011.png'
import arrow from '../../assets/arrow-narrow-up-right.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const HomeBanner = () => {

   



  
    return (
    <div>
      <div className='relative'>
          <div  className='lg:flex lg:flex-row-reverse relative   justify-center mt-14   z-10' >

<div className='relative group '>
<p className='absolute  top-6 text-white  lg:text-2xl  font-semibold detailFont tracking-wider left-16 lg:left-9'>80 NEW REVIEWS </p>
  
<img className=' lg:w-[510px] lg:h-[514px] duration-500 h-[320px] group-hover:opacity-0 opacity-100 w-[300] mx-auto  rounded-3xl object-cover '  src={bannerPhoto} alt="" />
<img className='lg:w-[510px] lg:h-[514px] h-[320px]  absolute top-0 z-0 w-[300] mx-auto  rounded-3xl object-cover  opacity-0 group-hover:opacity-100 duration-500'  src={bannerPhoto2} alt="" />

<div className='lg:hidden  mobile  '>
<div   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
 
    data-aos="fade-up-left" className="h-[500px]   carousel w-[375px] -top-[400px] left-[100px] absolute carousel-vertical rounded-box">
<div className="carousel-item h-full grid ">
<div   className=' flex w-[370px]  child    bg-white rounded-xl shadow-md shadow-gray-400'>
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
               <small className='headerText   text-[rgb(70,70,98)]'>Durable, leak-proof, perfect for adventures 
Ideal for outdoor activities</small>

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
<div   
 data-aos-offset="200"
 data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
  data-aos="fade-up-left" className="h-[500px] hidden lg:block   carousel w-[450px] top-10 lg:top-20 left-44 absolute carousel-vertical rounded-box">
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
               <small className='headerText   text-[rgb(70,70,98)]'>Durable, leak-proof, perfect for adventures 
Ideal for outdoor activities</small>

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
<div  className='lg:mt-14 mt-20 lg:pe-20 ' >
    <p  data-aos="fade-right" style={{fontWeight:"700"}} className='text-gray-900 lg:text-5xl 
     tracking-tight  detailFont  text-3xl mt-0 lg:leading-normal mx-5 lg:mx-0'>Maximise Visibility through <br /> Customer <span className='text-[rgb(52,141,219)]'>Reviews.</span></p>
    <p  data-aos="fade-right"  className=' mt-4 mb-7  text-[rgb(70,70,98)] headerText mx-5 lg:mx-0'>Unlock the Power of Product Reviews and Drive Your Sales to New  Heights</p>

    <div className='lg:flex'>
<div className='grid lg:grid-cols-2 justify-items-center gap-5 lg:gap-2 '>
<div className='grid justify-items-center  shadow-lg shadow-gray-300  hover:text-white duration-200 bg-[rgb(52,141,219)]  h-12   w-[336px] lg:w-[151px] mx-auto text-center rounded-2xl lg:rounded-3xl px-3 py-2 font-medium '>  <div>
<button className=' flex pt-1 shadow-md ps-2'>Call us Now <img className='   w-8 p-1 py-auto' src={arrow} alt="" /></button ></div> </div>
    <Link to='/meeting'> <div className='h-12  w-[320px]   duration-200 shadow-md shadow-gray-300 lg:w-40 border-2 text-center font-medium border-gray-900  rounded-2xl py-2   '>
     Schedule a Meeting
     </div></Link>
    </div>
</div>

 
</div>
</div>
<div className='bg-[rgb(52,141,219)] lg:h-[40px] h-[20px] -rotate-2 w-full absolute top-[150px] lg:top-[480px]'>

</div>
<div className=' bg-[rgb(233,241,253)]  lg:h-[40px] h-[20px]  -rotate-2 w-full absolute top-[170px] lg:top-[520px]'>
{/* <div className='bg-[rgb(52,141,219)] lg:h-[40px] h-[20px]  -rotate-2 w-full absolute top-[170px] lg:top-[520px]'> */}

</div>
    </div>
    {/* <div className='grid lg:grid-cols-4 mt-28 grid-cols-2 justify-items-center h-28 bg-black'>
      <img className='lg:w-44 w-28 my-auto' src={amazon} alt="" />
      <img className='lg:w-44 w-28 my-auto' src={amazon3} alt="" />
      <img className='lg:w-44 w-28 my-auto' src={amazon4} alt="" />
      <img className='lg:w-44 w-28 my-auto' src={amazon2} alt="" />
    </div> */}
 <marquee>
<div className='flex gap-20 mt-20'>
<p className='font-serif'>  amazon</p>
<p className='font-serif'>  flipcart</p>
<p className='font-serif'>  Trivago</p>
<p className='font-serif'>  Learn how dynamic ads take personalization to the next level. Facebook's AI dynamically assembles ad elements based on user data, creating unique experiences for each viewer. Discover how this approach can boost conversions by showcasing the most relevant products or services to your audience</p>
<p className='font-serif'>  goDaddy</p>
<p className='font-serif'>  facebook</p>
<p className='font-serif'>  goolge</p>
</div>
 </marquee>
    </div>
    );
};
// bg-[rgb(52,141,219)]
export default HomeBanner;