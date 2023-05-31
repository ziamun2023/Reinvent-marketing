import React from 'react';
import grid1 from '../../assets/frid11.png'
import grid2 from '../../assets/Untitled-1.png'
import grid3 from '../../assets/GRID3.png'
const Section1 = () => {
   
    return (
        <div className='grid mt-20  justify-items-center px-10 '>
            <p   style={{fontWeight:"700"}}  className='my-component my-12  text-5xl text-black'> Maximize Your Success: Explore the Benefits </p>
          <div className='flex gap-5'>
          <div className='w-[713px] rounded-2xl  h-[327px] relative  bg-gradient-to-b from-[rgb(238,80,78)] to-[rgb(195,33,35)]  '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight text-medium   my-component text-3xl mt-16 lg:leading-normal ms-8'>Generate More <br /> Reviews</p>
     <p className='text-white ms-8'>Increase the number of positive reviews for your products, boosting your <br /> credibility and attracting more customers.</p>
     <img className='w-[713px] h-[327px] rounded-2xl  absolute top-0   ' src={grid1} alt="" />
  
      
            </div>
           
       
            <div className='w-[380px] h-[327px] relative bg-gradient-to-b from-[rgb(252,196,55)] to-[rgb(243,162,16)]  rounded-2xl '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight    my-component text-3xl  lg:leading-normal mx-5 my-5'>Drive More Sales  </p>
     <p className=' my-component text-white px-5 my-5'>Attract more customers, increase conversion rates, and drive sales growth by leveraging the power of positive reviews as social proof.  </p>
     <img className='w-[380px] h-[327px] rounded-2xl  absolute top-0    '  src={grid2} alt="" />
            </div>
          </div>
      <div className='flex'>
      <div className='w-[380px] h-[327px] relative bg-gradient-to-b from-[rgb(252,196,55)] to-[rgb(243,162,16)]  rounded-2xl '>
            <p style={{fontWeight:"700"}} className='text-white lg:text-4xl 
     tracking-tight    my-component text-3xl  lg:leading-normal mx-5 my-5'>Cost-Effective Solution  </p>
     <p className=' my-component text-white ms-5 my-5 text-start'>Save on advertising costs with our cost-effective solution for generating authentic reviews, enabling you to allocate your budget more efficiently.  </p>
     <img className='w-[380px] h-[327px] rounded-2xl  absolute top-0    '  src={grid3} alt="" />
            </div>
            <div className='w-[713px] rounded-2xl  h-[327px] relative  bg-gradient-to-b from-[rgb(46,136,217)] to-[rgb(28,99,194)]'>
         
</div>
      </div>
<div className='w-[813px]   h-[407px]  bg-gradient-to-b from-[rgb(43,179,114)] to-[rgb(23,136,78)]'>

</div>
<div  className='w-[427px] h-[407px]  bg-gradient-to-b from-[rgb(254,102,118)] to-[rgb(237,59,74)]'>

</div >

        </div>
    );
};

export default Section1;