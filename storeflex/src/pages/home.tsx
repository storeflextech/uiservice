import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

/**
 * 
 InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
 */

const Home = () => {
    
   const navigate = useNavigate();
   const goToNextPage = (pagePath : string) => {
    navigate(pagePath);
   }
    
    return (
      <div>
        <h1>Home</h1>
        <Button variant="outlined" onClick={() => {goToNextPage('/signin')}}>Sign In</Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/signup')}}> Sign Up </Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/dashboard')}}> Dashboard </Button>  
        <Button variant="outlined" onClick={() => {goToNextPage('/addprofile')}}>Register</Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/addstore')}}>AddStore</Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/businessinfo')}}> Business Info </Button>
      </div>
    );
};
  
  export default Home;