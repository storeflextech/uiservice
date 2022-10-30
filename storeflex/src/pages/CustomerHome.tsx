import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer/footer';
import CustomerNavbar from '../components/navbar/customer-navbar';
import PrimeSection from '../components/miscellaneous/prime-section';
import Contact from '../components/miscellaneous/contact';


const CustomerHome = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }

  return (
    <div className="App">
      {<CustomerNavbar />}
      {<PrimeSection />}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <h1>Display Customer Contents Here</h1>
      </div>
      {<Contact />}
      {<Footer />}
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default CustomerHome;