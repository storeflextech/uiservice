import React, {useState} from 'react';
import {  Box, Container } from '@mui/material';
import {BusinessDetails} from '../utils/ResponseSchema';
import AddStore from './addstore';
import AddProfile from '../components/panels/profile/addProfile';
import GuestNavbar from '../components/navbar/guest-navbar';

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
    return (
        <>
        <div>
          <GuestNavbar />
        </div>
       <div className="container">
          <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
          {showStoreDetails()}
          </div>
        </>
    );
}

export default BusinessInfo;