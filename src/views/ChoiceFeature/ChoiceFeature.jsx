import { Box, Button, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { fetchQuestions } from "../../store/questionManagementSlice";


export default function ChoiceFeature() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const param = useSelector(state => state.questionManagement.paramsSeach)
    const handleClickPlay = () => {
        navigate('/getquestions')
    }
    const handleClickManagement = () => {
        navigate('/admin/management')

    }
    return (
        <div>
            <Header />
            
            <Box component={Paper} textAlign='center' sx={{
                width: '30%',
                padding: '5% 5%',
                backgroundColor: '#F6F7FB',
                border: 'solid 1px',
                marginTop: '4%',
                marginLeft: '32%'
            }}>
                <Typography variant="h5" component="h2" mt={2} mb={6}>
                    Choice Feature You Want ?
                </Typography>
                <Button variant="contained" fullWidth onClick={handleClickPlay}>Play</Button>
                <Button variant="contained" sx={{marginTop: '5px'}} fullWidth onClick={handleClickManagement}>Management</Button>
            </Box>
        </div>
    )
}