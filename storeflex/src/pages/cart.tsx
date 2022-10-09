import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import CartContents from '../components/cart-contents/cart-contents';
const storeDetails={
    companyName:"",
    storeTitle:"Abc Self Storage",
    size:"5'x5'x8'",
    price:"4500.00",
    location:"Six mile, Guwahati, 781005",
    displayImage:""
}
const Cart = () => {

    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            {<MainBanner content='STORE FLEX'/>}
            <div className='c-box-shadow-blue m-bot-md'>
                <div className='blue-gradient'>
                    <div className='font-white p-md f-18px f-bold'> Your Shopping Cart </div>
                </div>
                {<CartContents storeInfo={storeDetails}/>}
            </div>
            </Container>
           
        </>
    )
}

export default Cart;