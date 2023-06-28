import React from 'react'
import './Blog.css'
import {BsArrowRight} from 'react-icons/bs'
import blogone from '../../assets/blogone.jpg'
import blogtow from '../../assets/blogtow.jpg'
import blogtree from '../../assets/blogtree.jpg'
import blogfour from '../../assets/blogfour.jpg'

const Blog = () => {
  return (
    <div className="blog">
        <h1 data-aos="fade-down">Our best blogs</h1>
        <p data-aos="fade-down">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, voluptas.</p>
        <div className="container">
            <div data-aos="fade-down" className="right-b">

              <div className="card">
                <div className="img">
                <img src={blogone}alt="" />
                </div>
                <div className="content">
                    <h2>Beautiful Morocoo ,let us travel</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus laboriosam blanditiis doloremque numquam quidem.</span>
                    <button className='btnn'>Read More <BsArrowRight/> </button>
                </div>
              </div>
              <div className="card">
                <img src={blogtow} alt="" />
                <div className="content">
                    <h2>Beautiful Morocoo ,let us travel</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus laboriosam blanditiis doloremque numquam quidem.</span>
                    <button className='btnn'>Read More <BsArrowRight/> </button>
                </div>
              </div>


            </div>
            <div data-aos="fade-down" className="left-b">
            <div className="card">
            <div className="img">
                <img src={blogtree}alt="" />
                </div>
                <div className="content">
                    <h2>Beautiful Morocoo ,let us travel</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus laboriosam blanditiis doloremque numquam quidem.</span>
                    <button className='btnn'>Read More <BsArrowRight/> </button>
                </div>
              </div>
              <div className="card">
              <div className="img">
                <img src={blogfour}alt="" />
                </div>
                <div className="content">
                    <h2>Beautiful Morocoo ,let us travel</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus laboriosam blanditiis doloremque numquam quidem.</span>
                    <button className='btnn'>Read More <BsArrowRight/> </button>
                </div>
              </div>


            </div>
        </div>
    </div>
  )
}

export default Blog