
import { Address, Contact , Photo, WhPricing} from '../../src/utils/ResponseSchema'
export interface SlLoginProps {
    username: string,
    emailId: string,
    password: string
}

export interface SignInProps {
    username: string;
    password: string;
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

export interface AddWarehousePostData {
    clientId?: string;
    warehouseName?: string;
    descp?: string;
    warehouseTaxId?: string;
    days?: string;
    time?: string;
    facilitiesId?: string;
    industryId?: string;
    storagesId?: string;
    addresse?: Address[];
    pricing?: WhPricing;
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
    deleteCompanyUrl = '/client';
    updateCompanyApi = '/clientUpdate';
    uploadCompanyPhotoApi = '/uploadClientProfilePic';
    searchwarehouse = '/searchwarehouse';
    getWarehouseByClientIdUrl = '/warehouseByClientId';
    getWarehouseAdminUrl = '/warehouses';
    addWarehouseUrl = '/warehouse';
    enquiry = '/enquiry';
    getViewUserUrl = '/storeflexusers';
    getCompanyListApi = '/clientDropList';
    getWarehouseCategoriesApi = '/categories'


}