
export interface SignInProps {
    username: string;
    password: string;
}

export interface ViewCompaniesProps {
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
    signinTestApi = 'http://ec2-13-232-148-204.ap-south-1.compute.amazonaws.com:8082/storeflexservice/logintest';
    signUpUrl = '///';

    warehouseSearchApi = 'http://ec2-13-232-148-204.ap-south-1.compute.amazonaws.com:8082/storeflexservice/searchwarehouse';
}