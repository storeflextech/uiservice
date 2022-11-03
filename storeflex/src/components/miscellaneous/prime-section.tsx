import React from 'react';
import { useNavigate } from "react-router-dom";

const imgUrl = "assets/images/header/04.jpg";


const PrimeSection = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }

  return (
    <>
      <section id="hero-area" className="header-area header-ten">
        <div className="verticle-lines">
          <div className="vlines one"></div>
          <div className="vlines two"></div>
          <div className="vlines three"></div>
          <div className="vlines four"></div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 co-12">
                <div className="home-slider">
                  <div className="header-text align-items-center">
                    <h1>
                      Smarter search for space at your fingertips under one roof<br />
                      <h4><i>We are a leading market place for warehouse & logistics management solutions.</i></h4>
                      <div className="light-rounded-buttons">
                         <a href="javascript:void(0)" className="btn primary-btn"> Discover More </a>
                      </div>
                    </h1>
                    <h6>LET’S FIND WAREHOUSE YOU ARE LOOKING FOR</h6>
                  
                  
                    <div className="form-group d-flex flex-row">

                      <input className="input-search-size form-control p-2" name="name" type="text" placeholder="Enter Pin or City" style={{ height: '50px' }} />

                      <div className="light-rounded-buttons float-end m-0 p-2">
                      <a href="javascript:void(0)" onClick={() => { goToNextPage('/search-new') }} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                    </div>

                    </div>

{/* 
                    <div className="light-rounded-buttons float-end">
                      <a href="javascript:void(0)" onClick={() => { goToNextPage('/search-new') }} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                    </div> */}



                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="header-image" style={{ background: 'url(' + imgUrl + ')', float: 'right', height: '500px', width: '500px', display: 'block' }}>
                  <img className="shape3" src="assets/images/header/shape3.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrimeSection;