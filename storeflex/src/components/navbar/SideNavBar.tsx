import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import MenuItems from './menu-items';

const SideNavBar = (props) => {
  const userType=props.userType; // SL-Storeflex User, CL- Storeflex Client, CU- Storeflex Customer
  console.log(props.userType);
  
  const initialization = () => {
    let menuObject = {
      BusinessMenu: false,
      WarehouseMenu: false,
      UserManagementMenu: false,
      PaymentDetailsMenu: false,
      SearchMenu: false,
      ReportMenu: false,
      LeaseEstablishMenu: false,
      ProfileMenu: false,
      MyBookingsMenu: false,
      MyPaymentsMenu: false
    };
    return menuObject;
  }

  const navigate = useNavigate();

  const [values, setValues] = useState(initialization);
  const [listItems, setListItems] = useState<Array<any>>([]);

  useEffect(() => {
    getUserMenu();
  }, [""]);

  const getUserMenu = () => {
    MenuItems.map(ele => {
      if (ele.UserType == userType) {
        setListItems(ele.Menus.SidebarMenu)
      }
    });
    console.log("listItems==", listItems);
  }

  const toggleMenuState = (menuState) => {
    setValues(initialization());
    switch (menuState) {
      case 'BusinessMenu':
        setValues({ ...values, BusinessMenu: !values[menuState] }); break;
      case 'WarehouseMenu':
        setValues({ ...values, WarehouseMenu: !values[menuState], }); break;
      case 'UserManagementMenu':
        setValues({ ...values, UserManagementMenu: !values[menuState], }); break;
      case 'PaymentDetailsMenu':
        setValues({ ...values, PaymentDetailsMenu: !values[menuState], }); break;
      case 'SearchMenu':
        setValues({ ...values, SearchMenu: !values[menuState], }); break;
      case 'ReportMenu':
        setValues({ ...values, ReportMenu: !values[menuState], }); break;
      case 'LeaseEstablishMenu':
        setValues({ ...values, LeaseEstablishMenu: !values[menuState], }); break;
      case 'ProfileMenu':
        setValues({ ...values, ProfileMenu: !values[menuState], }); break;
      case 'MyBookingsMenu':
        setValues({ ...values, MyBookingsMenu: !values[menuState], }); break;
      case 'MyPaymentsMenu':
        setValues({ ...values, MyPaymentsMenu: !values[menuState], }); break;
    }
  }


  const handleOnClick = (path: string) => {
    navigate(path);
  }

  const isPathActive = (path) => {
    return true;
  }

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={evt => evt.preventDefault()}>
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
        {listItems.map((element) => {
          if (element.SubMenu.length >= 1) {
            return (
              <li className='nav-item'>
                <div className={'nav-link'} onClick={() => toggleMenuState(element.Name)} data-toggle="collapse">
                  <span className="menu-title"><Trans>{element.Label}</Trans></span>
                  <i className="menu-arrow"></i>
                  <i className={element.Icon}></i>
                </div>
                <Collapse in={values[element.Name]}>
                  <ul className="nav flex-column sub-menu">
                    {element.SubMenu.map((ele) => (
                      <li className="nav-item">
                        <div className="nav-link" onClick={() => { handleOnClick(ele.NavigateTo) }}>
                          <span className="menu-title"><Trans>{ele.Label}</Trans></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Collapse>   

              </li>
            )
          } else {
            return (
              <li className='nav-item'>
                <div className={'nav-link'} onClick={() => { handleOnClick(element.NavigateTo) }} data-toggle="collapse">
                  <span className="menu-title"><Trans>{element.Label}</Trans></span>
                  <i className="menu-arrow"></i>
                  <i className={element.Icon}></i>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  );
}

export default SideNavBar;