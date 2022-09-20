import React, { useState } from 'react';
import { Grid ,TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import {BusinessDetails} from '../../../utils/ResponseSchema';

interface AddProfileProps {
    profileData: BusinessDetails;
    onSave?(isSaved: boolean): void;
}

const AddProfile = (props: AddProfileProps) => {

    const profile = {} as BusinessDetails; 
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [profileSaved, setProfileSaved] = useState(false);

    const onProfileSave = (isSaved: boolean) => {
        if(props?.onSave) {
            return props.onSave(true);
        } else {
            console.log(' No Event ');
        }
    }
    const saveBusinessInfo = () => {
        const profile = props?.profileData as BusinessDetails; 
        setBusinessProfile(profile);
        setProfileSaved(true);
        onProfileSave(true)
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }
    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
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
    }
    const showAddProfile = () => {
        return(
            <div className='m-bot-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <InputBox data={{name:'companyname', label:'Company Name' , value: businessProfile.name}}
                        onChange={handleOnChange} onBlur={handelOnBlur} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{name:'companyurl', label:'Company URL',  value: businessProfile.weburl}}
                        onChange={handleOnChange} onBlur={handelOnBlur} 
                    />
                </Grid>
                </Grid>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <InputBox data={{name:'phone', label:'Business Phone*', value: businessProfile.phone}}
                        onChange={handleOnChange} onBlur={handelOnBlur}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{name:'gstid', label:'GST Number*', value: businessProfile.gstn}}
                        onChange={handleOnChange} onBlur={handelOnBlur}
                    />
                </Grid>
                </Grid>
            </div>
        )
    }

    const showBusinessAddress = () => {
        return(
            <div className='p-md'>
            <div>{
              <AddressDetails 
                addresLine1={businessProfile.address}
                city={businessProfile.city}
                state={businessProfile.state}
                zip={businessProfile.zip}
                country={businessProfile.country}
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
        )
    }
    const showBusinessInfo = () => {
        if(profileSaved) {
            return(
                <>{showSavedProfile()}</>
            )
        } else {
            return(
                <>
                {showAddProfile()}
                <div className='c-box-shadow-blue m-bot-lg'>
                    <div className='blue-gradient m-bot-md'>
                    <div className='font-white p-md f-18px f-bold'>Business Address</div>
                    </div>
                    {showBusinessAddress()}
                </div>
                <div className='p-top-md align-c'>
                    <Button variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Button variant="contained" onClick={() => { saveBusinessInfo() }}> Save </Button>
                </div>
                </>
            )
        }
    }
    return(
        <div className='c-box-shadow-blue m-bot-md'>
            <div className='blue-gradient'>
                <div className='font-white p-md f-18px f-bold'>Business Information</div>
            </div>
            <div className='p-md'>
                {showBusinessInfo()}
            </div>
        </div>
    );
}

export default AddProfile;