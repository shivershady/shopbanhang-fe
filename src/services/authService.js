import { Axios } from "./Axios";

export function login(payload) {
  const url = "user/login";
  return Axios.post(url, payload);
}

export function logout() {
  const url = "user/logout";
  return Axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

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

export function editProfile(payload) {
  const url = "user/update-profile";
  return Axios.post(url, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function changePassword(payload) {
  const url = "user/change-password";
  return Axios.post(url, payload);
}

export function editShop(payload) {
  const url = "user/update-shop";
  return Axios.post(url, payload);
}

export function getShop() {
  const url = "user/shop";
  return Axios.get(url);
}

const authService = {
  login,
  logout,
  signup,
  getUser,
  editProfile,
  editShop,
  changePassword,
};

export default authService;
