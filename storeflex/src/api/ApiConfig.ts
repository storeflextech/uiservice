
export interface SignInProps {
    username: string;
    password: string;
}

export interface ViewCompaniesProps{
    page: string;
    size: string;
}

export interface AddCompanyProps{
        compyName: string;
        compyDesc: string;
        photo: string;
        photoName: string;
        url: string;
        updatedBy: string;
        status: boolean;
        addresses:Array<object>;
        contact:Array<object>;
}

export class ApiConfig {
    endPointGateWay = '/';
    testApi = '/test';
    signinApi = '/login';
    signinTestApi = '/logintest';
    signUpUrl = '/register';
    getCompaniesUrl = '/clients';
    addCompanyUrl = '/client';
}