

import {Dialog , Box,List ,ListItem, styled} from '@mui/material'
import { qrCodeImage } from '../../constants/data';

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    textAlign: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'none'
}

const Component = styled(Box)`
    display: flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`

const LoginDialog = () => {

    return(
        <Dialog open={true} PaperProps={{sx: dialogStyle}}>
            <h2>Welcome to FireDWeller</h2>
            <Component>
                <Container>
                    <List>
                        <ListItem>1. Open FireDWeller on your web server</ListItem>
                        <ListItem>2. Tap Menu Settings and select FireDWeller</ListItem>
                    </List>
                </Container>
                <Box>
                    <img src={qrCodeImage} alt="qr code" />
                </Box>
            </Component>


        </Dialog>
    )
}

export default LoginDialog;