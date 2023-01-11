import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../atoms/addressforms/AddressDetails';
import InputBox from '../atoms/textfield/InputBox';
import { UserType } from '../atoms/adduser/UserHelper';
import { validateCharacterLength, validateSpecialCharExistance, validateEmail } from '../../../src/utils/CommonUtils';
import { Button } from '@mui/material';
import GetCompany from '../atoms/company/GetCompany';
import { UploadImage } from '../atoms/image/image';
import { UserPostData } from '../../api/ApiConfig';
import { InputError } from '../atoms/textfield/InputError';

let firstNameErr, phoneErr, lastNameErr, emailErr;
const AddUser = () => {
  
  const [userPostInfo , setUserPostInfo] = useState<UserPostData>();
  //Validate First name
  const validateFirstName = (event: any) => {
    const firstNameTemp = event.target.value;
    if (!firstNameTemp) {
      firstNameErr = "*Firstname is required."
    } else if (!validateCharacterLength(firstNameTemp, 4, 50)) {
      firstNameErr = "Firstname should have atleast 4 letters and should not grater than 50"
    }
    else if (!validateSpecialCharExistance(firstNameTemp)) {
      firstNameErr = "Firstname should not contain any special character or number "
    } else {
      firstNameErr = '';
    }
    console.log(' >>>>> ', firstNameErr);
    // userPostInfo.firstName = firstName;
    setUserPostInfo({...userPostInfo, firstName: firstNameTemp });
  }
  //Validate Last Name
  const validateLastName = (event: any) => {
    const lastNameTemp = event.target.value;
    if (!lastNameTemp) {
      lastNameErr = "*Lastname is required."
    } else if (!validateCharacterLength(lastNameTemp, 2, 30)) {
      lastNameErr = "Lastname should have atleast 2 letters and should not grater than 30"
    }
    else if (!validateSpecialCharExistance(lastNameTemp)) {
      lastNameErr = "Lastname should not contain any special character or number"
    } else {
      lastNameErr = '';
    }
    // userPostInfo?.lastName = lastNameTemp;
    setUserPostInfo({...userPostInfo, lastName: lastNameTemp });
  }
  //Validate Phone
  const validatePhone = (event: any) => {
    const phoneTemp = event.target.value;
    if (!phoneTemp) {
      phoneErr = "*Phone is required."
    } else if (!validateCharacterLength(phoneTemp, 10, 10)) {
      phoneErr = "Phone Number should contains 10 characters"
    }
    else if (!validateSpecialCharExistance(phoneTemp)) {
      phoneErr = "Phone number should not contain any special characters"
    } else {
      phoneErr = '';
    }
    // userPostInfo?.mobileNo = phoneTemp;
    setUserPostInfo({...userPostInfo, mobileNo: phoneTemp});
  }

  //Validate Email
  const onEmailChanges = (event: any) => {
    const emailTemp = event.target.value;
      if (!emailTemp) {
        emailErr = "This field can not be empty";
      }
      else if (validateEmail(emailTemp)) {
        emailErr = '';
      } else {
        emailErr = 'Enter a valid Email'
      }
    // userPostInfo?.email = emailTemp;
    setUserPostInfo({...userPostInfo, email: emailTemp});
  }
  const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(' #### name ', name);
    console.log(' #### name ', value);
  }
  const [imageData, setImageData] = useState<File>();

  const onPhotoUploadChange = (file: any) => {
    if (file) {
        setImageData(file);
    }
  }

  const onUserTypeUpdate = (userType: string) => {
    console.log(' << onUserTypeUpdate >> ' , userType);
  }

  const onCompanyChange = (id: string) => {
    console.log(' << onCompanyChange >> ' , id);
  }
  const selectDetails = () => {
    console.log( firstNameErr, ' <<>>> ', userPostInfo);
    return (
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid item xs={5}>
          <div> User Type </div>
          <div className='p-top-md'>
            {<UserType defaultUser='' onUpdate={onUserTypeUpdate}/>}

            <div className='p-top-md'>
            <InputBox data={{ name: 'firstname', label: 'First  Name*', value: userPostInfo?.firstName }}
              onChange={validateFirstName} onBlur={handelOnBlur}
            />
             <InputError errorText={firstNameErr} />

            <InputBox data={{ name: 'phone', label: 'Phone*', value: userPostInfo?.mobileNo }}
              onChange={validatePhone} onBlur={handelOnBlur}
            />
            <InputError errorText={phoneErr} />
            </div>
          </div>
        </Grid>

       <Grid item xs={4}>
          <div>Company</div>
          <div className='p-top-md'>
            {<GetCompany onCompanyChange={onCompanyChange}/>}
            <div className='p-top-md'>
            <InputBox data={{ name: 'lastname', label: 'Last  Name*', value: userPostInfo?.lastName}}
              onChange={validateLastName} onBlur={handelOnBlur}
            />
            <InputError errorText={lastNameErr} />
            </div>
            <InputBox data={{ name: 'email', label: 'Email*', value: userPostInfo?.email }}
              onChange={onEmailChanges} onBlur={handelOnBlur}
            />
            <InputError errorText={emailErr} />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div>Profile Photo (optional)</div>
          <div className='p-top-md'>
          <UploadImage name={'companyphoto'} onImageChange={onPhotoUploadChange} />
          </div>
        </Grid>
        
      </Grid>
    )
  }

  const userInfo = () => {
    return (
      <div className='p-top-md'>
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
          
          </Grid>
          <Grid item xs={4}>
        </Grid>
      </div>

    )
  }
  const addAddress = () => {
    return (
      <div className='p-top-md'>
        <div>{
          <AddressDetails
            countryCode={'01'}
          />}</div>
      </div>
    )
  }

  return (
    <div className='c-box-shadow-blue m-bot-md'>
      <div className='primary-gradient'>
        <div className='font-white p-md f-18px f-bold'>Add User</div>
      </div>
      <div className='p-md'>
        {selectDetails()}
        {userInfo()}
        {addAddress()}
      </div>
      <div className='p-top-md align-c'>
        <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => { }}> Save </Button>
      </div>
    </div>
  );
}

export default AddUser;
