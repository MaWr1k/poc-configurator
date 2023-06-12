/*
 *  Document    : axios.js
 *  Author      : Novac
 *  Description : Base API File
 */

import Axios from "axios";

const site = "https://talentlab.click";

const instance = Axios.create({
  baseURL: site,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
