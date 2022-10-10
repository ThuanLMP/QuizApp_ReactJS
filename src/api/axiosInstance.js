
import axios from 'axios';
import Cookies from 'universal-cookie';
import { urlApi } from '../config/API';


// Axios Interceptors
axios.interceptors.request.use(function (config) {
    const accessToken = getCookies('ACCESS_TOKEN_QUIZ_APP')
    if (accessToken) {
        config.headers.Authorization = `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {

    return response;
}, async (error) => {
    const originalConfig = error.config;
    const refreshToken = getCookies('REFRESH_TOKEN_QUIZ_APP')
    if (error.response.status === 401 && !error._retry) {
        error._retry = true
        if (!refreshToken) {
            window.location.pathname = '/'
        }
        else {
            const result = await axios.post(
                `${urlApi}/authentication/refresh-token`,
                {
                    refresh_token: refreshToken
                }
            )
            setCookies('ACCESS_TOKEN_QUIZ_APP', result.data.data.newTokens.access_token)
            setCookies('REFRESH_TOKEN_QUIZ_APP', result.data.data.newTokens.refresh_token)
            error.config.headers.Authorization = `bearer ${result.data.data.newTokens.access_token}`
            return axios(error.config)
        }
    }

    return Promise.reject(error);
});



// Set Cookie
const cookies = new Cookies();
export const setCookies = (name, value) => {
    let datenow = new Date()
    let expiry = new Date()
    if (name === 'ACCESS_TOKEN_QUIZ_APP') {
        expiry.setSeconds(datenow.getSeconds() + 3600)
    }
    else if (name === 'REFRESH_TOKEN_QUIZ_APP') {
        expiry.setDate(datenow.getDate() + 7)
    }

    cookies.set(name, value, { path: '/', expires: expiry });
}
export const getCookies = (name) => {
    return cookies.get(name);
}

export const removeCookies = (listName) => {
    listName.map((value) => {
        cookies.remove(value)
    })
}



