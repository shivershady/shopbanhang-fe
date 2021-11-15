import { Axios } from "./Axios";


export function addCart(payload) {
  const url = "cart/add";
  return Axios.post(url,payload);
}

export function deleteCart() {
    const url = "cart/delete";
    return Axios.post(url,payload);
  }

  export function getCart() {
    const url = "cart";
    return Axios.get(url);
  }



const cartService = {
  getCart,
  addCart,
  deleteCart,
};

export default cartService;
