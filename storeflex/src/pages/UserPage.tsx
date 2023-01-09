import React from 'react';
import AddUser from '../components/atoms/adduser/AddUser';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import TopNavBar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';
import SideNavBar from '../components/navbar/SideNavBar';
import { getUserType } from '../utils/CommonUtils';
import UserInfo from '../components/user/userInfo';

const UserPage = (props) => {
    return(
      <AppContainer>
      <TopNavBar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={<UserInfo  action={props?.id} />}
      />
      <Footer/>
  </AppContainer>
  )
}

export default UserPage;