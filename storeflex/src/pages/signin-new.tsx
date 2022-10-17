import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
// import Container from '@mui/material/Container';
// import { TextField, Typography, Avatar, Box, Button, Link, Grid } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';
import { validateEmail, validateSignInPassword } from '../utils/CommonUtils';
// import AppleIcon from '@mui/icons-material/Apple';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import Api from '../api/Api';
import { SignInProps } from '../api/ApiConfig';

const SignInNew = () => {

  /*
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "storeflex",
      scope: 'email',
    });
  });
  */

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitSignIn = () => {
    const api = new Api();
    const emailValid = validateEmail(values.email);
    const passwordValid = validateSignInPassword(values.password);
    if (emailValid && passwordValid) {
      console.log(' Submit Signin ')
      const data: SignInProps = {
        username: 'storeflextest',
        password: 'storeflex#123'
    }
      api.signIn(data).then((response) => {
        console.log(' signIn >>>>>> ', response );
      });

    } else {
      console.log('  please provide valid  email and password ');
    }
  }


  // const onGoogleLoginSuccess = (user: any) => {
  //   console.log("Login Success====", user);
  //   navigate('/dashboard');
  // };

  // const onGoogleLoginFailure = (err: any) => {
  //   console.error("Login Failure", err)
  // };

  return (
    <section className="signin-area signin-one">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
                  <div className="signin-form form-style-two rounded-buttons">
                      <div className="row">
                        <div className="col-md-12 justify-content-center">
                            <div className="form-input justify-content-center">
                            <img src="assets/images/white-logo.jpg" alt="Logo"  style={{height:'8vh'}}/>
                              <label>Your account will be under this email</label>
                              <div className="input-items default">
                                  <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                                  <i className="lni lni-envelope"></i>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-input">
                              <label>Password for your account</label>
                              <div className="input-items default">
                                  <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                                  <i className="lni lni-key"></i>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-input rounded-buttons">
                              <button onClick={() => {submitSignIn()}}
                                  className="btn primary-btn rounded-full"
                                  type="submit"
                                  >
                              Sign In!
                              </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-input rounded-buttons">
                              <button
                                  className="btn primary-btn-outline rounded-full"
                                  type="submit"
                                  >
                              Sign Up
                              </button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-input text-center">
                              <p className="text">
                                  By signing in you agree with the
                                  <a href="javascript:void(0)">Terms and Conditions</a>
                                  and
                                  <a href="javascript:void(0)">Privacy</a>
                              </p>
                            </div>
                        </div>
                      </div>
                  </div>
            </div>
          </div>
      </div>
    </section>
  )
};

export default SignInNew;