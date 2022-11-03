import React from 'react';
import { Box } from '@mui/material';
import Dashboards from '../components/panels/dashboards/dashboards';
import DashboardChart from '../components/panels/chart/dashboardChart';
// import { ProfileMenu } from '../components/atoms/menu/menu';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import AddStore from './addstore';
import Footer from '../cPanel/components/Footer';
import { getUserType } from '../utils/CommonUtils';

const AddWarehouse = () => {
    // const profileImgUrl ="../../../static/images/AVT_1.png";
    return (
        <AppContainer>
            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={
                    <div className='c-box-shadow-blue'>
                        <AddStore />
                    </div>
                }
            />
        </AppContainer>
    )
}

export default AddWarehouse;
