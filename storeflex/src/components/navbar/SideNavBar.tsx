import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import MenuItems from './menu-items';

const SideNavBar = ()=> {

  useEffect(() => {
    console.log("executed only once!");
    getUserMenu();
  }, [""]);

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

  const [values, setValues] = useState(initialization);
  const [listItems, setListItems] = useState<Array<any>>([]);

  const getUserMenu = () =>{
    
    MenuItems.map(ele=>{
      if(ele.UserType=='SL'){
        setListItems(ele.Menus.SidebarMenu)
      }
    });
    console.log("listItems==", listItems);
  }
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
          {listItems.map((element)=>(
            <li className='nav-item'>
            <div className={ 'nav-link' } onClick={ () => toggleMenuState('businessMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>{element.Label}</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={ values.businessMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/buttons"><Trans> Add Business</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/dropdowns"><Trans>Add Warehouse</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/typography"><Trans>View Pending Business</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          ))}
          <li className={ isPathActive('/cPanel') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/cPanel">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <div className={ 'nav-link' } onClick={ () => toggleMenuState('businessMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Business</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={ values.businessMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/buttons"><Trans> Add Business</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/dropdowns"><Trans>Add Warehouse</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/basic-ui/typography"><Trans>View Pending Business</Trans></Link></li>
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
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add Warehouse</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete Warehouse</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update Warehouse</Trans></Link></li>
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
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add User</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete User</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update User</Trans></Link></li>
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
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Add Payment</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Delete Payment</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/form-elements/basic-elements"><Trans>Update Payment</Trans></Link></li>
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
                <li className="nav-item"> <Link className={ 'nav-link' } to="/charts/chart-js"><Trans>Business</Trans></Link></li>
                <li className="nav-item"> <Link className={ 'nav-link' } to="/charts/chart-js"><Trans>Warehouse</Trans></Link></li>
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
                <li className="nav-item"> <Link className={ 'nav-link' } to="/user-pages/login-1"><Trans>Business Report</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/user-pages/register-1"><Trans>Warehouse Report</Trans></Link></li>
                <li className="nav-item"> <Link className={  'nav-link' } to="/user-pages/lockscreen"><Trans>Location Report</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
}

export default SideNavBar;