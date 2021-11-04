import { Axios } from "./Axios";

export function addProduct(payload) {
  // Axios.setHeaders({
  //   'Content-Type': 'multipart/form-data'
  // })
  // let formData = new FormData();
  // formData.append('file', payload);
  const url = "product/add";
  return Axios.post(url, payload);
}

export function getProduct() {
  const url = "product";
  return Axios.get(url);
}

export function getProductById(id) {
  const url = "product-details";
  return Axios.get(url+'/'+id);
}

const productService = {
  addProduct,
  getProduct,
};

export default productService;
