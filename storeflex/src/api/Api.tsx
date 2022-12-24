// import React from 'react';
import axios from 'axios';
import { ApiConfig, SlLoginProps, SignInProps, GetStatesProp, GetCitiesProp, AddCompanyPostData, ViewCompaniesProps, ViewWarehouseProps, viewWarehouseAdminProps, EnquiryProps, viewUserProps, AddWarehousePostData } from './ApiConfig';


// let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };
export default class Api {
    baseUrl: any;
    apiUrl: ApiConfig;
    constructor() {
        this.apiUrl = new ApiConfig();
        this.baseUrl = process.env.REACT_APP_API_URL;
    }

    async getTest() {
        const url = this.apiUrl.testApi;
        return await axios.get(url).then((response) => {
            return Promise.resolve(response);
        }).catch((error) => {
            console.log(' error >> ', error);
            return Promise.reject(error);
        });
    }

    async slLogin(postData: SlLoginProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.slLoginApi;
        try {
            const response = await axios.post(url, postData);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : signIn', error);
            return Promise.reject(error);
        }
    }

    async signIn(postData: SignInProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.signinTestApi;
        try {
            const response = await axios.post(url, postData);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : signIn', error);
            return Promise.reject(error);
        }
    }

    async getStatesByCountry(requestObject: GetStatesProp): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getStatesUrl + '?countryId=' + requestObject.countryCode;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : getStatesByCountry', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : getStatesByCountry', error);
            return Promise.reject(error);
        }
    }

    async getCitiesByState(requestObject: GetCitiesProp): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getCitiesUrl + '?stateCode=' + requestObject.state;
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Company', error);
            return Promise.reject(error);
        }
    }

    async addCompany(postData: AddCompanyPostData): Promise<any>{
        const url = this.baseUrl+this.apiUrl.addCompanyUrl;
        try {
            const response = await axios.post(url, postData);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : addCompany ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : addCompany', error);
            return Promise.reject(error);
        }
    }

    async deleteCompany(clientId: string): Promise<any>{
        const url = `${this.baseUrl}${this.apiUrl.deleteCompanyUrl}?clientId=${clientId}`;
        try {
            const response = await axios.delete(url);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : deleteCompany ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : deleteCompany', error);
            return Promise.reject(error);
        }
    }

    async uploadCompanyPhoto(imageFile: any, clientId: string): Promise<any>{
        const postData = {
            clientPhoto: imageFile
        }
        const url = `${this.baseUrl}${this.apiUrl.uploadCompanyPhotoApi}?clientId=${clientId}` ;
        try {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            const response = await axios.post(url, postData, config);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : uploadCompanyPhoto ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : uploadCompanyPhoto', error);
            return Promise.reject(error);
        }
    }
    async updateCompany(postData: AddCompanyPostData): Promise<any>{
        const url = this.baseUrl+this.apiUrl.addCompanyUrl;
        try {
            const response = await axios.post(url, postData);
            if (response.status === 200) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : updateCompany  ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error :  updateCompany', error);
            return Promise.reject(error);
        }
    }

    async getMyCompanies(getData: ViewCompaniesProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getCompaniesApi + '?page=' + getData.page + '&size=' + getData.size;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : getMyCompanies ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : getMyCompanies', error);
            return Promise.reject(error);
        }
    }

    async getCompanyList(): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getCompanyListApi;
        try {
            const response = await axios.get(url);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : getCompanyList ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : getCompanyList', error);
            return Promise.reject(error);
        }
    }
    async addWarehouse(postData: AddWarehousePostData): Promise<any> {
        const url = `${this.baseUrl}${this.apiUrl.addWarehouseUrl}`;
        try {
            const response = await axios.post(url, postData);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : addWarehouse ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : addWarehouse', error);
            return Promise.reject(error);
        }
    }
    async searchwarehouse(getData: any): Promise<any> {
        const url = this.baseUrl + this.apiUrl.searchwarehouse + '?pincode=' + getData + '&page=0&size=10';
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Company', error);
            return Promise.reject(error);
        }
    }

    async getWarehouseByClientId(getData: ViewWarehouseProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getWarehouseByClientIdUrl + '?clientId=' + getData.clientId + '&page=' + getData.page + '&size=' + getData.size;
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Warehouse', error);
            return Promise.reject(error);
        }
    }

    async getWarehouseAdmin(getData: viewWarehouseAdminProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getWarehouseAdminUrl + '?page=' + getData.page + '&size=' + getData.size;
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Warehouse', error);
            return Promise.reject(error);
        }
    }

    async getWarehouseCategories(): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getWarehouseCategoriesApi;
        try {
            const response = await axios.get(url);
            if (response?.data?.statusCode === 600) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : getWarehouseCategories ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : getWarehouseCategories', error);
            return Promise.reject(error);
        }
    }
    async enquiry(postData: EnquiryProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.enquiry;
        try {
            const response = await axios.post(url, postData);
            if (response.status === 200) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : enquiry ', response);
                return Promise.reject(response);
            }
        }
        catch (error) {
            console.log(' error : enquiry', error);
            return Promise.reject(error);
        }
    }
    async getViewUser(getData: viewUserProps): Promise<any> {
        const url = this.baseUrl + this.apiUrl.getViewUserUrl + '?page=' + getData.page + '&size=' + getData.size;
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                return Promise.resolve(response?.data);
            } else {
                console.log(' error : getViewUser ', response);
                return Promise.reject(response);
            }
           
        }
        catch (error) {
            console.log(' error : View User', error);
            return Promise.reject(error);
        }
    }
}