

import {Dialog , Box,List ,ListItem, Typography, styled} from '@mui/material'
import { qrCodeImage } from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google'

const dialogStyle = {
    height: '95%',
    witdh: '80%',
    marginTop: '12%',
    textAlign: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #5b5b5b;
    }
`

const QRCode = styled('img')({
    height: 264,
    witdh: 264,
    padding: '50px 100px 0 100px'
})

const Component = styled(Box)`
    display: flex;
`

const Title = styled(Typography)`
    font-size: 26px;
    color: #646464;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`




const LoginDialog = () => {

    const onLoginSuccess = () => {
    
    }

    const onLoginError = () => {
    
    }


    return(
        <Dialog open={true} PaperProps={{sx: dialogStyle}}>
            <Title>Welcome to FireDWeller</Title>
            <Component>
                <Container>
                    <StyledList>
                        <ListItem>1. Open FireDWeller on your web server</ListItem>
                        <ListItem>2. Tap Menu Settings and select FireDWeller</ListItem>
                    </StyledList>
                </Container>
                <Box>
                    <QRCode src={qrCodeImage} alt="qr code" />
                    <Box>
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>


        </Dialog>
    )
}

export default LoginDialog;