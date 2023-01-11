import React, { useState } from 'react';
import { Grid } from '@mui/material';
import swal from 'sweetalert';
import AddressDetails from '../atoms/addressforms/AddressDetails';
import InputBox from '../atoms/textfield/InputBox';
import { UserType } from '../atoms/adduser/UserHelper';
import { validateCharacterLength, validateSpecialCharExistance, validateEmail, validatePhone } from '../../../src/utils/CommonUtils';
import { Button } from '@mui/material';
import GetCompany from '../atoms/company/GetCompany';
import { UploadImage } from '../atoms/image/image';
import { UserPostData } from '../../api/ApiConfig';
import { InputError } from '../atoms/textfield/InputError';
import { Address } from '../../utils/ResponseSchema';
import LoaderSpinner from '../atoms/spinner/spinner';
import Api from '../../api/Api';

let firstNameErr, phoneErr, lastNameErr, emailErr;

const AddUser = () => {
  const api = new Api();
  const [step, setStep] = useState(1);
  const [userPostInfo , setUserPostInfo] = useState<UserPostData>();
  const [isLoader, setLoaderState] = useState(false);
  
  // Address Information 
  const [addressInfo, setAddressInfo] = useState<Address>({});

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
  const onMobileNoChange = (event: any) => {
    const phoneTemp = event.target.value;
    if (!phoneTemp) {
      phoneErr = "*Phone is required."
    } else if (!validatePhone(phoneTemp)) {
      phoneErr = "Phone Number should contains 10 digit only"
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
    setUserPostInfo({...userPostInfo, roleType: userType });
    console.log(' << onUserTypeUpdate >> ' , userType);
  }

  const onCompanyChange = (id: string) => {
    setUserPostInfo({...userPostInfo, clientId: id });
    console.log(' << onCompanyChange >> ' , id);
  }

  const onAddressUpdate = (data: Address) => {
    const addressData = {} as Address;
    addressData.addressType = data.addressType;
    addressData.city = data.city;
    addressData.country = data.country;
    addressData.state = data.state;
    addressData.pincode = data.pincode;
    addressData.plotNo = data.plotNo;
    addressData.houseNo = data.houseNo;
    addressData.streetDetails = data.streetDetails;
    console.log(' <<< onAddressUpdate >>>', addressData);
    setAddressInfo(addressData);
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
              onChange={onMobileNoChange} onBlur={handelOnBlur}
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

  const upladPhoto = (imagefile?: any, clientId?: string) => {
    if (imagefile && clientId) {
        setLoaderState(true);
        api.uploadCompanyPhoto(imagefile, clientId).then((response) => {
            setLoaderState(false);
            console.log(' upladPhoto res >>>>>> ', response);
        }).catch((error) => {
            setLoaderState(false);
            console.log(' upladPhoto erroor ', error);
        });
    }
  }
  const onSave = () => {
    const postData = {} as UserPostData;
    // postData.clientId = userPostInfo?.clientId;
    // postData.roleType = userPostInfo?.roleType;
    postData.firstName = userPostInfo?.firstName;
    postData.lastName = userPostInfo?.lastName;
    postData.mobileNo = userPostInfo?.mobileNo;
    postData.email = userPostInfo?.email;
    postData.addresses = [addressInfo];

    setLoaderState(true);
      api.postUser(postData, userPostInfo?.roleType, userPostInfo?.clientId).then((resp) => {
          setLoaderState(false); setStep(3);
          if (resp && resp.methodReturnValue.clientId && imageData) {
              upladPhoto(imageData, resp.methodReturnValue.clientId);
              // for testin only upladPhoto(imageData, 'CL-166');
          }
          swal({
              text: 'Success! You have added profile',
              icon: "success",
              buttons: {
                  buttonOne: {
                      text: "OK",
                      value: "ok",
                      visible: true,
                      className: "sf-btn",
                  }
              }
          }).then(function (value) {
              if (value === "ok") { window.location.href = "/user/view#pending"; }
              else { window.location.href = "/user/view#pendig"; }
          });
          console.log(' User add res >>>>>> ', resp);
      }).catch((error) => {
          setLoaderState(false);
          console.log(' User add erroor ', error);
      });
  }

  const addAddress = () => {
    return (
      <div className='p-top-md'>
          <AddressDetails
              countryCode={'01'}
              onUpdate={onAddressUpdate}
          />
      </div>
    )
  }
  return (
    <>
      {isLoader && <LoaderSpinner />}
    
    <div className='c-box-shadow-blue m-bot-md'>
      <div className='primary-gradient'>
        <div className='font-white p-md f-18px f-bold'>Add User</div>
      </div>
      <div className='p-md'>
        {selectDetails()}
        {addAddress()}
      </div>
      <div className='p-top-md align-c'>
        <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button className="btn primary-btn sf-btn" variant="contained" onClick={onSave}> Save </Button>
      </div>
    </div>
    </>
  );
}

export default AddUser;
