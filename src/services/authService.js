import {Axios} from './Axios';

export function login(payload) {
    return Axios.post(`user/login`, payload);
}

export function logout() {

}


//đăng ký
export function signup(payload) {
    return Axios.post(`user/register`, payload);
}

export function getUser() {
    return Axios.get(`user`);
}

const authService = {
    login,
    logout,
    signup,
    getUser
}

export default authService;