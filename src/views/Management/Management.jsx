
import { Box, Button, ButtonGroup, Pagination, Paper } from "@mui/material";
import { useState } from "react";
import Header from "../../components/header/Header";
import QuestionManagement from "./QuestionManagement/QuestionManagement";
import UserManagement from "./UserManagement/UserManagement";


export default function Management() {
    const [typeManagement, setTypeManagement] = useState('question')
    const handleClickQM = () => {
        setTypeManagement('question')
    }
    const handleClickUM = () => {
        setTypeManagement('user')
    }



    return (
        <div>
            <Header />
            <Box component={Paper} sx={{ marginTop: '10px', paddingBottom: '10px', backgroundColor: 'rgb(246,247,251)' }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginTop: '30px', marginLeft: '37%' }}>
                    <Button color="success" sx={{ marginRight: '5px' }} onClick={handleClickQM}>Question Management</Button>
                    <Button color="error" sx={{ marginLeft: '5px' }} onClick={handleClickUM}>User Management</Button>
                </ButtonGroup>

                {typeManagement === 'question' ? <QuestionManagement /> : <UserManagement />}
            </Box>

        </div>
    )
}