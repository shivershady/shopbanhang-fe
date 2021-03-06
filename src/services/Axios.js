import axios from "axios";
import queryString from "query-string";
import {useHistory} from "react-router";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {"Content-Type": "application/json"},
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
    //Handle token here...

    if (config.url.indexOf("login") == -1 && config.url.indexOf("signup") == -1) {
        const token = await localStorage.getItem("token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        //Handle error
        const status = error.response.status;
        switch (status) {
            case 401 :
                window.location.href = "/login";
                break;
            case 403 :
                window.location.href = "/login";
                break;
            default:
                //useHistory().push("/notfound");
                break;
        }
        throw error;
    }
);

export function get(url) {
    return axiosInstance.get(url);
}

export function post(url, payload) {
    return axiosInstance.post(url, payload);
}

export function put(url, payload) {
    return axiosInstance.put(url, payload);
}

export function del(url, id) {
    return axiosInstance.delete(url, {data: {id: id}});
}

export const Axios = {
    get,
    post,
    put,
    del,
    axiosInstance,
};
