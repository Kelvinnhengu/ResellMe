import React from 'react'
import jane from '../assets/images/jane.png'

const What = () => {
  return (
    <div id="what">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img">
              <img className="jane" src={jane} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text">
              <h1>Wait, What</h1>
              <p>
                Resell me allows for you to purchase domains through our
                platform without paying money upfront. All you need to do is
                have a client who will pay for the domain purchase price!
              </p>

              <p>
                Buying domains through the platforms is <span>SUPER CHEAP</span>
              </p>

              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What
