import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import { HomePageNavBar, HpSearchSpace, HpListSpace} from '../components/panels/homepage/homepage';

const PgHome = () => {
   const navigate = useNavigate();
   const goToNextPage = (pagePath : string) => {
    navigate(pagePath);
   }
    
    return (
      <>
      <header className='headerContainer'>
        <div>
          <Button variant="text" className="font-white f-bold font-md" onClick={() => {goToNextPage('/signin')}}>Sign In </Button>
          <Button variant="text" className="font-white f-bold font-md" onClick={() => {goToNextPage('/signup')}}> Sign Up </Button>
         </div>
      </header>
      <section className='homepage-s'>
        <div >
            <section>
              <div className='wh-container'>
                <div className='sfwarehouse-img' />
              </div>
              <div className='flex relative-p'>
                <div className='sflogo-container'>
                  <img className='sflogo' src='../static/images/sflogo.png' alt='storefles logo'/>
                </div>
                <div className='font-white font-arial w100 align-c'>
                    <div>
                      <span className='f-80px red-border'>
                        <strong>Store Flex</strong>
                      </span>
                    </div>
                    <div className='f-24px p-top-md'>
                      <span>
                        <strong>Logistics Management</strong></span></div>
                  </div>
              </div>
            </section>
        </div>
      </section>
      <section>
        <HomePageNavBar />
      </section>
      <section>
        <div className='m-top-md homepage-spce-list'>
        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={6}>
            <HpSearchSpace />
          </Grid>
          <Grid item xs={6}>
            <HpListSpace />
          </Grid>
      </Grid>
      </div>
      </section>
        <div>
        <Button variant="outlined" onClick={() => {goToNextPage('/dashboard')}}> Dashboard </Button>  
        <Button variant="outlined" onClick={() => {goToNextPage('/addprofile')}}>Register</Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/addstore')}}>AddStore</Button>
        <Button variant="outlined" onClick={() => {goToNextPage('/businessinfo')}}> Business Info </Button>
        </div>
      </>
    );
};
  
  export default PgHome;