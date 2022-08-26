import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/home';
import Account from './pages/accout';
import SignIn from "./pages/signin";
import SignUp from './pages/signup';
import AddStore from './pages/addstore';
import Dashboard from './pages/dashboard';
import BusinessInfo from './pages/businessinfo';
import './App.css';
// const theme = createTheme();

function App() {
  return (
    <div className='app-bg'>
        <Container component="main" maxWidth="lg" className='nopadding'>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstore" element={<AddStore />} />
          <Route path="account" element={<Account />} />
          <Route path="/businessinfo" element={<BusinessInfo />} />
        </Routes>
        </Container>
    </div>
  );
}

export default App;
