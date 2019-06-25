import axios from 'axios';

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (responce) => responce;
  const onFail = (err) => {
    if (err.response.request.responseURL.indexOf(`/login`) === -1 && err.response.status === 403) {
      onLoginFail();
      return;
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
