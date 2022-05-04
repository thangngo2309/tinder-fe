import * as Axios from 'axios';
import jwt_decode from "jwt-decode";
import { baseUrl } from './base.service';

export const signIn = async (params: any) => {
    const res = await Axios.default.post(`${baseUrl}/auth/login`, params);
    const accessToken = res.data.access_token;
    const decoded = jwt_decode(accessToken);
    return { ...(decoded as object), accessToken}
}

export const registor = async (params: any) => {
    const user = await Axios.default.post(`${baseUrl}/users`, params);
    return user
}