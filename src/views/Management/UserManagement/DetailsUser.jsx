import { Button, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, IconButton, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { updateStatusShowDetails } from "../../../store/managementSlice";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import userApi from "../../../api/userApi";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";


const configUserUpdate = (drawUser) => {
    const roles = ['user']
    if(drawUser.isAdmin){
        roles.push('admin')
    }
    return {
        email: drawUser.email,
        name: drawUser.name,
        roles: roles
    }
}
export default function DetailsUser() {

    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    const dispatch = useDispatch()
    const user = useSelector(state => state.userManagement.userTarget)
    const closeShowDetails = () => {
        const action = updateStatusShowDetails(false)
        dispatch(action)
    }
    const [loading,setLoading] = useState(false)
  

    const formik = useFormik({
        initialValues: {
            email: user.email,
            name: user.name,
            isAdmin: 'admin' === user.roles.find((value) => {
                return value === 'admin'
            }),
            isUser: 'user' === user.roles.find((value) => {
                return value === 'user'
            })
        },
        onSubmit: async (value, { resetForm }) => {
            setLoading(true)
            const userDataUpdate = configUserUpdate(value)
            try {
                const response = await userApi.updateUserById(userDataUpdate,user.id)  
                if(response.status===200){
                    toast.success(response.data.message)
                    closeShowDetails()

                }  
                else{
                    toast.error(response.data.message)
                }
            } catch (error) {
                toast.error('failed')
                console.log(error)
            }
            
            
        }
    })

    return (
        <>


            <Dialog open={statusShowDetails}>
                <DialogTitle>
                    Details User
                    <IconButton
                        onClick={closeShowDetails}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box component='form' onSubmit={formik.handleSubmit}><TextField
                        margin="dense"
                        id="id"
                        label="User ID"
                        type="text"
                        fullWidth
                        variant="filled"
                        value={user.id}
                        InputProps={{
                            readOnly: true,
                        }}
                    >
                    </TextField>

                        <TextField
                            margin="dense"
                            id="name"
                            label="User Name"
                            name="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </TextField>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            name="email"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </TextField>
                        <Box component='div'>
                            <FormControlLabel
                                control={<Checkbox checked={formik.values.isAdmin} />}
                                label="is Admin"
                                name="isAdmin"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formik.values.isUser} />}
                                label="is User"
                                name="isUser"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                        <LoadingButton
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3, mb: 2 }}
                            fullWidth
                        >
                            Save
                        </LoadingButton>
                    </Box>

                </DialogContent>

            </Dialog>


        </>
    )
}