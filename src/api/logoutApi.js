
import axios from "axios";


const logoutApi = {
    post: (refresh_token) => {
        const url = 'https://quangnh.xyz/v1/authentication/logout';
        return axios.post(url, {
            refresh_token: refresh_token
        })
    }
}

export default logoutApi