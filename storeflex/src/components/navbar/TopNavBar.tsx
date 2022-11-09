import React from 'react';
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }
  return (
    <>
      <section className="navbar-area navbar-one sf-bg-primary">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <div className="p-left-sm">
                <a className="navbar-brand" href="/home">
                  <img src="../../assets/images/white-logo.jpg" alt="Logo" style={{ height: '7.5vh' }} />
                </a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOne"
                  aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <a className="active page-scroll" href="#hero-area">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/home#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/home#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/home#team">Clients</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/home#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-sm-inline-block">
                  <ul>
                    <li>
                      <a className="btn primary-btn-outline" href="javascript:;" onClick={() => { goToNextPage('/signin-new') }}>Sign In</a>
                    </li>
                    <li>
                      <a className="btn primary-btn m-right-xl" href="javascript:void(0)"
                      >Sign Up</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default TopNavbar; 