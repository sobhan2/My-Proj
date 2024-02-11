

import {Dialog , Box,List ,ListItem} from '@mui/material'

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    textAlign: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'none'
}

const LoginDialog = () => {

    return(
        <Dialog open={true} PaperProps={{sx: dialogStyle}}>
            <h2>Welcome to FireDWeller</h2>
            <Box>
                <Box>
                    <List>
                        <ListItem>1. Open FireDWeller on your web server</ListItem>
                        <ListItem>2. Tap</ListItem>
                    </List>
                </Box>
                <Box>

                </Box>
            </Box>


        </Dialog>
    )
}

export default LoginDialog;