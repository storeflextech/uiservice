import React from 'react';
import UserDashboard from '../components/panels/dashboards/UserDashboard';
import ClientDashboard from '../components/panels/dashboards/ClientDashboard';
import CustomerDashboard from '../components/panels/dashboards/CustomerDashboard';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer, BoxContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import Footer from '../components/footer/footer';
import { USER_TYPE } from '../utils/Constants';

const DashboardPage = () => {

    const getDashboard = () => {
        const userType = getUserType();
        if(userType === USER_TYPE.SfUser) {
            return (
                <UserDashboard />
            )
        } else if(userType === USER_TYPE.SfClient) {
            return (
                <ClientDashboard />
            )
        } else {
            return (
                <CustomerDashboard />
            )
        }
    }

    return (
        <AppContainer>
            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={
                    <BoxContainer>
                        {getDashboard()}
                    </BoxContainer>
                }
            />
            <Footer />
        </AppContainer>
    )
}

export default DashboardPage;