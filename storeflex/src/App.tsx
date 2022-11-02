import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import '../src/styles/sfglobal.scss';
import { PAGES } from './utils/Constants';
// import {RouterHelper} from './utils/RouterHelper';
import { getUserLoggedIn} from  './utils/CommonUtils';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
            {getUserLoggedIn() && 
            <Routes>
              <Route path={PAGES.HOME.path} element={<PAGES.HOME.component />} />
              <Route path={PAGES.CUSTOMERHOME.path} element={<PAGES.CUSTOMERHOME.component />} />
              <Route path={PAGES.CPANEL.path} element={<PAGES.CPANEL.component />} />
              <Route path={PAGES.SIGN_UP.path} element={<PAGES.SIGN_UP.component />} />
              <Route path={PAGES.SIGN_IN.path} element={<PAGES.SIGN_IN.component />} />
              <Route path={PAGES.SIGN_IN_NEW.path} element={<PAGES.SIGN_IN_NEW.component />} />
              <Route path={PAGES.DASHBOARD.path} element={<PAGES.DASHBOARD.component />} />
              <Route path={PAGES.BUSINESS_INFO.path} element={<PAGES.BUSINESS_INFO.component />} />
              <Route path={PAGES.ADD_INFO.path} element={<PAGES.ADD_INFO.component />} />
              <Route path={PAGES.PG_SEARCH.path} element={<PAGES.PG_SEARCH.component />} />
              <Route path={PAGES.PG_SEARCH_NEW.path} element={<PAGES.PG_SEARCH_NEW.component />} />
              <Route path={PAGES.CART.path} element={<PAGES.CART.component />} />
              <Route path={PAGES.PG_CONTACT_US.path} element={<PAGES.PG_CONTACT_US.component />} />
              <Route path={PAGES.FAQ.path} element={<PAGES.FAQ.component />} />
              <Route path={PAGES.ERROR.path} element={<PAGES.ERROR.component />} />
              <Route path={PAGES.ADD_BUSINESS.path} element={<PAGES.ADD_BUSINESS.component/>}/>
              <Route path={PAGES.ADD_WAREHOUSE.path} element={<PAGES.ADD_WAREHOUSE.component/>}/>
              <Route path={PAGES.VIEW_WAREHOUSE.path} element={<PAGES.VIEW_WAREHOUSE.component/>}/>
              <Route path={PAGES.PENDING_BUSINESS.path} element={<PAGES.PENDING_BUSINESS.component/>}/>
              <Route path={PAGES.DELETE_WAREHOUSE.path} element={<PAGES.DELETE_WAREHOUSE.component/>}/>
              <Route path={PAGES.UPDATE_WAREHOUSE.path} element={<PAGES.UPDATE_WAREHOUSE.component/>}/>
              <Route path={PAGES.DELETE_USER.path} element={<PAGES.DELETE_USER.component/>}/>
              <Route path={PAGES.UPDATE_USER.path} element={<PAGES.UPDATE_USER.component/>}/>
              <Route path={PAGES.ADD_PAYMENT.path} element={<PAGES.ADD_PAYMENT.component/>}/>
              <Route path={PAGES.DELETE_PAYMENT.path} element={<PAGES.DELETE_PAYMENT.component/>}/>
              <Route path={PAGES.UPDATE_PAYMENT.path} element={<PAGES.UPDATE_PAYMENT.component/>}/>
              <Route path={PAGES.SEARCH_BUSINESS.path} element={<PAGES.SEARCH_BUSINESS.component/>}/>
              <Route path={PAGES.SEARCH_WAREHOUSE.path} element={<PAGES.SEARCH_WAREHOUSE.component/>}/>
              <Route path={PAGES.BUSINESS_REPORT.path} element={<PAGES.BUSINESS_REPORT.component/>}/>
              <Route path={PAGES.WAREHOUSE_REPORT.path} element={<PAGES.WAREHOUSE_REPORT.component/>}/>
              <Route path={PAGES.LOCARTION_REPORT.path} element={<PAGES.LOCARTION_REPORT.component/>}/>
              <Route path={PAGES.TERMSANDCONDITIONS.path} element={<PAGES.TERMSANDCONDITIONS.component/>}/>
              <Route path={PAGES.PRIVACYPOLICY.path} element={<PAGES.PRIVACYPOLICY.component/>}/>
              <Route path={PAGES.PAYMENT_STATUS.path} element={<PAGES.PAYMENT_STATUS.component />} />
              <Route path={PAGES.MY_ORDERS.path} element={<PAGES.MY_ORDERS.component />} />
              <Route path={PAGES.USER_PROFILE.path} element={<PAGES.USER_PROFILE.component />} />
            </Routes>
            } 
            { !getUserLoggedIn() && 
              <Routes>
                <Route path="/*" element={<PAGES.SIGN_IN_NEW.component />} />
              </Routes>
            }
       
      </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
