import React, {useState} from 'react';
import {  Box, Grid, Container ,TextareaAutosize, Button } from '@mui/material';
import InputBox from '../components/atoms/textfield/InputBox';
import AddressDetails from '../components/atoms/addressforms/AddressDetails';
import {BusinessDetails} from '../utils/ResponseSchema';
import AddStore from '../components/panels/warehouseInfo/addstore';

const storeData = require('../mockData/storeinfoData.json');

const AddProfileTemp = () => {

  const data = storeData.BUSINESS_PROFILE;
  const profile = data.businessInfo as BusinessDetails;
  const [businessProfile, setBusinessProfile] = useState(profile);
  const [profileSaved, setProfileSaved] = useState(false);

  const saveBusinessInfo = () => {
    setProfileSaved(true);
  }

  const showSavedProfile = () => {
    return(
      <div className='f-14px'>
        <div>
            <span>Business Id : </span>
            <span>{businessProfile.businessid}</span>
        </div>
        <div>
            <span>Company : </span>
            <span>{businessProfile.name}</span>
        </div>
        <div>
            <span>Address : </span>
            <span>
              {`${businessProfile.address} : ${businessProfile.city} : ${businessProfile.state} : ${businessProfile.zip}`}
            </span>
        </div>
        <div>
            <span>Contact : </span>
            <span>{businessProfile.phone}</span>
        </div>
      </div>
    )
    // 
  }

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

    return (
        <>
        <Container component="main" maxWidth="md" className='p-no'>
        <Box sx={{ backgroundColor: '#F8F9F9' }} className='m-top-md m-bot-md'>
        <div className='c-box-shadow-blue  m-bot-md'>
          <div className='blue-gradient'>
            <div className='font-white p-sm f-18px f-bold'>Business Information </div>
          </div>
          <div className='p-md'>
            {profileSaved && showSavedProfile()}
            {!profileSaved &&
            <div>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
              <Grid item xs={6}>
                <InputBox data={{name:'companyname', label:'Company Name' , value: businessProfile.name}}/>
              </Grid>
              <Grid item xs={6}>
                <InputBox data={{name:'companyurl', label:'Company URL',  value: businessProfile.weburl}}/>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
              <Grid item xs={6}>
                <InputBox data={{name:'phone', label:'Business Phone*', value: businessProfile.phone}}/>
              </Grid>
              <Grid item xs={6}>
                <InputBox data={{name:'gstid', label:'GST Number*', value: businessProfile.gstn}}/>
              </Grid>
            </Grid>
            </div>}
          </div>
        </div>
        {!profileSaved && 
        <div>
          <div className='c-box-shadow-blue m-bot-lg'>
            <div className='blue-gradient m-bot-md'>
              <div className='font-white p-sm f-18px f-bold'>Business Address</div>
            </div>
            <div className='p-md'>
            <div>{
              <AddressDetails 
                addresLine1={businessProfile.address}
                city={businessProfile.city}
                state={businessProfile.state}
                zip={businessProfile.zip}
                country={businessProfile.country}
                countryCode={'01'}
            />}</div>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
              <Grid item xs={12}>
              <div> Business Description </div>
              </Grid>
              <Grid item xs={12}>
              <TextareaAutosize
                  minRows={3}
                  maxRows={4}
                  aria-label='Add your business description'
                  defaultValue='Add your business description'
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
            </div>
          </div>
          <div className='p-top-md align-c'>
              <Button variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Button variant="contained" onClick={() => { saveBusinessInfo() }}> Save </Button>
          </div>
          </div>
        }
        {showStoreDetails()}
        </Box>
        </Container>
        </>
    );
}

export default AddProfileTemp;