import * as Axios from 'axios';
import jwt_decode from "jwt-decode";
import { baseUrl } from './base.service';

export const pass = async (params: any) => {
    const user = await Axios.default.post(`${baseUrl}/users/pass`, params, makeConfig());
    return user
}

export const like = async (params: any) => {
    const user = await Axios.default.post(`${baseUrl}/users/like`, params, makeConfig());
    return user
}

export const getUserInfo = async (userId: any) => {
    const user = await Axios.default.get(`${baseUrl}/users/${userId}`, params, makeConfig());
    return user
}

export const getFriends = (pageIndex) => {
    return Axios.default.get(`https://dummyapi.io/data/v1/user?limit=10&page=${pageIndex}`, {
        headers: {  
            "app-id": "6112dc7c3f812e0d9b6679dd",
            "Content-Type": "application/json"
        },
    });
}