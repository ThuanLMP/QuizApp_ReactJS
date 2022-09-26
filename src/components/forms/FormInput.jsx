import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import { SignupSchema } from '../../utils/helpers/validate'


const theme = createTheme();

export default function FormInput({ typeForm }) {

    let initValue = {}
    let listInput = []

    if (typeForm === 'Sign in') {
        initValue = {
            email: "",
            password: ""
        }
        listInput = ['email', 'password']
    }
    else if (typeForm === 'Sign up') {
        initValue = {
            name: "",
            email: "",
            password: ""
        }
        listInput = ['name', 'email', 'password']
    }
    else {
        initValue = {
            email: ""
        }
        listInput = ['email']
    }


    const formik = useFormik({
        initialValues: initValue,
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: SignupSchema
    })

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        {typeForm}
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

                        {listInput.map((val) => {
                            return (
                                <>
                                    <TextField key={val}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id={val}
                                        label={val === 'email' ? 'Email Address' : (val === 'password' ? 'Password' : 'Name')}
                                        name={val}
                                        type={val}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={val === 'email' ? formik.values.email : (val === 'password' ? formik.values.password : formik.values.name)}
                                        autoComplete={val}
                                    />


                                </>
                            )
                        })}


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {typeForm}
                        </Button>

                        <Grid container>
                            {
                                typeForm === 'Sign in' || typeForm === 'Sign up' ?
                                    (
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                    ) : null
                            }


                            {
                                typeForm === 'Sign up' ?
                                    (
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                {"Have an account? Sign in"}
                                            </Link>
                                        </Grid>
                                    ) : (

                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    )
                            }

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}