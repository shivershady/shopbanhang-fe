import { Axios } from "./Axios";


export function addCart(id,payload) {
  const url = "cart/add";
  return Axios.post(url+"/"+id,payload);
}

export function deleteCart(payload) {
    const url = "cart/delete";
    return Axios.post(url+"/"+payload);
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
