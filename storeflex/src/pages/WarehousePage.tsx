import React from 'react';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer, BoxContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import WarehouseInfo from '../components/panels/warehouseInfo/warehouseinfo';

const WarehousePage = (props) => {
    return(
      <AppContainer>
      <TopNavbar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={
            <BoxContainer>
                 <WarehouseInfo  action={props?.id} />
            </BoxContainer>   
          }
      />
  </AppContainer>
  )
}

export default WarehousePage;