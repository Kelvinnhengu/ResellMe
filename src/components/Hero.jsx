import React from 'react'
import mac from '../assets/images/Mac.png'


const Hero = () => {
  return (
    <div className="hero">

      <div className="row">
        <div className="col-12-col-m12">
          <div className="overlay">
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="hero-text">
            <h1>Buying and sell domains with no capital</h1>
            <p>
              Resellme allows you to buy and sell domains keeping the profits,
              all in under 5 minutes.
            </p>
            <button>SIGN UP FOR FREE</button> <button>READ ABOUT US</button>
            <div className="mac">
              <img className='img' src={mac} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="hero-image"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero
