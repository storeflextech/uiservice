import PgHome from '../pages/PgHome';
// import Account from './pages/accout';
import SignIn from "../pages/signin";
import SignUp from '../pages/signup';
// import AddStore from '../pages/addstore';
import PgDashboard from '../pages/PgDashboard';
import BusinessInfo from '../pages/businessinfo';
import AddInfo from '../pages/addinfo';
import PgSearch from '../pages/PgSearch';


export const PAGES = {
    HOME : {
        path: '/home',
        component: PgHome
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
        component: PgDashboard
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
        component: PgSearch
    }

}