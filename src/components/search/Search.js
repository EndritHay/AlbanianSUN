import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
<div className="container">
<div className="left">
    <h2>Luxury Included Vacations For Two Peopls</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius possimus eveniet labore optio quia fu
        ga voluptatum hic, expedita eligendi enim minus dicta maxime et? Dolorum totam enim praesentium officiis?</p>
    <div className="search-col-2">
        <div className="box">
            <div>
                <img src={Gold} alt="/" style={{marginRight: '1rem'}}/>
            </div>
            <div>
            <h3>World's leading </h3>
            <p>all inclusive company for 20 years in a row</p>
            </div>
        </div>
        <div className="box">
            <div>
                <h3>No one includes more</h3>
                <p>All inslucive company for 20 years in a row</p>
                <button>View packages</button>
                </div>
        </div>
    </div>
</div>
<div className="right">
    <div className="promo">
        <h4 className="save">Get An Additional 7% off</h4>
        <p className="timer">12 Hours Left</p>
        <p className="offers">Vew all current offers</p>
    </div>
    <form>
        <div className="input-wrap">
            <label>Destination</label>
            <select>
                <option value="1">Durres</option>
                <option value="1">Vlore</option>
                <option value="1">Sarande</option>
                <option value="1">Shengjin</option>
                <option value="1">Ksamil</option>
                <option value="1">Jale</option>
                <option value="1">Velipje</option>
                <option value="1">Drymades</option>            
            </select>

        </div>
        <div className="date">
            <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
            </div>
            <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
            </div>
        </div>
        <button>Rates & Availibilities</button>
    </form>
</div>
    </div>
    </div>
  )
}

export default Search