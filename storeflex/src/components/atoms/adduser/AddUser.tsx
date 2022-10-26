import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../addressforms/AddressDetails';
import InputBox from '../../atoms/textfield/InputBox';
import { UserType, CompanyName } from './UserHelper';


const AddUser = () => {

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
    const selectDetails = () => {
        return (
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <div> User Type </div>
                    <div className='p-top-md'>
                        {<UserType />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div> Compay  </div>
                    <div className='p-top-md'>
                        {<CompanyName />}
                    </div>
                </Grid>
            </Grid>
        )
    }

    const userInfo = () => {
        return(
            <div className='p-top-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <InputBox data={{name:'firstname', label:'First  Name' , value: ''}}
                        onChange={handleOnChange} onBlur={handelOnBlur} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{name:'lastname', label:'Last  Name',  value: ''}}
                        onChange={handleOnChange} onBlur={handelOnBlur} 
                    />
                </Grid>
                </Grid>
            </div>
        )
    }
    const addAddress = () => {
        return(
            <div className='p-top-md'>
            <div>{
              <AddressDetails 
                addresLine1={''}
                city={''}
                state={''}
                zip={''}
                country={''}
            />}</div>
            </div>
        )
    }

    return(
        <div className='c-box-shadow-blue m-bot-md'>
            <div className='sf-aap-bar'>
                <div className='text-red p-lg'>Add User</div>
            </div>
            <div className='p-md'>
                {selectDetails()}
                {userInfo()}
                {addAddress()}
            </div>
        </div>
    );
}

export default AddUser;