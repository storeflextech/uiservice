
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
}

export interface Address {
    addressType?: string;
    plotNo?: string;
    houseNo?: string;
    streetDetails?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string
}

export interface Contact {
    contactName?: string;
    mobileNo?: string;
    landLine?: string;
    landLineExt?: string;
    emailId?: string;
}

export interface Photo {
    [key: string]: string;
}
export interface AddCompanyPostData {
    compyName?: string;
    compyDesc?: string;
    photo?: Photo[];
    photoName?: string;
    url?: string;
    gstNo?: string;
    addresses?: Address[];
    contact?: Contact[];
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
    searchwarehouse = '/searchwarehouse';
    getWarehouseByClientIdUrl = '/warehouseByClientId';
    getWarehouseAdminUrl = '/warehouses';
    enquiry = '/enquiry';

}