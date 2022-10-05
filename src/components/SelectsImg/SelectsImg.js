import React from 'react'
import './SelectsImgStyles.css'

// import Shengjin from '../../assets/shengjin.jpg'

function SelectsImg({bgImg, text}) {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>       
    </div>
  )
}

export default SelectsImg