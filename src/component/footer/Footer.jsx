import React from 'react'
import {FaAtlassian,FaFacebookSquare,FaApple,FaTwitter,FaSkype,FaYoutube} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      
        <div data-aos="fade-down" className="contanier">

        <div className="col">


           <div className="logo">
              <h1> <FaAtlassian className='icon'/>Dot</h1>
            </div>



            <div className="socail">
                <FaFacebookSquare className='socail-icon'/>
                <FaTwitter className='socail-icon'/>
                <FaSkype className='socail-icon'/>
                <FaYoutube className='socail-icon'/>
                <FaApple className='socail-icon'/>

            </div>


        </div> 




        <div className="col">
                <h1>Information</h1>
                <p>Home</p>
                <p>Explore</p>
                <p>travle</p>
                <p>blog</p>
        </div>





        <div className="col">
                <h1>Helpful Links</h1>
                <p>Destanation</p>
                <p>Support</p>
                <p>Travle & condation</p>
                <p>Privecy</p>
        </div>








        <div className="col">
             <h1>Contact Us</h1>
             <p><BsFillTelephoneFill className='fott'/>+20 01067870535</p>
             <p><BsFillTelephoneFill className='fott'/>+204 567 894 554</p>
             <p><SiGmail className='fott'/>elsheshtawym54@gmail.com</p>
             <p><ImLocation2 className='fott'/>Egypt.</p>
             
            
        </div>











        </div>
          
    </div>
  )
}

export default Footer