import React from 'react';
import BusinessInfo from '../components/panels/businessinfo/businessinfo';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';

const BusinessPage = (props) => {
    return(
      <AppContainer>
      <TopNavbar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={
              <div>
                  <BusinessInfo  action={props?.id} />
              </div>    
          }
      />
  </AppContainer>
  )
}

export default BusinessPage;