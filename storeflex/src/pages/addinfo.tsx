import React from 'react';
import { Container } from '@mui/material';
import AddUser from '../components/atoms/adduser/AddUser';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import TopNavBar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';
import SideNavBar from '../components/navbar/SideNavBar';
import { getUserType } from '../utils/CommonUtils';

const AddInfo = () => {
    return(
        <>
            <AppContainer>
                <TopNavBar/>
                <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={<AddUser />}
                />
            </AppContainer>
            <Footer/>
        </>
    )
}

export default AddInfo;