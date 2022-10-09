import { Box, Button, Typography } from "@mui/material";
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
            <Box textAlign='center' mt={5}>
                <Typography variant="h5" component="h2" mt={7} mb={6}>
                    Choice Feature You Want ?
                </Typography>
                <Button onClick={handleClickPlay}>Play</Button>
                <Button onClick={handleClickManagement}>Management</Button>
            </Box>
        </div>
    )
}