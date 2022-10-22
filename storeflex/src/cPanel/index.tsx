// import 'react-bootstrap-drawer/src/style.scss';
// import React from 'react';
// import {
// 	Col,
// 	Container,
// 	Row,
// } from 'react-bootstrap';

// import {CustomDrawer} from './CustomDrawer';
// import SuNavbar from '../components/navbar/su-navbar';

// const CPanel = (props) => {
// 	return (
// 		<>
//        {<SuNavbar />}
//        {<CustomDrawer/>}
// 		</>
// 	);
// };

// export default CPanel;

import React, { Component } from 'react';
import  withRouter  from 'react-router-dom';
import './index.scss';
// import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import SettingsPanel from './shared/SettingsPanel';
import Footer from './components/Footer';
import { withTranslation } from "react-i18next";
import Pricing from '../components/miscellaneous/pricing';


const CPanel = (props) => {
	return (
		<div className="container-scroller">
        { <Navbar/> }
        <div className="container-fluid page-body-wrapper">
          { <Sidebar/> }
          <div className="main-panel">
            <div className="content-wrapper">
              {/* <AppRoutes/> */}
              {<Pricing />}
            </div>
            { <Footer/> }
          </div>
        </div>
      </div>
	);
};

export default CPanel;

