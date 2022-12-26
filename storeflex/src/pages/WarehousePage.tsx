import React from 'react';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import WarehouseInfo from '../components/panels/warehouseInfo/warehouseinfo';
import Footer from '../components/footer/footer';

const WarehousePage = (props) => {
    return(
      <AppContainer>
      <TopNavBar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={<WarehouseInfo  action={props?.id} />}
      />
      <Footer/>
  </AppContainer>
  )
}

export default WarehousePage;