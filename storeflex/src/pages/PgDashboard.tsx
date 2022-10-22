import React from 'react';
import { Box } from '@mui/material';
import Dashboards from '../components/panels/dashboards/dashboards';
import DashboardChart from '../components/panels/chart/dashboardChart';
import { ProfileMenu } from '../components/atoms/menu/menu';
import GuestNavbar from '../components/navbar/guest-navbar';

const PgDashboard = () => {
    const profileImgUrl ="../../../static/images/AVT_1.png";
    return(
        <>
            <div>
              <GuestNavbar />
            </div>
            <div>
                <ProfileMenu isSigned={false} profileImg={profileImgUrl}/>
            </div>
            <div>
            </div>
            <div className='c-box-shadow-blue'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                    <div>
                        <Dashboards />
                        <DashboardChart />
                    </div>
                </Box>
            </div>
        </>
    )
}

export default PgDashboard;