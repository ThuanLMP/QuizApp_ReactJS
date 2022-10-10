import { Button, Checkbox, FormControlLabel, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useState } from "react";
import answerApi from "../../../api/answerApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editQuestionUpdate, fetchQuestion } from "../../../store/questionManagementSlice";

export default function DetailAnswer({ answer, index }) {
    const question = useSelector(state => state.questionManagement.questionUpdate)
    const dispatch = useDispatch()

    const formik = useFormik(
        {
            initialValues: {
                content: answer.content,
                isCorrect: answer.is_correct
            },
            onSubmit: async (values) => {
                try {
                    const response = await answerApi.editAnswer({
                        content: values.content,
                        is_correct: values.isCorrect
                    }, answer.id)
                    if (response.status) {
                        toast.success(response.data.message)
                    } else {
                        toast.error(response.data.message)
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                }
            }
        }
    )

    const deleteAnswer = async () => {
        try {
            const response = await answerApi.deleteAnswer(answer.id)
            if (response.status === 200) {
                dispatch(fetchQuestion(question.id))
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <>

            <Box
                component='form'
                width={500}
                sx={{
                    display: 'flex'
                }}
                onSubmit={formik.handleSubmit}
            >
                <FormControlLabel
                    control={<Checkbox checked={formik.values.isCorrect} />}
                    name="isCorrect"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    margin="dense"
                    id="content"
                    name="content"
                    label={`Answer: ${index + 1}`}
                    type="text"
                    fullWidth
                    variant="standard"
                    required
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <IconButton
                    aria-label="close"
                    type="submit"
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <SaveIcon />
                </IconButton>
            </Box>
            <IconButton
                onClick={() => deleteAnswer()}
                aria-label="close"
                sx={{
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </>
    )
}