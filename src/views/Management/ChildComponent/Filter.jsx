import { FormControl, Grid, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function Filter({ typeForm, params, listHandle }) {


    let filterUser = () => {
        return <>
            <Grid item sx={4}>
                <FormControl sx={{ width: '100px' }} size='small' >
                    <InputLabel id="demo-simple-select-label">Role 1</InputLabel>
                    <Select
                        labelId="select-params-role1"
                        id="select-prams-role1"
                        value={params.role1}
                        label="Role 1"
                        onChange={listHandle.handleChangeRole1}
                    >
                        <MenuItem value='id'>Admin</MenuItem>
                        <MenuItem value='title'>User</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item sx={4}>
                <FormControl sx={{ width: '100px' }} size='small' >
                    <InputLabel id="demo-simple-select-label">Role 2</InputLabel>
                    <Select
                        labelId="select-params-role1"
                        id="select-prams-role2"
                        value={params.role2}
                        label="Role2"
                        onChange={listHandle.handleChangeRole2}
                    >
                        <MenuItem value='id'>Admin</MenuItem>
                        <MenuItem value='title'>User</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    }




    return (

        <>
            {
                typeForm === 'userManagement' ? (
                    <Grid container spacing={3}>
                        <Grid item sx={2}>
                            <Typography sx={{ marginTop: '8px', marginLeft: '1px' }}>
                                FILTER:
                            </Typography>
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '130px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">sortField</InputLabel>
                                <Select
                                    labelId="select-params-sortFeild"
                                    id="select-prams-sortFeild"
                                    value={params.sortField}
                                    label="sortField"
                                    onChange={listHandle.handleChangeSortField}
                                >
                                    <MenuItem value='id'>ID</MenuItem>
                                    <MenuItem value='email'>Email</MenuItem>
                                    <MenuItem value='name'>Name</MenuItem>
                                    <MenuItem value='createdAt'>createdAt</MenuItem>
                                    <MenuItem value='updatedAt'>updatedAt</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '100px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">Role 1</InputLabel>
                                <Select
                                    labelId="select-params-role1"
                                    id="select-prams-role1"
                                    value={params.role1}
                                    label="Role 1"
                                    onChange={listHandle.handleChangeRole1}
                                >
                                    <MenuItem value='admin'>Admin</MenuItem>
                                    <MenuItem value='user'>User</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '100px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">Role 2</InputLabel>
                                <Select
                                    labelId="select-params-role2"
                                    id="select-prams-role2"
                                    value={params.role2}
                                    label="Role2"
                                    onChange={listHandle.handleChangeRole2}
                                >
                                    <MenuItem value='admin'>Admin</MenuItem>
                                    <MenuItem value='user'>User</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item sx={4}>
                            <TextField id="outlined-basic" label="keyWord" variant="outlined" size="small" onChange={listHandle.handleChangeKeyWord} />
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '100px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">Order</InputLabel>
                                <Select
                                    labelId="select-params-order"
                                    id="select-params-order"
                                    value={params.order}
                                    label="Oder"
                                    onChange={listHandle.handleChangeSelectOrder}
                                >
                                    <MenuItem value='ASC'>ASC</MenuItem>
                                    <MenuItem value='DESC'>DESC</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={4}>
                            <TextField
                                size="small"
                                id="outlined-size"
                                name='size'
                                label="Size"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        max: 10,
                                        min: 3,
                                    }
                                }}

                                onChange={listHandle.handleChangeSize}
                            />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={3}>
                        <Grid item sx={2}>
                            <Typography sx={{ marginTop: '8px', marginLeft: '1px' }}>
                                FILTER:
                            </Typography>
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '130px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">sortField</InputLabel>
                                <Select
                                    labelId="select-params-sortFeild"
                                    id="select-prams-sortFeild"
                                    value={params.sortField}
                                    label="sortField"
                                    onChange={listHandle.handleChangeSortField}
                                >
                                    <MenuItem value='id'>ID</MenuItem>
                                    <MenuItem value='title'>Title</MenuItem>
                                    <MenuItem value='createdAt'>createdAt</MenuItem>
                                    <MenuItem value='updatedAt'>updatedAt</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={4}>
                            <TextField id="outlined-basic" label="keyWord" variant="outlined" size="small" onChange={listHandle.handleChangeKeyWord} />
                        </Grid>
                        <Grid item sx={4}>
                            <FormControl sx={{ width: '100px' }} size='small' >
                                <InputLabel id="demo-simple-select-label">Order</InputLabel>
                                <Select
                                    labelId="select-params-order"
                                    id="select-params-order"
                                    value={params.order}
                                    label="Oder"
                                    onChange={listHandle.handleChangeSelectOrder}
                                >
                                    <MenuItem value='ASC'>ASC</MenuItem>
                                    <MenuItem value='DESC'>DESC</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={4}>
                            <TextField
                                size="small"
                                id="outlined-size"
                                name='size'
                                label="Size"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        max: 10,
                                        min: 3,
                                    }
                                }}

                                onChange={listHandle.handleChangeSize}
                            />
                        </Grid>
                    </Grid>
                )
            }

        </>


    )
}