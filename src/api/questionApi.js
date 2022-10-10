
import axios from "axios";
import { getCookies } from "./axiosInstance";
import { urlApi } from "../config";
const questionApi = {
    getQuestionsPlay: (totalQ) => {
        const url = `${urlApi}/questions/play`;
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
        const url = `${urlApi}/questions/submit`;

        return axios.post(
            url,
            {
                listQuestionSubmitted: listQuestionsSubmit
            }
            ,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                }
            }
        )
    },
    getAllQuestion: (filterQuestions) => {
        const url = `${urlApi}/questions`;
        return axios.get(
            url,
            {
                
                params: {
                    sortField: filterQuestions.sortField,
                    keyWord: filterQuestions.keyWord,
                    order: filterQuestions.order,
                    size: filterQuestions.size,
                    page: filterQuestions.page

                }
            }
        )
    },
    addNewQuestion: (question) => {
        const url = `${urlApi}/questions`;
        return axios.post(
            url,
            {
                title: question.title,
                thumbnail_link: question.thumbnail_link
            },
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    },
    getQuestion: (id) => {
        const url = `${urlApi}/questions/${id}`;
        return axios.get(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    },
    deleteQuestion: (id) => {
        const url = `${urlApi}/questions/${id}`;
        return axios.delete(
            url,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    },
    editQuestion: (dataQuestion, id) => {
        const url = `${urlApi}/questions/${id}`;
        return axios.patch(
            url,
            dataQuestion,
            {
                headers: {
                    'Authorization': `bearer ${getCookies('ACCESS_TOKEN_QUIZ_APP')}`
                },
            }
        )
    }

}

export default questionApi