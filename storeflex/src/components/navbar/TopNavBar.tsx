import React from 'react';
import { useNavigate } from "react-router-dom";
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
        <ul>
        <li>
          <a className="btn primary-btn-outline" href="javascript:;" onClick={() => { goToNextPage('/signin-new') }}>Sign In</a>
        </li>
        <li>
          <a className="btn primary-btn m-right-xl" href="javascript:void(0)" >Sign Up</a>
        </li>
      </ul>
      )
    }
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" className="sf-bg-color-primary" variant="dark">
      <div className='sf-flex sf-justify w100'>
      <Container className='top-nav-container'>
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