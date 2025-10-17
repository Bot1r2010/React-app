import React from 'react'
import './power.scss'
import logo from '../../../img/Bento1.png'
import img from '../../../img/Bento2.png'

const Power = () => {
  return (
    <div className='power'>
        <div className="power__wrapper">
            <h1 className="power__h1">
              Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
            </h1>

            <img src={logo} alt="" className="power__img-1" />
            <img src={img} alt="" className="power__img-2" />

        </div>
    </div>
  )
}

export default Power
