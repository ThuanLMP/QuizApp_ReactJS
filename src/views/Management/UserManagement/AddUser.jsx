import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header/Header";
import { fetchAddUser, updateStatusAddUser } from "../../../store/userManagementSlice";
import FormAdd from "../ChildComponent/FormAdd";


export default function AddUser() {

    const dispatch = useDispatch()
    const statusAddUser = useSelector(state => state.userManagement.statusAddUser)
    const message = useSelector(state => state.userManagement.message)

    const listFeild = [
        {
            name: 'email',
            type: 'email'
        },
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'password',
            type: 'text'
        },
        {
            name: 'roles',
            type: 'checkbox'
        }
    ]

    const innitvalues =
    {
        email: '',
        name: '',
        password: '',
        isAdmin: false,
        isUser: false
    }

    const addUser = (user) => {
        dispatch(fetchAddUser(user))
    }

    return (
        <>
            {
                
                statusAddUser === 201 ?
                    <Box className="alertLogin">
                        <Alert onClose={() => {
                            const action = updateStatusAddUser('')
                            dispatch(action)
                        }} severity="success">
                            {message}
                        </Alert>
                    </Box> : (statusAddUser === 400 ?
                        <Box className="alertLogin">
                            <Alert onClose={() => {
                                const action = updateStatusAddUser(false)
                                dispatch(action)
                            }} severity="error">
                                {message}
                            </Alert>
                        </Box> : <></>)

            }
            <Header />
            <FormAdd typeForm={'Add new User'} listFeild={listFeild} innitvalues={innitvalues} handleSubmitForm={addUser} statusForm={statusAddUser} />
        </>

    )
}