import axios from 'axios'
import {API_URL} from './config'

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
axios
    .interceptors
    .request
    .use(async(config) => {
        if (isAbsoluteURLRegex.test(config.url)) {
            const token = JSON.parse(localStorage.getItem('token'));
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            config.url = `${API_URL}${config.url}`
        }
        return config;
    });

export const httpClient = axios;
