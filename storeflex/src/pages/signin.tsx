import React  from 'react';
import {useNavigate} from "react-router-dom"
import Container from '@mui/material/Container';
import { TextField, Typography, Avatar, Box, Button, Link, Grid} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxR from '../components/atoms/checkbox/CheckBoxR';

import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
 
const SignIn = () => {

  const navigate = useNavigate();
  const submitSignIn = () => {
    navigate('/dashboard');
  }
    return (
      <>
      <Container component="main" maxWidth="xs" className='c-box-shadow p-no'>
      <div className='blue-gradient'> 
      <div className='font-white p-md'><b>
      <Typography component="h1" variant="h4">
            Sign in
          </Typography>
        </b></div>
      </div>
      <div className='p-md'>
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
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
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} 
              onClick={() => {submitSignIn()}}>
              Sign In
            </Button>
            <div className='font-12px p-top-md'>
              <Link href="#" underline="none">{'Forgot password'}</Link>
            </div>
            <div className='font-12px p-top-md'>
              <span className='font-gray'>Don't have an account? </span>
              <Link href="/signup" underline="none">{'Creat one'}</Link>
            </div>
            <div className='font-12px p-top-lg'>
              <span className='font-gray'> Or continue with </span>
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
      </>
    );
  };
  
  export default SignIn;