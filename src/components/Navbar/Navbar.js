import { AppBar, Typography } from '@mui/material';
import {
    useHistory,
} from "react-router-dom";

export default function NavBar(props) {
    const history = useHistory()

    return (
        <AppBar sx={{ padding: '8px' }}>
            <Typography variant='h4' component="div"
                onClick={() => history.push("/")}
                sx={{ fontFamily: 'Satisfy', flexGrow: 1, margin: '8px', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }}>
                Trivadda!
            </Typography>
        </AppBar>
    )
}