import React from 'react';
import { Box, Container } from '@mui/material';

const ErrorPage = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            <div className='c-box-shadow-blue text-center'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                    <div>
                        <h3>User ID or Password is Incorrect!!!</h3>
                    </div>
                    <p><h4>Please try again</h4></p>
                </Box>
            </div>
            </Container>
        </>
    )
}

export default ErrorPage;
