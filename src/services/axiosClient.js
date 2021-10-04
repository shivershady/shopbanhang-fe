import axios from "axios";
import queryString from "queryString";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptosr.request.use(async (config) => {
  //Handle token here...
  return config;
});

axiosClient.interceptosr.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //Handle error
    throw error;
  }
);

export default axiosClient;
