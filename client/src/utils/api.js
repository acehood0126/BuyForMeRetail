import axios from 'axios';
// import store from '../store';
// import { LOGOUT } from '../actions/types';

// Create an instance of axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.request.use(req => {
  console.log(`${req.method} ${req.url}`);
  // Important: request interceptors **must** return the request.
  return req;
});

api.interceptors.response.use(res => {
  console.log(res.data.json);
  // Important: response interceptors **must** return the response.
  return res;
});

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     // if (err.response.status === 401) {
//     //   store.dispatch({ type: LOGOUT });
//     // }
//     return Promise.reject(err);
//   }
// );

export default api;
