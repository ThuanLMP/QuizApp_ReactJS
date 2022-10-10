

import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateStatusShowDetails } from "../../../store/managementSlice";
import { addNewQuestionSchema, addNewUserSchema } from "../../../utils/helpers/validate";


const configUser = (rawUser) => {
    const listRoles = []
    if (rawUser.isUser) {
        listRoles.push('user')
    }
    if (rawUser.isAdmin) {
        listRoles.push('admin')
    }
    if (listRoles.length === 0) {
        listRoles.push('user')
    }

    const user = {
        email: rawUser.email,
        name: rawUser.name,
        password: rawUser.password,
        roles: listRoles
    }
    return user
}
export default function FormAdd({ typeForm, listFeild, innitvalues, handleSubmitForm, statusForm }) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: innitvalues,
        onSubmit: (value, { resetForm }) => {
            let result = value
            if (typeForm === 'Add new User') {
                result = configUser(value)
            }
            handleSubmitForm(result)
            
            //resetForm()
        },
        validationSchema: typeForm === 'Add new Question' ? addNewQuestionSchema : addNewUserSchema
    })



    let messError = ''
    if (formik.errors.title && formik.touched.title) {
        messError = formik.errors.title
    }

    return (

        <Container component="main" maxWidth="100%" >
            <Box component={Paper} sx={{
                backgroundColor: 'rgb(246,247,251)',
                width: '800px',
                height: '500px',
                marginLeft: '23%',
                marginTop: '4%',
                paddingTop: '8px',
                textAlign: 'center'
            }}>
                <Typography component='h1' variant="h5" sx={{ textAlign: 'center' }} >
                    {typeForm}
                </Typography>

                <Box component='form' mt={5} onSubmit={formik.handleSubmit}>
                    {
                        listFeild.map((value, index) => {
                            return (
                                <>
                                    {
                                        value.type === 'checkbox' ?
                                            <Box component='div' sx={{ width: '50%', marginLeft: '25%' }} key={index}>

                                                <FormControlLabel
                                                    control={<Checkbox checked={formik.values.isAdmin} />}
                                                    label="is Admin"
                                                    name="isAdmin"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox checked={formik.values.isUser} />}
                                                    label="is User"
                                                    name="isUser"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />

                                            </Box>
                                            :
                                            <Box component='div' sx={{ width: '50%', marginLeft: '25%' }} key={index}>
                                                <TextField
                                                    key={value.name}
                                                    margin='normal'
                                                    type={value.type}
                                                    fullWidth
                                                    id={value.name}
                                                    label={value.name}
                                                    name={value.name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={value.name === 'title' ? formik.values.title : formik.values.thumbnail_link}
                                                    autoComplete={value.name}
                                                >
                                                </TextField>
                                            </Box>

                                    }

                                </>

                            )
                        })
                    }
                    <span className='error'>{messError}</span>
                    <Box component='div' sx={{ width: '50%', marginLeft: '25%' }}>
                        <LoadingButton
                            loading={statusForm === 'pending' ? true : false}
                            loadingPosition="end"
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3, mb: 2 }}
                            fullWidth
                        >
                            Submit
                        </LoadingButton>
                    </Box>


                </Box>

            </Box>

        </Container >
    )
}