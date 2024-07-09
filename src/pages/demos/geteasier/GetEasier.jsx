import React from 'react'

const GetEasier = () => {
  return (
      <div className="container-fluid main-backgrounds py-5">  
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="text-justify my-4">
                <p className="font-36-700 primary-color">
                  Getting started with <br/> Albino is easier than <br/> ever
                </p>
                <p className="font-19-400 font-opacity text-justify w-100 mb-4">
                  With lots of unique blocks, you can easily <br/> build a page without coding. Build your next <br/> landing page so quickly with Albino.
                </p>
                <button className="primary-btn main-primary-btn secondary-color">Get started for free <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="d-flex justify-content-center">
                <img src="/src/assets/images/Image.svg" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GetEasier