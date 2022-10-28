import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Container from '@mui/material/Container';
import { TextField, Typography, Avatar, Box, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {validateCharacterLength, validateSpecialCharExistance, validateEmail, validatePassword} from '../utils/CommonUtils';
import {} from '../utils/CommonUtils';
const SignUp = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  
  const validation = (values: any) => {
    console.log("Values==", values)
    let errors = {
      firstName: '',
      lastName: "",
      email: "",
      password: ""
    };
    
    return errors;
  }

  const navigate = useNavigate();
  const onSignUp = () => {
    setErrors(validation(values));
    // navigate('addprofile');
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  //Validate First name
  const validateFirstName = (event:any) => {
   
    const firstNameTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    // console.log("Name is ",firstNameTemp)
    if (!firstNameTemp) {
      errors.firstName = "*Firstname is required."
    } else if (!validateCharacterLength(firstNameTemp, 4, 50)) {
      errors.firstName = "Firstname should have atleast 4 letters and should not grater than 50"
    }
    else if (!validateSpecialCharExistance(firstNameTemp)) {
      errors.firstName = "Firstname should not contain any special character or number "
    }else{
      errors.firstName=""
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
    errors.lastName = "*Lastname is required."
  } else if (!validateCharacterLength(lastNameTemp, 2, 30)) {
    errors.lastName = "Lastname should have atleast 2 letters and should not grater than 30"
  }
  else if (!validateSpecialCharExistance(lastNameTemp)) {
    errors.lastName = "Lastname should not contain any special character or number "
  }else{
    errors.lastName = ""
  }
}

//Validate Email
const validateEmailId = (event:any) => {
  const emailTemp = event.target.value;
  setValues({
    ...values,
    [event.target.name] : event.target.value,
  });
  if (!emailTemp) {
    errors.email = "*Email is required."
  }
  else if (!validateEmail(emailTemp)) {
    errors.email = "Enter a valid mail"
  }else{
    errors.email = ""
  }

}

//ValidatePassword
const passwordValidation = (event:any) => {
  const passwordTemp = event.target.value;
  setValues({
    ...values,
    [event.target.name] : event.target.value,
  });
  if (!passwordTemp) {
    errors.password = "*Password is required."
  }
  else if (!validatePassword(passwordTemp)) {
    errors.password = "Enter valid password"
  }
  else{
    errors.password = ""
  }

}
  
  return (
    <Container component="main" maxWidth="xs" className='c-box-shadow p-no'>
      <div className='blue-gradient'>
        <div className='font-white p-md'><b>
          <Typography component="h1" variant="h4">Sign up</Typography>
        </b></div>
      </div>
      <div className='p-md'>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  className={errors.firstName ? "border-red" : ""}
                  // required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={validateFirstName}
                  autoFocus
                />
                {errors.firstName && <p className="text-red">{errors.firstName}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                className={errors.lastName ? "border-red" : ""}
                  // required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={validateLastName}
                  autoFocus
                />
                {errors.lastName && <p className="text-red">{errors.lastName}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                className={errors.email ? "border-red" : ""}
                  // required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={validateEmailId}
                />
                {errors.email && <p className="text-red">{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                className={errors.password ? "border-red" : ""}
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={passwordValidation}
                />
                {errors.password && <p className="text-red">{errors.password}</p>}
              </Grid>
              <div className='p-top-sm'>
                <CheckBoxR />
                <span className='font-gray font-12px'>This is a public or shared device.</span>
              </div>
            </Grid>
            <div className='p-top-md'>
              <div className='font-12px'>
                <span className='font-gray'>By creating and account. I agree to the Expedia </span>
                <span>
                  <Link href="#" underline="none">{'Terms and Condition.'}</Link>
                </span>
              </div>
              <div className='font-12px'>
                <Link href="#" underline="none">{'Privacy Statement'}</Link>
                <span className='font-gray'>{' and '}</span>
                <Link href="#" underline="none">{'Expedia Rewards Terms and Conditions.'}</Link>
              </div>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 4 }}
              onClick={() => { onSignUp() }}
            >
              Sign Up
            </Button>
          </Box>
          <div className='font-12px p-top-md'>
            <span className='font-gray'>Already have an account?  </span>
            <Link href="/signin" underline="none">{'Sign in'}</Link>
          </div>
          <div className='font-12px p-top-md'>
            <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 4 }}>
              <Grid item ><AppleIcon /></Grid>
              <Grid item ><FacebookIcon color="primary" /></Grid>
              <Grid item ><GoogleIcon color="success" /></Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default SignUp;