import React from 'react';
import discuss from '../../assets/3d-casual-life-young-people-discussing-work-project.png'
import iconhead from '../../assets/3d-fluency-investment-portfolio.png'
import discuss2 from '../../assets/3d-casual-life-youg-people-discussing-the-project.png'
import handshake from '../../assets/3d-fluency-handshake.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SectionBenefit = () => {
    return (
        <div className='lg:mx-28 mx-0 lg:mt-10'>
          <div  data-aos="zoom-out-left" className='lg:flex items-center gap-14 '>
            <div className='lg:px-24 mx-4'>
                <img className='w-10 py-5' src={iconhead} alt="" />
                <p style={{fontWeight:"700"}} className='lg:text-4xl 
     tracking-tight text-medium  my-component text-3xl text-black pb-8 '>Who Can Benefit?</p>
                <p className=' text-[rgb(70,70,98)] headerText'>Our service is designed to deliver maximum value for businesses with specific criteria. If your product is priced above ₹1000, have decent branding, and has a substantial inventory, we have the perfect solution for you. <br />
                <br /> While we support a diverse range of product categories, please note that our service is not suitable for businesses in the pet care, supplements, and skincare sectors. <br /><br /> Additionally, we prioritize unique and non-generic products, avoiding short-lived trendy items that may not align with our long-term value-driven approach. </p>

            </div>
            <img className='w-[462px] h-[660] ' src={discuss} alt="" />
            </div>  
            <div  data-aos="zoom-out-right" className='flex lg:flex-row-reverse flex-col items-center gap-14 lg:my-10'>
                <div className='lg:px-24 mx-4'>
                    <img className='w-10 py-5 ' src={handshake} alt="" />
                    <p style={{fontWeight:"700"}} className='lg:text-4xl 
     tracking-tight text-medium  my-component text-3xl text-black pb-8 '>Choose a Partner, not an agency</p>
                    <p className=' text-[rgb(70,70,98)] headerText'>By choosing us, you can have peace of mind knowing that your business is in safe hands. With Reinvent Marketing, you can trust that we have the expertise and systems in place to deliver exceptional results while keeping your business compliant and risk-free. Unlike other agencies, we prioritize your long-term success and take proactive measures to ensure that your review generation efforts remain within the boundaries set by the platforms. Our clients have entrusted us with their seller accounts, and we are proud to say that they have never received any policy violation warnings or faced unnecessary risks</p>
                </div>
                <img className='w-[462px] h-[660] ms-10 ps-10'   src={discuss2} alt="" />


            </div>
        </div>
    );
};

export default SectionBenefit;