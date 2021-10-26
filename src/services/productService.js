import { Axios } from "./Axios";

export function addProduct(payload) {
  const url = "product/add";
  return Axios.post(url, payload);
}

export function getProduct() {
  const url = "product";
  return Axios.get(url);
}

const productService = {
  addProduct,
  getProduct,
};

export default productService;
