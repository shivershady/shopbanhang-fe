import axiosClient from "./axiosClient";

const productApi = {
    getData : (params) =>{
        const url = '/posts/post.php';
        return axiosClient.get(url, { params });
    },
    get : (id) =>{
        const url = `./posts/post.php/${id}`;
        return axiosClient.get(url);
    },
}

export default productApi

// import {Axios} from './Axios';
// const url = "posts/post.php";

// export function getData(){
//     return Axios.get(url);
// }

// export function add(payload){
//     return Axios.post(url,payload);
// }

// export function del(id){
//     return Axios.del(url,id);
// }

// export const productApi = {
//     getData,
//     add,
//     del
// }