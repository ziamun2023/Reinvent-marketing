import React from 'react';


import HomeBanner from '../Banner/HomeBanner';
import Section1 from '../section1/Section1';
import Section2 from '../section1/Section2';
import Section3 from '../section1/section3';
import QuestionSection from '../section1/QuestionSection';
import Section4 from '../section1/Section4';
import SectionBenefit from '../section1/SectionBenefit';

import Testimoni from '../section1/Testimoni';




const Home = () => {

  
    return (
        <>
  
 
 <HomeBanner/>
      <Section1/>

      <Section2/>
      <Section3/>
 <Section4/>

 <SectionBenefit/>
 <Testimoni/>
 

      <QuestionSection/>


           
        </>
    );
};

export default Home;