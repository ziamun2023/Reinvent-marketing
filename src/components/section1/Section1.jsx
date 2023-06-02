import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import grid1 from '../../assets/frid11.png'
import grid2 from '../../assets/Untitled-1.png'
import grid3 from '../../assets/GRID3.png'
import grid4 from '../../assets/target grid-4.png'
import grid5 from '../../assets/Untitled-4.png'
import grid6 from '../../assets/Untitled-5.png'
import grid1Item from '../../assets/3d-fluency-starred-speech-bubble.png'
import arrowForMobile from '../../assets/Untitled-6.png'
const Section1 = () => {
   
    return (
        <div className='grid mt-20  justify-items-center lg:px-10 '>
            <p  data-aos="fade-right"  style={{fontWeight:"700"}}  className='my-component my-12 text-center  lg:text-5xl text-4xl text-black'> Maximize Your Success: Explore the Benefits </p>
          <div   className='lg:flex flex-row  gap-7 mt-6'>
          <div  data-aos="fade-up" className='lg:w-[713px]  lg:h-[327px] w-[336px] h-[336px]  rounded-2xl  relative  bg-gradient-to-b from-[rgb(238,80,78)] to-[rgb(195,33,35)]  '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight text-medium   my-component text-3xl lg:mt-16 lg:pt-0 pt-24 ms-5  lg:leading-normal lg:ms-8 '>Generate More <br /> Positive     Reviews</p>
     <p className='text-white lg:ms-8 ms-5 py-5'>Increase the number of positive reviews for your products, boosting your <br /> credibility and attracting more customers.</p>
     <img className='w-[713px] h-[327px] rounded-2xl  absolute top-0 hidden lg:block ' src={grid1} alt="" />
     <img className='w-24 rotate-90 absolute top-0 right-0 lg:hidden' src={grid1Item} alt="" />
     <img className='w-16 rotate-45 absolute top-0 right-[90px] lg:hidden' src={grid1Item} alt="" />
     <img className='w-16 rotate-180 absolute top-28 right-0 lg:hidden' src={grid1Item} alt="" />
  
      
            </div>
           
       
            <div  data-aos="fade-up" className='lg:w-[380px] lg:h-[327px]  w-[336px] h-[336px] relative bg-gradient-to-b from-[rgb(252,196,55)] to-[rgb(243,162,16)]  rounded-2xl '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-5xl 
     tracking-tight    my-component text-3xl hidden lg:block   mx-5 mt-3'><span className='text-[rgb(255,107,0)]'> Drive More</span> <br /> Sales  </p>
            <p style={{fontWeight:"700"}} className='text-white lg:text-5xl 
     tracking-tight    my-component text-3xl   mx-5 mt-6 pt-10 ms-5 lg:hidden '><span className=''> Drive More</span>  Sales  </p>
     <p className=' my-component text-white ms-5  my-3'>Attract more customers, increase conversion rates, and drive sales growth by leveraging the power of positive reviews as social proof.  </p>
     <img className='w-[380px] h-[327px] rounded-2xl  absolute lg:top-0 top-[10px]    '  src={grid2} alt="" />
            </div>
          </div>
      <div className='lg:flex flex-row  gap-7  mt-6'>
      <div data-aos="fade-right" className='lg:w-[380px] lg:h-[327px]  w-[336px] h-[336px]  relative bg-gradient-to-b from-[rgb(146,133,237)] to-[rgb(96,84,205)]  rounded-2xl '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-5xl 
     tracking-tight    my-component text-3xl  lg:leading-normal mx-5 my-5 hidden lg:block'>Cost <br /> Effective Solution  </p>
          <p style={{fontWeight:"700"}} className='text-white lg:text-5xl 
     tracking-tight    my-component text-3xl  lg:leading-normal mx-5 pt-6 lg:hidden '>Cost Effective <br />  Solution  </p>
     <p className=' my-component text-white  text-start ps-5 lg:hidden'>     Save on advertising costs with our cost-effective solution for generating authentic reviews, enabling you to allocate your budget more efficiently.</p>
  
     <img className='w-[380px] h-[327px] rounded-2xl  absolute lg:top-0 top-[10px]    '  src={grid3} alt="" />
            </div>
            <div data-aos="fade-left" className='lg:w-[713px]  lg:h-[327px] w-[336px] h-[336px] rounded-2xl   relative  bg-gradient-to-b from-[rgb(46,136,217)] to-[rgb(28,99,194)]'>
            <p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight    my-component text-3xl   lg:leading-normal mx-5 mt-10'>Reach Your Target <br /> Audience </p>
        <p className='text-white mt-20 ms-5 '>Choose the right reviewers for your products, <br />  ensuring that you receive valuable feedback from <br /> your ideal customer base.</p>
        <img className='w-[723px] h-[327px] rounded-2xl  absolute top-0 hidden lg:block   ' src={grid4} alt="" />
        <img className='w-[380px] h-[327px] rounded-2xl  absolute top-0    lg:hidden' src={arrowForMobile} alt="" />
</div>
      </div>
<div  className='lg:flex flex-row  gap-7 mt-6' >
<div  data-aos="fade-right" className='lg:w-[713px]  lg:h-[327px] w-[336px] h-[336px] rounded-2xl  relative  bg-gradient-to-b from-[rgb(43,179,114)] to-[rgb(23,136,78)]'>
<p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight    my-component text-3xl   lg:leading-normal lg:mx-5 lg:pt-10 pt-28 ms-5 lg:mt-10'>Manage Your <br /> Reputation </p>
     <p className='text-white lg:ms-5 lg:pt-7 lg:mt-0 mt-20 hidden lg:block'>Mitigate the impact of negative reviews and competitor attacks <br /> by acquiring a higher number of positive reviews,
    strengthening   <br />  your brand's reputation.</p>
     <p className='text-white  ms-5 pt-5 lg:hidden'>Mitigate the impact of negative reviews and competitor attacks by acquiring a higher number of positive reviews,
    strengthening   <br />  your brand's reputation.</p>
     <img className='lg:w-[713px] lg:h-[327px] w-[1000px] top-0 rounded-2xl  absolute lg:top-0   ' src={grid5} alt="" />
</div>
<div  data-aos="fade-left"  className='lg:w-[380px] lg:h-[327px]  w-[336px] h-[336px]  relative  bg-gradient-to-b from-[rgb(254,102,118)] to-[rgb(237,59,74)]  rounded-2xl lg:mt-0 mt-5'>
    <p style={{fontWeight:"700"}}  className='text-[rgb(189,26,29)]  lg:text-5xl 
     tracking-tight    my-component text-3xl   lg:leading-sung mx-5 mt-5 hidden lg:block'>Improve <br /> Product <br /><span className='text-white'> Visibility</span></p>
    <p style={{fontWeight:"700"}}  className='text-[rgb(189,26,29)] lg:hidden lg:text-5xl 
     tracking-tight    my-component text-3xl   lg:leading-sung mx-5 pt-8 '>Improve  Product <span className='text-white'> Visibility</span></p>
     <p className='text-white mx-5 lg:hidden'>Improve your product's visibility on E-commerce by obtaining more positive reviews, leading to higher search rankings and increased organic traffic.</p>
<img className='w-[380px] h-[327px] rounded-2xl  absolute top-0 ' src={grid6} alt="" />
</div >
</div>

        </div>
    );
};

export default Section1;