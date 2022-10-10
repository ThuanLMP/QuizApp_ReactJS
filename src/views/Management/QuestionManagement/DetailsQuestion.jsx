import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { updateStatusShowDetails } from "../../../store/managementSlice";
import { editQuestionUpdate, fetchQuestion, updateTitleQuetionUpdate } from "../../../store/questionManagementSlice";
import Checkbox from '@mui/material/Checkbox';
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import answerApi from "../../../api/answerApi";
import DetailAnswer from "./DetailAnswer";
import { useState } from "react";
import questionApi from "../../../api/questionApi";
import { toast } from "react-toastify";


export default function DetailsQuestion() {
    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    const question = useSelector(state => state.questionManagement.questionUpdate)
    const [questionTitle, setQuestionTitle] = useState(question.title)
    const [questionThumbnailLink, setQuestionThumbnailLink] = useState(question.thumbnail_link)
    const dispatch = useDispatch()
    const formik = useFormik(
        {
            initialValues: {
                content: '',
                isCorrect: false

            },
            onSubmit: async (values, { resetForm }) => {

                try {
                    const dataAnswer = {
                        content: values.content,
                        is_correct: values.isCorrect,
                        questionId: question.id
                    }
                    const response = await answerApi.addAnswer(dataAnswer)
                    if (response.status === 201) {
                        dispatch(fetchQuestion(question.id))
                    }
                    else {
                        toast.error(response.data.message)
                    }

                    resetForm()
                } catch (error) {
                    toast.error(error.response.data.message[0])
                }

            }
        }
    )

    const closeShowDetails = () => {
        const action = updateStatusShowDetails(false)
        dispatch(action)
    }

    const handleChangeTitle = (action) => {
        setQuestionTitle(action.target.value)
    }
    const handleSaveQuestion = async () => {
        try {
            const respone = await questionApi.editQuestion(
                {
                    title: questionTitle,
                    thumbnail_link: questionThumbnailLink
                },
                question.id
            )
            if (respone.status === 200) {
                toast.success(respone.data.message)
            } else {
                toast.error(respone.error.message)
            }
        } catch (error) {
            toast.error(error.respone.message)
        }
    }



    return (
        <>

            <Dialog open={statusShowDetails}>
                <DialogTitle >
                    Details Question
                    <IconButton
                        onClick={closeShowDetails}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    <Box component='div'>
                        <TextField
                            margin="dense"
                            id="question"
                            label="Question ID"
                            type="text"
                            fullWidth
                            variant="filled"
                            defaultValue={question.id}
                            InputProps={{
                                readOnly: true,
                            }}
                        >
                        </TextField>

                        <TextField
                            margin="dense"
                            id="question"
                            label="Question Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={questionTitle}
                            onChange={handleChangeTitle}
                        >
                        </TextField>
                        {
                            question.answers.map((answer, index) => {
                                return (
                                    <Box component='div' width={500} sx={{
                                        display: 'flex'
                                    }} key={answer.id}>
                                        <DetailAnswer answer={answer} index={index} />
                                    </Box>
                                )
                            })
                        }

                        <Box component='form' textAlign='center' mt={2} onSubmit={formik.handleSubmit}>
                            <Box component='div' width={500} sx={{
                                display: 'flex'
                            }}>
                                <FormControlLabel
                                    control={<Checkbox checked={formik.values.isCorrect} />}
                                    name="isCorrect"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <TextField
                                    margin='dense'
                                    id='content'
                                    name="content"
                                    label='Add new answer'
                                    fullWidth
                                    variant="standard"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                </TextField>
                            </Box>
                            <Button variant="outlined" type="submit" startIcon={<AddIcon />} > Add Answer</Button>
                        </Box>

                        <LoadingButton
                            loading={false}
                            loadingPosition="end"
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3, mb: 2 }}
                            fullWidth
                            onClick={handleSaveQuestion}
                        >
                            Save
                        </LoadingButton>
                    </Box>

                </DialogContent>


            </Dialog>

        </>
    )
}