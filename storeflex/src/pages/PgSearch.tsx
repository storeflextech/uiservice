import React from 'react';
import { Container } from '@mui/material';
import SearchInfo from '../components/panels/search/SearchInfo';
import { AppContainer } from '../components/containers/containers';
import TopNavbar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';

const PgSearch = () => {

    return(
        <>
            <AppContainer>
                <TopNavbar/>
            {SearchInfo()}
            </AppContainer>
            <Footer/>
        </>
    )
}

export default PgSearch;