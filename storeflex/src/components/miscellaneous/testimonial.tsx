import React from 'react';

const Testimonial = () => {
    return (
      <>
      <section id="testimonial" className="testimonial-6">
        <img className="testimonial-patern1" src="assets/images/testimonial/testi-patern.svg" alt="#" />
        <img className="testimonial-patern2" src="assets/images/testimonial/testi-patern.svg" alt="#" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="testimonial-slider">
                {/* <!-- Start Single Testimonial --> */}
                <div className="single-testimonial">
                  <div className="text">
                    <div className="brand-icon">
                      <img src="assets/images/testimonial/brand1.svg" alt="Logo" />
                    </div>
                    <p>
                      "It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout. The point of using Lorem Ipsum is that it has"
                    </p>
                  </div>
                  <div className="author">
                    <img src="assets/images/testimonial/testi1.jpg" alt="#" />
                    <h4 className="name">
                      Musharof Chowdhury
                      <span className="deg">CEO - GrayGrids</span>
                    </h4>
                  </div>
                </div>
                {/* <!-- End Single Testimonial --> */}
                {/* <!-- Start Single Testimonial --> */}
                <div className="single-testimonial">
                  <div className="text">
                    <div className="brand-icon">
                      <img src="assets/images/testimonial/brand2.svg" alt="Logo" />
                    </div>
                    <p>
                      "It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout. The point of using Lorem Ipsum is that it has"
                    </p>
                  </div>
                  <div className="author">
                    <img src="assets/images/testimonial/testi2.jpg" alt="#" />
                    <h4 className="name">
                      Musharof Chowdhury
                      <span className="deg">CEO - Ayro UI</span>
                    </h4>
                  </div>
                </div>
                {/* <!-- End Single Testimonial --> */}
                {/* <!-- Start Single Testimonial --> */}
                <div className="single-testimonial">
                  <div className="text">
                    <div className="brand-icon">
                      <img src="assets/images/testimonial/brand3.svg" alt="Logo" />
                    </div>
                    <p>
                      "It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout. The point of using Lorem Ipsum is that it has"
                    </p>
                  </div>
                  <div className="author">
                    <img src="assets/images/testimonial/testi1.jpg" alt="#" />
                    <h4 className="name">
                      Musharof Chowdhury
                      <span className="deg">CEO - LineIcons</span>
                    </h4>
                  </div>
                </div>
                {/* <!-- End Single Testimonial --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};
export default Testimonial;