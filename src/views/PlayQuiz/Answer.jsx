
import { useDispatch, useSelector } from "react-redux"
import { updateListQuestionsSubmit } from "../../store/questionSlice"


export default function Answer({numberQ, currentQuestion, answer}) {

    const dispatch = useDispatch()
    const listQuestionsSubmit = useSelector(state => state.question.listQuestionsSubmit)

    const classAnswer = 'selectAnswer'
    const handldeClick = (id) => {
        let newListQuestionsSubmit = [...listQuestionsSubmit]
        let newArr = [...newListQuestionsSubmit[numberQ - 1].answersSubmitedId]
        const check = newArr.find(element => element === id)
        if (check === undefined) {
            newListQuestionsSubmit[numberQ - 1] = {
                id: currentQuestion.id,
                answersSubmitedId: [...newListQuestionsSubmit[numberQ - 1].answersSubmitedId, id]
            }
        }
        else {
            newListQuestionsSubmit[numberQ - 1] = {
                id: currentQuestion.id,
                answersSubmitedId: newArr.filter((value) => value != id)
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