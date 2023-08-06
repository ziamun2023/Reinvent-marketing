import React from 'react';
import imoji1 from "../assets/3d-fluency-person.png"
import imoji2 from "../assets/3d-fluency-combo-chart.png"
import imoji3 from "../assets/3d-fluency-sell-stock.png"
import imoji4 from "../assets/3d-fluency-discount (1).png"
import banner1 from "../assets/brandbanner3.jpg"
import banner2 from "../assets/brandbanner2.jpg"
import banner3 from "../assets/brandbanner1.jpg"
import Lottie, { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../public/lottie/animation_lkzadzgn.json";
import img1 from "../assets/brand.gif"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Pricing from '../ResuableComponenet/Pricing';
import ConnectUs from '../ResuableComponenet/ConnectUs';
import AnimatedCart from '../ResuableComponenet/AnimatedCart';

// ..
AOS.init();

const BrandMarketing = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div  data-aos="fade-up"
        data-aos-duration="1000">
            <div className='lg:grid lg:grid-cols-3 justify-items-center gap-10 mx-20'>
            <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-10'>
               <p className='detailFont4 text-gray-800 text-start text-[20px] my-10 '>EConsistent Brand Identity:</p>
               <p className='detailFont4 text-gray-800 text-start text-4xl my-3'>Team of over 230  expert</p>
               <p className='detailFont4 text-gray-800 text-start text-[15px] my-5'>Maintaining a consistent brand identity is essential for effective promotion. This includes your brand's logo, colors, fonts, and overall visual style. Consistency helps build recognition and credibility, making it easier for customers to identify and remember your brand.</p>
<p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p>
               </div>
                <div className='w-[460px] my-auto '>
              <img src={img1} alt="" />
                </div>
                <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-10'>
               <p className='detailFont4 text-gray-800  text-end text-[20px] my-10 '> Multi-Channel Approach</p>
               <p className='detailFont4 text-gray-800  text-end text-4xl my-3'>Storytelling helps create an emotional connection with your audience. </p>
               <p className='detailFont4 text-gray-800  text-end text-[15px] my-5'>Utilize various marketing channels to reach a wider audience. This could include social media platforms, websites, email marketing, traditional advertising (such as TV, radio, and print), influencer collaborations, and more. A diverse approach ensures that you're reaching your audience wherever they ar.</p>
{/* <p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p> */}
               </div>
            </div>
            <div   className='h-[500px] bg-[rgb(233,241,253)] lg:grid lg:grid-cols-2 justify-items-center '>
               <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='my-auto mx-20'>
               <p className='detailFont4 text-gray-800 text-[20px] my-10 '>Customer Engagement and Interaction:</p>
               <p className='detailFont4 text-gray-800 text-4xl my-3'>Compelling Content Creation:</p>
               <p className='detailFont4 text-gray-800 text-[15px] my-5'>Interacting with your customers and engaging them in meaningful conversations is essential for building relationships. Respond to customer feedback, comments, and messages promptly and thoughtfully. Encourage user-generated content and testimonials to showcase real experiences with your brand</p>
{/* <p className='bg-black text-white rounded-2xl w-28 text-center'>Contact us</p> */}
               </div>
               <div>
                <div className='relative mt-10 my-auto'>
                  <p className='w-[300px]'>  {View}</p>
                    {/* <img className='absolute top-[160px] rounded-3xl p-2 bg-[rgb(233,241,253)] right-[200px] h-[200px] w-[200px] object-cover' src={img2} alt="" /> */}
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
            <p className='text-center mt-20 text-blue-600'>BEST  PLAN & PACKAGE</p>
        <p className='detailFont text-[35px] my-6 text-center font-semibold'>Our Pricing Plans</p>
        <p className='text-center my-12'>Consider the range of services you offer, such as on-page optimization, off-page optimization, <br /> content creation, technical audits, and more..</p>
            <div className='lg:grid lg:grid-cols-3 justify-items-center mt-20 '>
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
            <div  className=''>
                <ConnectUs/>
                 
            </div>
            
            
        </div>
    );
};

export default BrandMarketing;