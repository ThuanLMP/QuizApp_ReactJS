import { Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { updateListQuestionsSubmit } from "../../store/questionSlice"
import Answer from "./Answer"


export default function Answers({ currentQuestion, numberQ }) {
   

    return (

        <div className="answers">
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {currentQuestion.answers.map((answer) => {
                    return (
                        <Grid key={answer.id} item xs={6} >
                            <Answer numberQ={numberQ} currentQuestion={currentQuestion} answer={answer}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
} 