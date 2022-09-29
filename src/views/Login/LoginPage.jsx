import { Box, CssBaseline, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import FormInput from "../../components/forms/FormInput"
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { setCookies } from "../../api/axiosInstance";

function LoginPage() {
    const navigate = useNavigate()
    const [stateLogin, setStateLogin] = useState(false)
    const [error, setError] = useState(false)
    
    const handleLogin = async (user, handleClick) => {
        handleClick(true)
        try {
            const response = await loginApi.post(user);
            const value = response.data.data
            setCookies("ACCESS_TOKEN_QUIZ_APP", value.tokens.access_token.access_token)
            setCookies("REFRESH_TOKEN_QUIZ_APP", value.tokens.refresh_token.refresh_token)
            setError(false)
            navigate('getquestions')

        } catch (error) {
            setStateLogin(true)
            setError(true)
        }
        handleClick(false)
    }

    useEffect(() => {
        if (error) {
            setInterval(() => {
                setStateLogin(false)
            }, 4000)
        }
    }, [stateLogin])

    return (
        <div className="signIn">
            {
                stateLogin &&
                <Box className="alertLogin">
                    <Alert onClose={() => { }} severity="error">Email or password incorrect</Alert>
                </Box>
            }
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://anhdephd.vn/wp-content/uploads/2022/04/hinh-nen-slide-dung-cu-hoc-tap-day-mau-sac.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}

                >
                    <div className="detailsApp">
                        <h1>Quiz App</h1>
                        <p>Học hiệu quả mà thật thoải mái</p>
                        <p>Dễ ràng tiếp cận với mọi người</p>
                        <p>Giao diện thân thiện dễ dùng</p>
                        <p>Tài liệu học tập phong phú</p>
                    </div>

                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <FormInput typeForm={'Sign in'} handleValues={handleLogin} />
                </Grid>
            </Grid>
        </div>
    )

}

export default LoginPage