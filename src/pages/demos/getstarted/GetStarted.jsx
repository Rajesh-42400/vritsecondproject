import React from 'react'

const GetStarted = () => {
  return (

    <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="text-center mx-auto">
              <p className="font-48-700 primary-color text-center">
                Get things done by <br/> awesome remote team
              </p>
              <p className="font-19-400 font-opacity text-center">
                We share common trends and strategies for improving your <br/> rental
                income and making sure you stay in high demand.
              </p>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button className="primary-btn secondary-color font-17-700 main-primary-btn me-4">
                Get started for free <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i> 
              </button>
              <button className="primary-color font-17-700 main-secondary-btn">
                Learn more
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GetStarted