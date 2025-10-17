import React from 'react';
import './footer.scss'
import logo from '../../img/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className="footer__wrapper">
          <div className="footer__logo">
              <img src={logo} alt="" className="footer__img" />
              
          </div>

          <div className="footer__text">
            <p className='footer__p'>Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
            </p>

            <p className='footer__p'>Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
            </p>

            <p className='footer__p'>Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
            </p>

            <p className='footer__p'>Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
              <br />
              Product
            </p>
          </div>
      </div>


    </div>
  );
};

export default Footer
