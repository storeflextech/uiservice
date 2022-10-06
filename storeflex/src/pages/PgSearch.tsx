import React from 'react';
import { Container } from '@mui/material';
import PageBanner from '../components/atoms/banner/PageBanner';
import SearchInfo from '../components/panels/search/SearchInfo';

const PgSearch = () => {

    return(
        <>
            <Container component="main" maxWidth="lg" className='p-no'>
            {<PageBanner content='STORE FLEX'/>}
            {SearchInfo()}
            </Container>
        </>
    )
}

export default PgSearch;