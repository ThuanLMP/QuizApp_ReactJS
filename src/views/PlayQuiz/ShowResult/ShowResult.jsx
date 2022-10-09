import { Container } from "@mui/system";
import Header from "../../../components/header/Header";
import CardResult from "../ChildComponent/CardResult";

export default function ShowResult(){
    return(
        <div className="quizApp">
             <Header/>
            <Container sx={{ height: '100%', textAlign: 'center' }} >
                <CardResult/>
            </Container>
        </div>
    )
} 