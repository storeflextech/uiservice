import React from 'react';
import SearchInfo from '../components/panels/search/SearchInfo';
import GuestNavbar from '../components/navbar/guest-navbar';
import TopNavbar from '../components/navbar/TopNavBar';
import Footer from '../components/footer/footer';

const PgSearchNew = () => {

    return(
        <>
            {<TopNavbar />}
            <section  className="header-area header-ten pt-5">
            {SearchInfo()}
            </section>
            {<Footer />}
        </>
    )
}

export default PgSearchNew;