import React, { useEffect } from 'react'
// import Navbar from '../navbar/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
const Home = () => {

   useEffect(()=>{
    Aos.init({duration:1500})
   })



  return (
<div className="home">
    {/* <Navbar/> */}

  <div data-aos="fade-up" className="contaiiner">
    <h1 >Plan Your Trip With Travel </h1>
    <h2>Dot</h2>
    <p>Travel to you favorate city with reahfull of the <br/>invaronment </p>
    <button className='btn'>Explore Now</button>



  </div>
  <div data-aos="fade-down" className="home-form">

     <div className="content">

            <div className='col'>

               <span>Location</span>

               <input type="location" placeholder='Dream Description' />
             </div>

             <div className='col'>

               <span>Price Range</span>
               <input type="location" placeholder='$140-$500' />
             </div>
             <div className='col'>
              
               <span>Distanse</span>
               <input type="location" placeholder='n/mother' />
             </div>
         
            <button className='btn'>search</button>
     </div>

  </div>



</div>
  )
}

export default Home