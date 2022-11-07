import React from 'react';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-us">
        {/* <!--======  Start Section Title Three ======--> */}
        <div className="section-title-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h5>Contact Us</h5>
                  <h2 className="fw-bold">Need Any Help?</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!--====== End Section Title Three ======--> */}
        <div className="container">
          <div className="contact-head">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="form-main">
                    <form className="form" method="post" action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input name="name" type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input name="subject" type="text" placeholder="Your Subject" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input name="email" type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input name="phone" type="text" placeholder="Your Phone" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group message">
                            <textarea name="message" placeholder="Your Message"></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group light-rounded-buttons">
                            <button type="submit" className="btn primary-btn">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="contact-info">
                    <div className="single-head">
                      <div className="single-info">
                        <i className="lni lni-map-marker"></i>
                        <ul>
                          <li><span>Smart HUB</span></li>
                          <li>76/A, Green valle, Califonia <br />United State</li>
                        </ul>
                      </div>
                      <div className="single-info">
                        <a href="mailto:support@storeflex.com"><i className="lni lni-envelope"></i></a>
                        <ul>
                          <li><span>Mail Us</span></li>
                          <li>
                            <a href="mailto:support@storeflex.com"> support@storeflex.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;