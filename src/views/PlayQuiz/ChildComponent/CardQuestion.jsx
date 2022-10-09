import { LoadingButton } from "@mui/lab";
import { Card, CardActions, CardMedia,Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import questionApi from "../../../api/questionApi";
import { updateResultPlay } from "../../../store/questionSlice";
import Answers from "./Answers";


export default function CardQuestion() {

    const dispatch = useDispatch()
    const listQuestion = useSelector(state => state.question.questionsPlay)
    const [question, setQuestion] = useState(listQuestion[0])
    const [numberQ, setNumberQ] = useState(1)
    const [loading, setLoading] = useState(false)
    const listQuestionsSubmit = useSelector(state => state.question.listQuestionsSubmit)
    const navigate = useNavigate()

    const changeQuestion = (numberQuestion) => {
        setQuestion(listQuestion[numberQuestion - 1])
        setNumberQ(numberQuestion)
    }
    const submitQuestion = async (list)=> {
        try {
            const response = await questionApi.submitQuestionsPlay(list)
            const action = updateResultPlay(response.data.data)
            dispatch(action)
            if(response.data.statusCode === 200){
                navigate('/play/result')
            }  
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = () => {
        setLoading(true)
        submitQuestion(listQuestionsSubmit)
        setLoading(false)
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

           <Answers currentQuestion = {question} numberQ = {numberQ}/>

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
                onClick={handleSubmit}
            >
                Submit
            </LoadingButton>
        </Card>
    )
}