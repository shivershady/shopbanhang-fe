import { Axios } from "./Axios";

export function login(payload) {
  const url = "user/login";
  return Axios.post(url, payload);
}

export function logout() {
  return localStorage.removeItem("token");
}

//đăng ký
export function signup(payload) {
  const url = "user/register";
  return Axios.post(url, payload);
}

export function getUser() {
  const url = "user";
  return Axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

const authService = {
  login,
  logout,
  signup,
  getUser,
};

export default authService;
