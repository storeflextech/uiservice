import React, { useState, useEffect,useRef } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import MenuItems from './menu-items';
import './index.scss';
import { margin } from '@mui/system';
const SideNavBar = (props) => {
  const userType = props.userType; //SL-Storeflex User, CL- Storeflex Client, CU- Storeflex Customer
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
  const [selectedFile, setSelectedFile] = useState<Blob>();

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

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className='c-box-shadow-blue'>
      <Box className='m-top-md m-bot-md m-left-md m-right-md'>
        <div>
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <span className="nav-link" onClick={evt => evt.preventDefault()}>
                  <div className="nav-profile-image">
                    {selectedFile && (
                      <div>
                        <img src={URL.createObjectURL(selectedFile)} alt="Thumb" />
                      </div>
                    )}
                    {!selectedFile && (
                      <div>
                        <img src="/images/face1.jpg" alt="profile" />
                      </div>
                    )}

                    <span className="login-status online"></span> {/* change to offline or busy as needed */}
                    <button onClick={handleClick} style={{position:'absolute',border:'0px',borderRadius:50,padding:'0px',marginLeft:'25px',marginTop:'-20px'}}>
                  <img style={{height:'25px',width:'30px'}} src="/images/camera_lead.jpg" alt="" />
                </button>
                  </div>
                  <div className="nav-profile-text">
                    <span className="font-weight-bold mb-2"><>Mithu Zaman</></span>
                    <span className="text-secondary text-small"><>Storeflex User</></span>
                  </div>
                  <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                </span>
                
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
              </li>
              {listItems.map((element) => {
                if (element.SubMenu.length >= 1) {
                  return (
                    <li className='nav-item'>
                      <div className={'nav-link'} onClick={() => toggleMenuState(element.Name)} data-toggle="collapse">
                        <span className="menu-title"><>{element.Label}</></span>
                        <i className="menu-arrow"></i>
                        <i className={element.Icon}></i>
                      </div>
                      <Collapse in={values[element.Name]}>
                        <ul className="nav flex-column sub-menu">
                          {element.SubMenu.map((ele) => (
                            <li className="nav-item">
                              <div className="nav-link" onClick={() => { handleOnClick(ele.NavigateTo) }}>
                                <span className="menu-title"><>{ele.Label}</></span>
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
                        <span className="menu-title"><>{element.Label}</></span>
                        <i className="menu-arrow"></i>
                        <i className={element.Icon}></i>
                      </div>
                    </li>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
      </Box>
    </div>
  );
}

export default SideNavBar;