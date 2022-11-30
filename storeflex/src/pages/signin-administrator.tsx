import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validateMinLen, setUserLoggedIn, setUserType, getRedirectionPage } from '../utils/CommonUtils';
import Api from '../api/Api';
import { SlLoginProps } from '../api/ApiConfig';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";

const SignIn = () => {
  const navigate = useNavigate();

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

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const SubmitSignUp = () => {
    window.location.href = '/signup-new';
  }

  const submitSignIn = () => {
    const api = new Api();
    const emailValid = validateMinLen(values.email, true);
    const passwordValid = validateMinLen(values.password, true);
    setUserLoggedIn('false');
    if (emailValid && passwordValid) {
      console.log(' Submit Signin ')
      const data: SlLoginProps = {
        username: values.email,
        emailId: values.email,
        password: values.password
      }
      api.slLogin(data).then((response) => {
        console.log(' signIn >>>>>> ', response);
        if (response && response.status === 200 && response?.data?.statusCode === 600) {
          setUserLoggedIn('true');
          const redirectUrl = getRedirectionPage(response?.data?.methodReturnValue?.redirectUrl)
          window.location.href = redirectUrl;
        } else {
          setUserLoggedIn('false');
          window.location.href = '/error';
        }
      });

    } else {
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
    <section className="signin-area signin-one">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="signin-form form-style-two rounded-buttons">
              <div className="row">
                <div className="col-md-12 justify-content-center">
                  <div className="form-input justify-content-center">
                    <a href="/home"><img src="assets/images/white-logo.jpg" alt="Logo" style={{ height: '8vh' }} /></a>
                    <h4 className='pb-3' style={{textAlign:'center'}}>Storeflex Administrator Login</h4>
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
                      By signing in you agree with the<br></br>
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
  )
};

export default SignIn;


// import React, { useState } from 'react';
// import {useNavigate} from "react-router-dom"
// import Container from '@mui/material/Container';
// import { TextField, Avatar, Box, Button, Link, Grid} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';
// import { validateEmail, validatePassword } from '../utils/CommonUtils';
// import AppleIcon from '@mui/icons-material/Apple';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import GoogleLogin from 'react-google-login';
// import { gapi } from "gapi-script";

// const SignIn = () => {

//   gapi.load("client:auth2", () => {
//     gapi.client.init({
//       clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//       plugin_name: "storeflex",
//       scope: 'email',
//     });
//   });
// const [values, setValues] = useState({
//   email : "",
//   password : "",
// });

// const [errors, setErrors] = useState({
//   email:"",
//   password:"",

// });

// // const handleChange = (event: any) =>{
// //   setValues({
// //     ...values,
// //     [event.target.name]: event.target.value,
// //   });
// // };

// const validation = (values:any) => {
//   console.log("Values==", values)
//   let errors = {
//     email: "",
//     password: ""
//   };

//   //Email validation check
//   if (!values.email){
//     errors.email = "Email is required"
//   }
//   else if (!validateEmail(values.email)) {
//     errors.email = "Enter a valid mail"
//   }

//   //password validation check
//   if(!values.password){
//     errors.password = "Password is required."
//   }
//   else if (!validatePassword(values.password)){
//     errors.password = "Enter valid password"
//   }
//   return errors;
// }

//   const navigate = useNavigate();
//   const submitSignIn = () => {
//     setErrors(validation(values));
//       navigate('/dashboard');
//   }
//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     setErrors(validation(values));
//   };
//   //Validate Email
// const validateEmailId = (event:any) => {
//   const emailTemp = event.target.value;
//   setValues({
//     ...values,
//     [event.target.name] : event.target.value,
//   });
//   if (!emailTemp) {
//     errors.email = "*Email is required."
//   }
//   else if (!validateEmail(emailTemp)) {
//     errors.email = "Enter a valid mail"
//   }else{
//     errors.email = ""
//   }

// }
// const onGoogleLoginSuccess = (user: any) => {
//   console.log("Login Success====", user);
//   navigate('/dashboard');
// };

// //ValidatePassword
// const passwordValidation = (event:any) => {
//   const passwordTemp = event.target.value;
//   setValues({
//     ...values,
//     [event.target.name] : event.target.value,
//   });
//   if (!passwordTemp) {
//     errors.password = "*Password is required."
//   }
//   else if (!validatePassword(passwordTemp)) {
//     errors.password = "Enter valid password"
//   }
//   else{
//     errors.password = ""
//   }

// }
// // Need to remove ...
// const onGoogleLoginFailure = (err: any) => {
//   console.error("Login Failure", err)
// };  
//     return (
//       <>
//       <Container component="main" maxWidth="xs" className='c-box-shadow p-no'>
//       <div className='primary-gradient'> 
//       <div className='font-white p-md'>
//         <div className='font-white p-sm f-40px f-bold'>Sign In</div>
//       </div>
//       </div>
//       <div className='p-md'>
//         <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
//           <Avatar sx={{ m: 1}} className='sf-bg-color-primary'>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}> </Grid>
//               <Grid item xs={12}>
//           <TextField
//            className={errors.email ? "border-red" : ""}
//               // margin="normal"
//               // required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               value={values.email}
//               onChange={validateEmailId}
//               autoFocus
//             />
//             {errors.email && <p className="text-red">{errors.email}</p>}
//             </Grid>
//             <br></br>
//             <Grid item xs={12}>
//             <TextField
//              className={errors.password ? "border-red" : ""}
//               // margin="normal"
//               // required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={values.password}
//               onChange={passwordValidation}
              
//             />
//             {errors.password && <p className="text-red">{errors.password}</p>}
//             </Grid>
//             <div>
//               <div className='p-top-sm'>

//                 <CheckBoxR />
//                 <span className='font-gray font-12px'>This is a public or shared device.</span>
//               </div>
//               <div className='p-top-md'>
//                 <div className='font-12px'>
//                     <span className='font-gray'>By signing in. I agree to the Expedia </span>
//                     <span>
//                       <Link href="#" underline="none">{'Terms and Condition.'}</Link>
//                     </span>
//                 </div>
//                 <div className='font-12px'>
//                   <Link href="#" underline="none">{'Privacy Statement'}</Link>
//                   <span className='font-gray'>{' and '}</span>
//                   <Link href="#" underline="none">{'Expedia Rewards Terms and Conditions.'}</Link>
//                 </div>
//               </div>
//             </div>
//             <Button className='sf-bg-color-primary' type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} 
//               onClick= {() =>{ submitSignIn()}}>
//               <b>Sign In</b>
//             </Button>
//             </Box>
//             <div className='font-12px p-top-md'>
//               <Link href="#" underline="none">{'Forgot password'}</Link>
//             </div>
//             <div className='font-12px p-top-md'>
//               <span className='font-gray'>Don't have an account? </span>
//               <Link href="/signup" underline="none">{'Creat one'}</Link>
//             </div>
//             <div className='font-12px p-top-lg'>
//               <span className='font-gray'> Or continue with </span>
//             </div>
//             <div className='font-12px p-top-md'>
//               <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 4 }}>
//                   <Grid item ><AppleIcon /></Grid>
//                   <Grid item ><FacebookIcon color="primary"/></Grid>
//                   <Grid item ><GoogleIcon color="success"/></Grid>
//                   <GoogleLogin
//                   clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
//                   buttonText=" Google"
//                   onSuccess={onGoogleLoginSuccess}
//                   onFailure={onGoogleLoginFailure}
//                   cookiePolicy={'single_host_origin'}
//                 />
//               </Grid>
//             </div>
//         </Box>
//         </div>
//       </Container>
//       </>
//     );
//   };
  
//   export default SignIn;