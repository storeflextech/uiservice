import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Container from '@mui/material/Container';
import { TextField, Typography, Avatar, Box, Button, Link, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';
import { validateEmail, validatePassword } from '../utils/CommonUtils';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";

const SignIn = () => {

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "storeflex",
      scope: 'email',
    });
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",

  });

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validation = (values: any) => {
    console.log("Values==", values)
    let errors = {
      email: "",
      password: ""
    };

    //Email validation check
    if (!values.email) {
      errors.email = "Email is required"
    }
    else if (!validateEmail(values.email)) {
      errors.email = "Enter a valid mail"
    }

    //password validation check
    if (!values.password) {
      errors.password = "Password is required."
    }
    else if (!validatePassword(values.password)) {
      errors.password = "Enter valid password"
    }
    return errors;
  }

  const navigate = useNavigate();
  const submitSignIn = () => {
    setErrors(validation(values));
    navigate('/dashboard');
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  const onGoogleLoginSuccess = (user: any) => {
    console.log("Login Success====", user);
    navigate('/dashboard');
  };

  const onGoogleLoginFailure = (err: any) => {
    console.error("Login Failure", err)
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className='c-box-shadow p-no'>
      <div className='sf-aap-bar'> 
        <div className='font-white p-md f-40px'><b>
        Sign in
          </b></div>
      </div>
      <div className='p-md'>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}> </Grid>
              <Grid item xs={12}>
                <TextField
                  // margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-red">{errors.password}</p>}
              </Grid>
              <div>
                <div className='p-top-sm'>

                  <CheckBoxR />
                  <span className='font-gray font-12px'>This is a public or shared device.</span>
                </div>
                <div className='p-top-md'>
                  <div className='font-12px'>
                    <span className='font-gray'>By signing in. I agree to the Expedia </span>
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
              </div>
            </Box>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xs-12">
                  <div className="form-input rounded-buttons">
                    <button onClick={() => {submitSignIn()}}
                        className="btn primary-btn rounded-full"
                        type="submit"
                        >
                    Sign In
                    </button>
                  </div>
              </div>
            </div>
            <div className='font-12px p-top-md'>
              <Link href="#" underline="none">{'Forgot password'}</Link>
            </div>
            <div className='font-12px p-top-md'>
              <span className='font-gray'>Don't have an account? </span>
              <Link href="/signup" underline="none">{'Creat one'}</Link>
            </div>
            <div className='font-12px p-top-lg'>
              <span className='font-gray'> Or continue with </span>
            </div><div className='font-12px p-top-md'>
              <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 4 }}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
                  buttonText=" Google"
                  onSuccess={onGoogleLoginSuccess}
                  onFailure={onGoogleLoginFailure}
                  cookiePolicy={'single_host_origin'}
                />
              </Grid>
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default SignIn;