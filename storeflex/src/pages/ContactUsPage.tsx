import React from 'react';
import { Box, Container } from '@mui/material';
import ContactUs from '../components/panels/contactus/ContactUs';

const ContactUsPage = () => {
    return(
      <>
        <section id="contact" className="contact-us">
          {<ContactUs />}
        </section>
      </>
    )
}

export default ContactUsPage;
