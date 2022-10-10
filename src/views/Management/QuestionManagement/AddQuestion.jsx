import { Alert, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header/Header";
import { updateStatusShowDetails } from "../../../store/managementSlice";
import { fetchAddQuestion, updateStatusAddQuestion } from "../../../store/questionManagementSlice";
import FormAdd from "../ChildComponent/FormAdd";
import DetailsQuestion from "./DetailsQuestion";


export default function AddQuestion() {
    const dispatch = useDispatch()
    const statusAddQuestion = useSelector(state => state.questionManagement.statusAddQuestion)
    const statusShowDetails = useSelector(state => state.management.statusShowDetails)

    const listFeild = [
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'thumbnail_link',
            type: 'text'
        }
    ]

    const innitvalues =
    {
        title: '',
        thumbnail_link: ''
    }

    const addQuestion = async (question) => {
        await dispatch(fetchAddQuestion(question))
        const action = updateStatusShowDetails(true)
            dispatch(action)
    }

    return (

        <>
            {
                statusAddQuestion === 201 ?
                    <Box className="alertLogin">
                        <Alert onClose={() => {
                            const action = updateStatusAddQuestion('')
                            dispatch(action)
                        }} severity="success">
                            Thêm câu hỏi thành công
                        </Alert>
                    </Box> : (statusAddQuestion === 400 ?
                        <Box className="alertLogin">
                            <Alert onClose={() => {
                                const action = updateStatusAddQuestion(false)
                                dispatch(action)
                            }} severity="error">
                                Thêm câu hỏi thất bại
                            </Alert>
                        </Box> : <></>)

            }
            <Header />

            <FormAdd typeForm={'Add new Question'} listFeild={listFeild} innitvalues={innitvalues} handleSubmitForm={addQuestion} statusForm={statusAddQuestion} />
            {statusShowDetails && <DetailsQuestion />}
        </>

    )
}