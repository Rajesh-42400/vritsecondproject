import React from 'react'


const Header = () => {
  return (
    <header>
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"
              ><img src='/src/assets/logo/logo.svg' /></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link font-15-700 primary-color"
                    aria-current="page"
                    href="#"
                    >Demos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-15-700 primary-color" href="#"
                    >Pages</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link font-15-700 primary-color" href="#"
                    >Support</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link font-15-700 primary-color" href="#"
                    >Contact</a
                  >
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="primary-btn menu-btn secondary-color font-17-700"
                  type="submit"
                >
                  Get started free
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </header>
  )
}

export default Header