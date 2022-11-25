import React from "react";
import TopNavBar from '../components/navbar/TopNavBar';
import Footer from "../components/footer/footer";
import SideNavBar from "../components/navbar/SideNavBar";
import { AppContainer } from "../components/containers/containers";
import { SplitPaneContainer } from "../components/containers/containers";
import { getUserType } from "../utils/CommonUtils";
import OrderTable from "../components/atoms/payment/myorderstable";



const MyOrders = () => {
    return (
        <>
           <AppContainer>
                <TopNavBar/>
                <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={<OrderTable/>}
                />
            </AppContainer>
            <Footer/>
        </>
    )
}


export default MyOrders;