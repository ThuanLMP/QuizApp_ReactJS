import { CssBaseline, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import FormInput from "../../components/forms/FormInput"
import Paper from '@mui/material/Paper';
import { setCookies } from "../../api/axiosInstance";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { LocalStorage } from "../../utils/helpers/actionLocalStorage";
import { toast } from "react-toastify";

function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  

    const handleLogin = async (user, handleClick) => {
        handleClick(true)

        try {
            const response = await loginApi.post(user);
            const value = response.data.data
            if(response.data.statusCode===200){
                toast.success(response.data.message)
            }
            else{
                toast.error(response.data.message)
            }
            //set cookie 
            setCookies("ACCESS_TOKEN_QUIZ_APP", value.tokens.access_token.access_token)
            setCookies("REFRESH_TOKEN_QUIZ_APP", value.tokens.refresh_token.refresh_token)
            
            // set user to store
            const action = setUser(value.user)
            dispatch(action)

            // set user to localStorage

            LocalStorage.setUser(value.user)

            // navigate if admin -> choicefeature, user -> getquestion
            if (value.user.roles.length == 2) {
                navigate('choicefeature')
            }
            else {
                navigate('getquestions')
            }


        } catch (error) {
            toast.error("Email or password incorrect !")
            console.log(error)
        }
        handleClick(false)
    }

    

    return (
        <div className="signIn">
           
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