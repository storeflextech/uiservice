import Home from '../pages/home';
// import Account from './pages/accout';
import SignIn from "../pages/signin";
import SignUp from '../pages/signup';
// import AddStore from '../pages/addstore';
import Dashboard from '../pages/dashboard';
import BusinessInfo from '../pages/businessinfo';

export const PAGES = {
    HOME : {
        path: '/home',
        component: Home
    },
    SIGN_IN : {
        path: '/signin',
        component: SignIn
    },
    SIGN_UP : {
        path: '/signup',
        component: SignUp
    },
    DASHBOARD : {
        path: '/dashboard',
        component: Dashboard
    },
    BUSINESS_INFO : {
        path: '/businessinfo',
        component: BusinessInfo
    },
    ADD_BUSINESS :{
        path: '/addbusiness',
        component: ''
    }
}