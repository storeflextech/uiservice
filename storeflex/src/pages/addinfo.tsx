import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import AddUser from '../components/atoms/adduser/AddUser';

const AddInfo = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            {<MainBanner content='STORE FLEX'/>}
            <AddUser />
            </Container>
        </>
    )
}

export default AddInfo;