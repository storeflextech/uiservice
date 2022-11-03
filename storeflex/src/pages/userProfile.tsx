import React from 'react';
import { Box } from '@mui/material';
import Dashboards from '../components/panels/dashboards/dashboards';
import DashboardChart from '../components/panels/chart/dashboardChart';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import Footer from '../components/footer/footer';

const UserProfile=()=>{

    return(
        <AppContainer>
        <TopNavbar />
        <SplitPaneContainer
            left={<SideNavBar userType={getUserType()}/>}
            right={
                <div className='c-box-shadow-blue'>
                    <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                        <div>
                            <div className='p-bot-lg'>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="header">My Profile</div> 
                                            </div>
                                        </div>

                                        <div className="col-md-8">

                                        </div>
                                    </div>
                                </div>


                                {/* <DashboardChart userType={getUserType()}/> */}
                            </div>
                            {/* <Dashboards userType={getUserType()} /> */}
                        </div>
                    </Box>
                </div>
            }
        />
        <Footer />
    </AppContainer>
    )
}

export default UserProfile;