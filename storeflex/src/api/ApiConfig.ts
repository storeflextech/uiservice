
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
    country: string;
}

export interface GetCitiesProp {
    state: string;
}

export interface ViewWarehouseProps {
    clientId: string;
    page: string;
    size: string;
}

export interface Address {
    addressType: string,
    plotNo: string,
    houseNo: string,
    streetDetails: string,
    city: string,
    state: string,
    country: string,
    pincode: string,
    createBy: string,
    updatedBy: string,
}

export interface Contact {
    contactName: string,
    mobileNo: string,
    landLine: string,
    landLineExt: string,
    emailId: string,
    createBy: string,
    updatedBy: string,
}

export interface AddCompanyProps {
    compyName: string;
    compyDesc: string;
    photo?: string;
    photoName: string;
    url: string;
    updatedBy: string;
    status: boolean;
    addresses: Address[];
    contact: Contact[];
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
    getCompaniesUrl = '/clients';
    addCompanyUrl = '/client';

    searchwarehouse = '/searchwarehouse';
    getWarehouseUrl = '/warehouseByClientId';

}