import { httpClient } from '../helpers/http-client.helper'

export const userService = {
  login
};

function login (creds) {
    return httpClient.post(`/api/user/authenticate`, creds)
    .then(response => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        return Promise.resolve(response.data)
    }).catch((err) => {
      return Promise.reject(err.response.data)
    });
};
