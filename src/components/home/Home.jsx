import React from 'react';

import HomeBanner from '../Banner/HomeBanner';
import Section1 from '../section1/Section1';
import Section2 from '../section1/Section2';
import Section3 from '../section1/section3';
import QuestionSection from '../section1/QuestionSection';



const Home = () => {
    return (
        <div>
  
      <HomeBanner/>
      <Section1/>
      {/* <Section2/> */}
      <Section3/>
      <QuestionSection/>


           
        </div>
    );
};

export default Home;