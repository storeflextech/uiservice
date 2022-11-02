import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../addressforms/AddressDetails';
import InputBox from '../../atoms/textfield/InputBox';
import { UserType, CompanyName } from './UserHelper';
import {validateCharacterLength, validateSpecialCharExistance,} from '../../../../src/utils/CommonUtils';

const AddUser = () => {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
      });
      const [errors, setErrors] = useState({
        FirstName: "",
        LastName: "",
    
      });

    //Validate First name
  const validateFirstName = (event:any) => {
   
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
    }else{
      errors.FirstName=""
      document.getElementsByName("firstname")[0].style.border = "2px solid dodgerblue"
    }

  }
  //Validate Last Name
  const validateLastName = (event:any) => {
    const lastNameTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name] : event.target.value,
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
    }else{
      errors.LastName = ""
      document.getElementsByName("lastname")[0].style.border = "2px solid dodgerblue"
    }
  }
  

    // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name, value } = e.currentTarget;
    //     console.log(' #### name ', name);
    //     console.log(' #### name ', value);
    // }
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
                    
                    <InputBox  data={{name:'firstname', label:'First  Name*' , value: values.FirstName}}
                        onChange={validateFirstName} onBlur={handelOnBlur}  
                    />
                    {errors.FirstName && <p className="text-red">{errors.FirstName}</p>}
                </Grid>
                
                <Grid item xs={6}>
                    <InputBox data={{name:'lastname', label:'Last  Name*',  value: values.LastName }}
                        onChange={validateLastName} onBlur={handelOnBlur} 
                    />
                    {errors.LastName && <p className="text-red">{errors.LastName}</p>}
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
            <div className='blue-gradient'>
                <div className='font-white p-md f-18px f-bold'>Add User</div>
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