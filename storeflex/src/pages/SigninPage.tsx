import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validateMinLen, setUserLoggedIn, getRedirectionPage, sessionStorageSet } from '../utils/CommonUtils';
import Api from '../api/Api';
import { SignInPost } from '../api/ApiConfig';
import { USER_TYPE, PAGES, SESSION_TYPE } from '../utils/Constants';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import { LoaderFull } from '../components/atoms/loader/loader';

const SignInPage = () => {
  const navigate = useNavigate();
  const api = new Api();
  const [loader, setLoader] = useState(false);

  let userType = '';

  const url = window.location.href;

  if (url && url.indexOf(PAGES.SignIn.adminPath) !== -1) {
    userType = USER_TYPE.SfUser;
  } else {
    userType = USER_TYPE.SfClient;
  }

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
    username: "",
  });

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const SubmitSignUp = () => {
    window.location.href = '/signup';
  }

  const submitSignIn = () => {
    const emailValid = validateMinLen(values.email, true);
    const passwordValid = validateMinLen(values.password, true);
    setUserLoggedIn('false');
    if (emailValid && passwordValid) {
      const data: SignInPost = {
        username: values.username,
        emailId: values.email,
        password: values.password
      }
      setLoader(true);
      api.signIn(data, userType).then((response) => {
        setLoader(false);
        if (response?.methodReturnValue?.redirectUrl) {
          setUserLoggedIn('true');
          sessionStorageSet(response.methodReturnValue, SESSION_TYPE.login_resp);
          const redirectUrl = getRedirectionPage(response?.methodReturnValue?.redirectUrl)
          window.location.href = redirectUrl;
        } else {
          setUserLoggedIn('false');
          window.location.href = '/error';
        }
      });
    } else {
      setLoader(false);
      console.log('  please provide valid  email and password ');
    }
  }

  const onGoogleLoginSuccess = (user: any) => {
    console.log("Login Success====", user);
    navigate('/dashboard');
  };

  const onGoogleLoginFailure = (err: any) => {
    console.error("Login Failure", err)
  };

  return (
    <>
      {loader && <LoaderFull />}
      <section className="signin-area signin-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="signin-form form-style-two rounded-buttons">
                <div className="row">
                  <div className="col-md-12 justify-content-center">
                    <div className="form-input justify-content-center">
                      <a href="/home"><img src="assets/images/white-logo.jpg" alt="Logo" style={{ height: '8vh' }} /></a>
                      <h4 className='pb-3' style={{ textAlign: 'center' }}>
                        Storeflex <span>{userType === USER_TYPE.SfUser ? 'Admin' : 'User'}</span>  Login</h4>
                      <div className="input-items default">
                        <input type="text" placeholder="User ID" name="email" onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>Password for your account</label>
                      <div className="input-items default">
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input rounded-buttons">
                      <button onClick={() => { submitSignIn() }}
                        className="btn primary-btn rounded-full"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input rounded-buttons">
                      <button onClick={SubmitSignUp}
                        className="btn primary-btn-outline rounded-full"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-input text-center">
                      <h4 className="text">
                        Or continue with
                        <br></br>
                        <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
                          buttonText=" Google"
                          onSuccess={onGoogleLoginSuccess}
                          onFailure={onGoogleLoginFailure}
                          cookiePolicy={'single_host_origin'}
                        />
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-input text-center">
                      <p className="text">
                        By continuing, you have read and agree to our<br></br>
                        <a href="/termsandconditions">Terms and Conditions &nbsp;</a>
                        and
                        <a href="/privacypolicy">&nbsp; Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
};

export default SignInPage;
