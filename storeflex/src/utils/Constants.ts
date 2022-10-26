import CPanel from '../cPanel/index';
import HomePage from '../pages/HomePage';
import CustomerHome from '../pages/CustomerHome';
import SignIn from "../pages/signin";
import SignInNew from "../pages/signin-new";
import SignUp from '../pages/signup';
import PgDashboard from '../pages/PgDashboard';
import BusinessInfo from '../pages/businessinfo';
import AddInfo from '../pages/addinfo';
import PgSearch from '../pages/PgSearch';
import PgSearchNew from '../pages/PgSearchNew';
import Cart from '../pages/cart';
import PgContactUs from '../pages/PgContactUs';
import faq from '../pages/faq';
import ErrorPage from '../pages/ErrorPage';
import AddBusiness from '../pages/addbusiness';
import AddWarehouse from '../pages/addwarehouse';
import PendingBusiness from '../pages/pendingbusiness';
import DeleteWarehouse from '../pages/deletewarehouse';
import UpdateWarehouse from '../pages/updatewarehouse';
import DeleteUser from '../pages/deleteuser';
import UpdateUser from '../pages/updateuser';
import AddPayment from '../pages/addpayment';
import DeletePayment from '../pages/deletepayment';
import UpdatePayment from '../pages/updatepayment';
import SearchBusiness from '../pages/searchbusiness';
import SearchWarehouse from '../pages/searchwarehouse';
import BusinessReport from '../pages/businessreport';
import WarehouseReport from '../pages/warehousereport';
import LocationReport from '../pages/locationreport';




export const PAGES = {
    HOME : {
        path: '/home',
        component: HomePage
    },
    CPANEL : {
        path: '/cPanel',
        component: CPanel
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
        component: AddBusiness
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
    },
    ERROR :{
        path: '/error',
        component: ErrorPage
    },
    ADD_WAREHOUSE:{
        path: '/addwarehouse',
        component: AddWarehouse
    },
    PENDING_BUSINESS:{
        path:'/pendingbusiness',
        component: PendingBusiness
    },
    DELETE_WAREHOUSE:{
        path:'/deletewarehouse',
        component: DeleteWarehouse
    },
    UPDATE_WAREHOUSE:{
        path:'/updatewarehouse',
        component: UpdateWarehouse
    },
    DELETE_USER:{
        path:'/deleteuser',
        component: DeleteUser
    },
    UPDATE_USER:{
        path:'/updateuser',
        component: UpdateUser
    },
    ADD_PAYMENT:{
        path:'/addpayment',
        component:AddPayment
    },
    DELETE_PAYMENT:{
        path:'/deletepayment',
        component: DeletePayment
    },
    UPDATE_PAYMENT:{
        path:'/updatepayment',
        component: UpdatePayment
    },
    SEARCH_BUSINESS:{
        path:'/searchbusiness',
        component: SearchBusiness
    },
    SEARCH_WAREHOUSE:{
        path:'/searchwarehouse',
        component: SearchWarehouse
    },
    BUSINESS_REPORT:{
    path:'/businessreport',
    component:BusinessReport
    },
    WAREHOUSE_REPORT:{
        path:'/warehousereport',
        component: WarehouseReport
    },
    LOCARTION_REPORT:{
        path:'/locationreport',
        component: LocationReport
    }

}