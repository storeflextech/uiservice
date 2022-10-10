import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';

const faq = () => {
    return (
        <>
        <Container component="main" maxWidth="xl" className='p-no'>
        
        {<MainBanner content='FAQ'/>}

        </Container>
    </>
    )
  };
  
  export default faq;