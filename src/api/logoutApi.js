
import axios from "axios";
import { urlApi } from "../config";

const logoutApi = {
    post: (refresh_token) => {
        const url = `${urlApi}/authentication/logout`;
        return axios.post(url, {
            refresh_token: refresh_token
        })
    }
}

export default logoutApi