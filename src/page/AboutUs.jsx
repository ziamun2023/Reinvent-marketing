import React from 'react';
import CountUp from 'react-countup';
import Lottie, { useLottie } from "lottie-react";
import animation from "../../public/lottie/bloom.json";
import img from "../assets/abouts.jpg"
import img2 from "../assets/abouts2.jpg"
import { MdOutlineDoneOutline } from 'react-icons/Md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ConnectUs from '../ResuableComponenet/ConnectUs';

// ..
AOS.init();
const AboutUs = () => {
    const options = {
        animationData: animation,
        loop: false
      };
      const { View } = useLottie(options);
    return (
        <div className='relative'
        data-aos="fade-up"
        data-aos-duration="1000">
                <p className='w-full absolute top-0'>   {View}</p>
            <div className='mx-auto'>
                <p className='text-blue-700 text-center font-serif my-10'>home / about us</p>

            </div>

            <p className='text-center text-gray-800 text-[27px] mt-[100px] '>About us</p>
            <p className='text-center detailFont4 text-gray-700 mt-10 text-[15px]'>We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals.</p>

            <div className='lg:grid lg:grid-cols-3 gap-10 justify-items-center'>
                <div className='grid shadow-2xl justify-items-center'>
<p className='text-center text-[60px]'> <CountUp start={0} end={400} delay={1}> duration={14} 
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp> +</p>
<p className='text-[18px] mx-10 my-10 detailFont4'>We take pride in our extensive network that spans across diverse industries, transcending geographical boundaries. With 400+ companies on board</p>
                </div>

                <div className='grid shadow-2xl justify-items-center'>
<p className='text-center text-[60px]'> <CountUp start={0} end={55} delay={1}> duration={14} 
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp> k</p>
<p className='text-[18px] mx-10 my-10 detailFont4'>Innovation is at the heart of everything we do. We're not just a platform; we're a launchpad for groundbreaking projects. With over 30 new initiatives in progress,</p>
                </div>
                <div className='grid shadow-2xl justify-items-center'>
<p className='text-center text-[60px]'> <CountUp start={0} end={65} delay={1}> duration={14} 
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp> M +</p>
<p className='text-[18px] mx-10 my-10 detailFont4'>Our vision goes beyond mere networking. We believe in the power of collaboration to drive meaningful change. By connecting companies, entrepreneurs, </p>
                </div>

            </div>

            <div className='lg:grid lg:grid-cols-2 justify-items-center my-20'>
                <div className='grid justify-items-start mx-20'>
                    <p className='detailFont4 text-[16px]'>What we do</p>
                    <p className='detailFont4 text-[38px] my-[29px]'>Supercharge your online business development</p>
                    <p className='detailFont4 text-gray-400 text-[24px] my-[20px]'>Spend less time writing a plan and more time building your business. We help you with the tools you need to communicate your idea.</p>
                    <p className='flex detailFont4 text-[20px] '><p className='my-auto'><MdOutlineDoneOutline/></p><p className='my-auto'>Prioritize the features your customers need</p></p>
                    <p className='flex detailFont4 text-[20px] '><p className='my-auto'><MdOutlineDoneOutline/></p><p className='my-auto'>Align everyone around the roadmap
</p></p>
                    <p className='flex detailFont4 text-[20px] '><p className='my-auto'><MdOutlineDoneOutline/></p><p className='my-auto'>
Define your product vision with customer feedback
</p></p>

<hr />

<p className='flex detailFont4 text-[16px]  mt-20 tracking-tight font-semibold'><p className='my-auto'>
Spend less time writing a business plan and more time building your business. We help you with the best tools you need to best communicate your idea.
</p></p>


                </div>
                <div className='relative'>
                  <div>
                  <img src={img} className='w-[500px]  object-cover h-[500px]' alt="" />
                  </div>
                  <div className=''>
                  <img src={img2} className='w-[300px] rounded-3xl absolute bg-white p-10 object-cover top-[300px] right-[300px]  h-[300px] ' alt="" />
                  </div>

                </div>
              

            </div>
            <ConnectUs/>
     
            
        </div>
    );
};

export default AboutUs;