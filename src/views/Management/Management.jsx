
import { Box, Button, ButtonGroup, Pagination, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/forms/Header";
import { fetchQuestions } from "../../store/questionManagementSlice";
import QuestionManagement from "./QuestionManagement/QuestionManagement";
import UserManagement from "./UserManagement/UserManagement";


export default function Management() {
    const [typeManagement,setTypeManagement] = useState('question')
    const handleClickQM = () => {   
        setTypeManagement('question')
    }
    const handleClickUM = () => {   
        setTypeManagement('user')
    }

    return (
        <Container maxWidth='100%'  >
            <Box component="div">
                <Header />
            </Box>

            <Box component={Paper} sx={{ marginTop: '10px', paddingBottom: '10px', backgroundColor: 'rgb(246,247,251)' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginTop: '30px', marginLeft: '37%' }}>
                    <Button onClick={handleClickQM}>Question Management</Button>
                    <Button onClick={handleClickUM}>User Management</Button>
                </ButtonGroup>

                {typeManagement==='question' ? <QuestionManagement /> : <UserManagement /> }
            </Box>


        </Container>


    )
}