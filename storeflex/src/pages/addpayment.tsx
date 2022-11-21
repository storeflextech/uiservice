import React from 'react';
import { Box, Container } from '@mui/material';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import TopNavbar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';
import SideNavBar from '../components/navbar/SideNavBar';
import { getUserType } from '../utils/CommonUtils';

const AddPayment = () => {
    return(
        <>
            <AppContainer>
                <TopNavbar/>
                <SplitPaneContainer
                left = {<SideNavBar userType={getUserType()}/>}
                right = {
                    <Container component="main" maxWidth="xl" className='p-no'>
                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>
                                 Add Payment Details
                            </div>
                        </Box>
                    </div>
                    </Container>
                }
                />
            </AppContainer>
            <Footer/>

           
        </>
    )
}

export default AddPayment;
