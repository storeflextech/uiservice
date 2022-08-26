import React from 'react';

interface PageBannerProps {
    content?: string;
    imageUlr?: string;

}
const PageBanner = (props?: PageBannerProps) => {
    // GROW YOUR BUSINESS WITH US
    return(
        <div className='image-container c-box-shadow'>
          <img className='page-top-image '
            src='../images/img3.jpg'
            alt='busines inforamtion'
          />
          {props?.content && 
          <div className='page-image-content font-white p-md f-24px f-bold'>{props?.content}</div>}
        </div>
    )
}

export default PageBanner;