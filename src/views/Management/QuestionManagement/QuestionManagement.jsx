import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableShow from "../../../components/table/TableShow";
import { fetchQuestions, updatePage } from "../../../store/questionManagementSlice";
import ButtonAdd from "../ChildComponent/ButtonAdd";
import Filter from "../ChildComponent/Filter";
import { updateKeyWord, updateOrder, updateSize, updateSortFeild } from "../../../store/questionManagementSlice";
import DetailsQuestion from "./DetailsQuestion";
import { updateStatusShowDetails } from "../../../store/managementSlice";
import questionApi from "../../../api/questionApi";
import { ToastContainer, toast } from 'react-toastify';

export default function QuestionManagement() {
    const listQ = useSelector(state => state.questionManagement.listQuestions)
    const params = useSelector(state => state.questionManagement.paramsSearch)
    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    const dispatch = useDispatch()
    const [stateDelete, setStateDelete] = useState(false)

    const listHead = ['ID', 'Title', 'Create Day', 'Image', 'Action']
    const handleClickDelete = async (value) => {
        const response = await questionApi.deleteQuestion(value.id)
        if (response.data.statusCode === 200) {
            setStateDelete(setStateDelete => !setStateDelete)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }
    }
    useEffect(() => {
        dispatch(fetchQuestions(params))
    }, [params, stateDelete])

    // function handle to Filter
    const handlePage = (questionNumber) => {
        const action = updatePage(questionNumber)
        dispatch(action)
    }
    const handleChangeSortField = (event) => {
        const action = updateSortFeild(event.target.value)
        dispatch(action)
    };

    const handleChangeSelectOrder = (event) => {
        const action = updateOrder(event.target.value)
        dispatch(action)
    };

    const handleChangeSize = (event) => {
        let size = 5;
        if (event.target.value === '') {
            size = 1
        }
        else {
            size = parseInt(event.target.value)
            if (size < 0) {
                size = 5
            }
            if (size > 10) {
                size = 10
            }
        }
        const action = updateSize(size)
        dispatch(action)
    };

    const handleChangeKeyWord = (event) => {
        const action = updateKeyWord(event.target.value)
        dispatch(action)
    }

    const listHandle = {
        handleChangeSortField: handleChangeSortField,
        handleChangeKeyWord: handleChangeKeyWord,
        handleChangeSelectOrder: handleChangeSelectOrder,
        handleChangeSize: handleChangeSize
    }

    // function handle to TableShow

    const openShowDetails = () => {
        const action = updateStatusShowDetails(true)
        dispatch(action)
    }


    return (
        <>
            <ButtonAdd typeButton={'Add new Question'} />
            <Box component="div" sx={{ margin: '30px 18%', display: 'flex' }}>
                <Filter typeForm={'questionManagement'} params={params} listHandle={listHandle} />
            </Box>
            <Box component="div" sx={{ margin: '40px 18%', width: '69%' }}>
                <TableShow
                    inputData={listQ}
                    listHead={listHead}
                    typeTableShow={'question'}
                    openShowDetails={openShowDetails}
                    handleDelete={handleClickDelete} />
            </Box>
            <Box component="div" sx={{ marginLeft: '43%', width: '57%' }}>
                <Pagination count={5} color="primary" defaultPage={params.page} onChange={(event, questionNumber) => {
                    handlePage(questionNumber)
                }} />
            </Box>
            {statusShowDetails && <DetailsQuestion />}
        </>
    )
}
