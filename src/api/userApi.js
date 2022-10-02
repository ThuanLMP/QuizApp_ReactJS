import axios from "axios";
import { getCookies } from "./axiosInstance";

const userApi = {
    getAllUsers: (filterUsers) => {
        const url = 'https://quangnh.xyz/v1/user';
        return axios.get(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
                params: {
                    sortField: filterUsers.sortField,
                    role1: filterUsers.role1,
                    role2: filterUsers.role2,
                    keyWord: filterUsers.keyWord,
                    order: filterUsers.order,
                    size: filterUsers.size,
                    page: filterUsers.page
                }
            }
        )
    }

}

export default userApi