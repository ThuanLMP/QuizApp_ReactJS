import axiosClient from "./axiosClient";
import axios from "axios";
const loginApi = {
    post: () => {
        const url = 'https://quangnh.xyz/v1/authentication/login';
        return axios.post(url, {
            email: 'thuantv4@gmail.com',
            password: '12345678'
        })
    }
}

export default loginApi