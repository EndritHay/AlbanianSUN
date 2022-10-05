import React from 'react'
import './SelectsStyles.css'
import SelectsImg from '../SelectsImg/SelectsImg'


import Durres from '../../assets/durres.jpg'
import Sarande from '../../assets/sarande.jpg'
import Ksamil from '../../assets/ksamil.jpg'
// import Shengjin from '../../assets/shengjin.jpg' 
import Vlore from '../../assets/vlore.jpg'
import Jale from '../../assets/jale.jpg'
import Drymandes from '../../assets/drymades.jpg'



function Selects() {
  return (
    <div name='views' className='selects'>
        <div className="container">
        
      <SelectsImg  bgImg={Durres} text='Durres'/>
      <SelectsImg  bgImg={Sarande} text='Sarande'/>
      <SelectsImg  bgImg={Ksamil} text='Ksamil'/>
      <SelectsImg  bgImg={Vlore} text='Vlore'/>
      <SelectsImg  bgImg={Jale} text='Jale'/>
      <SelectsImg  bgImg={Drymandes} text='Drymades'/>
        </div>
      
        
    </div>
  )
}

export default Selects