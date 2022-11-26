import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Collapse } from 'react-bootstrap';
import './index.scss';
import MenuItems from '../../utils/MenuIItems.json';
import Api from '../../api/Api';

const SideNavBar = (props) => {
  const userType = props.userType; //SL-Storeflex User, CL- Storeflex Client, CU- Storeflex Customer
  // console.log(props.userType);
  const navigate = useNavigate();


  interface warehouse {
    city: any,
    clientId: any,
    houseNo: any,
    pincode: any,
    plotNo: any,
    state: any,
    status: any,
    streetAddrs: any,
    warehouseName: any,
    warehouseId: any
  }

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


  const [values, setValues] = useState(initialization);
  const [listItems, setListItems] = useState<Array<any>>([]);
  const [selectedFile, setSelectedFile] = useState<Blob>();

  useEffect(() => {
    getUserMenu();
  }, [""]);

  const getUserMenu = () => {
    MenuItems.map(ele => {
      if (ele.UserType === userType) {
        setListItems(ele.Menus.SidebarMenu)
      }
    });
    console.log("listItems==", listItems);
  }

  const handleOnClick = (path: string) => {
    if (path === '/search-new') {
      console.log("ok");

      const api = new Api();
      const pin = '';
      // const pin = '781036'
      api.searchwarehouse(pin).then((response) => {
        console.log('Warehouse Search >>>>', response);
        const data: warehouse = response.data.methodReturnValue.warehouseViewBean
          ;

        if (response.data.status == 'SUCCESS') {
          navigate('/search-new', { state: data });
        }
      })
        .catch((error) => {
          console.log(error);
        })



    } else {
      navigate(path);
    }
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
    <div>
      <div className='p-top-md'>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
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
    </div>
  );
}

export default SideNavBar;