import { Fab, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export default function ButtonAdd({ typeButton }) {
    const navigate = useNavigate()

    const handleClick =()=>{
        if(typeButton==='Add new Question'){
            navigate('/admin/management/addQuestion')
        }
        else{
            navigate('/admin/management/addUser')
        }
    }

    return (

        <Box component="div" sx={{ margin: '30px', display: 'flex' }}>
            <Box componet={Paper} sx={
                {
                    margin: '30px 17%',
                    display: 'flex',
                    padding: '4px 4px',
                    backgroundColor: '#1976D2',
                    borderStyle: 'solid',
                    borderRadius: '5px',
                    borderColor: '#1976D2',
                    cursor: 'pointer'
                }}>
                <Box component='div' sx={{display: 'flex'}} onClick= {handleClick}>
                    <AddIcon sx={{marginTop: '4%'}}/>
                    <Typography sx={{ margin: '7px', fontWeight: '600' }}>
                        {typeButton}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}