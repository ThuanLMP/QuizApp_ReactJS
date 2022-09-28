import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


export default function GetQuestions() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            number: 0
        },
        onSubmit: (value, { resetForm }) => {
            console.log(value)
            resetForm();
        },

    })
    return (

        <Box textAlign='center' mt={5} >
            <Typography variant="h2" component="h2">
                Quiz App
            </Typography>
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
                            min: 5,
                        }
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Play
                </Button>
            </Box>

        </Box>


    )
}