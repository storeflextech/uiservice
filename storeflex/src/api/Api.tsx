// import React from 'react';
import axios from 'axios';
import { ApiConfig, SignInProps, AddCompanyProps, ViewCompaniesProps, ViewWarehouseProps } from './ApiConfig';


// let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };



export default class Api {
    baseUrl:any;
    apiUrl: ApiConfig;
    constructor() {
        this.apiUrl = new ApiConfig();
        this.baseUrl = process.env.REACT_APP_API_URL;
    }

    async getTest() {
        const url = this.apiUrl.testApi;
        return await axios.get(url).then((response)=> {
            return Promise.resolve(response);
        }).catch((error)=>{
            console.log(' error >> ', error);
            return Promise.reject(error);
        });
    }

    async signIn(postData: SignInProps): Promise<any>{
        const url = this.baseUrl+this.apiUrl.signinTestApi;
        try {
            const response = await axios.post(url, postData);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : signIn', error);
            return Promise.reject(error);
        }
    }

    async addCompany(postData: AddCompanyProps): Promise<any>{
        const url = this.baseUrl+this.apiUrl.addCompanyUrl;
        try {
            const response = await axios.post(url, postData);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Add company', error);
            return Promise.reject(error);
        }
    }

    async getMyCompanies(getData: ViewCompaniesProps): Promise<any>{
        const url = this.baseUrl+this.apiUrl.getCompaniesUrl+'?page='+getData.page+'&size='+getData.size;
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Company', error);
            return Promise.reject(error);
        }
    }

    async searchwarehouse(getData: any): Promise<any>{
        const url = this.baseUrl+this.apiUrl.searchwarehouse+'?pincode='+getData+'&page=0&size=10';
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Company', error);
            return Promise.reject(error);
        }
    }

    async getWarehouse(getData: ViewWarehouseProps): Promise<any>{
        const url = this.baseUrl+this.apiUrl.getWarehouseUrl+'?clientId='+getData.clientId+'&page='+getData.page+'&size='+getData.size;
        try {
            const response = await axios.get(url);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : Get Warehouse', error);
            return Promise.reject(error);
        }
    }
}