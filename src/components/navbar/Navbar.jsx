import React from 'react'
import './navbar.scss'
import logo from '../../img/Logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__wrapper">
            <img src={logo} alt="" className='navbar__logo' />

            <ul className="navbar__list">
               <li className="navbar__item">
                    <a href="#" className="navbar__link">Features</a>
                </li>
                
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Developers</a>
                </li> 

                <li className="navbar__item">
                    <a href="#" className="navbar__link">Company</a>
                </li> 

                <li className="navbar__item">
                    <a href="#" className="navbar__link">Blog</a>
                </li> 

                <li className="navbar__item">
                    <a href="#" className="navbar__link">Changelog</a>
                </li> 
            </ul>

            <div className="navbar__burger">
                <div className="navbar__burger-item"></div>
                 <div className="navbar__burger-item"></div>
                  <div className="navbar__burger-item"></div>
            </div>

            <button className="navbar__btn">Join waitlist</button>
        </div>
    </div>
  )
}

export default Navbar
