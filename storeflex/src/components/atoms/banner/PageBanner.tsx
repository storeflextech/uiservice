import React from 'react';
import './banner.scss';

interface PageBannerProps {
    content?: string;
    imageUlr?: string;
    children?: React.ReactNode;

}

export const MainBanner = (props?: PageBannerProps) => {
  return(
    <div className=''>
      <div className='banner-container'>
      <img className='banner-img'src='../static/images/sfbanner.jpeg' alt='busines inforamtion'/>
      {props?.children}
    </div>
    </div>
    )
}
const PageBanner = (props?: PageBannerProps) => {
    // GROW YOUR BUSINESS WITH US
    return(
        <div className='image-container c-box-shadow'>
          <img className='page-top-image'
            src='../static/images/img3.jpg'
            alt='busines inforamtion'
          />
          {props?.content && 
          <div className='page-image-content font-white p-md f-24px f-bold'>{props?.content}</div>}
          {props?.children}
        </div>
    )
}

export default PageBanner;