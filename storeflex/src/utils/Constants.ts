import Home from '../pages/home';
// import Account from './pages/accout';
import SignIn from "../pages/signin";
import SignUp from '../pages/signup';
// import AddStore from '../pages/addstore';
import pg_dashboard from '../pages/pg_dashboard';
import BusinessInfo from '../pages/businessinfo';
import AddInfo from '../pages/addinfo';
import pg_search from '../pages/pg_search';


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
        component: pg_dashboard
    },
    BUSINESS_INFO : {
        path: '/businessinfo',
        component: BusinessInfo
    },
    ADD_BUSINESS :{
        path: '/addbusiness',
        component: ''
    },
    ADD_INFO :{
        path: '/addinfo',
        component: AddInfo
    },
    PG_SEARCH :{
        path: '/search',
        component: pg_search
    }

}