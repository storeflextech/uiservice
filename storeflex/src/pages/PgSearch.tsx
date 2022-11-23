import React from 'react';
import { Container } from '@mui/material';
import SearchInfo from '../components/panels/search/SearchInfo';
import { AppContainer } from '../components/containers/containers';
import TopNavBar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';

const PgSearch = () => {

    return(
        <>
            <AppContainer>
                <TopNavBar/>
            {SearchInfo()}
            </AppContainer>
            <Footer/>
        </>
    )
}

export default PgSearch;