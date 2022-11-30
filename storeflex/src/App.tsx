import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import '../src/styles/sfglobal.scss';
import { PAGES } from './utils/Constants';
import { getUserLoggedIn} from  './utils/CommonUtils';

function App() {

  const isAuthenticated = getUserLoggedIn();
  const path = window.location.pathname;
  const CheckAuth = ({isAuthenticated}) => {
    return isAuthenticated ? (
      <Navigate to={path} replace />
    ) : (
      <Navigate to={PAGES.Home.path} replace />
    );
  };
  return (
    <React.StrictMode>
      <BrowserRouter>
            {!isAuthenticated && 
              <Routes>
                <Route path="/*" element={<CheckAuth isAuthenticated={isAuthenticated} />} />
                <Route path={PAGES.Home.path} element={<PAGES.Home.Component />} />
                <Route path={PAGES.SignIn.path} element={<PAGES.SignIn.Component />} />
                <Route path={PAGES.SignInCustomer.path} element={<PAGES.SignInCustomer.Component />} />
                <Route path={PAGES.SignUp.path} element={<PAGES.SignUp.Component />} />
                <Route path={PAGES.Error.path} element={<PAGES.Error.Component />} />
              </Routes>
            }
            {isAuthenticated && 
            <Routes>

                <Route path={PAGES.Home.path} element={<PAGES.Home.Component />} />
                <Route path={PAGES.SignIn.path} element={<PAGES.SignIn.Component />} />
                <Route path={PAGES.SignUp.path} element={<PAGES.SignUp.Component />} />
                <Route path={PAGES.Error.path} element={<PAGES.Error.Component />} />

              <Route path={PAGES.Business.path} element={<PAGES.Business.Component id=''/>} />
              <Route path={PAGES.Business.ADD.path} element={<PAGES.Business.Component id='ADD'/>} />
              <Route path={PAGES.Business.VIEW.path} element={<PAGES.Business.Component id='VIEW'/>} />
              <Route path={PAGES.Business.EDIT.path} element={<PAGES.Business.Component id='EDIT'/>} />

              <Route path={PAGES.Warehouse.path} element={<PAGES.Warehouse.Component id=''/>} />
              <Route path={PAGES.Warehouse.ADD.path} element={<PAGES.Warehouse.Component id='ADD'/>} />
              <Route path={PAGES.Warehouse.VIEW.path} element={<PAGES.Warehouse.Component id='VIEW'/>} />

              <Route path={PAGES.Dashboard.path} element={<PAGES.Dashboard.Component />} />

              <Route path={PAGES.AddInfo.path} element={<PAGES.AddInfo.Component />} />
              <Route path={PAGES.PgSearch.path} element={<PAGES.PgSearch.Component />} />
              <Route path={PAGES.PgSearchNew.path} element={<PAGES.PgSearchNew.Component />} />
              <Route path={PAGES.Cart.path} element={<PAGES.Cart.Component />} />
              <Route path={PAGES.PgContactUs.path} element={<PAGES.PgContactUs.Component />} />
              <Route path={PAGES.FAQ.path} element={<PAGES.FAQ.Component />} />
              <Route path={PAGES.Error.path} element={<PAGES.Error.Component />} />
    
              <Route path={PAGES.PENDING_BUSINESS.path} element={<PAGES.PENDING_BUSINESS.Component/>}/>
              <Route path={PAGES.DELETE_USER.path} element={<PAGES.DELETE_USER.Component/>}/>
              <Route path={PAGES.UPDATE_USER.path} element={<PAGES.UPDATE_USER.Component/>}/>
              <Route path={PAGES.ADD_PAYMENT.path} element={<PAGES.ADD_PAYMENT.Component/>}/>
              <Route path={PAGES.DELETE_PAYMENT.path} element={<PAGES.DELETE_PAYMENT.Component/>}/>
              <Route path={PAGES.UPDATE_PAYMENT.path} element={<PAGES.UPDATE_PAYMENT.Component/>}/>
              <Route path={PAGES.SEARCH_BUSINESS.path} element={<PAGES.SEARCH_BUSINESS.Component/>}/>
              <Route path={PAGES.BUSINESS_REPORT.path} element={<PAGES.BUSINESS_REPORT.Component/>}/>
              <Route path={PAGES.LOCARTION_REPORT.path} element={<PAGES.LOCARTION_REPORT.Component/>}/>
              <Route path={PAGES.TERMSANDCONDITIONS.path} element={<PAGES.TERMSANDCONDITIONS.Component/>}/>
              <Route path={PAGES.PRIVACYPOLICY.path} element={<PAGES.PRIVACYPOLICY.Component/>}/>
              <Route path={PAGES.PAYMENT_STATUS.path} element={<PAGES.PAYMENT_STATUS.Component />} />
              <Route path={PAGES.MY_ORDERS.path} element={<PAGES.MY_ORDERS.Component />} />

              <Route path={PAGES.VIEW_USER.path} element={<PAGES.VIEW_USER.Component />} />
              <Route path={PAGES.DISCOVER_MORE.path} element={<PAGES.DISCOVER_MORE.Component />} />
              <Route path={PAGES.BOOKINGS.path} element={<PAGES.BOOKINGS.Component />} />
              <Route path={PAGES.PAYMENT_HISTORY.path} element={<PAGES.PAYMENT_HISTORY.Component />} />
              <Route path={PAGES.USER_PROFILE.path} element={<PAGES.USER_PROFILE.Component />} />
              <Route path={PAGES.WAREHOUSE_DETAILS.path} element={<PAGES.WAREHOUSE_DETAILS.Component />} />

              <Route path={PAGES.PgSearchNew.path} element={<PAGES.PgSearchNew.Component />} />
              <Route path={PAGES.WAREHOUSE_DETAILS.path} element={<PAGES.WAREHOUSE_DETAILS.Component />} />
              <Route path={PAGES.SITE_MAP.path} element={<PAGES.SITE_MAP.Component />} />
            </Routes>
            }
            
      </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
