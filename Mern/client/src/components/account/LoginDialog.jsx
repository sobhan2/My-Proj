

import {Dialog} from '@mui/material'

const dialogStyle = {
    height: '95%',
    width: '1160px',
    margin
}

const LoginDialog = () => {

    return(
        <Dialog open={true} PaperProps={{sx: dialogStyle}}>
            Hello
        </Dialog>
    )
}

export default LoginDialog;