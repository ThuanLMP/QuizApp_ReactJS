import { Card, CardActions, CardContent, CardMedia, FormControlLabel, Grid, Pagination, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function CardQuestion() {

    const listQuestion = useSelector(state => state.question.questionsPlay)
    const [question, setQuestion] = useState(listQuestion[0])
    const [numberQ, setNumberQ] = useState(1)
    
    const dispatch = useDispatch()
    const changeQuestion = (numberQuestion) => {
        setQuestion(listQuestion[numberQuestion - 1])
        setNumberQ(numberQuestion)
    }

    return (
        <Card sx={{ width: '100%', height: '80vh', textAlign: "center", marginTop: 5, }}>
            <Typography component="h1" variant="h5" marginTop={2}>
                Question: {numberQ}
            </Typography>

            <Typography sx={
                {
                    fontSize: 20,
                    marginTop: 5,
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

            <CardMedia
                component="img"
                height="200"
                style={{ borderRadius: 5 }}
                image={question.thumbnail_link}
                alt="No Image"
                sx={{
                    display: 'block',
                    maxWidth: '230px',
                    maxHeight: '95px',
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '45%'
                }}
            />
            <CardContent >
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{ width: '70%', marginLeft: '15%' }}
                        onChange={(event, value) => {
                            console.log(value)
                        }
                        }

                    >
                        {question.answers.map((answer) => {
                            return (
                                <Grid key={answer.id} item xs={6} sx={
                                    {
                                        marginLeft: '3px',
                                        paddingLeft: '4px',
                                        textAlign: 'left',
                                        backgroundColor: '#FBAB02',
                                        maxHeight: '31%',
                                        marginTop: '5px',
                                        borderStyle: 'solid',
                                        borderRadius: '10px'
                                    }
                                }>
                                    <FormControlLabel value={answer.id} control={<Radio />} label={answer.content}  ></FormControlLabel>
                                </Grid>
                            )
                        })}
                    </RadioGroup>
                </Grid>
            </CardContent>
            <div className="actionQuestion">
                <CardActions >
                    <Pagination count={listQuestion.length} color="primary" defaultPage={1} onChange={(event, questionNumber) => {
                        changeQuestion(questionNumber)
                    }} />
                </CardActions>
            </div>

        </Card>
    )
}