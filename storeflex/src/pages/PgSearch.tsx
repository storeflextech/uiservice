import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import SearchInfo from '../components/panels/search/SearchInfo';

const PgSearch = () => {

    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            
            {<MainBanner content='Search Business'/>}


            {SearchInfo()}
            </Container>
        </>
    )
}

export default PgSearch;