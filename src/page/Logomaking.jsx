import React, { useEffect, useState } from 'react';
import ProductCart from '../ResuableComponenet/ProductCart';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ConnectUs from '../ResuableComponenet/ConnectUs';
// ..
AOS.init();

const Logomaking = () => {
    const [datas,setDatas]=useState([])
   console.log(datas)
 
    useEffect(()=>{
        fetch('logos.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])

  
    return (
   <div data-aos="fade-up"
   data-aos-duration="1000" className='relative'>
        <div className={`  `}>
        <p className='text-center text-2xl detailFont4 mt-5'>Create you First logo with the logo experts</p>
         <div className={`lg:grid lg:grid-cols-3 mt-20  gap-20 justify-items-center`}>
            {
                datas.map((item,index)=><div key={index}>
<ProductCart title={item.productName} subtitle={item.description} Profile={item.serviceBy} price={item.price} img={item.link}  description={item.description}/>
               
  </div>)
            }
          
     
            
        </div>
      
       </div>
    
   </div>
    );
};

export default Logomaking;