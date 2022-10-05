import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { updateStatusShowDetails } from "../../../store/managementSlice";
import CloseIcon from '@mui/icons-material/Close';

export default function DetailsUser() {
    const statusShowDetails = useSelector(state => state.management.statusShowDetails)
    const dispatch = useDispatch()
    const closeShowDetails = () => {
        const action = updateStatusShowDetails(false)
        dispatch(action)
    }
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
                    
                </DialogContent>
            </Dialog>
        </>
    )
}