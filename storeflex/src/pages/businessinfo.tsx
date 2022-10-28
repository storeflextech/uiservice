import React, {useState} from 'react';
import {BusinessDetails} from '../utils/ResponseSchema';
import AddStore from './addstore';
import AddProfile from '../components/panels/profile/addProfile';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';

const storeData = require('../mockData/storeinfoData.json');

const BusinessInfo = () => {

  const data = storeData.BUSINESS_PROFILE;
  const profile = data.businessInfo as BusinessDetails;
  const [profileSaved, setProfileSaved] = useState(false);

  const showStoreDetails = () => {
    if(profileSaved) {
      return(
        <>
          <AddStore />
        </>
      )
    } else {
      return(<> </>);
    }
   
  }

  const onBusinessInfoSave = () =>  {
    setProfileSaved(true);
  }
    return(
      <AppContainer>
      <TopNavbar />
      <SplitPaneContainer
          left={<SideNavBar />}
          right={
              <div className='c-box-shadow-blue m-left-md'>
                  <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
                    {showStoreDetails()}
              </div>    
          }
      />
  </AppContainer>
  )
}

export default BusinessInfo;