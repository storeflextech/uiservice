import HomePage from '../pages/HomePage';
import SignIn from "../pages/signin-administrator";
import SignUpNew from '../pages/signup-new';
import SignUp from '../pages/signup';
import DashboardPage from '../pages/DashboardPage';
import BusinessPage from '../pages/BusinessPage';
import AddInfo from '../pages/addinfo';
import PgSearch from '../pages/PgSearch';

import PgSearchNew from '../pages/PgSearchNew';

import Cart from '../pages/cart';
import ContactUsPage from '../pages/ContactUsPage';
import faq from '../pages/faq';
import ErrorPage from '../pages/ErrorPage';
import PendingBusiness from '../pages/pendingbusiness';
import DeleteUser from '../pages/deleteuser';
import UpdateUser from '../pages/updateuser';
import AddPayment from '../pages/addpayment';
import DeletePayment from '../pages/deletepayment';
import UpdatePayment from '../pages/updatepayment';
import SearchBusiness from '../pages/searchbusiness';
import BusinessReport from '../pages/businessreport';
import LocationReport from '../pages/locationreport';
import TermsAndConditions from '../pages/termsandconditions';
import PrivacyPolicy from '../pages/privacy';
import paymentStatus from '../pages/paymentStatus';
import MyOrders from '../pages/myOrders';
import ViewUser from '../pages/viewuser';
import DiscoverMore from '../pages/discovermore';
import Bookings from '../pages/bookings';
import PaymentHistory from '../pages/paymentHistory'
import UserProfile from '../pages/userProfile';
import SiteMap from '../pages/SiteMap';
import WarehousePage from '../pages/WarehousePage';

import WarehouseDetails from '../components/atoms/Searchresult/warehouseDetails';
import SignInCustomer from '../pages/signin-customer';

export enum USER_TYPE {
    SfUser = 'SL',
    SfClient = 'CL',
    SfCustomer = 'CU'
}

export enum ACTIONS_TYPE {
    add = 'ADD',
    delete = 'DELETE',
    edit = 'EDIT',
    view = 'VIEW'
}

export const PAGES = {
    Home : {
        path: '/home',
        Component: HomePage
    },
    SignIn : {
        path: '/signin',
        Component: SignIn
    },
    SignInCustomer : {
        path: '/signin-customer',
        Component: SignInCustomer
    },
    SignUp : {
        path: '/signup',
        Component: SignUp
    },
    SignUpNew : {
        path: '/signup-new',
        Component: SignUpNew
    },
    Dashboard : {
        path: '/dashboard',
        Component: DashboardPage
    },
    Business : {
        path: '/business',
        Component: BusinessPage,
        ADD:{
            path: '/business/add',
            Component: BusinessPage
        },
        VIEW:{
            path: '/business/view',
            Component: BusinessPage
        },
        EDIT:{
            path: '/business/edit',
            Component: BusinessPage
        },
    },
    Warehouse : {
        path: '/warehouse',
        Component: WarehousePage,
        ADD:{
            path: '/warehouse/add',
            Component: WarehousePage
        },
        VIEW:{
            path: '/warehouse/view',
            Component: WarehousePage
        }
    },
    AddInfo :{
        path: '/addinfo',
        Component: AddInfo
    },
    PgSearch :{
        path: '/search',
        Component: PgSearch
    },

    PgSearchNew :{
        path: '/search-new',
        Component: PgSearchNew

    },
    Cart :{
        path: '/cart',
        Component: Cart
    },
    ContactUs :{
        path: '/contactus',
        Component: ContactUsPage
    },
    FAQ :{
        path: '/faq',
        Component: faq
    },
    Error :{
        path: '/error',
        Component: ErrorPage
    },
    PENDING_BUSINESS:{
        path:'/pendingbusiness',
        Component: PendingBusiness
    },
    DELETE_USER:{
        path:'/deleteuser',
        Component: DeleteUser
    },
    UPDATE_USER:{
        path:'/updateuser',
        Component: UpdateUser
    },
    ADD_PAYMENT:{
        path:'/addpayment',
        Component:AddPayment
    },
    DELETE_PAYMENT:{
        path:'/deletepayment',
        Component: DeletePayment
    },
    UPDATE_PAYMENT:{
        path:'/updatepayment',
        Component: UpdatePayment
    },
    SEARCH_BUSINESS:{
        path:'/searchbusiness',
        Component: SearchBusiness
    },
    BUSINESS_REPORT:{
    path:'/businessreport',
    Component:BusinessReport
    },
    LOCARTION_REPORT:{
        path:'/locationreport',
        Component: LocationReport
    },
    TERMSANDCONDITIONS:{
        path:'/termsandconditions',
        Component: TermsAndConditions
    },
    PRIVACYPOLICY:{
        path:'/privacypolicy',
        Component: PrivacyPolicy
    },
    PAYMENT_STATUS :{
        path: '/paymentStatus',
        Component: paymentStatus
    },
    MY_ORDERS :{
        path: '/myorders',
        Component: MyOrders
    },
    SITE_MAP :{
        path: '/sitemap',
        Component: SiteMap
   },
    VIEW_USER:{
        path:'/viewuser',
        Component: ViewUser
    },
    DISCOVER_MORE:{
        path:'/discovermore',
        Component: DiscoverMore
    },
    BOOKINGS:{
        path:'/bookings',
        Component: Bookings
    },
    PAYMENT_HISTORY:{
        path:'/paymentHistory',
        Component:PaymentHistory
    },
    USER_PROFILE :{
        path: '/view-profile',
        Component: UserProfile
    },
    WAREHOUSE_DETAILS :{
        path:'/WarehouseDetails',
        Component: WarehouseDetails
    }

}