import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getUserLoggedIn} from  '../../utils/CommonUtils';
import { ProfileMenu } from '../atoms/profile/profile';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNavBar = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }

  const signOut = () => {
    if(getUserLoggedIn()) {
      return (
        <div>
          <ProfileMenu isSigned={true} profileImg={'/images/face1.jpg'}/>
        </div>
      )
    } else {
      return (
        <div className="link-white align-c">
          <span><a className="sign-link p-top-5" href="/signin">Sign In</a></span>
          <span><a className="sign-link p-top-5" href="/signup">Sign Up</a></span>
        </div>
      )
    }
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" className="sf-bg-color-primary w100" variant="dark">
      <div className='sf-flex sf-justify w100'>
      <Container className='top-nav-container no-padding '>
        <Navbar.Brand href="/home">
          <span className='top-nav-logo'>
          <img src="../../assets/images/white-logo.jpg" alt="Logo" />
          </span>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='top-nav-link' href="/home#hero-area">Home</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#services">Services</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#pricing">Featured WH</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#clients">Clients</Nav.Link>
              <Nav.Link className='top-nav-link' href="/home#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
      {signOut()}
      </div>
    </Navbar>
  )
}
export default TopNavBar; 