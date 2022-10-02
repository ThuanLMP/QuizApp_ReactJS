import { LoadingButton } from "@mui/lab";
import { Card, CardActions, CardMedia, Grid, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAnswersSubmit } from "../../store/questionSlice";
import Answer from "./Answer";


export default function CardQuestion() {

    const dispatch = useDispatch()
    const listQuestion = useSelector(state => state.question.questionsPlay)
    const [question, setQuestion] = useState(listQuestion[0])
    const [numberQ, setNumberQ] = useState(1)
    const [loading, setLoading] = useState(false)
    

    
    const listAnswers = listQuestion.map((value, index) => {
        return (
            {
                id: value.id,
                listAnswersSubmit: []
            }
        )
    })
    const action = setupAnswersSubmit(listAnswers)
    dispatch(action)

    




    const changeQuestion = (numberQuestion) => {
        setQuestion(listQuestion[numberQuestion - 1])
        setNumberQ(numberQuestion)
    }

    return (
        <Card sx={{ width: '100%', height: '88vh', textAlign: "center", marginTop: 2 }}>
            <Typography component="h1" variant="h5" marginTop={1}>
                Question: {numberQ}
            </Typography>

            <Typography sx={
                {
                    fontSize: 20,
                    marginTop: 3,
                    backgroundColor: '#02F3E5',
                    width: '70%',
                    height: '14%',
                    marginLeft: '15%',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'black',
                }
            }
                color="black" gutterBottom
            >
                <Typography component="p" fontWeight={900} marginLeft={2} >
                    {question.title}
                </Typography>

            </Typography>
            <div className="imageQuestion">
                <CardMedia
                    component="img"
                    height="200"
                    style={{ borderRadius: 5 }}
                    image={question.thumbnail_link}
                    alt="No Image"
                    sx={{
                        display: 'block',
                        maxWidth: '230px',
                        maxHeight: '110px',
                        width: 'auto',
                        height: 'auto',
                        marginLeft: '45%'
                    }}
                />
            </div>

            <div className="answers">
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {question.answers.map((answer) => {
                        
                        return (
                            <Grid key={answer.id} item xs={6} >
                                <Answer answer={answer} questionId={question.id} numberQ = {numberQ}  />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <div className="actionQuestion">
                <CardActions>
                    <Pagination count={listQuestion.length} color="primary" defaultPage={1} onChange={(event, questionNumber) => {
                        changeQuestion(questionNumber)
                    }} />
                </CardActions>
            </div>

            <LoadingButton
                loading={loading}
                loadingPosition="end"
                variant="contained"
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
            >
                Submit
            </LoadingButton>
        </Card>
    )
}