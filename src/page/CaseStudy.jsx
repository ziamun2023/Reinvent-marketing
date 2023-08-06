import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/lottie/animation.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();
const data = [
    {
      subject: 'Customer satisfaction',
      A: 50,
      B: 110,
      fullMark: 60,
    },
    {
      subject: 'Project success',
      A: 39,
      B: 130,
      fullMark: 59,
    },
    {
      subject: 'Repeat customer',
      A: 60,
      B: 130,
      fullMark: 60,
    },
    {
      subject: ' Management system 4',
      A: 60,
      B: 100,
      fullMark: 60,
    },
    {
      subject: 'company growth ',
      A: 45,
      B: 90,
      fullMark: 55,
    },
    {
      subject: 'DIversity ',
      A: 60,
      B: 85,
      fullMark: 60,
    },
  ];
  
export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  

  render() {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
         <p className='text-3xl my-8'>Assignmetn Marks</p>

<div className='grid grid-cols-2 mx-28'>
     
     <div style={{ width: '100%', height: 500 }}>
     <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
         </div>
         <div className='w-96 ms-16 ps-12 mt-5'>
         <Lottie  animationData={groovyWalkAnimation} loop={true} />
         </div>
         <div className='flex'>
            <p className='my-4'><span className='text-yellow-800 '>  satisfaction 1 </span>60</p>
            <p className='my-4'><span className='text-yellow-800 '> Project success 2 </span>59</p>
            <p className='my-4'><span className='text-yellow-800 '> Repeat customer 3 </span>60</p>
            <p className='my-4'><span className='text-yellow-800 '> Company growth 4 </span>60</p>
            <p className='my-4'><span className='text-yellow-800 '> Management system 5 </span>55</p>
            <p className='my-4'><span className='text-yellow-800 '> DIversity 6 </span>60</p>

         </div>
       </div>
        
        </div>
       
  
    );
  }
}