import CPanel from '../cPanel/index';
import PgHome from '../pages/PgHome';
import GuestHome from '../pages/GuestHome';
import CustomerHome from '../pages/CustomerHome';
// import Account from './pages/accout';
import SignIn from "../pages/signin";
import SignInNew from "../pages/signin-new";
import SignUp from '../pages/signup';
// import AddStore from '../pages/addstore';
import PgDashboard from '../pages/PgDashboard';
import BusinessInfo from '../pages/businessinfo';
import AddInfo from '../pages/addinfo';
import PgSearch from '../pages/PgSearch';
import PgSearchNew from '../pages/PgSearchNew';
import Cart from '../pages/cart';
import PgContactUs from '../pages/PgContactUs';
import faq from '../pages/faq';


export const PAGES = {
    HOME : {
        path: '/home',
        component: PgHome
    },
    CPANEL : {
        path: '/cPanel',
        component: CPanel
    },
    GUESTHOME : {
        path: '/guesthome',
        component: GuestHome
    },
    CUSTOMERHOME : {
        path: '/customerhome',
        component: CustomerHome
    },
    SIGN_IN : {
        path: '/signin',
        component: SignIn
    },
    SIGN_IN_NEW : {
        path: '/signin-new',
        component: SignInNew
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
    },
    PG_SEARCH_NEW :{
        path: '/search-new',
        component: PgSearchNew
    },
    CART :{
        path: '/cart',
        component: Cart
    },
    PG_CONTACT_US :{
        path: '/contactus',
        component: PgContactUs
    },
    FAQ :{
        path: '/faq',
        component: faq
    }

}