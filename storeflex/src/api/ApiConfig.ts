
import { Address, Contact , Photo, Warehouseprice} from '../../src/utils/ResponseSchema'
export interface SlLoginProps {
    username: string;
    emailId: string;
    password: string;
}

export interface SignInPost {
    username?: string;
    emailId: string;
    password: string;
}

export interface SignInResp {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    mobileNo?: string;
    email?: string;
    status?: string;
    roleType?: string;
    redirectUrl?: string;
    loginType?: string;
}

export interface ViewCompaniesProps {
    page: string;
    size: string;
    status: string;
}

export interface GetStatesProp {
    countryCode: string;
}

export interface GetCitiesProp {
    state: string;
}

export interface ViewWarehouseProps {
    clientId: string;
    page: string;
    size: string;
}

export interface viewWarehouseAdminProps{
    page:string;
    size: string;
    status: string;
}
export interface AddCompanyPostData {
    clientId?: string;
    compyName?: string;
    compyDesc?: string;
    photo?: Photo[];
    photoName?: string;
    url?: string;
    gstNo?: string;
    addresses?: Address[];
    contact?: Contact[];
}

export interface WarehousePostData {
    clientId?: string;
    clientName?: string;
    warehouseName?: string;
    descp?: string;
    warehouseTaxId?: string;
    warehouseId?: string;
    days?: string;
    time?: string;
    facilitiesId?: string;
    industryId?: string;
    storagesId?: string;
    dockhighdoors?: string;
    atgradedoors?: string;
    ceillingheight?: string;
    forkliftcapacity?: string;
    address?: Address[];
    hours?: Hours;
    warehouseprice?: Warehouseprice;
}

export interface CompanyUserPostData {
    userId?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
    firstName?: string;
    houseNo?: string;
    lastName?: string;
    middleName?: string;
    mobileNo?: string;
    photoName?: string;
    pincode?: string;
    roleType?: string;
    status?: string;
    userPhoto?: string;
}

export interface Hours {
    id?: string;
    warehouseId?: string;
    openday?: string;
    starttime?: string;
    endtime?: string;
    openall?: boolean;
}
export interface EnquiryProps {
 
    firstName: string,
    middleName: string
    lastName: string,
    email: string,
    mobileNo: string,
    subject: string,
    descp: string
  }

export interface viewUserProps {
    page:string;
    size: string;
    status: string;
}

export class ApiConfig {
    endPointGateWay = '/';
    testApi = '/test';
    signinApi = '/login';
    slLoginApi = '/sllogin';
    signinTestApi = '/logintest';
    signUpUrl = '/register';
    getStatesUrl = '/state';
    getCitiesUrl = '/city';
    getCompaniesApi = '/clients';
    addCompanyUrl = '/client';
    getCompanyByIdUrl = '/client';
    deleteCompanyUrl = '/client';
    updateCompanyApi = '/clientUpdate';
    uploadCompanyPhotoApi = '/uploadClientProfilePic';
    searchwarehouse = '/searchwarehouse';
    getWarehouseByClientIdUrl = '/warehouseByClientId';
    getWarehouseByIdUrl = '/warehouseById';
    getWarehouseAdminUrl = '/warehouses';
    addWarehouseUrl = '/warehouse';
    enquiry = '/enquiry';
    getViewUserUrl = '/storeflexusers';
    userUrl = '/storeflexuser';
    getCompanyListApi = '/clientDropList';
    getWarehouseCategoriesApi = '/categories'

}

export interface UserPostData {
    userId?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    photo?: Photo[];
    photoName?: string;
    mobileNo?: string;
    email?: string;
    address?: string;
    plotNo?: string;
    houseNo?: string;
    pincode?: string;
    city?: string;
    state?: string;
    country?: string;
    roleType?: string;
    clientId?: string;
    addresses?: Address[];
}