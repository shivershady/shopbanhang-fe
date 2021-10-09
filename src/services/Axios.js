import axios from 'axios';
import queryString from "query-string";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{'Content-Type': 'application/json'},
    paramsSerializer: (params) => queryString.stringify(params)
})

export function get(url){
    return axiosInstance.get(url);
}

export function post(url,payload){
    return axiosInstance.post(url,payload);
}

export function put(url,payload){
    return axiosInstance.put(url,payload);
}

export function del(url,id){
    return axiosInstance.delete(url,{data:{"id":id}});
}

export const Axios ={
    get,
    post,
    put,
    del,
    axiosInstance
}
