import React from 'react';
import { Box, Container } from '@mui/material';
import {MainBanner, AppNavBar} from '../components/atoms/banner/PageBanner';
import Dashboards from '../components/panels/dashboards/dashboards';
import { ProfileMenu } from '../components/atoms/menu/menu';

const PgDashboard = () => {
    const profileImgUrl ="../../../static/images/AVT_1.png";
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            <div>
                <MainBanner content='DASHBOARD' />
                <AppNavBar content='DASHBOARD'> {<ProfileMenu isSigned={false} profileImg={profileImgUrl}/>} </AppNavBar>
            </div>
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