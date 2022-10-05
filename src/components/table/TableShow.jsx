import * as React from 'react';
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
import { updateStatusShowDetails } from '../../store/managementSlice';
import { fetchQuestion } from '../../store/questionManagementSlice';


const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    let result = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return result
}



export default function TableShow({ listHead, inputData, typeTableShow, openShowDetails }) {
    const dispatch = useDispatch()
    const handleClickDetail = async (value) => {
        await dispatch(fetchQuestion(value.id))
        openShowDetails()
    }
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#1976D2' }}>
                        {
                            listHead.map((value) => {
                                return (<TableCell align="left">{value}</TableCell>)
                            })
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        typeTableShow === 'question' ? (
                            inputData.map((value, index) => {
                                return (
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
                                            image={value.thumbnail_link}
                                            alt="No Image"
                                            sx={{
                                                display: 'block',
                                                maxWidth: '200px',
                                                maxHeight: '110px',
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        /></TableCell>
                                        <TableCell align="left" onClick={() => handleClickDetail(value)}  ><Box sx={{ cursor: 'pointer' }}><RemoveRedEyeIcon /></Box></TableCell>
                                    </TableRow>
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
                                                maxWidth: '200px',
                                                maxHeight: '110px',
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        /></TableCell>

                                        <TableCell align="left" onClick={() => handleClickDetail(value)} ><Box sx={{ cursor: 'pointer' }}><RemoveRedEyeIcon /></Box></TableCell>
                                    </TableRow>
                                )
                            }))

                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}
