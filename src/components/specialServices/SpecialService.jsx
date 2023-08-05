import React from 'react';
import img1 from "../../assets/img1.jpg"
import img5 from "../../assets/img5.jpg"
import img3 from "../../assets/img3.jpg"
import img2 from "../../assets/img2.jpg"
import userid from "../../assets/userid.gif"
import note from  "../../assets/note.gif"
import findBrand from  "../../assets/connect.gif"
import collaboarate from  "../../assets/collaborate.gif"
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
const SpecialService = () => {
    return (
        <div className='mt-20 mb-28'>
            <div className=' bg-gradient-to-b from-[rgb(46,136,217)] to-[rgb(28,99,194)] w-[600px] rounded-r-full h-[140px] '>
            <p  style={{fontWeight:700}}  className='detailFont lg:my-12 mb-7  text-3xl lg:text-4xl text-center pt-12  text-black '>Simple 4 steps</p>
           
            </div>
            <div className='lg:grid  lg:grid-cols-2'>
                <div className='lg:grid lg:grid-cols-2  mx-20 my-10 justify-items-center'>

                    <div className='w-[260px] group h-[260px]  hover:shadow-2xl  relative rounded-3xl duration-200  bg-gradient-to-b from-[rgb(235,243,254)] to-[rgb(225,236,251)]'  >
                        <img className='w-20 group-hover:w-28 duration-300 absolute top-0' src={userid} alt="" />
                        <p  style={{fontWeight:700}}  className=' detailFont font-sans lg:my-12 mb-7  text-2xl lg:text-[20px] group-hover:text-[24px] duration-500 text-center pt-12  text-black '>Create profile</p>
                        <p className='-mt-10 text-center mx-3 detailFont tracking-wide'>Create the very first account on Reinvent marketing and you are ready for next step</p>
                 


                    </div>
                    <div className='w-[260px] group h-[260px]  hover:shadow-2xl  relative rounded-3xl duration-200  bg-gradient-to-b from-[rgb(235,243,254)] to-[rgb(225,236,251)]'  >
                    <img className='w-20 group-hover:w-28 duration-300 absolute top-0' src={note} alt="" />
                    <p  style={{fontWeight:700}}  className=' detailFont font-sans lg:my-12 mb-7  text-2xl lg:text-[20px] group-hover:text-[24px] duration-500 text-center pt-12  text-black '>Complete profile</p>
                    <p className='-mt-10 text-center mx-3 detailFont tracking-wide'>Its time to upload all your information about your business and your agenda then fill up all the form .</p>
              
                    </div>
                    <div className='w-[260px] group h-[260px]  hover:shadow-2xl  relative rounded-3xl duration-200  bg-gradient-to-b from-[rgb(235,243,254)] to-[rgb(225,236,251)]'  >
                    <img className='w-20 group-hover:w-28 duration-300 absolute top-0' src={findBrand} alt="" />
                    <p  style={{fontWeight:700}}  className=' detailFont font-sans lg:my-12 mb-7  text-2xl lg:text-[20px] group-hover:text-[24px] duration-500 text-center pt-12  text-black '>Find brand</p>
                    <p className='-mt-10 text-center mx-3 detailFont tracking-wide'>Take help of  our new friendly Ai for finding best brand , also we will be in touch within 1 hour for the best service </p>
        
                    </div>
                    <div className='w-[260px] group h-[260px] hover:shadow-2xl  relative rounded-3xl duration-200  bg-gradient-to-b from-[rgb(235,243,254)] to-[rgb(225,236,251)]'  >
                    <img className='w-20 group-hover:w-28 duration-300 absolute top-0' src={collaboarate} alt="" />
                    <p  style={{fontWeight:700}}  className=' detailFont font-sans lg:my-12 mb-7  text-2xl lg:text-[20px] group-hover:text-[24px] duration-500 text-center pt-12  text-black '>Collaborate</p>
                    <p className='-mt-10 text-center mx-3 detailFont tracking-wide'>And here you go for the collaboration with the best deal,ensuring you the best service we will join every step.</p>
                    
                    </div>
                    

                </div>
                <div className='grid grid-cols-2'>
<div  className='w-[300px] relative group    h-[370px]'>
   <div className=''> <img className='w-[300px] h-[370px] group-hover:scale-105 duration-700 absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img1} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@PinkVilla</p>
    <p className='text-gray-500 font-bold absolute -bottom-5 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>940 k Followers</p>
  <Zoom direction='left'>  <div className='w-[300px] h-[370px] shadow-2xl bg-gradient-to-b from-[rgb(255,207,90)] to-[rgb(239,204,144)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

       </div></Zoom>
    <div className='w-[opx] h-[0px] group-hover:h-[370px]  group-hover:w-[294px]  duration-300 shadow-2xl bg-gradient-to-b bg-black bg-opacity-50 absolute top-0 z-40  -left-[1px] rotate-12 rounded-3xl'>
       <p className='hidden group-hover:block  rounded-3xl p-5 text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos reiciendis impedit magni minus sint ad nemo odit rerum quibusdam atque itaque, deserunt accusantium nesciunt consectetur numquam libero odio!</p>
       

    </div>

</div>

<div  className='w-[200px] relative mt-20  group  h-[270px]'>
<div className=''> <img className='w-[200px] h-[270px] group-hover:scale-105 duration-700 absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img3} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@john_influencer</p>
    <p className='text-gray-500 font-bold absolute bottom-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>1.2 m Followers</p>
  <Fade direction='right'>
  <div className='w-[200px] h-[270px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

       </div>
  </Fade>
    <div className='w-[opx] h-[0px] group-hover:h-[270px]  group-hover:w-[200px]  duration-300 shadow-2xl bg-gradient-to-b bg-black bg-opacity-50 absolute top-0 z-40  -left-[1px] rotate-12 rounded-3xl'>
       <p className='hidden group-hover:block  rounded-3xl p-5 text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos reiciendis impedit magni!</p>
       

    </div>

</div>
<div  className='w-[200px] relative mt-12  group  h-[270px]'>
<div className=''> <img className='w-[200px] h-[270px] group-hover:scale-105 duration-700 absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img5} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@Marriana</p>
    <p className='text-gray-500 font-bold absolute bottom-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>654 k Followers</p>
   <Fade direction='left'>
   <div className='w-[200px] h-[270px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

       </div>
   </Fade>
    <div className='w-[opx] h-[0px] group-hover:h-[270px]  group-hover:w-[200px]  duration-300 shadow-2xl bg-gradient-to-b bg-black bg-opacity-50 absolute top-0 z-40  -left-[1px] rotate-12 rounded-3xl'>
       <p className='hidden group-hover:block  rounded-3xl p-5 text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos reiciendis impedit magni!</p>
       

    </div>

</div>

<div  className='w-[320px]  relative mt-12 group  -ms-20 h-[200px]'>
<div className=''> <img  className='w-[320px] h-[200px] group-hover:scale-105 duration-700 absolute z-20  rotate-12 object-cover  rounded-3xl ' src={img2} alt="" /></div>
    <p className='text-blue-500 font-bold absolute top-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>@Hero_girl</p>
    <p className='text-gray-500 font-bold absolute bottom-0 rotate-12 z-30 bg-white rounded-3xl px-3 shadow-inner '>2.4 m Followers</p>
   <Zoom direction='right' delay={3}> <div   className='w-[320px] h-[200px] shadow-2xl bg-gradient-to-b from-[rgb(111,160,230)] to-[rgb(225,236,251)] absolute -top-4 z-0  -left-2 rotate-12 rounded-3xl'>
       

       </div></ Zoom >
    <div className='w-[opx] h-[0px] group-hover:h-[200px]  group-hover:w-[320px]  duration-300 shadow-2xl bg-gradient-to-b bg-black bg-opacity-50 absolute top-0 z-40  -left-[1px] rotate-12 rounded-3xl'>
       <p className='hidden group-hover:block  rounded-3xl p-5 text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos reiciendis impedit magni!</p>
       

    </div>

</div>


                </div>
                

            </div>

          
        </div>
    );
};

export default SpecialService;