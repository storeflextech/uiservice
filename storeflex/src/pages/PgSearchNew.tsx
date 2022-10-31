import React from 'react';
import SearchInfo from '../components/panels/search/SearchInfo';
import GuestNavbar from '../components/navbar/guest-navbar';
import Footer from '../components/footer/footer';

const PgSearchNew = () => {

    return(
        <>
            {<GuestNavbar />}
            <section  className="header-area header-ten">
            {SearchInfo()}
            </section>
            {<Footer />}
        </>
    )
}

export default PgSearchNew;