import config from 'config';
import * as axios    from "axios";
import { authHeader } from '../helpers/auth-header.helper';
import { API_URL } from '../helpers/config'
const client = axios.create({baseURL: "http://localhost:9000/api"});


export const userService = {
    login,
    logout,
    getAll
};

// function login(user) {
//   debugger
//     const {email, password} = user;
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };
//     return fetch(`${config.apiUrl}/auth/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // login successful if there's a jwt token in the response
//             if (user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('user', JSON.stringify(user));
//             }

//             return user;
//         });
// }

function login (creds) {
      return axios.post(`${API_URL}/api/user/authenticate`, creds)
      .then(response => {
          debugger
          localStorage.setItem('user', JSON.stringify(response.data.token));
          return Promise.resolve(response.data)
      }).catch((err) => {
        return Promise.reject(err.response.data)
      });
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
