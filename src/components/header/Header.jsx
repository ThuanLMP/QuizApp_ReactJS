import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';
import { getCookies, removeCookies } from "../../api/axiosInstance";
import logoutApi from "../../api/logoutApi";
import { useSelector } from "react-redux";
import { LocalStorage } from "../../utils/helpers/actionLocalStorage";

export default function Header({ typeHeader }) {
    const userLocal = LocalStorage.getUser()
    if (userLocal.roles.length === 2) {
        typeHeader = 'admin'
    }
    const navigate = useNavigate()
    const handleClickQuizApp = () => {
        navigate('/getquestions')
    }
    const handleClickAdmin = () => {
        navigate('/admin/management')
    }
    const handleLogout = async () => {
        try {
            const refresh_token = getCookies('REFRESH_TOKEN_QUIZ_APP')

            if ((getCookies('REFRESH_TOKEN_QUIZ_APP') === undefined) && (getCookies('ACCESS_TOKEN_QUIZ_APP') === undefined)) {
                navigate('/')
            }
            else {
                await logoutApi.post(refresh_token)
                removeCookies(['REFRESH_TOKEN_QUIZ_APP', 'ACCESS_TOKEN_QUIZ_APP'])
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <QuizIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }} onClick={handleClickQuizApp}>
                        Quiz App
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }} onClick={handleClickQuizApp}>
                        Play
                    </Typography>
                    {typeHeader === 'admin' ? (
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClickAdmin}>
                            Management
                        </Typography>
                    ) : (<></>)}

                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}