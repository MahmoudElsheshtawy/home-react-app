import React from 'react'
import clienttow from '../../assets/clienttow.png'
import clientone from '../../assets/clientone.png'
import clientthree from '../../assets/clientthree.png'
import './Hinking.css'
const Hinking = () => {
  return (
    <div data-aos="fade-up" className='hinking'>
        <h1>Why Hinking?</h1>
        <div className="cards">
            <div className="cardss">
                       <div className="card">
                        <img src={clienttow} alt="" />
                        <h2>110+ Mountains</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga  
                            modi earum ab itaque?earum ab itaque? Suscipit  consequuntur.</p>
                       </div>
                       <div className="card">
                        <img src={clientone} alt="" />
                        <h2>110+ Mountains</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nam  
                            modi earum ab itaque?earum ab itaque? Suscipit consequuntur.</p>
                       </div>
                        <div className="card">
                            <img src={clientthree} alt="" />
                            <h2>110+ Mountains</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nam 
                              
                                modi earum ab itaque?earum ab itaque? Suscipit consequuntur.</p>
                        </div>
              </div>




        </div>
    </div>
  )
}

export default Hinking