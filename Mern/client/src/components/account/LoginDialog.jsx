import { useContext } from 'react';

import {Dialog , Box,List ,ListItem, Typography, styled} from '@mui/material'
import { qrCodeImage } from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle = {
    height: '95%',
    width: '80%',
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
    padding: '50px 0 0 0',
    right: '0',
   
})

const SBox = styled(Box)`
      padding-left: 300px,
`
const LeftBox = styled(Box)`
    float: left,
`

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
    padding: 56px 100px 56px 56px;
    

`



const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential)
         
        setAccount(decoded)
    }

    const onLoginError = (res) => {
        console.log('Login Failed' , res);
    }


    return(
        <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
            <Title>Welcome to FireDWeller</Title>
            <Component>
                <Container>
                    <StyledList>
                        <ListItem>1. Open FireDWeller on your web server</ListItem>
                        <ListItem>2. Tap Menu Settings and select FireDWeller</ListItem>
                    </StyledList>
                </Container>
                <LeftBox>
                    <QRCode src={qrCodeImage} alt="qr code" />
                    <SBox >
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                            
                            
                        />
                    </SBox>
                </LeftBox>
            </Component>


        </Dialog>
    )
}

export default LoginDialog;