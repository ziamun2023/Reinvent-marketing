import React from 'react';
import Lottie, { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../public/lottie/animation_lkzadzgn.json";
import img1 from "../assets/brand.gif"


const BrandMarketing = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div>
            <div className='lg:grid lg:grid-cols-3 justify-items-center gap-10'>
            <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-10'>
               <p className='detailFont4 text-gray-800 text-start text-[20px] my-10 '>EConsistent Brand Identity:</p>
               <p className='detailFont4 text-gray-800 text-start text-4xl my-3'>Team of over 230  expert</p>
               <p className='detailFont4 text-gray-800 text-start text-[15px] my-5'>Maintaining a consistent brand identity is essential for effective promotion. This includes your brand's logo, colors, fonts, and overall visual style. Consistency helps build recognition and credibility, making it easier for customers to identify and remember your brand.</p>
<p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p>
               </div>
                <div className='w-[300px] '>
              <img src={img1} alt="" />
                </div>
                <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-10'>
               <p className='detailFont4 text-gray-800  text-end text-[20px] my-10 '>EConsistent Brand Identity:</p>
               <p className='detailFont4 text-gray-800  text-end text-4xl my-3'>Team of over 230  expert</p>
               <p className='detailFont4 text-gray-800  text-end text-[15px] my-5'>Maintaining a consistent brand identity is essential for effective promotion. This includes your brand's logo, colors, fonts, and overall visual style. Consistency helps build recognition and credibility, making it easier for customers to identify and remember your brand.</p>
{/* <p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p> */}
               </div>
            </div>
            
        </div>
    );
};

export default BrandMarketing;