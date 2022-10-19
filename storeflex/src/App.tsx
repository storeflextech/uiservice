import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Home from './pages/home';
import Account from './pages/accout';
// import SignIn from "./pages/signin";
// import SignUp from './pages/signup';
import AddStore from './pages/addstore';
// import Dashboard from './pages/dashboard';
// import BusinessInfo from './pages/businessinfo';
import './App.css';
import '../src/styles/sfglobal.scss';
import { PAGES } from './utils/Constants';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <div className='app-bg'>
          <Routes>
            <Route path="/" element={<PAGES.HOME.component />} />
            <Route path={PAGES.CPANEL.path} element={<PAGES.CPANEL.component />} />
            <Route path={PAGES.HOME.path} element={<PAGES.HOME.component />} />
            <Route path={PAGES.GUESTHOME.path} element={<PAGES.GUESTHOME.component />} />
            <Route path={PAGES.CUSTOMERHOME.path} element={<PAGES.CUSTOMERHOME.component />} />
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
            
            <Route path="/addstore" element={<AddStore />} />
            <Route path="account" element={<Account />} />
          </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
