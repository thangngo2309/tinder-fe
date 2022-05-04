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