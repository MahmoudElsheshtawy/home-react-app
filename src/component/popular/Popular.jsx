import React,{useEffect} from 'react'
import './Popular.css'
 import {IoMdArrowRoundForward,IoMdArrowRoundBack} from 'react-icons/io'
import popular from '../../assets/popular.jpg'
import populartow from '../../assets/populartow.jpg'
import popularth from '../../assets/popularth.jpg'
import popularfor from '../../assets/popularfor.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:1500})
   })

  return (

  <div className='popular'>

    <div className="top-p">   

         <div data-aos="fade-up" className="left">

              <h1>Popular Destinations</h1>
              <p>form historical cistel to noture senstevty ,come see the beast of the world</p> 
        </div>

      <div data-aos="fade-" className='rigth'>
      <IoMdArrowRoundBack className='icons one'/>
      <IoMdArrowRoundForward className='icons'/>
      </div>

    </div>

 <div data-aos="fade-up"  className="main-pupular">
     
      <div className="card">

            <img src={popular} alt="" />
               <div className="hover">
                  <h1>Taj Mahal</h1>
                  <p>Peru</p>
                  <IoMdArrowRoundForward className='arow'/>
               </div>
            <span>02</span>
            <div></div>
            
            <div className="foot">
                <span>Peru</span>
               
                <span><span>.</span>Dot</span>
            </div>
           

      </div>


      <div className="card">

            <img src={populartow} alt="" />
            <div className="hover">
                  <h1>Taj Mahal</h1>
                  <p>Mexico</p>
                  <IoMdArrowRoundForward className='arow'/>
                </div>
            <span>03</span>
           
            <span></span>
            <div className="foot">
                <span>Mexico</span>
                <span>.Dot</span>
            </div>

      </div>



          <div className="card">

                <img src={popularth}alt="" />
                <div className="hover">
                  <h1>Taj Mahal</h1>
                  <p>amraca</p>
                  <IoMdArrowRoundForward className='arow'/>
                </div>
                <span>03</span>
               <span></span>
                <div className="foot">
                    <span>amraca</span>
                    <span>.Dot</span>
                </div>

          </div>



      <div className="card">


                <img src={popularfor} alt="" />
                <div className="hover">
                  <h1>Taj Mahal</h1>
                  <p>Egypt</p>
                  <IoMdArrowRoundForward className='arow'/>
                </div>
                <span>04</span>
                <span></span>
                <div className="foot">
                    <span>pares</span>
                    <span>.Dot</span>
                </div>
      </div>




 </div>













  </div>

  )
}
















export default Popular