import React from 'react'
import './pricing.scss'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="pricing__wrapper">
            <div className="pricing__text">
              <h1 className='pricing__h1'>Pricing</h1>

              <p className="pricing__p">Choose the right plan to meet your SEO needs and start optimizing today.</p>
            </div>

            <div className="pricing__card">
                <div className="pricing__card-1">
                  <h4 className="pricing__h4">
                    Pricing
                  </h4>

                  <p className="pricing__title">
                    Keyword optimization
                    <br />
                    Automated meta tags
                    <br />
                    SEO monitoring
                    <br />
                    Monthly reports
                  </p>


                  <button className="pricing__btn">Join waitlist</button>
                </div>

                  <div className="pricing__card-2">
                  <h4 className="pricing__h4">
                    Pricing
                  </h4>

                  <p className="pricing__title">
                    Keyword optimization
                    <br />
                    Automated meta tags
                    <br />
                    SEO monitoring
                    <br />
                    Monthly reports
                    <br />
                    Monthly reports
                    <br />
                    Link optimization
                  </p>


                  <button className="pricing__btn">Join waitlist</button>
                </div>

                  <div className="pricing__card-1">
                  <h4 className="pricing__h4">
                    Pricing
                  </h4>

                  <p className="pricing__title">
                    Keyword optimization
                    <br />
                    Automated meta tags
                    <br />
                    SEO monitoring
                    <br />
                    Monthly reports
                    <br />
                    Multi-user access
                    <br />
                    Automated meta tags
                    <br />
                    Monthly reports


                  </p>


                  <button className="pricing__button">Join waitlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
