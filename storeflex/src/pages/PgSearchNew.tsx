import React from 'react';
import { Container } from '@mui/material';
import PageBanner, {MainBanner} from '../components/atoms/banner/PageBanner';
import SearchInfo from '../components/panels/search/SearchInfo';
import GuestNavbar from '../components/navbar/guest-navbar';
import Footer from '../components/miscellaneous/footer';

const PgSearchNew = () => {

    return(
        <>
            {<GuestNavbar />}
            {/* {<MainBanner content='Search Business'/>} */}
            <section  className="header-area header-ten">
            {SearchInfo()}
            </section>
            {<Footer />}
        </>
    )
}

export default PgSearchNew;