import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import { HomePageNavBar, HpSearchSpace, HpListSpace } from '../components/panels/homepage/homepage';
import Footer from '../components/miscellaneous/footer';
import Services from '../components/miscellaneous/services';
import AboutStoreflex from '../components/miscellaneous/about-storeflex';
import Pricing from '../components/miscellaneous/pricing';
import DemoVideo from '../components/miscellaneous/demo-video';
import Team from '../components/miscellaneous/team';
import Subscription from '../components/miscellaneous/subscription';
import Testimonial from '../components/miscellaneous/testimonial';
import Contact from '../components/miscellaneous/contact';
import Brand from '../components/miscellaneous/brand';
import CustomerNavbar from '../components/navbar/customer-navbar';
import { textAlign } from '@mui/system';
import PrimeSection from '../components/miscellaneous/prime-section';


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
      {<Footer />}
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default CustomerHome;