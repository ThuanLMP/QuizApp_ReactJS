import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector } from 'react-redux';
import { CardMedia } from '@mui/material';


const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    let result = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return result
}



export default function TableShow({ listHead, inputData, typeTableShow }) {



    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650, width: 1016 }} aria-label="simple table">
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
                            inputData.map((question, index) => {
                                return (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="left">{question.title}</TableCell>
                                        <TableCell align="left">{formatDate(question.createdAt)}</TableCell>
                                        <TableCell align="left"> <CardMedia
                                            component="img"
                                            height="200"
                                            style={{ borderRadius: 5 }}
                                            image={question.thumbnail_link}
                                            alt="No Image"
                                            sx={{
                                                display: 'block',
                                                maxWidth: '200px',
                                                maxHeight: '110px',
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        /></TableCell>
                                        <TableCell align="left"><RemoveRedEyeIcon /></TableCell>
                                    </TableRow>
                                )
                            })) : (
                                inputData.map((user, index) => {
                                return (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="left"> <CardMedia
                                            component="img"
                                            height="200"
                                            style={{ borderRadius: 5 }}
                                            image={user.avatar_link}
                                            alt="No Image"
                                            sx={{
                                                display: 'block',
                                                maxWidth: '200px',
                                                maxHeight: '110px',
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        /></TableCell>
                                        <TableCell align="left"><RemoveRedEyeIcon /></TableCell>
                                    </TableRow>
                                )
                            }))

                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}
