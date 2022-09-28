
import axios from "axios";
const registerApi = {
    post: (user) => {
        const url = 'https://quangnh.xyz/v1/authentication/register';
        return axios.post(url, {
            email: user.email,
            name: user.name,
            password: user.password
        })
    }
}

export default registerApi