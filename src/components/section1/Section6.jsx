import React from 'react';
import arrow from '../../assets/arrow-narrow-up-right.png'    
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import photo1 from '../../assets/3d-fluency-red-heart (2).png'
import photo2 from '../../assets/3d-fluency-sell-stock.png'
import photo3 from '../../assets/3d-fluency-mail-advertising.png'
import photo4 from '../../assets/3d-fluency-person.png'
import photo5 from '../../assets/3d-fluency-person-female.png'
import photo6 from '../../assets/3d-fluency-discount (1).png'
import photo7 from '../../assets/business-3d-target-with-dart-arrow-in-bullseye (2).png'
import photo8 from '../../assets/3d-fluency-combo-chart.png'
// ..
AOS.init();

const Section6 = () => {
    return (
     <div className='text-center grid justify-items-center'>
           <div className='grid lg:grid-cols-6    lg:h-[378px] border lg:w-[1300px] my-40 py-10 mx-5  rounded-2xl shadow-md   shadow-gray-300'>
            <div className='relative hidden lg:block'> 
<img data-aos="fade-up-right"  className='rounded-full w-20 rotate-45 shadow-md shadow-gray-300 p-2' src={photo1} alt="" />
<div  className='flex relative'>
<img data-aos="fade-up-right" className='rounded-full w-24 shadow-md shadow-gray-300 p-2 absolute left-0 rotate-45' src={photo4} alt="" />
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute left-28 top-10' src={photo6} alt="" />
</div>
<div className='flex relative'>
<img data-aos="fade-up-right" className='rounded-full w-24 shadow-md shadow-gray-300 p-2 top-28 absolute left-8' src={photo5} alt="" />
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute left-28 top-10' src={photo6} alt="" />
</div>
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute left-28 top-[250px]' src={photo2} alt="" />
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-90 left-40 top-[190px]' src={photo8} alt="" />
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-6 left-56 top-[250px] ' src={photo7} alt="" />
<img data-aos="fade-up-right" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-6 left-0 top-[250px] ' src={photo3} alt="" />
            </div>
            <div className=' lg:col-span-4'>
<h1 data-aos="fade-down"  style={{fontWeight:"700"}}  className='detailFont mt-12  text-4xl text-black'>
Skyrocket Your Brand to New Heights
</h1>
<p data-aos="flip-up" className='text-[rgb(21,21,21)] py-5'>Harness the power of reviews to dominate your market</p>
<div className='grid justify-items-center'>
<div data-aos="flip-up" className='flex '>
<div className='grid lg:grid-cols-2 justify-items-center gap-5 lg:gap-2 '>
<div className='grid justify-items-center  shadow-md shadow-gray-400 bg-[rgb(251,188,29)] h-12   w-[336px] lg:w-[151px] mx-auto text-center rounded-2xl lg:rounded-3xl px-3 py-2 font-medium '>  <div>
<button className=' flex pt-1 ps-2'>Call us Now <img className='   w-8 p-1 py-auto' src={arrow} alt="" /></button ></div> </div>
     <div className='h-12  w-[320px]  shadow-md shadow-gray-400  lg:w-40 border-2 text-center font-medium border-gray-900  rounded-2xl py-2   '>
     Schedule a Meeting
     </div>
    </div>
</div>

</div>
            </div>
            <div className='relative  hidden lg:block '> 

<div className='flex relative'>
<img data-aos="fade-up-left" className='rounded-full w-24 shadow-md shadow-gray-300 p-2 absolute right-0 rotate-45' src={photo4} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute right-28 top-10' src={photo6} alt="" />
</div>
<div className='flex relative'>
<img data-aos="fade-up-left" className='rounded-full w-24 shadow-md shadow-gray-300 p-2 top-28 absolute right-8' src={photo3} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute right-28 top-10' src={photo6} alt="" />
{/* <img className='rounded-full w-20 rotate-45 shadow-md absolute right-0 -top-16  shadow-gray-300 p-2' src={photo1} alt="" /> */}
</div>
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute right-28 top-[250px]' src={photo2} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-90 right-40 top-[190px]' src={photo8} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-6 right-56 top-[250px] ' src={photo7} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-6 right-20 top-[180px] ' src={photo7} alt="" />
<img data-aos="fade-up-left" className='rounded-full w-20 shadow-md shadow-gray-300 p-2 absolute rotate-6 right-0 top-[250px] ' src={photo5} alt="" />
            </div>
        </div>
     </div>
    );
};

export default Section6;