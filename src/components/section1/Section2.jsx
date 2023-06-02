import React from 'react';
import photo1 from '../../assets/3d-casual-life-boy-with-megaphone (1).png'
import photo2 from '../../assets/business-3d-young-woman-in-casual-clothes-and-glasses-standing-with-phone.png'
import photo3 from '../../assets/3d-casual-life-girl-with-shopping-bag-and-gift-box-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Section2 = () => {
    return (
        <div className='grid justify-items-center '>
             <p data-aos="fade-down"  style={{fontWeight:"700"}}  className='my-component my-12  text-5xl text-black'> How does the system work? </p>
           <div className='lg:flex flex-row  justify-center '>
<div data-aos="fade-up-right" className='lg:w-[240px] relative lg:h-[390px] lg:mt-28 md:-mt-40 -mt-40 rounded-3xl lg:rounded-l-3xl w-[344px] h-[300px] md:w-[688px] md:h-[330px] bg-gradient-to-b from-[rgb(13,184,245)] to-[rgb(11,143,241)] '>
<img className='absolute md:bottom-10 lg:-top-[110px] lg:left-20 md:right-[24px] w-[148px] hidden lg:block md:block' src={photo1} alt="" />
<p style={{fontWeight:"700"}} className='mt-[200px] lg:text-4xl 
     tracking-tight text-medium  md:pt-28 lg:pt-0 my-component text-3xl text-black lg:ms-5 md:ms-10 pt-20 ms-4' >Promotion</p>
<p className='lg:ms-5 md:ms-10 ms-4'>
<small className='my-componenet text-black  text-start pt-2 '   >
     We create a promotional campaign with set <br /> terms following your brand.

     </small>
     <small className='my-componenet text-black  text-start   md:pt-10   '>This promotion offers <br />
      a free product to buyers in exchange for a review on the platform.</small>
</p>
</div>
<div  data-aos="fade-up" className='lg:w-[348px] relative rounded-3xl md:-mt-40 lg:mt-5 -mt-40 lg:h-[608px] w-[344px] h-[300px] md:w-[688px] md:h-[330px] bg-gradient-to-b from-[rgb(255,207,90)] to-[rgb(255,167,17)] '>
<img className='absolute lg:top-[60px] lg:left-32 md:bottom-3 md:left-16     w-[118px] hidden lg:block md:block ' src={photo2} alt="" />
<p style={{fontWeight:"700"}} className='mt-[200px] lg:text-4xl 
     tracking-tight text-medium   my-component text-3xl text-black lg:text-center lg:ms-5 md:ms-[330px] lg:pt-56  pt-28 ' >Review</p>
<p className='lg:ms-5 md:ms-[330px]'>
<small className='my-componenet text-black  text-start pt-2  '   >
They then are asked to leave a detailed review of the product which increases the product's visibility on the platform.

     </small>
     {/* <small className='my-componenet text-black  text-start   pt-10  '>This promotion offers a free product to buyers in exchange for a review on the platform.</small> */}
</p>
</div>
<div data-aos="fade-up-left" className='lg:w-[240px] relative lg:h-[390px] lg:mt-28 md:-mt-40 -mt-40 md:rounded-3xl rounded-3xl lg:rounded-r-3xl w-[344px] h-[300px] md:w-[688px] md:h-[330px] bg-gradient-to-b from-[rgb(254,107,105)] to-[rgb(248,63,50)] '>
<img className='absolute lg:-top-[110px] md:bottom-10 lg:left-20 md:right-0 w-[148px] hidden lg:block md:block ' src={photo3} alt="" />
<p style={{fontWeight:"700"}} className='mt-[200px] lg:text-4xl 
     tracking-tight text-medium  md:pt-28 lg:pt-0  my-component text-3xl text-black lg:ms-3 md:ms-10  pt-20 ms-5' >Rebate</p>
<p className='lg:ms-3 md:ms-10 ms-5'>
<small className='my-componenet text-black  text-start pt-2  '   >
After the buyer has completed the campaign <br /> tasks, they are compensated with the brand's <br /> promised terms.
     </small>
     {/* <small className='my-componenet text-black  text-start   pt-10  '>This promotion offers a free product to buyers in exchange for a review on the platform.</small> */}
</p>
</div>
           </div>
        </div>
    );
};

export default Section2;