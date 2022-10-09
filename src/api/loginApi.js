
import axios from "axios";
import { urlApi } from "../config";

const loginApi = {
    post: (user) => {
        const url = `${urlApi}/authentication/login`;
        return axios.post(url, {
            email: user.email,
            password: user.password
        })
    }
}

export default loginApi