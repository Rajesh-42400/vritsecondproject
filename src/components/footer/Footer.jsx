import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container-fluid border-bottom py-5">
      <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="font-32-700 primary-color">Build better landing page fast</p>
              <p className="font-19-400 w-75 primary-color font-opacity">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <button className="primary-color font-17-700 footer-secondary-btn btn-primary-color me-4">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="footer-primary-btn secondary-color font-17-700">
                Get it now <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i> 
              </button>
            </div>
        </div>
      </div>
    </div>

    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <div>
            <img src="/src/assets/logo/logo.svg" className="img-fluid"/>
            <p className="font-15-400 primary-color font-opacity w-75 my-4">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="142" height="19" viewBox="0 0 142 19" fill="none">
              <path d="M17 4.73969C16.3625 5.04897 15.6896 5.24227 14.9812 5.35825C15.6896 4.89433 16.2563 4.15979 16.5042 3.27062C15.8313 3.69588 15.0875 4.00515 14.2729 4.19845C13.6354 3.46392 12.7146 3 11.7229 3C9.81042 3 8.25208 4.70103 8.25208 6.78866C8.25208 7.09794 8.2875 7.36856 8.35833 7.63918C5.48958 7.48454 2.90417 5.9768 1.16875 3.65722C0.885417 4.23711 0.708333 4.85567 0.708333 5.55155C0.708333 6.86598 1.31042 8.02577 2.26667 8.72165C1.7 8.68299 1.16875 8.52835 0.672917 8.25773V8.29639C0.672917 10.1521 1.87708 11.6985 3.47083 12.0464C3.1875 12.1237 2.86875 12.1624 2.55 12.1624C2.3375 12.1624 2.08958 12.1237 1.87708 12.0851C2.3375 13.5928 3.6125 14.7139 5.13542 14.7139C3.93125 15.7191 2.44375 16.3376 0.814583 16.3376C0.53125 16.3376 0.247917 16.3376 0 16.299C1.55833 17.3814 3.36458 18 5.34792 18C11.7583 18 15.2646 12.201 15.2646 7.17526C15.2646 7.02062 15.2646 6.82732 15.2646 6.67268C15.9375 6.1701 16.5396 5.51289 17 4.73969Z" fill="#161C2D"/>
              <path d="M59 9.5573C58.9992 4.4726 55.0424 0.278485 49.9959 0.0132214C44.9495 -0.252042 40.5799 3.50441 40.0525 8.56134C39.5252 13.6183 43.0247 18.2055 48.016 19V12.3203H45.6043V9.5573H48.016V7.45142C48.016 5.0558 49.4344 3.73253 51.6039 3.73253C52.3164 3.74247 53.0272 3.80477 53.7307 3.91892V6.27153H52.5325C52.1189 6.21626 51.7028 6.35325 51.4017 6.64381C51.1006 6.93437 50.9471 7.34697 50.9847 7.76506V9.5573H53.6196L53.1981 12.3203H50.9847V19C55.6013 18.2651 59.0007 14.2603 59 9.5573Z" fill="#473BF0"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M87.2894 1.054C88.2494 1.0105 88.5557 1 91 1C93.4443 1 93.7506 1.0105 94.7106 1.054C96.1739 1.12075 97.4583 1.47925 98.4895 2.5105C99.5211 3.54212 99.8792 4.82687 99.946 6.28937C99.9895 7.24937 100 7.55575 100 10C100 12.4443 99.9895 12.7506 99.946 13.7106C99.8792 15.1739 99.5208 16.4583 98.4895 17.4895C97.4579 18.5211 96.1727 18.8792 94.7106 18.946C93.7506 18.9895 93.4443 19 91 19C88.5557 19 88.2494 18.9895 87.2894 18.946C85.8261 18.8792 84.5417 18.5208 83.5105 17.4895C82.4789 16.4579 82.1207 15.1731 82.054 13.7106C82.0105 12.7506 82 12.4443 82 10C82 7.55575 82.0105 7.24937 82.054 6.28937C82.1207 4.82612 82.4792 3.54175 83.5105 2.5105C84.5421 1.47887 85.8269 1.12075 87.2894 1.054ZM94.6368 2.674C93.6876 2.6305 93.403 2.6215 91 2.6215C88.597 2.6215 88.3124 2.63087 87.3632 2.674C86.3391 2.72088 85.3885 2.926 84.6572 3.65725C83.926 4.3885 83.7209 5.33913 83.674 6.36325C83.6305 7.31238 83.6215 7.597 83.6215 10C83.6215 12.403 83.6309 12.6876 83.674 13.6368C83.7209 14.6609 83.926 15.6115 84.6572 16.3427C85.3885 17.074 86.3391 17.2791 87.3632 17.326C88.312 17.3695 88.5966 17.3785 91 17.3785C93.4034 17.3785 93.688 17.3691 94.6368 17.326C95.6609 17.2791 96.6115 17.074 97.3427 16.3427C98.074 15.6115 98.2791 14.6609 98.326 13.6368C98.3695 12.6876 98.3785 12.403 98.3785 10C98.3785 7.597 98.3691 7.31238 98.326 6.36325C98.2791 5.33913 98.074 4.3885 97.3427 3.65725C96.6115 2.926 95.6609 2.72088 94.6368 2.674Z" fill="#161C2D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M86.9091 10.4092C86.9091 7.92403 88.9236 5.90918 91.4091 5.90918C93.8946 5.90918 95.9091 7.92366 95.9091 10.4092C95.9091 12.8947 93.8946 14.9092 91.4091 14.9092C88.9236 14.9092 86.9091 12.8943 86.9091 10.4092ZM88.488 10.4092C88.488 12.0224 89.7959 13.3303 91.4091 13.3303C93.0223 13.3303 94.3302 12.0224 94.3302 10.4092C94.3302 8.79599 93.0223 7.48805 91.4091 7.48805C89.7959 7.48805 88.488 8.79599 88.488 10.4092Z" fill="#161C2D"/>
              <circle cx="95.5" cy="5.49998" r="1.22727" fill="#161C2D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M124.75 1H141.25C141.663 1 142 1.3375 142 1.75V18.25C142 18.6625 141.663 19 141.25 19H124.75C124.338 19 124 18.6625 124 18.25V1.75C124 1.3375 124.338 1 124.75 1ZM126.662 16.3375H129.325V7.75H126.662V16.3375ZM128.012 6.5875C127.15 6.5875 126.475 5.9125 126.475 5.05C126.475 4.1875 127.15 3.5125 128.012 3.5125C128.875 3.5125 129.55 4.1875 129.55 5.05C129.55 5.875 128.875 6.5875 128.012 6.5875ZM136.675 16.3375H139.3V11.6125C139.3 9.2875 138.812 7.525 136.112 7.525C134.837 7.525 133.938 8.2375 133.6 8.9125H133.562V7.75H131.012V16.3375H133.675V12.1C133.675 10.975 133.9 9.8875 135.288 9.8875C136.675 9.8875 136.675 11.1625 136.675 12.175V16.3375Z" fill="#161C2D"/>
            </svg>
          </div> 
        </div>
        
        <div className="col-lg-8 col-md-12 col-sm-12 col-12 my-sm-5 my-lg-0 my-md-5 my-5">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <ul className="p-0">
                <li className="font-17-400 primary-color font-opacity mb-2">Company</li>
                <li className="font-17-400 primary-color mb-2">About us</li>
                <li className="font-17-400 primary-color mb-2">Contact us</li>
                <li className="font-17-400 primary-color mb-2">Careers</li>
                <li className="font-17-400 primary-color mb-2">Press</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-0">
              <ul className="p-0">
                <li className="font-17-400 primary-color font-opacity mb-2">Product</li>
                <li className="font-17-400 primary-color mb-2">Features</li>
                <li className="font-17-400 primary-color mb-2">Pricing</li>
                <li className="font-17-400 primary-color mb-2">News</li>
                <li className="font-17-400 primary-color mb-2">Help desk</li>
                <li className="font-17-400 primary-color mb-2">Support</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-0">
              <ul className="p-0">
                <li className="font-17-400 primary-color font-opacity mb-2">Services</li>
                <li className="font-17-400 primary-color mb-2">Digital Marketing</li>
                <li className="font-17-400 primary-color mb-2">Content Writing</li>
                <li className="font-17-400 primary-color mb-2">SEO for Business</li>
                <li className="font-17-400 primary-color mb-2">UI Design</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-0">
              <ul className="p-0">
                <li className="font-17-400 primary-color font-opacity mb-2">Legal</li>
                <li className="font-17-400 primary-color mb-2">Privacy Policy</li>
                <li className="font-17-400 primary-color mb-2">Terms & Conditions</li>
                <li className="font-17-400 primary-color mb-2">Return Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </footer>
  )
}

export default Footer