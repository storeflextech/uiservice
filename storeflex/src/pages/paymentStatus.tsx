import React from 'react';
import Footer from '../components/footer/footer';
import GuestNavbar from '../components/navbar/guest-navbar';
import PaymentMsg from '../components/atoms/payment/paymentMsg';
import { type } from '@testing-library/user-event/dist/type';



const paymentStatus = () => {
  return (
    <div className="App">
      {<GuestNavbar />}
      {<PaymentMsg txStatus="success" orderAmount="100" referenceId="885704785"/>}
      
      {/* {<Footer />} */}
      
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default paymentStatus;