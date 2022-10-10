
import axios from "axios";
import { urlApi } from "../config";

const forgotPasswordApi = {
    post: (data) => {
        const url = `${urlApi}/authentication/forgot-password`;
        return axios.post(url, {
            email: data.email,
        })
    }
}

export default forgotPasswordApi