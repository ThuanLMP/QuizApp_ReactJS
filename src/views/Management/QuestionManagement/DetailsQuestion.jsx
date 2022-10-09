import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { updateStatusShowDetails } from "../../../store/managementSlice";
import { editQuestionUpdate, fetchQuestion } from "../../../store/questionManagementSlice";
import Checkbox from '@mui/material/Checkbox';
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";


export default function DetailsQuestion() {
    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    const question = useSelector(state => state.questionManagement.questionUpdate)
    const dispatch = useDispatch()
    const formik = useFormik(
        {
            initialValues: {

            },
            onSubmit: (value,{resetForm}) => {
                
            }
        }
    )

    const closeShowDetails = () => {
        const action = updateStatusShowDetails(false)
        dispatch(action)
    }


    const addNewAnswer = () => {
        const newAnswer = {
            content: '',
            is_correct: false
        }
        const newQuestion = { ...question }
        newQuestion.answers = [...newQuestion.answers, newAnswer]
        const action = editQuestionUpdate(newQuestion)
        dispatch(action)

    }

    const deleteAnswer = (index) => {
        const newQuestion = { ...question }
        const newArr = [...question.answers]
        newArr.splice(index, 1)
        newQuestion.answers = [...newArr]
        const action = editQuestionUpdate(newQuestion)
        dispatch(action)
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
                    <TextField
                        margin="dense"
                        id="question"
                        label="Question ID"
                        type="text"
                        fullWidth
                        variant="standard"
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
                        defaultValue={question.title}
                    >
                    </TextField>
                    {
                        question.answers.map((answer, index) => {
                            return (
                                <Box component='div' width={500} sx={{
                                    display: 'flex'
                                }}>
                                    <Checkbox checked={answer.is_correct} />
                                    <TextField
                                        margin="dense"
                                        id="question"
                                        label={`Answer: ${index + 1}`}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        defaultValue={answer.content}
                                    />
                                    <IconButton
                                        onClick={() => deleteAnswer(index)}
                                        aria-label="close"
                                        sx={{
                                            color: (theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            )
                        })}

                    <Box component='div' textAlign='center'>
                        <Button variant="outlined" startIcon={<AddIcon />} onClick={addNewAnswer}> Add Answer</Button>
                    </Box>

                    <LoadingButton
                        loading={false}
                        loadingPosition="end"
                        variant="contained"
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        fullWidth
                    >
                        Save
                    </LoadingButton>
                </DialogContent>


            </Dialog>

        </>
    )
}