import React, {useState} from 'react';
import {  Box, Container } from '@mui/material';
import PageBanner from '../components/atoms/banner/PageBanner';
import {BusinessDetails} from '../utils/ResponseSchema';
import AddStore from './addstore';
import AddProfile from '../components/panels/profile/addProfile';

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
        <Container component="main" maxWidth="md" className='p-no'>
        {<PageBanner content='GROW YOUR BUSINESS WITH US'/>}
        <Box sx={{ backgroundColor: '#F8F9F9' }} className='m-top-md m-bot-md'>
        {
          <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
        }
        {showStoreDetails()}
        </Box>
        </Container>
        </>
    );
}

export default BusinessInfo;