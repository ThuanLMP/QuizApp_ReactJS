
import { Container } from "@mui/system";
import CardQuestion from "./CardQuestion";
import Header from "../../components/forms/Header";
import { useSelector } from "react-redux";


export default function PlayQuiz() {
    
    
    
    return (
        <div className="quizApp">
            <Header/>
            <Container sx={{ height: '100%', textAlign: 'center' }} >
                <CardQuestion />
            </Container>
        </div>

    )
}