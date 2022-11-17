export interface BusinessDetails {
    businessid: string;
    name: string;
    address: string;
    phone: number;
    weburl: string;
    gstn: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    description: string;
}
export interface StoreDetails {
    businessid: string;
    storeid: string;
    name: string;
    address: string;
    phone: number;
    gstn: string;
    city: string;
    state: string;
    zip: number;
    description: string;
}

export interface officeData {
    id: number;
    name: string;
    rate: number;
}

export interface EditBusinessDetails {
    clientId: string;
    compyName: string;
    address: string;
    phone: number;
    url: string;
    gstn: string;
    city: string;
    state: string;
    pincode: number;
    country: string;
    compyDesc: string;
}