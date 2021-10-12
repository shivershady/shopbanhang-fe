import {Axios} from './Axios';

export function login(payload) {
    return Axios.post(`user/login`, payload);
}

export function logout() {
    return localStorage.removeItem('token');
}


//đăng ký
export function signup(payload) {
    return Axios.post(`user/register`, payload);
}

export function getUser(payload) {
    return Axios.get(`user`, payload ? payload : null);
}

const authService = {
    login,
    logout,
    signup,
    getUser
}

export default authService;