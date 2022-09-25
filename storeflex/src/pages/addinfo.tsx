import React from 'react';
import { Container } from '@mui/material';
import PageBanner from '../components/atoms/banner/PageBanner';
import AddUser from '../components/atoms/adduser/AddUser';

const AddInfo = () => {
    return(
        <>
            <Container component="main" maxWidth="md" className='p-no'>
            {<PageBanner content='STORE FLEX'/>}
            <AddUser />
            </Container>
        </>
    )
}

export default AddInfo;