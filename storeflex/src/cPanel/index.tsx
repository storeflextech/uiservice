import 'react-bootstrap-drawer/src/style.scss';
import React from 'react';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';

import {CustomDrawer} from './CustomDrawer';
import SuNavbar from '../components/navbar/su-navbar';

const CPanel = (props) => {
	return (
		<>
       {<SuNavbar />}
       {<CustomDrawer/>}
		</>
	);
};

export default CPanel;

