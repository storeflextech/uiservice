import React  from 'react';
import {useNavigate} from "react-router-dom"
import Container from '@mui/material/Container';
import { TextField, Typography, Avatar, Box, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';

import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {

  const navigate = useNavigate();
  const onSignUp = () =>  {
    navigate('addprofile');
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
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
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
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
                onClick ={() => {onSignUp()}}
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
                  <Grid item ><FacebookIcon color="primary"/></Grid>
                  <Grid item ><GoogleIcon color="success"/></Grid>
              </Grid>
            </div>
          </Box>
        </div>
      </Container>
    );
  };
  
  export default SignUp;