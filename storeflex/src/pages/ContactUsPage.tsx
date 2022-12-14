import React from "react";
import { Box, Container } from "@mui/material";
import ContactUs from "../components/panels/contactus/ContactUs";
import {
  AppContainer,
  SplitPaneContainer,
} from "../components/containers/containers";
import TopNavBar from "../components/navbar/TopNavBar";
import Footer from "../components/footer/footer";

const ContactUsPage = () => {
  return (
    <>
      <AppContainer>
        <TopNavBar />
        <SplitPaneContainer
          left={<></>}
          right={
            <section id="contact" className="contact-us">
              {<ContactUs />}
            </section>
          }
        />
        <Footer />
      </AppContainer>
    </>
  );
};

export default ContactUsPage;
