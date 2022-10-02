import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setupAnswersSubmit, updateAnswer } from "../../store/questionSlice"



export default function Answer({ answer, questionId, numberQ }) {

    const dispatch = useDispatch()
    const answersSubmit = useSelector(state => state.question.answersSubmit)
    const classAnswer = 'answer'
   
    const handldeClick = (id) => {
        
       
    }

    return (
        <div className={classAnswer} >
            <p onClick={() => { handldeClick(answer.id) }} >{answer.content}</p>
        </div>
    )
}