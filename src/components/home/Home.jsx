import React from 'react';


import HomeBanner from '../Banner/HomeBanner';
import Section1 from '../section1/Section1';
import Section2 from '../section1/Section2';
import Section3 from '../section1/section3';
import QuestionSection from '../section1/QuestionSection';
import Section4 from '../section1/Section4';
import SectionBenefit from '../section1/SectionBenefit';



import TestimonialFinal from '../section1/TestimonialFinal';
import AllRevies from '../section1/AllRevies';
import Slider from '../section1/Slider';
import Footer from '../section1/Footer';
import Section6 from '../section1/Section6';
import ScrollToTop from 'react-scroll-to-top';
import SpecialService from '../specialServices/SpecialService';
import Team from '../Team/Team';
// import Meeting from '../../meeting/Meeting';

import Lottie, { useLottie } from "lottie-react";
import animation from "../../../public/lottie/bloom.json";



const Home = () => {

    const options = {
        animationData: animation,
        loop: false
      };
      const { View } = useLottie(options);
  
    return (
        <>
 <p className='absolute top-0 '> {View}</p>
 
<div className=''>
<HomeBanner/>
<Section4/>
      <Section1/>
     

      <Section2/>
      <Section3/>
      <SpecialService/>
      <Team/>

 <AllRevies/>

 <SectionBenefit/>

 <TestimonialFinal/>


      <QuestionSection/>
      <Section6/>
</div>
<Footer/>

<ScrollToTop  smooth />


           
        </>
    );
};

export default Home;