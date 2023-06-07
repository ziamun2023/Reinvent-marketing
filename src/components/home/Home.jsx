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




const Home = () => {

  
    return (
        <>
  
 
<div className=''>
<HomeBanner/>
      <Section1/>

      <Section2/>
      <Section3/>
 <Section4/>
 <AllRevies/>

 <SectionBenefit/>

 <TestimonialFinal/>


      <QuestionSection/>
      <Section6/>
</div>
<Footer/>

           
        </>
    );
};

export default Home;