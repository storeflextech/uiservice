import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';

const PgContactUs = () => {
    return (
        <>
        <Container component="main" maxWidth="xl" className='p-no'>
        
        {<MainBanner content='Contact Us'/>}

        </Container>
    </>
    )
  };
  
  export default PgContactUs;