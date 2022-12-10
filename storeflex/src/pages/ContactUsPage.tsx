import React from 'react';
import { Box, Container } from '@mui/material';
import ContactUs from '../components/panels/contactus/ContactUs';

const ContactUsPage = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            <div className='c-box-shadow-blue'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                {<ContactUs />}
                </Box>
            </div>
            </Container>
        </>
    )
}

export default ContactUsPage;
