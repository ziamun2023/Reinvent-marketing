import React from 'react';
import img1 from "../../assets/laptop.png"
import img2 from "../../assets/tablet.png"
import icon from "../../assets/search.png"
import icon2 from "../../assets/traffic.png"
import icon3 from "../../assets/bulb.png"
import seo from "../../assets/seobackground.png"
import { Slide } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Pricing from '../../ResuableComponenet/Pricing';
import ConnectUs from '../../ResuableComponenet/ConnectUs';
// ..
AOS.init();
const SeoPage = () => {
    return (
        <div className='my-20'>
                 <div className='lg:grid lg:grid-cols-2 relative justify-items-center '>
            {/* <img className='absolute top-0' src={seo} alt="" /> */}
            <div data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up" className='mx-20 my-auto'>
                <p className='detailFont4 text-[20px]  '>WE MAKE YOUR LIFE BETTER</p>
                <p  className=' detailFont4 text-[26px] font-semibold'>Why Is Search Engine
Optimization Service Is
Important For Your Business?</p>
                <p  className=' text-[16px] detailFont4    my-10 '>We provide marketing services to startups and small businesses looking for a partner for their digital media. We work with you, not for you.We are lorem duoa headquartered in North-Eastern France, with our 19 associates located across nine countries in order to best serve a client base that stretches throughout North America, Curabitur accumsan ultricies ultricies. Pellentesque dapibus at nulla sed viverra. Fusce tempor orci non massa iaculis, eu auctor.</p>
               </div>
               <div className='mx-10'>
               <img src={img1} alt="" />
               </div>
             
            </div>
            <div className='lg:grid lg:grid-cols-2 relative -mt-28 justify-items-center '>
            <img className='absolute top-0' src={seo} alt="" />
               <div className='mx-10'>
               <img src={img2} alt="" />
               </div>
               <div data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='mx-20 my-auto'>
                <p className='detailFont4 text-[20px]  '>Adaptation and Strategy Refinement</p>
                <p  className=' detailFont4 text-[26px] font-semibold'>Adaptation and Strategy Refinement</p>
                <p  className=' text-[16px] detailFont4    my-10 '>Consistently review your website's performance metrics, including traffic, conversions, bounce rates, and rankings.
Use tools like Google Analytics, Google Search Console, and SEO software to gather data.Look for patterns and trends in your data. Identify which pages are performing well, which keywords are driving traffic, and where you might be facing challenges.</p>
               </div>
            </div>
       
            <div className='lg:grid lg:grid-cols-2'>
                <div className='my-auto mx-16'>
                    <p className=''>Our Services</p>
                    <p className='detailFont4 text-[30px]'>Best SEO Features </p>
                    <p className='detailFont4 text-[20px]'>Ensure your website is mobile-friendly and loads quickly. Page speed is a ranking factor for search engines.</p>

                    <div className='my-10'>
                    <p className='detailFont4'>Client satisfaction</p>
                    <div className='w-[370px] relative h-[8px]   bg-orange-300 shadow-inner rounded-r-3xl '>
                          <Slide>  <p className='bg-blue-600 w-[350px] h-[8px] rounded-r-3xl duration-500 absolute '><p>  <p className='absolute right-0 top-2'>90%</p></p></p></Slide>
                        </div>


                        

                    </div>
                    <div className='my-10'>
                    <p className='detailFont4'>Project delivery</p>
                    <div className='w-[370px] relative h-[8px]   bg-orange-300 shadow-inner rounded-r-3xl '>
                          <Slide>  <p className='bg-blue-600 w-[290px] h-[8px] rounded-r-3xl duration-500 absolute '>  <p className='absolute right-0 top-2'>78%</p></p></Slide>
                        </div>
                     

                    </div>  
                     <div className='my-10'>
                     <p className='detailFont4'>Success rate</p>
                        <div className='w-[370px] relative h-[8px]   bg-orange-300 shadow-inner rounded-r-3xl '>
                          <Slide>  <p className='bg-blue-600 w-[320px] h-[8px] rounded-r-3xl duration-500 absolute '>   <p className='absolute right-0 top-2'>88%</p></p></Slide>
                        </div>
                      

                    </div>

                    <div className='border-2 text-center py-2  border-blue-400 w-[100px] rounded-md text-blue-600 font-semibold '>
                       <p> Learn more</p>
                    </div>

                </div>
                <div className='gap-10 grid   grid-cols-1 my-auto'>
                    <div  data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up" className='bg-white shadow-xl  rounded-3xl w-[300px] h-[200px]'>
                        <img className='w-20'  src={icon} alt="" />
                        <p className='detailFont4 text-[20px] px-2 my-2'>Rant tracking</p>
                        <p className='detailFont4 text-[10px] px-5'>Utilize SEO tools like SEMrush, Ahrefs, Moz, or SERPWatcher to track keyword rankings.
These tools provide insights into your rankings, fluctuations, and potential opportunities for improvement.</p>

                        

                    </div>
                    <div  data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='bg-white shadow-xl  rounded-3xl  ms-40 w-[300px] h-[200px]'>
                        <img className='w-20'  src={icon2} alt="" />
                        <p className='detailFont4 text-[20px] px-2 my-2'>Traffic analytic</p>
                        <p className='detailFont4 text-[10px] px-5'>Implement tools like Google Analytics and Google Search Console to monitor your website's performance, track user behavior, and identify areas for improvement.</p>



                    </div>
                    <div  data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='bg-white shadow-xl  rounded-3xl  w-[300px] h-[200px]'>
                        <img className='w-20'  src={icon3} alt="" />
                        <p className='detailFont4 text-[20px] px-2 my-2'>Keyword research</p>
                        <p className='detailFont4 text-[10px] px-5'>Identify relevant keywords and phrases that potential clients are likely to search for. Use tools like Google Keyword Planner or SEMrush to find popular keywords with reasonable competition</p>


                    </div>
               

                </div>
            </div>
            <div >
              

            </div>
            <p className='text-center mt-20 text-blue-600'>BEST SEO PLAN & PACKAGE</p>
        <p className='detailFont text-[35px] my-6 text-center font-semibold'>Our Pricing Plans</p>
        <p className='text-center my-12'>Consider the range of services you offer, such as on-page optimization, off-page optimization, <br /> content creation, technical audits, and more..</p>
            <div className='lg:grid lg:grid-cols-3 justify-items-center '>
                <Pricing/>
                <Pricing/>
                <Pricing/>
            </div>
            <div >
                <ConnectUs/>
                 
            </div>
        </div>
    );
};

export default SeoPage;