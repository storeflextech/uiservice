import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom"
import Container from '@mui/material/Container';
import { TextField, Typography, Avatar, Box, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';
import { validateCharacterLength, validateSpecialCharExistance, validateEmail, validatePassword } from '../utils/CommonUtils';
import { } from '../utils/CommonUtils';
import GoogleLogin from 'react-google-login';
import { ErrorSharp } from '@mui/icons-material';

const SignUp = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: ""
  });

  const validation = (values: any) => {
    console.log("Values==", values)
    let errors = {
      firstName: '',
      lastName: "",
      email: "",
      password: "",
      password1: ""
    };

    return errors;
  }

  // const navigate = useNavigate();
  const onSignUp = () => {
    setErrors(validation(values));
    // navigate('addprofile');
  }

  const onGoogleLoginSuccess = (user: any) => {
    console.log("Login Success====", user);
    window.location.href = '/dashboard';
  };

  const onGoogleLoginFailure = (err: any) => {
    console.error("Login Failure", err)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  //Validate First name
  const validateFirstName = (event: any) => {

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
    } else {
      errors.firstName = ""
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
      errors.lastName = "*Lastname is required."
    } else if (!validateCharacterLength(lastNameTemp, 2, 30)) {
      errors.lastName = "Lastname should have atleast 2 letters and should not grater than 30"
    }
    else if (!validateSpecialCharExistance(lastNameTemp)) {
      errors.lastName = "Lastname should not contain any special character or number "
    } else {
      errors.lastName = ""
    }
  }

  //Validate Email
  const validateEmailId = (event: any) => {
    const emailTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!emailTemp) {
      errors.email = "*Email is required."
    }
    else if (!validateEmail(emailTemp)) {
      errors.email = "Enter a valid mail"
    } else {
      errors.email = ""
    }

  }

  //ValidatePassword
  const passwordValidation = (event: any) => {
    const passwordTemp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!passwordTemp) {
      errors.password = "*Password is required."
    }
    else if (!validatePassword(passwordTemp)) {
      errors.password = "Enter valid password"
    }
    else {
      errors.password = ""
    }

  }

  const password1Validation = (event: any) => {
    const password1Temp = event.target.value;
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (!password1Temp) {
      errors.password1 = "*Please re-enter your password"
    }
    else if (values.password != password1Temp) {
      errors.password1 = "Password do not match"
    }
    else {
      errors.password1 = ""
    }

  }

  return (
    <Container component="main" maxWidth="xs" className='c-box-shadow p-no'>
      <div className='primary-gradient'>
        <div className='font-white p-md'><b>
          <Typography component="h1" variant="h4">Sign up</Typography>
        </b></div>
      </div>
      <div className='p-md'>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
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
              <Grid item xs={12}>
                <TextField
                  className={errors.password1 ? "border-red" : ""}
                  // required
                  fullWidth
                  name="password1"
                  label="Re-Enter Password"
                  type="password"
                  id="password1"
                  value={values.password1}
                  onChange={password1Validation}
                />
                {errors.password1 && <p className="text-red">{errors.password1}</p>}
              </Grid>
            </Grid>
            <div className='font-12px p-top-md'>
              <div className="form-input text-center">
                or
                <br></br><br></br>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
                  buttonText="Continue with Google"
                  onSuccess={onGoogleLoginSuccess}
                  onFailure={onGoogleLoginFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
            &nbsp;
            <div className="col-md-12">
              <div className="form-input text-center">
                <p className="text">
                  By creating an account, I agree to the Store Flex<br></br>
                  <a href="/termsandconditions">Terms and Conditions &nbsp;</a>
                  and
                  <a href="/privacypolicy">&nbsp; Privacy Policy</a>
                </p>
              </div>
            </div>
            <Button className='primary-gradient'
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
        </Box>
      </div>
    </Container>
  );
};

export default SignUp;