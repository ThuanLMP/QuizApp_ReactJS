import { Box, Pagination } from "@mui/material";


import TableShow from "../../../components/table/TableShow";
import ButtonAdd from "../ChildComponent/ButtonAdd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, updateRole1, updateRole2 } from "../../../store/userManagementSlice";
import Filter from "../ChildComponent/Filter";
import { updateKeyWord, updateOrder, updateSize, updateSortFeild, updatePage } from "../../../store/userManagementSlice";
import { updateStatusShowDetails } from "../../../store/managementSlice";
import DetailsUser from "./DetailsUser";
import userApi from "../../../api/userApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserManagement() {


    const dispatch = useDispatch()
    const [stateDelete, setStateDelete] = useState(false)
    const dataUsers = useSelector(state => state.userManagement.dataUsers)
    const params = useSelector(state => state.userManagement.paramsSearch)

    const handleClickDelete = async (value) => {
        const response = await userApi.deleteUserById(value.id)
        if (response.data.statusCode === 200) {
            setStateDelete(setStateDelete => !setStateDelete)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }

    }

    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    // function handle to TableShow

    const openShowDetails = () => {
        const action = updateStatusShowDetails(true)
        dispatch(action)
    }


    useEffect(() => {
        dispatch(fetchUsers(params))
    }, [params, stateDelete, statusShowDetails])



    const handlePage = (questionNumber) => {
        const action = updatePage(questionNumber)
        dispatch(action)
    }
    const handleChangeSortField = (event) => {
        const action = updateSortFeild(event.target.value)
        dispatch(action)
    };

    const handleChangeRole1 = (event) => {
        const action = updateRole1(event.target.value)
        dispatch(action)
    }
    const handleChangeRole2 = (event) => {
        const action = updateRole2(event.target.value)
        dispatch(action)
    }

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
        handleChangeSize: handleChangeSize,
        handleChangeRole1: handleChangeRole1,
        handleChangeRole2: handleChangeRole2
    }
    const listHead = ['ID', 'Email', 'Name', 'Avatar', 'Action']



    return (
        <>

            <ButtonAdd typeButton={'Add new User'} />

            <Box component="div" sx={{ margin: '30px 18%', display: 'flex' }}>
                <Filter typeForm={'userManagement'} params={params} listHandle={listHandle} />
            </Box>
            <Box component="div" sx={{ margin: '40px 18%', width: '69%' }}>
                <TableShow
                    listHead={listHead}
                    inputData={dataUsers.result === undefined ? [] : dataUsers.result}
                    typeTableShow={'user'} 
                    openShowDetails={openShowDetails}
                    handleDelete={handleClickDelete} />
            </Box>
            <Box component="div" sx={{ margin: '40px 43%', width: '68%' }}>
                <Pagination count={dataUsers.totalPages} color="primary" defaultPage={1} onChange={(event, questionNumber) => {
                    handlePage(questionNumber)
                }} />
            </Box>

            {statusShowDetails && <DetailsUser />}

        </>
    )
}