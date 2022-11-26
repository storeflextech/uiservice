import React from 'react';
import BusinessInfo from '../components/panels/businessinfo/businessinfo';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer, BoxContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';

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
  </AppContainer>
  )
}

export default BusinessPage;