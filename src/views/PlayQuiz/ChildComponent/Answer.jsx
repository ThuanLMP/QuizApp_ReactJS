
import { useDispatch, useSelector } from "react-redux"
import { updateListQuestionsSubmit } from "../../../store/questionSlice"


export default function Answer({ numberQ, currentQuestion, answer }) {

    const dispatch = useDispatch()
    const listQuestionsSubmit = useSelector(state => state.question.listQuestionsSubmit)
    
    const check = listQuestionsSubmit[numberQ-1].answersSubmittedId.find(element => {
        return element === answer.id
    })
 

    const classAnswer = check === undefined ? 'selectAnswer' : 'answer'
    const handldeClick = (id) => {
        let newListQuestionsSubmit = [...listQuestionsSubmit]
        let newArr = [...newListQuestionsSubmit[numberQ - 1].answersSubmittedId]
        const check = newArr.find(element => element === id)
        if (check === undefined) {
            newListQuestionsSubmit[numberQ - 1] = {
                id: currentQuestion.id,
                answersSubmittedId: [...newListQuestionsSubmit[numberQ - 1].answersSubmittedId, id]
            }
        }
        else {
            newListQuestionsSubmit[numberQ - 1] = {
                id: currentQuestion.id,
                answersSubmittedId: newArr.filter((value) => value != id)
            }
        }
        const action = updateListQuestionsSubmit(newListQuestionsSubmit)
        dispatch(action)

    }

    return (
        <div className={classAnswer} >
            <p onClick={() => { handldeClick(answer.id) }} >{answer.content}</p>
        </div>
    )
}