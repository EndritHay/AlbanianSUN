import React from 'react'
import "./AudioStyles.css"
import song from "../../assets/Pershendetje.mp3"
import kushton from "../../assets/SaKushton.mp3"
import naten from "../../assets/Naten.mp3"
import plazhi from "../../assets/KuPlazhi.mp3"
import flm from "../../assets/Faleminderit.mp3"
import miremengjes from "../../assets/Miremengjes.mp3"





function Audio() {
  return (
    <div className='audio'>
        <h1>Learn Words in Albanian</h1>

        <div className="sounds">
                    <div className="box">
            <h2>Good Morning - Mirëmengjes</h2>
            <audio controls autoplay>
            <source src={miremengjes} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>

            <div className="box">
            <h2>Thank You - Faleminderit</h2>
            <audio controls autoplay>
            <source src={flm} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>
            <div className="box">
            <h2>Hello - Përshendetje</h2>
            <audio controls autoplay>
            <source src={song} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>
        </div>

        <div className="sounds">
        <div className="box">
            <h2>Good Night - Naten e Mire</h2>
            <audio controls autoplay>
            <source src={naten} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>

            <div className="box">
            <h2>Where is the beach ? - Ku eshte plazhi ?</h2>
            <audio controls autoplay>
            <source src={plazhi} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>
            <div className="box">
            <h2>Whats the Price ? - Sa kushton ?</h2>
            <audio controls autoplay>
            <source src={kushton} type="audio/mpeg"/>
            Your browser does not support the audio element.
            </audio>
            </div>
        </div>


    </div>
  )
}

export default Audio