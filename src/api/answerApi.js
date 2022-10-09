import axios from "axios";
import { getCookies } from "./axiosInstance";
import { urlApi } from "../config";

const answerApi = {
    addAnswer: (answer) => {
        const url = `${urlApi}/answers`;
        return axios.post(
            url,
            answer,
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