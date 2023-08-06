import React from 'react';
import Marquee from "react-fast-marquee";
import ceo from "../assets/ceo.png"
import cofounder from "../assets/cofounder.png"
import cofounder2 from "../assets/cofounder4.png"
import leader from "../assets/leadership.png"
import leader2 from "../assets/executive.png"
import leader3 from "../assets/executive2.png"
import advisory from "../assets/advisory.png"
import advisory2 from "../assets/advisory2.png"
import advisory3 from "../assets/advisory4.png"
import client from "../assets/client.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import art from "../assets/creative.png"
import art2 from "../assets/creative2.png"
import art3 from "../assets/creative4.png"
import TeamCart from '../ResuableComponenet/TeamCart';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();
const OurTeam = () => {
    return (
        <div  data-aos="fade-up"
        data-aos-duration="1000" >
                   <div className='mx-20'> 
           <p className='text-start ms-10 my-10  text-[30px] detailFont4 font-semibold'>CEO and Co-founder</p>
           
           <Marquee speed={10} gradient={true}>


<div className='mx-5'>
    
<TeamCart img={ceo} title={"Emily Sinclair"} subtitle={"CEO"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={cofounder} title={"Alexander Brooks"} subtitle={"co-founder "}/>
</div>
{/* <div className='mx-5'>
    
<TeamCart img={cofounder2} title={"Sophia Martinez"} subtitle={"co-founder"}/>
</div> */}
{/* <div className='mx-5'>
    
<TeamCart img={img} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div> */}
            
    
            </Marquee>
            
            </div>

           <div className='mx-20 scale-95'> 
           <p className='text-start ms-10 my-10  text-[30px] detailFont4 font-semibold'>Executive Leadership Team</p>
           
           <Marquee speed={20} gradient={true}>


<div className='mx-5'>
    
<TeamCart img={leader} title={"leader3"} subtitle={"Executive leader"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={leader2} title={"Benjamin Foster"} subtitle={"Executive leader"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={leader3} title={"Olivia Ramirez"} subtitle={"Executive leader"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={art3} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={leader} title={"leader3"} subtitle={"Executive leader"}/>
</div>
            
    
            </Marquee>
            
            </div>
            <p className='text-start ms-10  text-[30px] detailFont4 my-10 font-semibold'>Advisory Board or Board of Directors</p>
            <div className='mx-20  scale-75'> 
      
           
           <Marquee gradient={true}>


<div className='mx-5'>
    
<TeamCart img={advisory} title={"david Watson"} subtitle={"Advisory"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={advisory2} title={"marie jenny"} subtitle={"Advisory head"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={advisory3} title={"harnship"} subtitle={"sub-Advisory"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={advisory} title={"jackson"} subtitle={"master Advisory"}/>
</div>
            
    
            </Marquee></div>
            <p className='text-start ms-10  text-[30px] detailFont4 my-10 font-semibold'>Client Relations and Account Management Team</p>
            <div className='mx-20  scale-75'> 
      
           
           <Marquee gradient={true}>


<div className='mx-5'>
    
<TeamCart img={client} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={client2} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={client3} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={leader2} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
            
    
            </Marquee></div>
            <p className='text-start ms-10  text-[30px] detailFont4 my-10 font-semibold'>Creative and Design Team</p>
            <div className='mx-20  scale-75'> 
      
           
           <Marquee gradient={true}>


<div className='mx-5'>
    
<TeamCart img={art} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={art2} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={art3} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
<div className='mx-5'>
    
<TeamCart img={client2} title={"Jennie Watson"} subtitle={"CEO Write Master"}/>
</div>
            
    
            </Marquee></div>

            
        </div>
    );
};

export default OurTeam;