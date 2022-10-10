import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CardMedia } from '@mui/material';
import { fetchQuestion } from '../../store/questionManagementSlice';
import { fetchUser } from '../../store/userManagementSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { imgDefault } from '../../config/image';
import 'react-toastify/dist/ReactToastify.css';
import ModalConfirm from '../forms/ModalConfirm';

const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    let result = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return result
}



export default function TableShow({ listHead, inputData, typeTableShow, openShowDetails, handleDelete }) {

    const dispatch = useDispatch()
    const [stateModal, setStateModal] = useState(false)
    const [value, setValue] = useState({})
    const handleClickDetail = async (value) => {
        if (typeTableShow === 'question') {
            await dispatch(fetchQuestion(value.id))
        }
        else {
            await dispatch(fetchUser(value.id))
        }
        openShowDetails()
    }


    const handleClickDelete = (value) => {
        setValue(value)
        setStateModal(true)
    }

    return (
        <TableContainer component={Paper} >
            <ModalConfirm stateModal={stateModal} setStateModal={setStateModal} value={value} handleClickDelete={handleDelete} />

            <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#1976D2' }}>
                        {
                            listHead.map((value) => {
                                return (
                                    <TableCell align="left" style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold'
                                    }}>{value}</TableCell>
                                )
                            })
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        typeTableShow === 'question' ? (
                            inputData.map((value, index) => {
                                return (
                                    <>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            <TableCell align="left">{value.title}</TableCell>
                                            <TableCell align="left">{formatDate(value.createdAt)}</TableCell>
                                            <TableCell align="left"> <CardMedia
                                                component="img"
                                                height="200"
                                                style={{ borderRadius: 5 }}
                                                image={value.thumbnail_link ? value.thumbnail_link : imgDefault}
                                                alt="No Image"
                                                sx={{
                                                    display: 'block',
                                                    maxWidth: '160px',
                                                    maxHeight: '140px',

                                                }}
                                            /></TableCell>
                                            <TableCell align="left"  >
                                                <Box sx={{ display: 'flex' }}>
                                                    <Box sx={{ cursor: 'pointer', color: 'blue', marginRight: '8px' }} onClick={() => handleClickDetail(value)}><RemoveRedEyeIcon /></Box>
                                                    <Box sx={{ cursor: 'pointer', color: 'red', marginLeft: '8px' }} onClick={() => handleClickDelete(value)} > <DeleteIcon /> </Box>
                                                </Box>


                                            </TableCell>
                                        </TableRow>
                                    </>

                                )
                            })) : (
                            inputData.map((value, index) => {
                                return (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="left">{value.email}</TableCell>
                                        <TableCell align="left">{value.name}</TableCell>
                                        <TableCell align="left"> <CardMedia
                                            component="img"
                                            height="200"
                                            style={{ borderRadius: 5 }}
                                            image={value.avatar_link}
                                            alt="No Image"
                                            sx={{
                                                display: 'block',
                                                maxWidth: '100px',
                                                maxHeight: '100px',

                                            }}
                                        /></TableCell>
                                        <TableCell align="left" >
                                            <Box sx={{ display: 'flex' }}>
                                                <Box sx={{ cursor: 'pointer', color: 'blue', marginRight: '8px' }} onClick={() => handleClickDetail(value)} ><RemoveRedEyeIcon /></Box>
                                                <Box sx={{ cursor: 'pointer', color: 'red', marginLeft: '8px' }} onClick={() => handleClickDelete(value)} > <DeleteIcon /> </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            }))

                    }

                </TableBody>
            </Table>

        </TableContainer>
    );
}
