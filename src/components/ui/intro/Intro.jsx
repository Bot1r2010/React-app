import React from 'react'
import './intro.scss'
import img from '../../../img/App Wide@2x 1.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro__wrapper">
          <div className="intro__text">
              <h1 className='intro__h1'>
                Boost your
                rankings with AI
              </h1>

              <p className='intro__p'>Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>

              <button className="intro__btn">Start for free</button>
          </div> 

          <img src={img} alt="" className='intro__img' />
       </div>      
    </div>
  )
}

export default Intro
