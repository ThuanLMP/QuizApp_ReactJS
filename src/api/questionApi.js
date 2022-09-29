
import axios from "axios";
import { getCookies } from "./axiosInstance";
const questionApi = {
    getQuestionsPlay: (totalQ) => {
        const url = 'https://quangnh.xyz/v1/questions/play';
        return axios.get(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
                params: {
                    total: totalQ
                }
            },

        )
    },
    submitQuestionsPlay: (listQuestionsSubmit) => {
        const url = 'https://quangnh.xyz/v1/questions/submit';
        return axios.post(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                }
            }
        )
    }

}

export default questionApi