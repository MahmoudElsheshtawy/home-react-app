import React from 'react'
import './About.css'
import Video from '../../assets/Video.mp4'
const About = () => {
  return (
    <div className="about">
        <div className="contanier">
            <div data-aos="fade-down"className="left">
              <h2>Wonderfull House<br/>experience nin three!</h2>
              <p>the grte subscripe is bosde on th trager 
                wingrteu coptjjfs jyiiop countiry
                the grte subscripe is bosde on th trager wingrteu coptjjfsthe grte subscripe is bosde<br/> on th trager
                 wingrteu coptjjfs jyiiop countiry jyiiop countiry
              </p>
            </div>
            <div data-aos="fade-up" className="right">
                <video autoPlay loop muted id='video'>
                    <source src={Video} type='Video/mp4'/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default About