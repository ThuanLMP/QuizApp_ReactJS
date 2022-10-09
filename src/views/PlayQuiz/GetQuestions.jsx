import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import questionApi from '../../api/questionApi';
import Header from '../../components/header/Header';
import { setupAnswersSubmit, updateListQuestionsSubmit, updateQuestionsPlay } from '../../store/questionSlice';


export default function GetQuestions() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const getQuestions = async (totalQ) => {
        setLoading(true)
        try {

            // call api get data question play
            const response = await questionApi.getQuestionsPlay(totalQ)
            // set data question play to store
            const action1 = updateQuestionsPlay(response.data.data)
            dispatch(action1)

            // set data listQuestionsSubmit to store
            const listQuestionsSubmit = response.data.data.map((value) => {
                return {
                    id: value.id,
                    answersSubmittedId: []
                }
            })
            
            const action2 = updateListQuestionsSubmit(listQuestionsSubmit)
            dispatch(action2)

            // navigate to play screen
            navigate('../play')

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const formik = useFormik({
        initialValues: {
            number: 0
        },
        onSubmit: (value, { resetForm }) => {
            getQuestions(value.number)
            resetForm();
        },

    })
    return (

        <div>
            <Header />
            <Box textAlign='center' mt={5}>
                <Typography variant="h5" component="h2" mt={7} mb={6}>
                    Enter number Questions you want play ?
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300, marginLeft: '40%' }} >
                    <TextField
                        id="outlined-number"
                        name='number'
                        label="Number"
                        type="number"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            inputProps: {
                                max: 50,
                                min: 2,
                            }
                        }}
                    />
                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        fullWidth

                    >
                        play
                    </LoadingButton>


                </Box>

            </Box>
        </div>




    )
}