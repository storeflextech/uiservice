import React from 'react';
import { Box, Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import Dashboards from '../components/panels/dashboards/dashboards';
import { AppMenuBar } from '../components/atoms/header/AppHeader';

const PgDashboard = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            {<MainBanner content='STORE FLEX' />}
            {<AppMenuBar />}
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

export default PgDashboard;