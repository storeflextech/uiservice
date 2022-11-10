import React from 'react';
import { Container } from '@mui/material';
import AddUser from '../components/atoms/adduser/AddUser';
import { AppContainer } from '../components/containers/containers';
import TopNavbar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';

const AddInfo = () => {
    return(
        <>
            <AppContainer>
                <TopNavbar/>
                <br></br><br></br><br></br><br></br><br></br>
            <AddUser />
            </AppContainer>
            <Footer/>
        </>
    )
}

export default AddInfo;