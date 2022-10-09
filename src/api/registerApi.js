
import axios from "axios";
import { urlApi } from "../config";
const registerApi = {
    post: (user) => {
        const url = `${urlApi}/authentication/register`;
        return axios.post(url, {
            email: user.email,
            name: user.name,
            password: user.password
        })
    }
}

export default registerApi