import { Axios } from "./Axios";

export function addProduct(payload) {
  const url = "product/add";
  return Axios.post(url, payload,{ 
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function getAllProduct() {
  const url = "product";
  return Axios.get(url);
}

export function getRandomProduct() {
  const url = "product-random";
  return Axios.get(url);
}

export function getProductById(id) {
  const url = "product-details";
  return Axios.get(url+'/'+id);
}

const productService = {
  addProduct,
  getAllProduct,
  getProductById,
};

export default productService;
