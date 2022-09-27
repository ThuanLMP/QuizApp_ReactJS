import { IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ClearIcon from '@mui/icons-material/Clear';
import CardQuestion from "./CardQuestion";


export default function PlayQuiz() {
    return (
        <div className="quizApp">
            <IconButton aria-label="delete" size="medium" sx={{marginLeft:'97%'}}>
                <ClearIcon fontSize="inherit" />
            </IconButton>

            <Container sx={{ height: '100%', textAlign: 'center' }} >
                <Typography variant="h2"  >
                    Quiz App
                </Typography>
                <CardQuestion />
            </Container>
        </div>

    )
}