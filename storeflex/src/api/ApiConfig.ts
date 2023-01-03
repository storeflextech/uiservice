
import { Address, Contact , Photo, Warehouseprice} from '../../src/utils/ResponseSchema'
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
    getCompanyListApi = '/clientDropList';
    getWarehouseCategoriesApi = '/categories'


}