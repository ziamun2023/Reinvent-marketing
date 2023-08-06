import React from 'react';
import img from "../assets/teamFb.jpg"
import img2 from "../assets/teamFb2.jpg"
import imoji1 from "../assets/wow.png"
import imoji2 from "../assets/like.png"
import imoji3 from "../assets/love.png"
import imoji4 from "../assets/sad.png"
import AnimatedCart from '../ResuableComponenet/AnimatedCart';
import banner1 from '../assets/facebookbanner1.jpg';
import banner2 from '../assets/facebookbanner2.jpg';
import banner3 from '../assets/facebookbanner3.jpg';
import { Fade } from 'react-awesome-reveal';
import Pricing from '../ResuableComponenet/Pricing';
import ConnectUs from '../ResuableComponenet/ConnectUs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();
const Facebookpage = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">

          
            <p className='text-center detailFont4 text-gray-800 text-2xl my-10'>Navigating Ad Targeting and Audience Segmentation</p>
            <p className='text-center detailFont4 text-gray-800 text-3xl mb-10'>Unlock Your Online Success: Expert Digital Marketing Services Await</p>

            <div   className='h-[500px] bg-[rgb(233,241,253)] lg:grid lg:grid-cols-2 justify-items-center '>
               <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-10'>
               <p className='detailFont4 text-gray-800 text-[20px] my-10 '>Engage to Convert: Mastering Facebook Ad Engagement</p>
               <p className='detailFont4 text-gray-800 text-4xl my-3'>Team of over 540  expert</p>
               <p className='detailFont4 text-gray-800 text-[15px] my-5'>Dive into the strategies that drive engagement and conversions. Explore techniques such as interactive ad formats, compelling call-to-actions, and social proof elements that encourage users to take desired actions on your website</p>
<p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p>
               </div>
               <div>
                <div className='relative mt-10 my-auto'>
                    <img className='h-[300px] rounded-3xl  object-cover w-[300px]' src={img} alt="" />
                    <img className='absolute top-[160px] rounded-3xl p-2 bg-[rgb(233,241,253)] right-[200px] h-[200px] w-[200px] object-cover' src={img2} alt="" />
                    <img className='w-20 h-20 absolute top-0 moveArrow ' src={imoji1} alt="" />
                    <img className='w-20 h-20 absolute top-[290px] moveArrow ' src={imoji2} alt="" />
                    <img className='w-20 h-20 absolute -right-20 top-20 moveArrow ' src={imoji3} alt="" />
                    <img className='w-20 h-20 absolute -right-12 top-[300px] moveArrow ' src={imoji4} alt="" />
                </div>

               </div>

            </div>
<div>
    <p className='detailFont4 text-3xl text-center font-semibold my-20'>Think further with our expert insights</p>
</div>
            <div data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='lg:grid lg:grid-cols-3 gap-10 justify-items-center my-20'>
            
              <AnimatedCart   img={banner1} text={"Engage to Convert: Mastering Facebook Ad Engagement"} details={" Dive into the strategies that drive engagement and conversions. Explore techniques such as interactive ad formats, compelling call-to-actions, and social proof elements that encourage users to take desired actions on your website"} />
             
                <AnimatedCart img={banner2} text={"Smart Ad Creation with Automated Content Generation:"} details={"Smart Ad Creation with Automated Content Generation:"}/>
                <AnimatedCart img={banner3} text={"Connectivity Lab: nternet.org (now Free Basics)"} details={"Facebook's Connectivity Lab focused on exploring new technologies to provide affordable and accessible internet access to underserved areas. This included projects related to high-altitude drones and satellites."}/>
            </div>
            <p className='text-center mt-20 text-blue-600'>BEST PLAN & PACKAGE</p>
        <p className='detailFont text-[35px] my-6 text-center font-semibold'>Our Pricing Plans</p>
        <p className='text-center my-12'>Consider the range of services you offer, such as on-page optimization, off-page optimization, <br /> content creation, technical audits, and more..</p>
            <div className='lg:grid lg:grid-cols-3 justify-items-center '>
              <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-left" >
              <Pricing/>
              </div>
           <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-down" >     <Pricing/></div>
              <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-right" >
              <Pricing/>
              </div>
            </div>
            <div >
                <ConnectUs/>
                 
            </div>
        </div>
    );
};

export default Facebookpage;