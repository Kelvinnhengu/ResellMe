import React from 'react'

const GetStarted = () => {
  return (
    <div>
      <div className="how-to-get-started">
        <h2>How To Get Started</h2>
        <div className="steps">
          <div className="step">
            <div className="circle">1</div>
            <h3>Register</h3>
            <p>
              To get started with buying domains for clients, all you need to do
              is create an account on our platform using your email, phone
              number & preferred payment method.
            </p>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <h3>Find Client</h3>
            <p>
              Find a client who can be a business owner or a freelancer who
              wants a website but does not have a domain. You take lead to buy
              the desired domain via ReSellMe for the client upfront.
            </p>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <h3>Get Money!</h3>
            <p>
              You only pay when you get a client to sell the service to. Your
              client pays for the service and you keep the profit. Our payment
              methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru.
            </p>
          </div>
        </div>
        <button className="get-started-button">GET STARTED</button>
      </div>
    </div>
  );
}

export default GetStarted
