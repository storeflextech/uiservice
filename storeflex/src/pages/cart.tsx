import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import CartContents from '../components/cart-contents/cart-contents';



const storeDetails=[
    {
    companyName:"My-Hall Self Storage Provider",
    storeTitle:"Self Storage - 1",
    size:"5'x5'x8'",
    price:"4500.00",
    location:"Six mile, Guwahati, 781005",
    displayImage:""
    }
]


const Cart = () => {

    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            {<MainBanner content='STORE FLEX'/>}
            <div className='font-gray f-24px p-top-xl'>Your Shopping Cart(1)</div>
            {<CartContents storeInfo={storeDetails}/>}
            </Container>
           
        </>
    )
}

export default Cart;