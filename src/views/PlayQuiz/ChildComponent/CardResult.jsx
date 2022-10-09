import { Button, Card, CardActions, CardMedia, Grid, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const checkAnswer = (answer) => {
    if (answer.is_submit_correct) {
        return 'answerCorrectSelect'
    }
    else {
        if (answer.is_correct) {
            return 'answerCorrect'
        }
        if (answer.is_submit_correct === false) {
            return 'answerIncorrect'
        }
    }
    return 'answer'
}

export default function CardResult() {
    const resultPlay = useSelector(state => state.question.resultPlay)
    const [question, setQuestion] = useState(resultPlay.listQuestionChecked[0])
    const [numberQ, setNumberQ] = useState(1)
    const navigate = useNavigate()
    const changeQuestion = (numberQ) => {
        setQuestion(resultPlay.listQuestionChecked[numberQ - 1])
        setNumberQ(numberQ)
    }
    const handleClick = () => {
        navigate('/getquestions')
    }

    return (
        <Card sx={{ width: '100%', height: '88vh', textAlign: "center", marginTop: 2 }}>
            <Typography component="h1" variant="h5" marginTop={1}>
                Total Score: {resultPlay.totalScore}
            </Typography>

            <Typography sx={
                {
                    fontSize: 20,
                    marginTop: 3,
                    backgroundColor: '#02F3E5',
                    width: '90%',
                    height: '14%',
                    marginLeft: '5%',
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
                        margin: '0 auto'
                    }}
                />
            </div>

            <div className="answers">
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {question.answers.map((answer) => {
                        const classAnswer = checkAnswer(answer)
                        return (
                            <Grid key={answer.id} item xs={6} >
                                <div className={classAnswer} >
                                    <p >{answer.content}</p>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>

            <div className="actionQuestion">
                <CardActions>
                    <Pagination count={resultPlay.listQuestionChecked.length} color="primary" defaultPage={1} onChange={(event, questionNumber) => {
                        changeQuestion(questionNumber)
                    }} />
                </CardActions>
            </div>
            <Button
                variant="contained"
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
                onClick={handleClick}
            >
                Play Again
            </Button>

        </Card>
    )
}