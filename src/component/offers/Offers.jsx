import React from 'react'
import {AiFillCar,AiOutlineWifi,AiOutlineDoubleRight} from 'react-icons/ai'
import {GiRobotHelmet} from 'react-icons/gi'
import {ImLocation2} from 'react-icons/im'
import {TbBus} from 'react-icons/tb'
import './Offers.css'
import offerone from '../../assets/offerone.jpg'
import offerotow from '../../assets/offertow.jpg'
import offerthree from '../../assets/offerthree.jpg'
const Offers = () => {
  return (
    <div data-aos="fade-down" className='offer'>

         <h1>Spcial Offer</h1>
        <p>dolor sit amet consectetur adipisicing elit. Rerum amet pormar Rerum amet pormar. </p>

      <div className="container">
       
        {/* one */}
        <div data-aos="fade-down" className="box">

                <img src={offerone} alt="" />

                <button className='off'>30% Off</button>

                <div className='one'>
                    <span>$7,425</span>
                    <button>for Rent</button>
                </div>



                <div className='tow'>
                    <div className="icon">
                        <AiFillCar/>
                        <span>Beds</span>
                    </div>
                    <div className="icon">
                        <AiOutlineWifi/>
                        <span>Wi-Fi</span>
                    </div>
                    <div className="icon">
                        <GiRobotHelmet/>
                        <span>1 Both</span>
                    </div>

                </div>




                <div className="three">
                    <TbBus/>
                    <span>shailte</span>
                </div>
                <div className="four">
                    <ImLocation2/>
                    <span>450 vine st #330 prue</span>
                </div>

                <button className='btn'>
                    view Detelis
                    <AiOutlineDoubleRight className='icon'/>
                </button>

        </div>
        {/* tow */}
        <div className="box">
                <img src={offerotow} alt="" />
                <button className='off'>30% Off</button>
                <div className='one'>
                    <span>$7,425</span>
                    <button>for Rent</button>
                </div>



                <div className='tow'>
                    <div className="icon">
                        <AiFillCar/>
                        <span>Beds</span>
                    </div>
                    <div className="icon">
                        <AiOutlineWifi/>
                        <span>Wi-Fi</span>
                    </div>
                    <div className="icon">
                        <GiRobotHelmet/>
                        <span>1 Both</span>
                    </div>

                </div>




                <div className="three">
                    <TbBus/>
                    <span>shailte</span>
                </div>
                <div className="four">
                    <ImLocation2/>
                    <span>450 vine st #330 mexico</span>
                </div>

                <button className='btn'>
                    view Detelis
                    <AiOutlineDoubleRight className='icon'/>
                </button>

        </div>
        {/* three */}

        <div data-aos="fade-down" className="box">
                <img src={offerthree} alt="" />
                <button className='off'>30% Off</button>
                <div className='one'>
                    <span>$7,425</span>
                    <button>for Rent</button>
                </div>



                <div className='tow'>
                    <div className="icon">
                        <AiFillCar/>
                        <span>Beds</span>
                    </div>
                    <div className="icon">
                        <AiOutlineWifi/>
                        <span>Wi-Fi</span>
                    </div>
                    <div className="icon">
                        <GiRobotHelmet/>
                        <span>1 Both</span>
                    </div>

                </div>




                <div className="three">
                    <TbBus/>
                    <span>shailte</span>
                </div>
                <div className="four">
                    <ImLocation2/>
                    <span>450 vine st #330 Calefonai</span>
                </div>

                <button className='btn'>
                    view Detelis
                    <AiOutlineDoubleRight className='icon'/>
                </button>

        </div>









      </div>














    </div>
  )
}






export default Offers