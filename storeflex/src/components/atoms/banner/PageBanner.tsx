import React from 'react';
import './banner.scss';
import {ProfileBtn} from '../button/button';
import { Container, AppBar, Toolbar } from '@mui/material';

interface PageBannerProps {
  content?: string;
  imageUlr?: string;
  children?: React.ReactNode;
}

interface AppNavBarProps {
  content?: string;
  imageUlr?: string;
  children?: React.ReactNode;
}

export const MainBanner = (props?: PageBannerProps) => {
  return (
    <>
    <div className='sfwarehouse-s-img'>
      <div className='banner-container'>
        <div className='sflogo-s-container flex relative-p'>
          <img className='sflogo-s' src='../static/images/sflogo.png' alt='storefles logo' />
        </div>
        {props?.children}
      </div>
    </div>
    </>
  )
}

export const AppNavBar = (props?: AppNavBarProps) => {
  return(
    <AppBar position="static" color='primary'>
      <div> 
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className='page-image-content font-white p-md f-24px f-bold'>{props?.content}</div>
          <div className='logoicon align-right'>
            {props?.children}
          </div> 
          </Toolbar>
        </Container>
        </div> 
    </AppBar>
  )
}
const PageBanner = (props?: PageBannerProps) => {
  // GROW YOUR BUSINESS WITH US
  return (
    <div className='image-container c-box-shadow'>
      <img className='page-top-image'
        src='../static/images/img3.jpg'
        alt='busines inforamtion'
      />
      {props?.content &&
        <div className='page-image-content font-white p-md f-24px f-bold'>{props?.content}
        </div>}
      {props?.children}
    </div>
  )
}

export default PageBanner;