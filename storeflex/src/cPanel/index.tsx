

import React from 'react';
import './index.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
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

