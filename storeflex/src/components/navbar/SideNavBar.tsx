import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { PAGES } from '../../utils/Constants';

const SideNavBar = ()=> {

  const initialization = () =>{
    let menuObject= {
      businessMenuOpen: false,
      warehouseMenuOpen:false,
      userManagementMenuOpen:false,
      paymentMenuOpen: false,
      searchMenuOpen: false,
      reportMenuOpen: false,
    };
    return menuObject;
  }

  const navigate = useNavigate();
  const handleOnClick = (path:string)=>{
    navigate(path);
  }

  const [values, setValues] = useState(initialization);
  
  
  const toggleMenuState =(menuState) => {
    initialization();
    switch(menuState){
      case 'businessMenuOpen': 
          setValues({...values, businessMenuOpen: !values[menuState]}); break;
      case 'warehouseMenuOpen':
          setValues({...values, warehouseMenuOpen: !values[menuState],}); break;
      case 'userManagementMenuOpen':
        setValues({...values, userManagementMenuOpen: !values[menuState],}); break;
      case 'paymentMenuOpen':
        setValues({...values, paymentMenuOpen: !values[menuState],}); break;
        case 'searchMenuOpen':
          setValues({...values, searchMenuOpen: !values[menuState],}); break;
          case 'reportMenuOpen':
            setValues({...values, reportMenuOpen: !values[menuState],}); break;
    }
  }

  const isPathActive = (path)=> {
    // return this.props.location.pathname.startsWith(path);
    return true;
  }

    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src="/cpanel/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>Mithu Zaman</Trans></span>
                <span className="text-secondary text-small"><Trans>Storeflex User</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className={ isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <div className="nav-link" onClick= {() => {handleOnClick(PAGES.DASHBOARD.path)}}>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </div>
          </li>
          <li className='nav-item'>
            <div className={ 'nav-link' } onClick={ () => toggleMenuState('businessMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Business</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={ values.businessMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.BUSINESS_INFO.path)}}>
                    <span className="menu-title"><Trans>Add Business</Trans></span>
                  </div>
                   {/* <Link className={  'nav-link' } to="/basic-ui/buttons"><Trans> Add Business</Trans></Link> */}
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.ADD_WAREHOUSE.path)}}>
                    <span className="menu-title"><Trans>Add Warehouse</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/basic-ui/dropdowns"><Trans>Add Warehouse</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.PENDING_BUSINESS.path)}}>
                    <span className="menu-title"><Trans>View Pending Business</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/basic-ui/typography"><Trans>View Pending Business</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
          <li className={ 'nav-item' }>
            <div className={  'nav-link' } onClick={ () => toggleMenuState('warehouseMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Warehouse</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </div>
            <Collapse in={ values.warehouseMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.ADD_WAREHOUSE.path)}}>
                    <span className="menu-title"><Trans>Add Warehouse</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add Warehouse</Trans></Link> */}
                  </li>
                <li className="nav-item">
                <div className="nav-link" onClick= {() => {handleOnClick(PAGES.DELETE_WAREHOUSE.path)}}>
                    <span className="menu-title"><Trans>Delete Warehouse</Trans></span>
                  </div>
                {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete Warehouse</Trans></Link> */}
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.UPDATE_WAREHOUSE.path)}}>
                    <span className="menu-title"><Trans>Update Warehouse</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update Warehouse</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
          <li className={  'nav-item' }>
            <div className={  'nav-link' } onClick={ () => toggleMenuState('userManagementMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>User Management</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-table-large menu-icon"></i>
            </div>
            <Collapse in={ values.userManagementMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> 
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.ADD_INFO.path)}}>
                    <span className="menu-title"><Trans>Add User</Trans></span>
                  </div>
                {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add User</Trans></Link> */}
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.DELETE_USER.path)}}>
                    <span className="menu-title"><Trans>Delete User</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete User</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.UPDATE_USER.path)}}>
                    <span className="menu-title"><Trans>Update User</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update User</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
          <li className={ 'nav-item' }>
            <div className={ 'nav-link' } onClick={ () => toggleMenuState('paymentMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Payment Details</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-contacts menu-icon"></i>
            </div>
            <Collapse in={ values.paymentMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                <div className="nav-link" onClick= {() => {handleOnClick(PAGES.ADD_PAYMENT.path)}}>
                    <span className="menu-title"><Trans>Add Payment Details</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add Payment</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.DELETE_PAYMENT.path)}}>
                    <span className="menu-title"><Trans>Delete Payment Details</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete Payment</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.UPDATE_PAYMENT.path)}}>
                    <span className="menu-title"><Trans>Update Payment Details</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update Payment</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
          <li className={ 'nav-item' }>
            <div className={ 'nav-link' } onClick={ () => toggleMenuState('searchMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Search</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </div>
            <Collapse in={ values.searchMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.SEARCH_BUSINESS.path)}}>
                    <span className="menu-title"><Trans>Business</Trans></span>
                  </div>
                  {/* <Link className={ 'nav-link' } to="/charts/chart-js"><Trans>Business</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.SEARCH_WAREHOUSE.path)}}>
                    <span className="menu-title"><Trans>Warehouse</Trans></span>
                  </div>
                  {/* <Link className={ 'nav-link' } to="/charts/chart-js"><Trans>Warehouse</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
          <li className={ 'nav-item' }>
            <div className={'nav-link' } onClick={ () => toggleMenuState('reportMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Report</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </div>
            <Collapse in={ values.reportMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                 <div className="nav-link" onClick= {() => {handleOnClick(PAGES.BUSINESS_REPORT.path)}}>
                    <span className="menu-title"><Trans>Business Report</Trans></span>
                  </div>
                  {/* <Link className={ 'nav-link' } to="/user-pages/login-1"><Trans>Business Report</Trans></Link> */}
                  </li>
                <li className="nav-item">
                <div className="nav-link" onClick= {() => {handleOnClick(PAGES.WAREHOUSE_REPORT.path)}}>
                    <span className="menu-title"><Trans>Warehouse Report</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/user-pages/register-1"><Trans>Warehouse Report</Trans></Link> */}
                  </li>
                <li className="nav-item">
                  <div className="nav-link" onClick= {() => {handleOnClick(PAGES.LOCARTION_REPORT.path)}}>
                    <span className="menu-title"><Trans>Location Report</Trans></span>
                  </div>
                  {/* <Link className={  'nav-link' } to="/user-pages/lockscreen"><Trans>Location Report</Trans></Link> */}
                  </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
}

export default SideNavBar;