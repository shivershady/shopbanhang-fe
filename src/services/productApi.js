
import {Axios} from './Axios';
const url = "product";

export function getData(){
    return Axios.get(url);
}

export function add(payload){
    return Axios.post(url,payload);
}

export function del(id){
    return Axios.del(url,id);
}

export const productApi = {
    getData,
    add,
    del
}