import React from 'react';
import { useNavigate } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import { PAGES } from '../../utils/Constants';
import { getUserLoggedIn } from '../../utils/CommonUtils';

const Footer = () => {
  const navigate = useNavigate();
  const onLinkClick = (url) => {
    navigate(url);
  }
  return (
    <>
      <section className="footer-area footer-five">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="sf-footer-container">
                {/*<div className="m-bot-md text-center">
                  <a href="/home">
                  <img src="assets/images/white-logo.jpg" alt="Logo" />
                  </a>
                </div>
                 <!-- footer logo --> 
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                  has been. </p>*/}
                <div className="social text-center mt-60">

                  <ul>
                    <li>
                      <h4>Follow Us On</h4>
                    </li>
                    <li>
                      <a href="javascript:void(0)"> <i className="lni lni-facebook-filled"></i> </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"> <i className="lni lni-twitter-original"></i> </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"> <i className="lni lni-instagram-filled"></i> </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a>
                    </li>
                  </ul></div>
                {/* <!-- social --> */}
              </div>
              {getUserLoggedIn() ?
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.TERMSANDCONDITIONS.path) }}>Terms of condition</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.PRIVACYPOLICY.path) }}>Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.FAQ.path) }}>FAQ</Nav.Link>
                  </Nav.Item>
                </Nav>
                :
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.TERMSANDCONDITIONS.path) }}>Terms of condition</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.PRIVACYPOLICY.path) }}>Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.FAQ.path) }}>FAQ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => { onLinkClick(PAGES.SignIn.adminPath) }}>Administrator Login</Nav.Link>
                  </Nav.Item>
                </Nav>
              }
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p className="text">Copyright © 2023 Store Flex. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;