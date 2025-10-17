import React from 'react'
import './client.scss'
import logo from '../../../img/Avatar@3x 1.png';

const Client = () => {
  return (
    <div className='client'>
        <div className="client__wrapper">
            <div className="client__text">
                <h1 className="client__h1">Our clients</h1>
                <p className="client__p"></p>
            </div>
            <div className="client__item">
              <img src={logo} alt="" className="client__img" />

              <h3 className='client__h3'>”This product has completely transformed how I manage my projects and deadlines”</h3>
            </div>
        </div>
    </div>
  )
}

export default Client
