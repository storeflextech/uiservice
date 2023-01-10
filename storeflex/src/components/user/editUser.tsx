import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../atoms/addressforms/AddressDetails';
import InputBox from '../atoms/textfield/InputBox';
import { UserType } from '../atoms/adduser/UserHelper';
import { validateCharacterLength, validateSpecialCharExistance } from '../../../src/utils/CommonUtils';
import { Button } from '@mui/material';
import GetCompany from '../atoms/company/GetCompany';
import { UploadImage } from '../atoms/image/image';

const EditUser = () => {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
  });
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",

  });

  //Validate First name
  const validateFirstName = (event: any) => {

    const firstNameTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!firstNameTemp) {
      errors.FirstName = "*Firstname is required."
      document.getElementsByName("firstname")[0].style.border = " solid red";

    } else if (!validateCharacterLength(firstNameTemp, 4, 50)) {
      errors.FirstName = "Firstname should have atleast 4 letters and should not grater than 50"
      document.getElementsByName("firstname")[0].style.border = "2px solid red";
    }
    else if (!validateSpecialCharExistance(firstNameTemp)) {
      errors.FirstName = "Firstname should not contain any special character or number "
      document.getElementsByName("firstname")[0].style.border = "2px solid red";
    } else {
      errors.FirstName = ""
      document.getElementsByName("firstname")[0].style.border = "2px solid dodgerblue"
    }

  }
  //Validate Last Name
  const validateLastName = (event: any) => {
    const lastNameTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!lastNameTemp) {
      errors.LastName = "*Lastname is required."
      document.getElementsByName("lastname")[0].style.border = " solid red";
    } else if (!validateCharacterLength(lastNameTemp, 2, 30)) {
      errors.LastName = "Lastname should have atleast 2 letters and should not grater than 30"
      document.getElementsByName("lastname")[0].style.border = "2px solid red";
    }
    else if (!validateSpecialCharExistance(lastNameTemp)) {
      errors.LastName = "Lastname should not contain any special character or number "
      document.getElementsByName("lastname")[0].style.border = "2px solid red";
    } else {
      errors.LastName = ""
      document.getElementsByName("lastname")[0].style.border = "2px solid dodgerblue"
    }
  }
  //Validate Phone
  const validatePhone = (event: any) => {
    const phoneTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!phoneTemp) {
      errors.Phone = "*Phone is required."
      document.getElementsByName("phone")[0].style.border = " solid red";
    } else if (!validateCharacterLength(phoneTemp, 10, 10)) {
      errors.Phone = "Phone Number should contains 10 characters"
      document.getElementsByName("phone")[0].style.border = "2px solid red";
    }
    else if (!validateSpecialCharExistance(phoneTemp)) {
      errors.Phone = "Phone number should not contain any special characters"
      document.getElementsByName("phone")[0].style.border = "2px solid red";
    } else {
      errors.Phone = ""
      document.getElementsByName("phone")[0].style.border = "2px solid dodgerblue"
    }
  }
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const {name, value } = e.currentTarget;
  //     console.log(' #### name ', name);
  //     console.log(' #### name ', value);
  // }
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
  const selectDetails = () => {
    return (
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid item xs={5}>
          <div> User Type </div>
          <div className='p-top-md'>
            {<UserType />}

            <Grid container spacing={0} columns={{ xs: 6, sm: 12, md: 12 }}></Grid>
             <InputBox data={{ name: 'firstname', label: 'First  Name*', value: values.FirstName }}
              onChange={validateFirstName} onBlur={handelOnBlur}
            />
            {errors.FirstName && <p className="text-red">{errors.FirstName}</p>}

            <InputBox data={{ name: 'phone', label: 'Phone*', value: values.Phone }}
              onChange={validatePhone} onBlur={handelOnBlur}
            />
            {errors.Phone && <p className="text-red">{errors.Phone}</p>}


          </div>
        </Grid>

       <Grid item xs={4}>
          <div>Company</div>
          <div className='p-top-md'>
            {<GetCompany />}

            <InputBox data={{ name: 'lastname', label: 'Last  Name*', value: values.LastName }}
              onChange={validateLastName} onBlur={handelOnBlur}
            />
            {errors.LastName && <p className="text-red">{errors.LastName}</p>}
            <InputBox data={{ name: 'email', label: 'Email*', value: values.LastName }}
              onChange={validateLastName} onBlur={handelOnBlur}
            />
            {errors.LastName && <p className="text-red">{errors.LastName}</p>}
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


export default EditUser;
