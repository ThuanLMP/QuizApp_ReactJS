import { Fab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

export default function ButtonAdd({ typeButton }) {

    return (

        <Box component="div" sx={{ margin: '30px', display: 'flex' }}>
            <Box componet="div" sx={
                {
                    margin: '30px 17%',
                    display: 'flex',
                    padding: '4px 4px',
                    backgroundColor: '#1976D2',
                    borderStyle: 'solid',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                <Box component='div' sx={{display: 'flex'}}>
                    <AddIcon sx={{marginTop: '4%'}}/>
                    <Typography sx={{ margin: '7px', fontWeight: '600' }}>
                        {typeButton}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}