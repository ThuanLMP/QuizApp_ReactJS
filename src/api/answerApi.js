import axios from "axios";
import { getCookies } from "./axiosInstance";
import { urlApi } from "../config";

const answerApi = {
    addAnswer: (dataAnswer) => {
        const url = `${urlApi}/answers`;
        return axios.post(
            url,
            dataAnswer,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                }
            }
        )
    },
    deleteAnswer: (id) => {
        const url = `${urlApi}/answers/${id}`;
        return axios.delete(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    },
    editAnswer: (dataAnswer, id) => {
        const url = `${urlApi}/answers/${id}`;

        return axios.patch(
            url,
            dataAnswer,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    }
}
export default answerApi