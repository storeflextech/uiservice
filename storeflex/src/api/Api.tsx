// import React from 'react';
import axios from 'axios';
import { ApiConfig, SignInProps } from './ApiConfig';


// let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };



export default class Api {
    apiUrl: ApiConfig;
    constructor() {
        this.apiUrl = new ApiConfig();
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
        const url = this.apiUrl.signinTestApi;
        try {
            const response = await axios.post(url, postData);
            return Promise.resolve(response);
        }
        catch (error) {
            console.log(' error : signIn', error);
            return Promise.reject(error);
        }
    }
}