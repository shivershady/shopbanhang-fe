import { Axios } from "./Axios";


export function getCategory() {
  const url = "category";
  return Axios.get(url);
}


const categoryService = {
  getCategory,
};

export default categoryService;
