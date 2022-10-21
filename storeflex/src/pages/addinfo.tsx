import React from 'react';
import { Container } from '@mui/material';
import AddUser from '../components/atoms/adduser/AddUser';

const AddInfo = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            <AddUser />
            </Container>
        </>
    )
}

export default AddInfo;