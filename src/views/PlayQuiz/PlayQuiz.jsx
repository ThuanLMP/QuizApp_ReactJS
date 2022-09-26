import { Typography } from "@mui/material";
import { Container } from "@mui/system";

import CardQuestion from "./CardQuestion";


export default function PlayQuiz() {
    return (
        <Container sx={{height: '100%',marginTop:2, textAlign: 'center'}} >
            <Typography variant="h2" >
                Quiz App
            </Typography>
            
            <CardQuestion />
        </Container>
    )
}