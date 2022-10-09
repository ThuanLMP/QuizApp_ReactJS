
import { Container } from "@mui/system";
import CardQuestion from "./ChildComponent/CardQuestion";
import Header from "../../components/header/Header";



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