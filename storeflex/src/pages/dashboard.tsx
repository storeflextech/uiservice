import React from 'react';
import { Box, Container } from '@mui/material';
import PageBanner from '../components/atoms/banner/PageBanner';
import Dashboards from '../components/panels/dashboards/dashboards';

const Dashboard = () => {
    return(
        <>
            <Container component="main" maxWidth="md" className='p-no'>
            {<PageBanner content='STORE FLEX'/>}
            <div className='c-box-shadow-blue'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                    <div>
                        <Dashboards />
                    </div>
                </Box>
            </div>
            </Container>
        </>
    )
}

export default Dashboard;