import { Paper, Typography, Button, Grow } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";

export default function Category(props) {
    const history = useHistory()

    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
        >
            <Button
                onClick={() => history.push(`/category/${props.value}`)}
                sx={{
                    height: '12em',
                    width: '24em',
                    padding: 2,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textTransform: 'none',
                    cursor: 'pointer',
                    ":hover": { boxShadow: '2px 1px 8px 0px rgba(0,0,0,0.75)' },
                    background: 'linear-gradient(140deg, rgba(5,0,79,1) 0%, rgba(2,18,133,1) 29%, rgba(0,46,180,1) 54%, rgba(46,6,193,1) 76%, rgba(123,0,255,1) 100%);'
                }}>
                <Typography variant='h5' sx={{ color: 'white', fontFamily: 'Open Sans' }}>
                    {props.name}
                </Typography>
            </Button>
        </Grow>
    )
}