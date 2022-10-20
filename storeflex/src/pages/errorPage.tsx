import React from 'react';
import { Box, Container } from '@mui/material';
import {MainBanner} from '../components/atoms/banner/PageBanner';

const ErrorPage = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            {<MainBanner content='STORE FLEX' />}
            <div className='c-box-shadow-blue'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                    <div>
                        Error
                    </div>
                </Box>
            </div>
            </Container>
        </>
    )
}

export default ErrorPage;
