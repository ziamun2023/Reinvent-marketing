import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import React from 'react';
import star from '../../assets/icons8-star-48.png'
import vector from '../../assets/Vector.png'
const Review = () => {





    const extractWords = (text) => {
        const words = text.trim().split(' ');
        const extractedWords = words.splice(0, 7);
        return extractedWords.join(' ');
      };
      
    const extractWordstitle = (text) => {
        const words = text.trim().split(' ');
        const extractedWords = words.splice(0, 4);
        return extractedWords.join(' ');
      };
      
      
const [items,setItems]=useState([])
const [items2,setItems2]=useState([])
console.log(items)
    useEffect(()=>{
fetch('review.json')
.then(res=>res.json())
.then(data=>setItems(data)) 
    }, [])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setItems2(data)) 
            }, [])


    return (
        <div  className='bg-black pb-24 relative z-20 containerx'>
            {/* <div className='bg-gradient-to-l from-white opacity-25  absolute h-full z-10 left-0 w-[250px]'>
s
            </div> */}
            
            <p  style={{fontWeight:"700"}} className='detailFont text-4xl pt-10 text-center text-bol   text-white'>Showcasing Reviews from Successful Product Launches</p>
            <p style={{fontWeight:"700"}} className='detailFont text-4xl pt-10 text-center text-bold lg:hidden md:hidden  text-white'>Not Just Another Review</p>
            <p   className='detailFont text-1xl pt-10 pb-10 text-white text-center'>Discover the Success Stories from Our Previous Product Launches</p>


<div 
            data-aos="fade-up"
     data-aos-duration="3000" className='bg-black'
>
<div className="container  ">
               
               <div  className="inner-container  flex">
               {
                   items.map(item=>  <div className="  border-2 rounded-lg item relative">
                       <div className='flex w-4 pt-2 ms-2'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                       <p className='text-[rgb(214,140,78)] ms-2 font-medium detailFont '>Verfied Purchase</p>
               
                 <div className='ms-2 pt-2'>
                 <p className='font-bold'>{ extractWordstitle(item.details)}</p>
                       <p className='text-[rgb(141,143,143)]'>{ extractWords(item.details)}</p>
                 </div>
                     <div className='flex absolute bottom-2 left-2 py-2'>
                     <img className='w-2 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div>
                     {/* <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div> */}
                       <img className='w-14 h-14 absolute rounded-xl bottom-3 right-2 border-2 border-gray-600'  src={item.imglink} alt="" /></div>
                  
                  
                 )
               }
               </div>
               
               </div>
               
               
          <div className=''>
          <div className="container ">
                              
                              <div  className="inner-container2  flex">
                              {
                                  items2.slice(12).map(item=>  <div className="  border-2 rounded-lg item2 relative">
                                      <div className='flex w-4 pt-2 ms-2'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                                      <p className='text-[rgb(214,140,78)] ms-2 font-medium detailFont '>Verfied Purchase</p>
                              
                                <div className='ms-2 pt-2'>
                                <p className='font-bold'>{ extractWordstitle(item.details)}</p>
                                      <p className='text-[rgb(141,143,143)]'>{ extractWords(item.details)}</p>
                                </div>
                                <div className='flex absolute bottom-2 left-2'>
                                    <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                                    </div>
                                      <img className='w-14 h-14 absolute rounded-xl bottom-3 right-2 '  src={item.imglink} alt="" /></div>
                                 
                                 
                                )
                              }
                              </div>
                              
                              </div>
                              <div className="container  ">
                                             
                              <div  className="inner-container  flex">
                              {
                                  items.map(item=>  <div className="  border-2 rounded-lg item relative">
                                      <div className='flex w-4 pt-2 ms-2'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                                      <p className='text-[rgb(214,140,78)] ms-2 font-medium detailFont '>Verfied Purchase</p>
                              
                                <div className='ms-2 pt-2'>
                                <p className='font-bold'>{ extractWordstitle(item.details)}</p>
                                      <p className='text-[rgb(141,143,143)]'>{ extractWords(item.details)}</p>
                                </div>
                                      
                                      <img className='w-14 h-14 absolute rounded-xl bottom-3 right-2 '  src={item.imglink} alt="" /></div>
                                 
                                 
                                )
                              }
                              </div>
                              
                              </div>
          </div>
               
</div>






        </div>
    );
};

export default Review;
// className='grid grid-cols-24  border h-[200px] w-[200px]'