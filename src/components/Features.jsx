import React from 'react'

const Features = () => {
  return (
    <div className='features'>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="text">
            <h1>Resellme' Features</h1>
            <p>
              The Resell me platform has a wide range of features which makes it
              stand out from all competitors. Here we have just a few of those.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="cards">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card">
                  <h4>Best Purchase Rates</h4>
                  <p>
                    You might think, with the service type, we should charge a
                    looot for domain purchase. But no, our domains are actually
                    quite cheap as compared to our competitors.{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <h4>Instant Payouts</h4>
                  <p>
                    USD payout for every client you get to purchase a domain. We
                    don't ask you to get to 50 clients to get a payout, it's
                    2024 after all, who has all the time right?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card">
                  <h4>No Monthly Commitments</h4>
                  <p>
                    As long as you have an account, you only can use the
                    platform when you get a client to sell the service to. Your
                    client pays for the service and you keep the profit.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <h4>Business Automation</h4>
                  <p>
                    Place your business on autopilot by making use of our{" "}
                    <span>plugins & intergrations </span> panel to get started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features
