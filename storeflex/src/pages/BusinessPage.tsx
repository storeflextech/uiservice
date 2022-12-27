import React from 'react';
import BusinessInfo from '../components/panels/businessinfo/businessinfo';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import Footer from '../components/footer/footer';

const BusinessPage = (props) => {
    return(
      <AppContainer>
      <TopNavBar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={
            <BusinessInfo  action={props?.id} />
          }
      />
      <Footer/>
  </AppContainer>
  )
}

export default BusinessPage;