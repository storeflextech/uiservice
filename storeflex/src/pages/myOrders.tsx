import React from "react";
import TopNavbar from '../components/navbar/TopNavBar';
import OrderTable from "../components/atoms/payment/myorderstable";



const MyOrders = () => {
    return (
        <>
            {<TopNavbar />}

            {<OrderTable/>}

        </>
    )
}


export default MyOrders;