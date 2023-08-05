import { useEffect, useState } from 'react';


import React from 'react';
import star from '../../assets/icons8-star-48.png'
import vector from '../../assets/Vector.png'

const AllRevies = () => {


    
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
console.log(items)
    useEffect(()=>{
fetch('review.json')
.then(res=>res.json())
.then(data=>setItems(data)) 
    }, [])
    return (
        <div className='bg-black mt-20 pb-24 relative z-20 '>
              <p style={{fontWeight:"700"}} className='detailFont text-3xl pt-10 text-center  text-white'>Showcasing Reviews from Successful Product Launches</p>
            <p  className='detailFont text-1xl pt-10 pb-10 text-white text-center'>Discover the Success Stories from Our Previous Product Launches</p>
         
        
        <div 
            data-aos="fade-up"
     data-aos-duration="3000" className='bg-black' >
        <div className="container ">
               
               <div  className="inner-container flex">
               {
                   items.map(item=>  <div className="  border-2 rounded-lg item relative">
                       <div className='flex w-4 pt-2 ms-2'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                       <p className='text-[rgb(214,140,78)] ms-2 font-medium detailFont '>Verfied Purchase</p>
               
                 <div className='ms-2 pt-2'>
                 <p className='font-bold'>{ extractWordstitle(item.details)}</p>
                       <p className='text-[rgb(141,143,143)]'>{ extractWords(item.details)}</p>
                 </div>
                     <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div>
                     <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div>
                       <img className='w-14 h-14 absolute rounded-xl bottom-3 right-2 '  src={item.imglink} alt="" /></div>
                  
                  
                 )
               }
               </div>
               
               </div>
               <div className="container2  ">
               
               <div  className="inner-container2  flex">
               {
                   items.map(item=>  <div className="  border-2 rounded-lg item2 relative">
                       <div className='flex w-4 pt-2 ms-2'> <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" />  <img src={star} alt="" /></div>
                       <p className='text-[rgb(214,140,78)] ms-2 font-medium detailFont '>Verfied Purchase</p>
               
                 <div className='ms-2 pt-2'>
                 <p className='font-bold'>{ extractWordstitle(item.details)}</p>
                       <p className='text-[rgb(141,143,143)]'>{ extractWords(item.details)}</p>
                 </div>
                     <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
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
                     <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div>
                     <div className='flex absolute bottom-2 left-2'>
                     <img className='w-6 ' src={vector} alt="" /><p className='font-medium ps-2'>{item.love}</p>
                     </div>
                       <img className='w-14 h-14 absolute rounded-xl bottom-3 right-2 '  src={item.imglink} alt="" /></div>
                  
                  
                 )
               }
               </div>
        </div>
               
               </div>
        </div>
    );
};

export default AllRevies;