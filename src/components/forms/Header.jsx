import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';
import { getCookies, removeCookies } from "../../api/axiosInstance";
import logoutApi from "../../api/logoutApi";

export default function Header() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/getquestions')
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
        <Box sx={{ flexGrow: 1 }}>
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClick}>
                        Quiz App
                    </Typography>
                   
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}