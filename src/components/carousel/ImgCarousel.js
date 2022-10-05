import React from 'react'
import './ImgCarouselStyles.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Durres from '../../assets/durres.jpg'
import Sarande from '../../assets/sarande.jpg'
import Jale from '../../assets/jale.jpg'

function ImgCarousel() {
  return (
    <div name='carousel' className='container'>

    
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={Durres} alt='/'/>
        {/* <p className="legend">Durres 1</p> */}
    </div>
    <div>
        <img src={Sarande} alt='/' />
        {/* <p className="legend">Sarande</p> */}
    </div>
    <div>
        <img src={Jale} alt='/' />
        {/* <p className="legend">Ksamil</p> */}
    </div>
    
</Carousel>
</div>
  )
}

export default ImgCarousel