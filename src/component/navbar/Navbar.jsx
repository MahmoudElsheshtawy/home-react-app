import React, { useState } from 'react'
import {FaAtlassian,} from 'react-icons/fa'
import {AiFillCloseCircle, AiOutlineMenuFold,} from 'react-icons/ai'
import { Link, } from 'react-scroll'
import './Navbar.css'
const Navbar = () => {

  const [Nav, setNav] =useState(false)
  const handleNav = () =>setNav(!Nav)

   const [transparent ,setTransparent] = useState('container')
   const addBg = ()=>{
     if (window.scrollY  >= 10) {
       setTransparent('container activeContainer')
     }
     else{
      setTransparent('container')
     }
   }
window.addEventListener('scroll',addBg)

  return (
    <div className='navbar'>
        <div className={transparent}>
          <div className="logo">
               <FaAtlassian className='icon'/>
                Dot
            </div>
          
            <div className={Nav?'nav-menu active':'nav-menu'}>
         
              <ul>
          
                <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                <li><Link activeClass="active" to="popular" spy={true} smooth={true} duration={500} >Popular</Link></li>
                <li><Link activeClass="active" to="offer" spy={true} smooth={true} duration={500} >Offers</Link></li>
                <li><Link activeClass="active" to="hinking" spy={true} smooth={true} duration={500} >Hinking</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About Us</Link></li>
                <li><Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} >Blogs</Link></li>
                <li><Link activeClass="active" to="footer" spy={true} smooth={true} duration={500} >Footer</Link></li>
                {/* <li>About Us</li> */}
                {/* <li>Popular</li> */}
                {/* <li>Blog</li> */}
                {/* <li>Offers</li> */}
                {/* <li>Footer</li> */}
              </ul>

              <div className="btn">
                      <button className='btn-1'>Login</button>
                      <button className='btn-2'>Sign Up</button>
                </div>

             
    
            </div>
            <div className="hamborger" onClick={handleNav}>
                 {Nav? (<AiFillCloseCircle className='close'/>):(<AiOutlineMenuFold/>)}
                    
                </div>
           
            
        </div>

    </div>
  )
}

export default Navbar